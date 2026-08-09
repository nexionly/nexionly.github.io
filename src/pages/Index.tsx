import PacketRunner from "@/components/game/PacketRunner";

const Index = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--phosphor)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--phosphor)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <header className="relative z-10 px-6 pt-10 pb-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground mb-2">node online</p>
        <h1 className="text-3xl md:text-4xl font-bold text-primary glow-text tracking-tight">PACKET RUNNER</h1>
      </header>

      <section className="relative z-10 flex-1 px-4 pb-10" aria-label="Packet Runner game">
        <PacketRunner />
      </section>

      <footer className="relative z-10 px-6 py-6 text-center text-[11px] uppercase tracking-[0.25em] text-muted-foreground border-t border-border">
        &copy; {new Date().getFullYear()} tomas williams / matte green media
      </footer>
    </main>
  );
};

export default Index;
