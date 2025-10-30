import React from "react";

export default function Section({
  children,
  alt = false,
  className = "",
  id,
}: React.PropsWithChildren<{ alt?: boolean; className?: string; id?: string }>) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className={`surface ${alt ? "bg-gradient-to-b from-[#0f1012] to-[#101114]" : ""} bg-noise`}>
        <div className="p-6 sm:p-10">{children}</div>
      </div>
    </section>
  );
}

