export default function FinalCtaBand() {
  return (
    <div className="section my-16">
      <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#201214] via-[#150b0c] to-[#271011] border border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl md:text-3xl font-bold">Ready for a factory-finish repair?</h3>
            <p className="subtle mt-1">Mobile inspections in Scottsdale • Nationwide hail team</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+16237777365" className="rounded-full bg-white/5 px-5 py-3 text-white border border-white/10 hover:bg-white/10">Call (623) 777-7365</a>
            <a href={process.env.NEXT_PUBLIC_CALENDLY_URL || "#"} className="rounded-full bg-[var(--accent)] px-5 py-3 text-white font-semibold hover:opacity-90">Book Free Scan</a>
          </div>
        </div>
      </div>
    </div>
  );
}

