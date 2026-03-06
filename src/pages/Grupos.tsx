import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GroupForm } from "@/components/GroupForm";
import { motion } from "framer-motion";
import londonFleet from "@/assets/london-fleet.jpg";
import londonSedan from "@/assets/london-sedan.jpg";
import londonInterior from "@/assets/london-interior.jpg";

const galleryItems = [
  {
    img: londonFleet,
    title: "The Grand Fleet",
    desc: "Nossa frota completa alinhada e pronta para receber seu grupo com a devida cerimônia.",
  },
  {
    img: londonSedan,
    title: "The Escort",
    desc: "Cada veículo acompanhado de um motorista fardado, treinado nos mais altos padrões de etiqueta.",
  },
  {
    img: londonInterior,
    title: "The Experience",
    desc: "Interiores em couro legítimo, madeira nobre e climatização individual para cada passageiro.",
  },
];

const capacityData = [
  { vehicle: "Sedan Executivo", passengers: "1-3", luggage: "3 malas", features: "Wi-Fi, água, jornal" },
  { vehicle: "SUV Premium", passengers: "1-5", luggage: "5 malas", features: "Wi-Fi, água, carregador" },
  { vehicle: "Van Executiva", passengers: "6-14", luggage: "14 malas", features: "Wi-Fi, AC, multimídia" },
  { vehicle: "Micro-ônibus", passengers: "15-28", luggage: "28 malas", features: "Wi-Fi, AC, banheiro" },
];

const Grupos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 herringbone-bg">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="brit-divider mx-auto max-w-xs mb-6">
              <span className="text-accent">⬥</span>
            </div>
            <h1 className="text-4xl md:text-5xl text-foreground mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Group <em>Services</em>
            </h1>
            <p className="text-base text-muted-foreground max-w-md mx-auto">
              Transporte para grupos com a mesma excelência e atenção aos detalhes que dedicamos a cada passageiro individual.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery — alternating layout */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-20">
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "md:[direction:rtl] [&>*]:md:[direction:ltr]" : ""
                }`}
              >
                <div className="brit-frame">
                  <img src={item.img} alt={item.title} className="w-full aspect-[4/3] object-cover" />
                </div>
                <div className={`${i % 2 === 1 ? "md:text-right" : ""}`}>
                  <p className="text-accent text-lg mb-2">⬥</p>
                  <h3 className="text-2xl md:text-3xl text-foreground mb-4" style={{ fontFamily: 'Playfair Display' }}>
                    <em>{item.title}</em>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity Table */}
      <section className="py-20 herringbone-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="brit-divider mx-auto max-w-xs mb-4">
              <span className="text-accent text-sm">⬥</span>
            </div>
            <h2 className="text-3xl text-foreground" style={{ fontFamily: 'Playfair Display' }}>
              Fleet <em>Capacity</em>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="brit-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="text-left px-6 py-4 text-xs uppercase tracking-wider font-medium">Veículo</th>
                      <th className="text-left px-6 py-4 text-xs uppercase tracking-wider font-medium">Passageiros</th>
                      <th className="text-left px-6 py-4 text-xs uppercase tracking-wider font-medium">Bagagem</th>
                      <th className="text-left px-6 py-4 text-xs uppercase tracking-wider font-medium">Comodidades</th>
                    </tr>
                  </thead>
                  <tbody>
                    {capacityData.map((row, i) => (
                      <tr key={row.vehicle} className={`border-b border-border ${i % 2 === 0 ? "bg-card" : "bg-background"}`}>
                        <td className="px-6 py-4 font-medium text-foreground">{row.vehicle}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.passengers}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.luggage}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.features}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="brit-divider mx-auto max-w-xs mb-4">
              <span className="text-accent text-sm">⬥</span>
            </div>
            <h2 className="text-3xl text-foreground" style={{ fontFamily: 'Playfair Display' }}>
              Our <em>Services</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Casamentos", desc: "Transporte nupcial com elegância e discrição impecável." },
              { title: "Eventos Corporativos", desc: "Logística pontual para convenções e conferências." },
              { title: "Turismo Executivo", desc: "Roteiros exclusivos com conforto de primeira classe." },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="brit-card p-8 text-center"
              >
                <span className="text-2xl text-accent block mb-4">⬥</span>
                <h3 className="text-lg text-foreground mb-2" style={{ fontFamily: 'Playfair Display' }}>
                  <em>{s.title}</em>
                </h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 herringbone-bg">
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
              <h2 className="text-3xl text-foreground" style={{ fontFamily: 'Playfair Display' }}>
                Group <em>Request</em>
              </h2>
            </motion.div>
            <GroupForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Grupos;
