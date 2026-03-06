import { Link, useLocation } from "react-router-dom";
import { Menu, X, Compass } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: "Transfer" },
    { to: "/grupos", label: "Grupos" },
    { to: "/sobre", label: "Sobre" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 glass-nav border-b border-border">
        <div className="container mx-auto px-6">
          <div className="py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Compass size={22} className="text-primary" />
              <span className="text-xl text-foreground font-semibold tracking-[0.08em]" style={{ fontFamily: 'Playfair Display' }}>
                BELGRAVIA
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`text-xs tracking-[0.12em] uppercase transition-colors duration-300 ${
                    location.pathname === l.to
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block brit-btn !py-2.5 !px-6 !text-sm"
            >
              Reservar
            </a>

            <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[65px] left-0 right-0 z-40 overflow-hidden glass-nav border-b border-border"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm tracking-[0.08em] py-2 ${
                    location.pathname === l.to ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="brit-btn text-center !text-sm mt-2"
              >
                Reservar
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Floating compass anchor */}
      <a
        href="#reserva"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        aria-label="Ir para reserva"
      >
        <Compass size={24} />
      </a>
    </>
  );
};
