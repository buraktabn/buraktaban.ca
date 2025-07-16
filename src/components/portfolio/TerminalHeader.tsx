export function TerminalHeader() {
  return (
    <div className="flex items-center justify-between border-b border-green-400/30 pb-4">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="text-sm text-green-400/70">burak@portfolio:~$</div>
      <div className="text-sm text-green-400/70">
        {new Date().toLocaleDateString()}
      </div>
    </div>
  );
}
