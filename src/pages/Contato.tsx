import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Contato = () => {
  const info = [
    { label: "E-mail", value: "contato@belgraviatransfer.com.br", href: "mailto:contato@belgraviatransfer.com.br" },
    { label: "Telefone", value: "(11) 99999-9999", href: "tel:+5511999999999" },
    { label: "WhatsApp", value: "(11) 99999-9999", href: "https://wa.me/5511999999999" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28 herringbone-bg">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="brit-divider mx-auto max-w-xs mb-6">
              <span className="text-accent">⬥</span>
            </div>
            <h1 className="text-4xl md:text-5xl text-foreground mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Get in <em>Touch</em>
            </h1>
            <p className="text-base text-muted-foreground max-w-md mx-auto">
              Estamos à disposição para organizar seu próximo trajeto com excelência.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-lg">
          <div className="brit-card p-10 md:p-14">
            <div className="text-center mb-8">
              <div className="brit-divider mx-auto max-w-[120px] mb-3">
                <span className="text-accent text-sm">⬥</span>
              </div>
              <p className="text-lg text-foreground" style={{ fontFamily: 'Playfair Display' }}>
                Contact Card
              </p>
            </div>

            <div className="space-y-6">
              {info.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="block text-center py-4 border-b border-border last:border-b-0 group"
                >
                  <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-foreground group-hover:text-accent transition-colors" style={{ fontFamily: 'Playfair Display', fontSize: '1.1rem' }}>
                    {item.value}
                  </p>
                </motion.a>
              ))}
            </div>

            <div className="brit-divider mx-auto max-w-[120px] my-8">
              <span className="text-accent text-xs">⬥</span>
            </div>

            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="brit-btn block text-center w-full"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
