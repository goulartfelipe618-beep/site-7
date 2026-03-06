import { useState } from "react";
import { toast } from "@/hooks/use-toast";

type TripType = "ida" | "ida-volta" | "hora";

export const TransferForm = () => {
  const [step, setStep] = useState(1);
  const [tripType, setTripType] = useState<TripType>("ida");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Reserva Confirmada", description: "Nossa equipa entrará em contato para confirmar os detalhes." });
    setStep(1);
  };

  const labelClass = "text-[11px] uppercase tracking-[0.1em] text-muted-foreground mb-1.5 block font-medium";

  return (
    <div className="brit-card p-8 md:p-12">
      <div className="text-center mb-8">
        <div className="brit-divider mb-3">
          <span className="text-accent text-sm">⬥</span>
        </div>
        <p className="text-lg text-foreground" style={{ fontFamily: 'Playfair Display' }}>
          Booking Card
        </p>
      </div>

      <div className="flex gap-0 mb-8 rounded-lg overflow-hidden border border-border">
        {([["ida", "Somente Ida"], ["ida-volta", "Ida e Volta"], ["hora", "Por Hora"]] as const).map(
          ([val, label]) => (
            <button
              key={val}
              type="button"
              onClick={() => setTripType(val)}
              className={`flex-1 py-3 text-xs tracking-[0.08em] uppercase transition-all duration-300 ${
                tripType === val
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          )
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {step === 1 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className={labelClass}>Passageiros</label>
                <input type="number" min={1} placeholder="Nº" required className="brit-input" />
              </div>
              <div>
                <label className={labelClass}>Data</label>
                <input type="date" required className="brit-input" />
              </div>
              <div>
                <label className={labelClass}>Hora</label>
                <input type="time" required className="brit-input" />
              </div>
            </div>

            {tripType === "hora" && (
              <div>
                <label className={labelClass}>Horas de Serviço</label>
                <input type="number" min={1} placeholder="Quantas horas?" required className="brit-input" />
              </div>
            )}

            <div>
              <label className={labelClass}>Endereço de Embarque</label>
              <input placeholder="Onde o buscaremos..." required className="brit-input" />
            </div>
            <div>
              <label className={labelClass}>Destino</label>
              <input placeholder="Para onde deseja ir..." required className="brit-input" />
            </div>

            {tripType === "ida-volta" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Data de Retorno</label>
                  <input type="date" className="brit-input" />
                </div>
                <div>
                  <label className={labelClass}>Hora de Retorno</label>
                  <input type="time" className="brit-input" />
                </div>
              </div>
            )}

            <div>
              <label className={labelClass}>Observações</label>
              <textarea placeholder="Algum pedido especial?..." rows={2} className="brit-input resize-none" />
            </div>
            <div>
              <label className={labelClass}>Cupom</label>
              <input placeholder="Código promocional" className="brit-input" />
            </div>

            <div className="brit-divider my-6">
              <span className="text-accent text-xs">⬥</span>
            </div>

            <button type="button" onClick={() => setStep(2)} className="brit-btn w-full">
              Próximo — Seus Dados
            </button>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Nome Completo</label>
                <input placeholder="Como gostaria de ser chamado" required className="brit-input" />
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
                  <option value="indicacao">Indicação Pessoal</option>
                  <option value="google">Google</option>
                  <option value="instagram">Instagram</option>
                  <option value="concierge">Concierge de Hotel</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>

            <div className="brit-divider my-6">
              <span className="text-accent text-xs">⬥</span>
            </div>

            <div className="flex gap-4">
              <button type="button" onClick={() => setStep(1)} className="brit-btn-outline flex-1">
                Retornar
              </button>
              <button type="submit" className="brit-btn flex-1">
                Confirmar Reserva
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
