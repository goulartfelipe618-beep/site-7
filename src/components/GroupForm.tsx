import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const GroupForm = () => {
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Solicitação Enviada", description: "Nossa equipa entrará em contato para organizar seu grupo." });
    setStep(1);
  };

  const labelClass = "text-[11px] uppercase tracking-[0.1em] text-muted-foreground mb-1.5 block font-medium";

  return (
    <div className="brit-card p-8 md:p-12">
      <div className="text-center mb-8">
        <div className="brit-divider mb-3"><span className="text-accent text-sm">⬥</span></div>
        <p className="text-lg text-foreground" style={{ fontFamily: 'Playfair Display' }}>Group Booking</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {step === 1 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Tipo de Veículo</label>
                <select className="brit-input">
                  <option value="">Selecione...</option>
                  <option value="van">Van Executiva</option>
                  <option value="micro">Micro-ônibus</option>
                  <option value="onibus">Ônibus Executivo</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Nº de Passageiros</label>
                <input type="number" min={1} placeholder="Quantos?" required className="brit-input" />
              </div>
            </div>
            <div>
              <label className={labelClass}>Local de Embarque</label>
              <input placeholder="Endereço de partida..." required className="brit-input" />
            </div>
            <div>
              <label className={labelClass}>Destino</label>
              <input placeholder="Para onde seguirão..." required className="brit-input" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Data/Hora de Ida</label>
                <input type="datetime-local" required className="brit-input" />
              </div>
              <div>
                <label className={labelClass}>Data/Hora de Retorno</label>
                <input type="datetime-local" className="brit-input" />
              </div>
            </div>
            <div>
              <label className={labelClass}>Detalhes do Evento</label>
              <textarea placeholder="Descreva o evento, necessidades especiais..." rows={3} className="brit-input resize-none" />
            </div>
            <div className="brit-divider my-6"><span className="text-accent text-xs">⬥</span></div>
            <button type="button" onClick={() => setStep(2)} className="brit-btn w-full">Próximo — Seus Dados</button>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Nome Completo</label>
                <input placeholder="Seu nome" required className="brit-input" />
              </div>
              <div>
                <label className={labelClass}>E-mail</label>
                <input type="email" placeholder="seu@email.com" required className="brit-input" />
              </div>
              <div>
                <label className={labelClass}>WhatsApp</label>
                <input placeholder="(00) 00000-0000" required className="brit-input" />
              </div>
              <div>
                <label className={labelClass}>Como nos encontrou?</label>
                <select className="brit-input">
                  <option value="">Selecione...</option>
                  <option value="indicacao">Indicação</option>
                  <option value="google">Google</option>
                  <option value="instagram">Instagram</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>
            <div className="brit-divider my-6"><span className="text-accent text-xs">⬥</span></div>
            <div className="flex gap-4">
              <button type="button" onClick={() => setStep(1)} className="brit-btn-outline flex-1">Retornar</button>
              <button type="submit" className="brit-btn flex-1">Solicitar para Grupo</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
