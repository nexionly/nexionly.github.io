import { useCallback, useEffect, useRef, useState } from "react";

type Point = { x: number; y: number };
type Dir = "up" | "down" | "left" | "right";
type Phase = "idle" | "running" | "paused" | "over";

const GRID = 21;
const BASE_SPEED = 140;
const MIN_SPEED = 62;
const HIGH_SCORE_KEY = "packet-rush-high-score";

const DIRS: Record<Dir, Point> = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};

const OPPOSITE: Record<Dir, Dir> = {
  up: "down",
  down: "up",
  left: "right",
  right: "left",
};

const START_SNAKE: Point[] = [
  { x: 10, y: 10 },
  { x: 9, y: 10 },
  { x: 8, y: 10 },
];

const eq = (a: Point, b: Point) => a.x === b.x && a.y === b.y;

function randomCell(exclude: Point[]): Point {
  let cell: Point;
  do {
    cell = { x: Math.floor(Math.random() * GRID), y: Math.floor(Math.random() * GRID) };
  } while (exclude.some((p) => eq(p, cell)));
  return cell;
}

const DPadButton = ({ label, onPress }: { label: string; onPress: () => void }) => (
  <button
    onClick={onPress}
    className="panel aspect-square flex items-center justify-center text-primary text-lg active:bg-primary active:text-primary-foreground transition-colors"
    aria-label={label}
  >
    {label}
  </button>
);

const PacketRush = () => {
  const [snake, setSnake] = useState<Point[]>(START_SNAKE);
  const [packet, setPacket] = useState<Point>(() => randomCell(START_SNAKE));
  const [firewalls, setFirewalls] = useState<Point[]>([]);
  const [dir, setDir] = useState<Dir>("right");
  const [phase, setPhase] = useState<Phase>("idle");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const dirRef = useRef<Dir>("right");
  const queueRef = useRef<Dir[]>([]);
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = Number(localStorage.getItem(HIGH_SCORE_KEY) || 0);
    if (!Number.isNaN(stored)) setHighScore(stored);
  }, []);

  const reset = useCallback(() => {
    setSnake(START_SNAKE);
    setPacket(randomCell(START_SNAKE));
    setFirewalls([]);
    setDir("right");
    dirRef.current = "right";
    queueRef.current = [];
    setScore(0);
    setPhase("running");
  }, []);

  const turn = useCallback((next: Dir) => {
    const last = queueRef.current.length ? queueRef.current[queueRef.current.length - 1] : dirRef.current;
    if (next === last || next === OPPOSITE[last]) return;
    if (queueRef.current.length < 2) queueRef.current.push(next);
  }, []);

  const togglePlay = useCallback(() => {
    setPhase((p) => {
      if (p === "running") return "paused";
      if (p === "paused") return "running";
      return p;
    });
    if (phase === "idle" || phase === "over") reset();
  }, [phase, reset]);

  useEffect(() => {
    const keyMap: Record<string, Dir> = {
      ArrowUp: "up",
      ArrowDown: "down",
      ArrowLeft: "left",
      ArrowRight: "right",
      w: "up",
      s: "down",
      a: "left",
      d: "right",
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        togglePlay();
        return;
      }
      const next = keyMap[e.key] || keyMap[e.key.toLowerCase()];
      if (!next) return;
      e.preventDefault();
      if (phase === "idle") reset();
      turn(next);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, reset, turn, togglePlay]);

  useEffect(() => {
    const el = boardRef.current;
    if (!el) return;
    let start: Point | null = null;

    const onStart = (e: TouchEvent) => {
      const t = e.touches[0];
      start = { x: t.clientX, y: t.clientY };
    };
    const onEnd = (e: TouchEvent) => {
      if (!start) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - start.x;
      const dy = t.clientY - start.y;
      start = null;
      if (Math.abs(dx) < 24 && Math.abs(dy) < 24) return;
      if (phase === "idle" || phase === "over") reset();
      turn(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right" : "left") : dy > 0 ? "down" : "up");
    };

    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchend", onEnd);
    };
  }, [phase, reset, turn]);

  useEffect(() => {
    if (phase !== "running") return;
    const speed = Math.max(MIN_SPEED, BASE_SPEED - score * 3);

    const id = window.setInterval(() => {
      setSnake((prev) => {
        const nextDir = queueRef.current.shift() || dirRef.current;
        dirRef.current = nextDir;
        setDir(nextDir);

        const delta = DIRS[nextDir];
        const head = {
          x: (prev[0].x + delta.x + GRID) % GRID,
          y: (prev[0].y + delta.y + GRID) % GRID,
        };

        const hitSelf = prev.slice(0, -1).some((p) => eq(p, head));
        const hitWall = firewalls.some((p) => eq(p, head));
        if (hitSelf || hitWall) {
          setPhase("over");
          setHighScore((hs) => {
            const best = Math.max(hs, score);
            localStorage.setItem(HIGH_SCORE_KEY, String(best));
            return best;
          });
          return prev;
        }

        if (eq(head, packet)) {
          const grown = [head, ...prev];
          const newScore = score + 1;
          setScore(newScore);
          setPacket(randomCell([...grown, ...firewalls]));
          if (newScore % 4 === 0) {
            setFirewalls((fw) => [...fw, randomCell([...grown, ...fw])]);
          }
          return grown;
        }

        return [head, ...prev.slice(0, -1)];
      });
    }, speed);

    return () => window.clearInterval(id);
  }, [phase, score, packet, firewalls]);

  const cells = Array.from({ length: GRID * GRID }, (_, i) => ({
    x: i % GRID,
    y: Math.floor(i / GRID),
  }));

  const headCell = snake[0];

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex items-end justify-between mb-3 text-xs uppercase tracking-[0.2em]">
        <div className="text-muted-foreground">
          packets <span className="text-primary glow-text text-base ml-1">{String(score).padStart(3, "0")}</span>
        </div>
        <div className="text-muted-foreground">
          best <span className="text-accent glow-text-amber text-base ml-1">{String(highScore).padStart(3, "0")}</span>
        </div>
      </div>

      <div ref={boardRef} className="crt panel relative aspect-square w-full p-2 select-none touch-none">
        <div
          className="grid h-full w-full gap-px"
          style={{ gridTemplateColumns: `repeat(${GRID}, minmax(0, 1fr))` }}
        >
          {cells.map((cell) => {
            const isHead = eq(cell, headCell);
            const isBody = !isHead && snake.some((p) => eq(p, cell));
            const isPacket = eq(cell, packet);
            const isWall = firewalls.some((p) => eq(p, cell));

            let cls = "bg-secondary/25";
            if (isWall) cls = "bg-destructive/70";
            if (isPacket) cls = "bg-accent animate-pulse";
            if (isBody) cls = "bg-primary/45";
            if (isHead) cls = "bg-primary";

            return (
              <div
                key={`${cell.x}-${cell.y}`}
                className={`rounded-[1px] ${cls}`}
                style={
                  isHead
                    ? { boxShadow: "var(--glow-phosphor)" }
                    : isPacket
                      ? { boxShadow: "var(--glow-amber)" }
                      : undefined
                }
              />
            );
          })}
        </div>

        {phase !== "running" && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-background/85 text-center px-6">
            {phase === "idle" && (
              <>
                <p className="text-2xl font-bold text-primary glow-text">PACKET RUSH</p>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Route packets across the array. Dodge your own trail and the firewalls that spin up every
                  four captures. Edges wrap.
                </p>
              </>
            )}
            {phase === "paused" && <p className="text-2xl font-bold text-accent glow-text-amber">PAUSED</p>}
            {phase === "over" && (
              <>
                <p className="text-2xl font-bold text-destructive">CONNECTION DROPPED</p>
                <p className="text-sm text-muted-foreground">
                  {score} packet{score === 1 ? "" : "s"} routed
                  {score > 0 && score >= highScore ? " - new record" : ""}
                </p>
              </>
            )}
            <button
              onClick={() => (phase === "paused" ? setPhase("running") : reset())}
              className="border border-primary px-6 py-2 text-sm uppercase tracking-[0.2em] text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {phase === "paused" ? "Resume" : phase === "over" ? "Reconnect" : "Boot"}
            </button>
            <p className="text-[11px] text-muted-foreground">arrows / wasd - space to pause - swipe on mobile</p>
          </div>
        )}
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2 max-w-[220px] mx-auto md:hidden">
        <span />
        <DPadButton label="up" onPress={() => turn("up")} />
        <span />
        <DPadButton label="left" onPress={() => turn("left")} />
        <DPadButton label={phase === "running" ? "pause" : "play"} onPress={togglePlay} />
        <DPadButton label="right" onPress={() => turn("right")} />
        <span />
        <DPadButton label="down" onPress={() => turn("down")} />
        <span />
      </div>

      <div className="mt-5 hidden md:flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span>dir: {dir}</span>
        <span className="text-border">|</span>
        <button onClick={togglePlay} className="uppercase tracking-[0.2em] hover:text-primary transition-colors">
          {phase === "running" ? "pause" : "start"}
        </button>
        <span className="text-border">|</span>
        <button onClick={reset} className="uppercase tracking-[0.2em] hover:text-primary transition-colors">
          restart
        </button>
      </div>
    </div>
  );
};

export default PacketRush;
