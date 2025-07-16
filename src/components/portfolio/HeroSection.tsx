export function HeroSection() {
  return (
    <section className="space-y-4">
      <div className="text-2xl glow-text">{"> whoami"}</div>
      <div className="pl-4 space-y-2">
        <h2 className="text-4xl font-bold text-purple-400 glow-text">
          Hi, I&apos;m Burak 👋
        </h2>
        <div className="text-xl text-green-300">
          Software Engineer • Systems Thinker • Infrastructure Builder
        </div>
        <div className="text-lg text-green-400/80 italic max-w-2xl">
          &ldquo;I don&apos;t just write code — I architect systems that scale,
          adapt, and outperform.&rdquo;
        </div>
      </div>
    </section>
  );
}
