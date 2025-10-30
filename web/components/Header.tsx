"use client"; // UPDATED
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-[var(--bg)]/80 border-b border-[var(--border)]"> {/* UPDATED */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between"> {/* UPDATED */}
        <Link href="/" className="flex items-center gap-3"> {/* UPDATED */}
          <Image
            src="/logo.png"
            alt="Scottsdale Hail & Detail"
            width={40}
            height={40}
            className="rounded-lg"
            priority
          />
          <span className="text-[var(--text-primary)] font-semibold text-lg hidden sm:inline"> {/* UPDATED */}
            Scottsdale Hail & Detail
          </span>
        </Link>
        <div className="flex items-center gap-3"> {/* UPDATED */}
          <a
            href="tel:+16237777365"
            className="hidden sm:inline-flex px-4 py-2 text-sm text-[var(--text-primary)] bg-white/5 rounded-full border border-[var(--border)] hover:bg-white/10 transition" // UPDATED
          >
            (623) 777-7365
          </a>
          <a
            href={process.env.NEXT_PUBLIC_CALENDLY_URL || "#"} // UPDATED
            className="px-5 py-2 text-sm font-semibold text-white bg-[var(--red)] rounded-full hover:opacity-90 transition" // UPDATED
          >
            Book Free Scan
          </a>
        </div>
      </div>
    </header>
  );
}

