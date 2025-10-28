export default function Stats() {
  const stats = [
    { label: "Vehicles Restored", value: "2,500+" },
    { label: "Years Experience", value: "30+" },
    { label: "Customer Satisfaction", value: "98%" },
    { label: "Claims Managed", value: "1,200+" },
  ];
  
  return (
    <section className="border-y border-white/10 bg-neutral-900/30 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-neutral-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

