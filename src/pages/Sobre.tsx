import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Clock, UserCheck, Wifi, Star, Heart } from "lucide-react";

const Sobre = () => {
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
              About <em>Us</em>
            </h1>
            <p className="text-base text-muted-foreground max-w-md mx-auto">
              Conheça a tradição e os valores que nos guiam há mais de quinze anos.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="brit-divider max-w-xs">
                <span className="text-accent text-xs">⬥</span>
              </div>

              <h2 className="text-3xl text-foreground leading-tight" style={{ fontFamily: 'Playfair Display' }}>
                <em>Mais de quinze anos dedicados à excelência no transporte executivo</em>
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                A Belgravia Transfer nasceu da convicção de que cada trajeto pode ser uma
                experiência memorável. Inspirados pela tradição britânica de pontualidade,
                discrição e atenção impecável, construímos um serviço que honra cada detalhe.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Nossos motoristas são profissionais fardados, treinados em etiqueta e
                protocolo, fluentes em dois idiomas e dedicados à arte de servir.
                Cada veículo é mantido com rigor absoluto — couro legítimo, climatização
                perfeita, conectividade e os pequenos mimos que fazem toda a diferença.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Como uma verdadeira casa de tradição, não nos apressamos — mas nunca nos
                atrasamos. A pontualidade britânica aliada à hospitalidade brasileira é a
                nossa marca registrada.
              </p>

              <div className="brit-divider max-w-xs">
                <span className="text-accent text-xs">⬥</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-3 md:grid-cols-6 gap-6 mt-16 text-center"
            >
              {[
                { icon: Shield, label: "Segurança" },
                { icon: Clock, label: "Pontualidade" },
                { icon: UserCheck, label: "Motorista\nFardado" },
                { icon: Wifi, label: "Wi-Fi\na Bordo" },
                { icon: Star, label: "Excelência" },
                { icon: Heart, label: "Hospitalidade" },
              ].map((d) => (
                <div key={d.label} className="flex flex-col items-center">
                  <d.icon size={22} className="text-accent mb-2" />
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground whitespace-pre-line">{d.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
