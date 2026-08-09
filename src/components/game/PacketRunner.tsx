import { useEffect, useRef, useState, useCallback } from "react";

const HIGH_SCORE_KEY = "packet-runner-high-score";

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 450;
const GROUND_Y = CANVAS_HEIGHT - 60;
const PLAYER_SIZE = 24;
const PLAYER_X = 120;
const GRAVITY = 0.6;
const JUMP_STRENGTH = -12.5;
const BASE_SPEED = 5;
const MAX_SPEED = 12;
const SPEED_RAMP = 0.006;
const SPAWN_MARGIN = 220;

type GroundSegment = { x: number; width: number; y: number };
type Platform = { x: number; y: number; width: number; height: number };
type Obstacle = { x: number; y: number; width: number; height: number; type: "wall" | "spike" };
type Coin = { x: number; y: number; r: number; collected: boolean };

type GameState = {
  phase: "idle" | "running" | "over";
  player: { y: number; vy: number; jumpCount: number };
  speed: number;
  distance: number;
  score: number;
  segments: GroundSegment[];
  platforms: Platform[];
  obstacles: Obstacle[];
  coins: Coin[];
  spawnCursor: number;
};

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));
const random = (min: number, max: number) => Math.random() * (max - min) + min;

const initialState = (): GameState => ({
  phase: "idle",
  player: { y: GROUND_Y - PLAYER_SIZE, vy: 0, jumpCount: 0 },
  speed: 0,
  distance: 0,
  score: 0,
  segments: [{ x: 0, width: CANVAS_WIDTH + 200, y: GROUND_Y }],
  platforms: [],
  obstacles: [],
  coins: [],
  spawnCursor: CANVAS_WIDTH + 200,
});

const PacketRunner = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const gameRef = useRef<GameState>(initialState());
  const phaseRef = useRef<"idle" | "running" | "over">("idle");
  const [phase, setPhase] = useState<"idle" | "running" | "over">("idle");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const lastScoreRef = useRef(0);

  useEffect(() => {
    const stored = Number(localStorage.getItem(HIGH_SCORE_KEY) || 0);
    if (!Number.isNaN(stored)) setHighScore(stored);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = CANVAS_WIDTH * dpr;
    canvas.height = CANVAS_HEIGHT * dpr;
    canvas.style.width = "100%";
    canvas.style.height = "auto";
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctxRef.current = ctx;
  }, []);

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  const gameOver = useCallback(() => {
    const state = gameRef.current;
    if (state.phase === "over") return;
    state.phase = "over";
    setPhase("over");
    setScore(Math.floor(state.score));
    if (state.score > highScore) {
      const best = Math.floor(state.score);
      setHighScore(best);
      localStorage.setItem(HIGH_SCORE_KEY, String(best));
    }
  }, [highScore]);

  const resetGame = useCallback(() => {
    gameRef.current = initialState();
    lastScoreRef.current = 0;
    setScore(0);
    setPhase("idle");
  }, []);

  const jump = useCallback(() => {
    const state = gameRef.current;

    if (state.phase === "over") {
      resetGame();
    }

    if (state.phase === "idle") {
      state.phase = "running";
      state.speed = BASE_SPEED;
      setPhase("running");
    }

    if (state.player.jumpCount < 2) {
      state.player.vy = JUMP_STRENGTH;
      state.player.jumpCount += 1;
    }
  }, [resetGame]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
        e.preventDefault();
        jump();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [jump]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onPointer = (e: PointerEvent) => {
      e.preventDefault();
      jump();
    };

    canvas.addEventListener("pointerdown", onPointer);
    return () => canvas.removeEventListener("pointerdown", onPointer);
  }, [jump]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;

    let rafId = 0;
    let lastTime = performance.now();

    const canvasColors = () => {
      const style = getComputedStyle(canvas);
      return {
        background: style.getPropertyValue("--background").trim() || "160 22% 5%",
        primary: style.getPropertyValue("--primary").trim() || "145 90% 55%",
        destructive: style.getPropertyValue("--destructive").trim() || "0 84% 62%",
        accent: style.getPropertyValue("--accent").trim() || "40 96% 60%",
        border: style.getPropertyValue("--border").trim() || "155 30% 16%",
      };
    };

    const generateSegment = (state: GameState) => {
      const gap = Math.random() < 0.4 ? random(60, 130) : 0;
      const width = random(180, 500);
      const start = state.spawnCursor + gap;
      const y = GROUND_Y;
      state.segments.push({ x: start, width, y });
      state.spawnCursor = start + width;

      // Only place hazards/collectibles after the initial safe zone.
      if (start < 500) return;

      const segCenter = start + width / 2;

      // Platform
      if (width > 180 && Math.random() < 0.35) {
        const pWidth = Math.min(width - 100, 240);
        const pX = start + (width - pWidth) / 2;
        const pY = GROUND_Y - random(90, 150);
        state.platforms.push({ x: pX, y: pY, width: pWidth, height: 12 });

        // Coins above the platform
        const coinCount = Math.floor(random(2, 5));
        for (let i = 0; i < coinCount; i++) {
          const cx = pX + (pWidth / (coinCount + 1)) * (i + 1);
          state.coins.push({ x: cx, y: pY - 24, r: 6, collected: false });
        }
      }

      // Obstacle
      if (Math.random() < 0.4) {
        const kind = Math.random() < 0.5 ? "wall" : "spike";
        const oX = clamp(start + random(40, width - 40), start + 20, start + width - 40);
        if (kind === "wall") {
          state.obstacles.push({ x: oX, y: GROUND_Y - 40, width: 30, height: 40, type: "wall" });
        } else {
          state.obstacles.push({ x: oX, y: GROUND_Y - 20, width: 20, height: 20, type: "spike" });
        }
      }

      // Coins above the ground (if no platform on this segment)
      if (Math.random() < 0.6) {
        const coinCount = Math.floor(random(1, 4));
        for (let i = 0; i < coinCount; i++) {
          const cx = start + (width / (coinCount + 1)) * (i + 1);
          state.coins.push({ x: cx, y: GROUND_Y - 60 - random(0, 30), r: 6, collected: false });
        }
      }
    };

    const update = (dt: number) => {
      const state = gameRef.current;
      if (state.phase !== "running") return;

      state.speed = clamp(state.speed + SPEED_RAMP * dt, BASE_SPEED, MAX_SPEED);
      const move = state.speed * dt;
      state.distance += move;
      state.score += move / 10;

      // Move world left
      state.segments.forEach((s) => (s.x -= move));
      state.platforms.forEach((p) => (p.x -= move));
      state.obstacles.forEach((o) => (o.x -= move));
      state.coins.forEach((c) => (c.x -= move));
      state.spawnCursor -= move;

      // Generate ahead
      while (state.spawnCursor < CANVAS_WIDTH + SPAWN_MARGIN) {
        generateSegment(state);
      }

      // Cleanup off-screen
      state.segments = state.segments.filter((s) => s.x + s.width > -50);
      state.platforms = state.platforms.filter((p) => p.x + p.width > -50);
      state.obstacles = state.obstacles.filter((o) => o.x + o.width > -50);
      state.coins = state.coins.filter((c) => c.x + c.r > -50);

      // Player physics
      state.player.vy += GRAVITY * dt;
      state.player.y += state.player.vy * dt;

      const playerBottom = state.player.y + PLAYER_SIZE;
      const playerCenterX = PLAYER_X + PLAYER_SIZE / 2;

      // Ground / platform collisions
      let grounded = false;
      if (state.player.vy >= 0) {
        for (const seg of state.segments) {
          if (playerCenterX >= seg.x && playerCenterX <= seg.x + seg.width && playerBottom >= GROUND_Y) {
            state.player.y = GROUND_Y - PLAYER_SIZE;
            state.player.vy = 0;
            state.player.jumpCount = 0;
            grounded = true;
            break;
          }
        }
        if (!grounded) {
          for (const plat of state.platforms) {
            if (
              playerCenterX >= plat.x &&
              playerCenterX <= plat.x + plat.width &&
              playerBottom >= plat.y &&
              state.player.y < plat.y
            ) {
              state.player.y = plat.y - PLAYER_SIZE;
              state.player.vy = 0;
              state.player.jumpCount = 0;
              grounded = true;
              break;
            }
          }
        }
      }

      // Obstacle collision
      const playerRect = { x: PLAYER_X, y: state.player.y, width: PLAYER_SIZE, height: PLAYER_SIZE };
      for (const o of state.obstacles) {
        if (
          playerRect.x < o.x + o.width - 4 &&
          playerRect.x + playerRect.width > o.x + 4 &&
          playerRect.y < o.y + o.height - 4 &&
          playerRect.y + playerRect.height > o.y + 4
        ) {
          gameOver();
          return;
        }
      }

      // Coin collection
      for (const c of state.coins) {
        if (c.collected) continue;
        const dx = playerCenterX - c.x;
        const dy = state.player.y + PLAYER_SIZE / 2 - c.y;
        if (Math.hypot(dx, dy) < PLAYER_SIZE / 2 + c.r) {
          c.collected = true;
          state.score += 10;
        }
      }
      state.coins = state.coins.filter((c) => !c.collected || c.x + c.r > -50);

      // Fall into pit
      if (state.player.y > CANVAS_HEIGHT + 20) {
        gameOver();
        return;
      }

      // Update score display
      const display = Math.floor(state.score);
      if (display !== lastScoreRef.current) {
        lastScoreRef.current = display;
        setScore(display);
      }
    };

    const draw = () => {
      const state = gameRef.current;
      const colors = canvasColors();

      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // Subtle horizon line
      ctx.strokeStyle = `hsl(${colors.border})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, GROUND_Y);
      ctx.lineTo(CANVAS_WIDTH, GROUND_Y);
      ctx.stroke();

      // Ground segments
      ctx.fillStyle = `hsl(${colors.border})`;
      for (const seg of state.segments) {
        ctx.fillRect(seg.x, seg.y, seg.width, CANVAS_HEIGHT - seg.y);
      }
      ctx.strokeStyle = `hsl(${colors.primary})`;
      ctx.lineWidth = 2;
      for (const seg of state.segments) {
        ctx.beginPath();
        ctx.moveTo(seg.x, seg.y);
        ctx.lineTo(seg.x + seg.width, seg.y);
        ctx.stroke();
      }

      // Platforms
      for (const p of state.platforms) {
        ctx.fillStyle = `hsl(${colors.border})`;
        ctx.fillRect(p.x, p.y, p.width, p.height);
        ctx.strokeStyle = `hsl(${colors.primary})`;
        ctx.strokeRect(p.x, p.y, p.width, p.height);
      }

      // Obstacles
      for (const o of state.obstacles) {
        if (o.type === "wall") {
          ctx.fillStyle = `hsl(${colors.destructive})`;
          ctx.fillRect(o.x, o.y, o.width, o.height);
          ctx.strokeStyle = `hsl(${colors.background})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(o.x + 4, o.y + 4);
          ctx.lineTo(o.x + o.width - 4, o.y + o.height - 4);
          ctx.moveTo(o.x + o.width - 4, o.y + 4);
          ctx.lineTo(o.x + 4, o.y + o.height - 4);
          ctx.stroke();
        } else {
          ctx.fillStyle = `hsl(${colors.destructive})`;
          ctx.beginPath();
          ctx.moveTo(o.x, o.y + o.height);
          ctx.lineTo(o.x + o.width / 2, o.y);
          ctx.lineTo(o.x + o.width, o.y + o.height);
          ctx.closePath();
          ctx.fill();
        }
      }

      // Coins
      ctx.fillStyle = `hsl(${colors.accent})`;
      for (const c of state.coins) {
        if (c.collected) continue;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Player
      ctx.fillStyle = `hsl(${colors.primary})`;
      ctx.shadowBlur = 14;
      ctx.shadowColor = `hsl(${colors.primary} / 0.6)`;
      ctx.fillRect(PLAYER_X, state.player.y, PLAYER_SIZE, PLAYER_SIZE);
      ctx.shadowBlur = 0;
    };

    const loop = (time: number) => {
      const dt = (time - lastTime) / 16.67;
      lastTime = time;
      update(dt);
      draw();
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [gameOver, resetGame]);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="panel rounded-sm p-4 md:p-6">
        <div className="flex items-center justify-between mb-4 text-xs md:text-sm uppercase tracking-widest text-muted-foreground">
          <span>
            Score: <span className="text-primary font-bold">{score}</span>
          </span>
          <span>
            Best: <span className="text-primary font-bold">{highScore}</span>
          </span>
        </div>

        <div className="relative crt rounded-sm overflow-hidden border border-border bg-card">
          <canvas
            ref={canvasRef}
            className="block w-full h-auto cursor-pointer touch-none select-none"
            aria-label="Packet Runner game canvas"
            role="img"
          />

          {(phase === "idle" || phase === "over") && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm text-center p-4">
              <h2 className="text-xl md:text-2xl font-bold text-primary glow-text mb-2">
                {phase === "idle" ? "PACKET RUNNER" : "CONNECTION LOST"}
              </h2>
              <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                {phase === "idle" ? "Jump the firewalls. Collect the data." : `Final score: ${score}`}
              </p>
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">
                {phase === "idle" ? "Press space / tap to start" : "Press space / tap to restart"}
              </p>
            </div>
          )}

          <div className="absolute bottom-3 right-3 md:hidden">
            <button
              onPointerDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                jump();
              }}
              className="panel px-5 py-3 text-sm font-bold uppercase tracking-widest text-primary active:bg-primary active:text-primary-foreground transition-colors"
              aria-label="Jump"
            >
              Jump
            </button>
          </div>
        </div>

        <div className="mt-4 text-center text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">
          <span className="hidden md:inline">Space / Arrow up / W to jump</span>
          <span className="md:hidden">Tap the screen or the jump button</span>
          <span className="mx-2 text-border">|</span>
          Double jump enabled
        </div>
      </div>
    </div>
  );
};

export default PacketRunner;
