export function TechStackSection() {
  const technologies = [
    {
      category: "Languages",
      items: ["Rust", "TypeScript", "JavaScript", "Python"],
    },
    {
      category: "Frontend",
      items: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
    },
    {
      category: "Backend",
      items: ["Actix-Web", "Node.js", "PostgreSQL", "Redis"],
    },
    {
      category: "Infrastructure",
      items: ["Docker", "Kubernetes", "AWS", "Proxmox"],
    },
    {
      category: "Tools",
      items: ["JetBrains IDEs", "Warp", "Obsidian", "AeroSpace"],
    },
  ];

  const workstation = [
    '💻 MacBook Pro M4 16"',
    "🪟 AeroSpace (i3-like window manager)",
    "⚡ warp, JetBrains IDEs, Obsidian",
  ];

  return (
    <section className="space-y-6">
      <div className="text-2xl glow-text text-purple-400">
        {"> ls -la /tech-stack/"}
      </div>

      <div className="pl-4 grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {technologies.map((tech, index) => (
            <div key={index} className="space-y-2">
              <div className="text-green-300 font-semibold">
                {tech.category}/
              </div>
              <div className="pl-4 space-y-1">
                {tech.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="text-green-400/80">
                    - {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="text-green-300 font-semibold">🖥️ My Workstation/</div>
          <div className="pl-4 space-y-1">
            {workstation.map((item, index) => (
              <div key={index} className="text-green-400/80">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
