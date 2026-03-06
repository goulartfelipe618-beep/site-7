import { Link } from "react-router-dom";
import { Compass } from "lucide-react";

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-16">
    <div className="container mx-auto px-6">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[1px] w-16 bg-accent/40" />
          <Compass size={20} className="text-accent" />
          <div className="h-[1px] w-16 bg-accent/40" />
        </div>
        <p className="text-xl tracking-[0.15em]" style={{ fontFamily: 'Playfair Display' }}>BELGRAVIA TRANSFER</p>
        <p className="text-xs text-primary-foreground/50 mt-1 italic" style={{ fontFamily: 'Playfair Display' }}>Since Tradition Matters</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-primary-foreground/40 mb-3">Navegação</p>
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "Transfer" },
              { to: "/grupos", label: "Grupos" },
              { to: "/sobre", label: "Sobre" },
              { to: "/contato", label: "Contato" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-primary-foreground/40 mb-3">Atendimento</p>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
            <span>contato@belgraviatransfer.com.br</span>
            <span>(11) 99999-9999</span>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-primary-foreground/40 mb-3">Compromisso</p>
          <p className="text-sm text-primary-foreground/60 italic" style={{ fontFamily: 'Playfair Display' }}>
            "Pontualidade britânica,<br />hospitalidade brasileira."
          </p>
        </div>
      </div>

      <div className="mt-12 pt-6 text-center">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-primary-foreground/15 to-transparent mb-6" />
        <p className="text-[10px] text-primary-foreground/30 tracking-widest uppercase">
          © {new Date().getFullYear()} Belgravia Transfer — Tradition & Excellence
        </p>
      </div>
    </div>
  </footer>
);
