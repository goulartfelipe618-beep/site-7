import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Compass } from "lucide-react";

export const InvitePopup = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/25 backdrop-blur-sm"
        onClick={() => setVisible(false)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          className="brit-card p-10 md:p-14 max-w-md mx-6 text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-10 bg-accent/40" />
            <Compass size={24} className="text-accent" />
            <div className="h-[1px] w-10 bg-accent/40" />
          </div>
          <h3 className="text-2xl md:text-3xl text-foreground mb-3" style={{ fontFamily: 'Playfair Display' }}>
            Bem-vindo à<br />Belgravia Transfer
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Pontualidade britânica aliada à hospitalidade brasileira.
            Motoristas fardados, frota impecável e um compromisso inabalável com a excelência.
          </p>
          <button onClick={() => setVisible(false)} className="brit-btn w-full">
            Explorar
          </button>
          <button onClick={() => setVisible(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
            <X size={18} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
