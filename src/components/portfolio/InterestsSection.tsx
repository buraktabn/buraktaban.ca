export function InterestsSection() {
  const interests = [
    { icon: "⛺", text: "I like to camp" },
    { icon: "🕹️", text: "I enjoy gaming" },
    { icon: "🚗", text: "I love to drive" },
  ];

  return (
    <section className="space-y-4">
      <div className="text-2xl glow-text text-purple-400">
        {"> cat /etc/interests"}
      </div>

      <div className="pl-4 space-y-2">
        <div className="text-green-300 mb-3">🌲 Outside Code</div>
        {interests.map((interest, index) => (
          <div
            key={index}
            className="text-green-400/80 flex items-center space-x-2"
          >
            <span className="text-lg">{interest.icon}</span>
            <span>{interest.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
