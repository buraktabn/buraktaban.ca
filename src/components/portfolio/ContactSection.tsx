import { ExternalLink, Github } from "lucide-react";

export function ContactSection() {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/buraktabn/",
      icon: Github,
      description: "Check out my repositories and contributions",
    },
    {
      name: "Contra",
      url: "https://contra.com/burak_taban",
      icon: ExternalLink,
      description: "Professional portfolio and services",
    },
  ];

  return (
    <section className="space-y-4">
      <div className="text-2xl glow-text text-purple-400">
        {"> curl -X GET /contact"}
      </div>

      <div className="pl-4 space-y-4">
        <div className="text-green-300">Status: 200 OK</div>
        <div className="text-green-400/90">Content-Type: application/json</div>

        <div className="bg-green-400/5 border border-green-400/20 rounded p-4 mt-4">
          <div className="text-green-300 mb-3">Available Endpoints:</div>
          <div className="space-y-3">
            {links.map((link, index) => (
              <div key={index} className="flex items-start space-x-3 group">
                <link.icon className="w-5 h-5 text-purple-400 mt-0.5 group-hover:text-purple-300 transition-colors" />
                <div className="flex-1">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors glow-text font-semibold"
                  >
                    {link.name}
                  </a>
                  <div className="text-green-400/70 text-sm mt-1">
                    {link.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-green-400/60 text-sm mt-6 border-t border-green-400/20 pt-4">
          {"> Connection established. Ready for collaboration._"}
        </div>
      </div>
    </section>
  );
}
