export default function StatsStrip() {
  const stats = [ // UPDATED
    { value: "2,500+", label: "Vehicles Restored" },
    { value: "15+", label: "Years in Business" },
    { value: "Since 2010", label: "Penske Certified" },
    { value: "Nationwide", label: "Coverage Area" },
  ];

  return (
    <section className="py-16 bg-[var(--card)]"> {/* UPDATED */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* UPDATED */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8"> {/* UPDATED */}
          {stats.map((stat, index) => (
            <div key={index} className="text-center"> {/* UPDATED */}
              <div className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-2"> {/* UPDATED */}
                {stat.value}
              </div>
              <div className="text-sm text-[var(--text-secondary)]"> {/* UPDATED */}
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

