import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TransferForm } from "@/components/TransferForm";
import { motion } from "framer-motion";
import { Shield, Clock, UserCheck, Wifi } from "lucide-react";
import londonSedan from "@/assets/london-sedan.jpg";
import londonInterior from "@/assets/london-interior.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={londonSedan} alt="Sedã executivo em rua londrina" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative container mx-auto px-6 py-32"
        >
          <div className="max-w-xl">
            <div className="brit-divider mb-8 max-w-xs">
              <span className="text-accent text-sm">⬥</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.15] mb-6 text-foreground" style={{ fontFamily: 'Playfair Display' }}>
              Tradição &<br />
              <em>Pontualidade</em><br />
              em Cada Trajeto
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-md">
              Motoristas fardados, frota impecável e o compromisso inabalável com a excelência
              que só a tradição britânica pode inspirar.
            </p>
            <a href="#reserva" className="brit-btn inline-block">
              Solicitar Transfer
            </a>
          </div>
        </motion.div>
      </section>

      {/* Gallery */}
      <section className="py-24 herringbone-bg">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="brit-divider mx-auto max-w-xs mb-4">
              <span className="text-accent text-sm">⬥</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-foreground" style={{ fontFamily: 'Playfair Display' }}>
              Our <em>Fleet</em>
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Veículos mantidos com rigor britânico, interiores em couro legítimo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="brit-frame">
                <img src={londonSedan} alt="Sedã executivo" className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="text-center mt-4">
                <p className="text-lg text-foreground" style={{ fontFamily: 'Playfair Display' }}>
                  <em>The Sedan</em>
                </p>
                <p className="text-xs text-muted-foreground tracking-wider mt-1">Elegância clássica, acabamento impecável</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="brit-frame">
                <img src={londonInterior} alt="Interior em couro" className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="text-center mt-4">
                <p className="text-lg text-foreground" style={{ fontFamily: 'Playfair Display' }}>
                  <em>The Interior</em>
                </p>
                <p className="text-xs text-muted-foreground tracking-wider mt-1">Couro, madeira nobre e atenção aos detalhes</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { icon: Shield, title: "Segurança\nTotal" },
                { icon: Clock, title: "Pontualidade\nBritânica" },
                { icon: UserCheck, title: "Motorista\nFardado" },
                { icon: Wifi, title: "Wi-Fi\na Bordo" },
              ].map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <f.icon size={28} className="text-accent mb-3" />
                  <p className="text-xs text-muted-foreground uppercase tracking-wider whitespace-pre-line leading-relaxed">{f.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="reserva" className="py-24 herringbone-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="brit-divider mx-auto max-w-xs mb-4">
                <span className="text-accent text-sm">⬥</span>
              </div>
              <h2 className="text-3xl md:text-4xl text-foreground" style={{ fontFamily: 'Playfair Display' }}>
                <em>Reservation</em>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <TransferForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
