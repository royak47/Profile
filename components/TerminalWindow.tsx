export default function TerminalWindow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:py-16">
      <div className="rounded-lg border border-panelborder bg-panel/60 shadow-[0_0_60px_-15px_rgba(255,179,0,0.15)]">
        {/* title bar */}
        <div className="flex items-center gap-2 border-b border-panelborder px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber/60" />
          <span className="ml-3 font-mono text-xs text-muted">
            mitt@dev: ~
          </span>
        </div>

        {/* body */}
        <div className="space-y-10 px-5 py-8 sm:px-8 sm:py-10">
          {children}
        </div>
      </div>

      <p className="mt-4 text-center font-mono text-[11px] text-muted">
        press <kbd className="rounded border border-panelborder px-1">Ctrl</kbd>
        +<kbd className="rounded border border-panelborder px-1">F</kbd> to
        search this page, not this shell
      </p>
    </div>
  );
}
