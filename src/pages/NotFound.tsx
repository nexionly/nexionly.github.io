import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-primary glow-text mb-3">404</h1>
        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-6">packet lost in transit</p>
        <Link
          to="/"
          className="border border-primary px-6 py-2 text-sm uppercase tracking-[0.2em] text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Back to the arcade
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
