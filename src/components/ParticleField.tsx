const particles = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 19) % 100}%`,
  delay: `${(index % 9) * 0.45}s`,
  size: `${6 + (index % 5) * 3}px`
}));

export function ParticleField() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.24),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(15,23,42,0.13),transparent_26%),linear-gradient(135deg,rgba(248,250,252,0.95),rgba(255,255,255,0.68))] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.18),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(148,163,184,0.14),transparent_28%),linear-gradient(135deg,#0f172a,#111827)]" />
      {particles.map((particle) => (
        <span
          className="particle absolute rounded-full bg-teal/45 shadow-[0_0_24px_rgba(20,184,166,0.35)] dark:bg-teal/35"
          key={particle.id}
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay
          }}
        />
      ))}
    </div>
  );
}
