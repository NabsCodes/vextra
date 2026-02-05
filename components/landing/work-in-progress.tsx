export function WorkInProgress() {
  return (
    <section className="border-charcoal-grey/10 bg-off-white border-t">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="text-charcoal-grey/50 flex items-center gap-4 py-6 text-[11px] tracking-[0.24em] uppercase">
          <span className="bg-charcoal-grey/10 h-px flex-1" />
          <span className="inline-flex items-center gap-2">
            <span className="bg-vextra-green h-1.5 w-1.5 rounded-full" />
            Work in progress
          </span>
          <span className="bg-charcoal-grey/10 h-px flex-1" />
        </div>
      </div>
    </section>
  );
}
