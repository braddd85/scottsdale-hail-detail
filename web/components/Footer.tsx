export default function Footer() {
  return (
    <footer id="contact" className="py-12 bg-[var(--bg)] border-t border-[var(--border)]"> {/* UPDATED */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* UPDATED */}
        <div className="grid md:grid-cols-3 gap-8"> {/* UPDATED */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-[var(--text-primary)]"> {/* UPDATED */}
              Scottsdale Hail & Detail
            </h3>
            <p className="text-sm text-[var(--text-secondary)]"> {/* UPDATED */}
              8350 E Evans Rd Ste E1<br />
              Scottsdale, AZ 85260
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 text-[var(--text-primary)]"> {/* UPDATED */}
              Contact
            </h3>
            <p className="text-sm text-[var(--text-secondary)] space-y-1"> {/* UPDATED */}
              <a href="tel:+16237777365" className="block hover:text-[var(--red)] transition"> {/* UPDATED */}
                (623) 777-7365
              </a>
              <a href="mailto:team@scottsdalehail.com" className="block hover:text-[var(--red)] transition"> {/* UPDATED */}
                team@scottsdalehail.com
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 text-[var(--text-primary)]"> {/* UPDATED */}
              Quick Links
            </h3>
            <div className="flex flex-col space-y-1 text-sm text-[var(--text-secondary)]"> {/* UPDATED */}
              <a href="#services" className="hover:text-[var(--red)] transition"> {/* UPDATED */}
                Services
              </a>
              <a href="#process" className="hover:text-[var(--red)] transition"> {/* UPDATED */}
                Process
              </a>
              <a href="#why" className="hover:text-[var(--red)] transition"> {/* UPDATED */}
                Why Us
              </a>
              <a href="#contact" className="hover:text-[var(--red)] transition"> {/* UPDATED */}
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[var(--border)] text-center text-sm text-[var(--text-secondary)]"> {/* UPDATED */}
          © {new Date().getFullYear()} Scottsdale Hail & Detail. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

