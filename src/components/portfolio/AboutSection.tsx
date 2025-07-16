export function AboutSection() {
  const points = [
    "🦀 Rust isn't just a language, it's a philosophy.",
    "⚡ From Next.js to Actix-Web, I choose tools for control, speed, and clarity.",
    "🏗️ I specialize in building engines, not just apps: flashloan arbitrage, high-frequency logic, DRL agents for multi-horizon crypto trades, and autonomous trading systems.",
    "🧠 Systems thinking is my edge—markets, software, cities, minds. Every system has a pressure point, and I'm here to find it.",
    "🛠️ Over a decade building software for leverage, not vanity. I care about execution, ownership, and autonomy—not because it sounds good, but because I know what scales.",
  ];

  return (
    <section className="space-y-4">
      <div className="text-2xl glow-text text-purple-400">
        {"> cat about.txt"}
      </div>
      <div className="pl-4 space-y-3">
        {points.map((point, index) => (
          <div key={index} className="text-green-300 leading-relaxed">
            {point}
          </div>
        ))}
      </div>
    </section>
  );
}
