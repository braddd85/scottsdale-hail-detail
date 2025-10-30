import Image from "next/image";

export default function TrustBar() {
  return (
    <div className="section mt-8">
      <div className="card px-6 py-4 flex flex-wrap items-center justify-center gap-8">
        <span className="text-white/70 text-sm">Trusted since 2010 • Penske Recognized</span>
        {/* Placeholder badges—swap to real marks as you get them */}
        <Image src="/bmw.PNG" alt="BMW" width={90} height={60} className="rounded-md opacity-80" />
        <Image src="/ferrari.jpg" alt="Ferrari" width={90} height={60} className="rounded-md opacity-80" />
      </div>
    </div>
  );
}

