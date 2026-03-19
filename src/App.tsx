import { motion } from "motion/react";
import { 
  TrendingUp, 
  Target, 
  BarChart3, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  MessageSquare,
  Calendar,
  MapPin,
  Zap
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function App() {
  const scrollToProjection = () => {
    document.getElementById('projecao')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-green/30">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase border border-brand-green/30 rounded-full text-brand-green bg-brand-green/5">
              Proposta Estratégica
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter">
              Previsibilidade e Escala de Vendas para a <span className="gradient-text">WE EXPO 2026</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Uma estratégia baseada no histórico real de dados do seu evento e na expertise de quem domina o mercado de entretenimento.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={scrollToProjection}
                className="group px-8 py-4 bg-brand-green text-brand-dark font-bold rounded-full flex items-center gap-2 hover:bg-white transition-all duration-300"
              >
                Ver Projeção de Resultados
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-4 text-sm text-zinc-500">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  30-31 Mai
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  Campinas/SP
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Histórico Section */}
      <section className="py-24 px-6 bg-brand-surface/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O Ponto de Partida</h2>
            <p className="text-zinc-400">Análise profunda do histórico de Meta Ads dos seus eventos anteriores.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.1 }}
              className="glass-card p-8 hover:border-brand-green/30 transition-colors"
            >
              <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="text-brand-green" />
              </div>
              <h3 className="text-xl font-bold mb-4">Virada de Lote</h3>
              <p className="text-zinc-400 mb-4">Campanhas anteriores demonstraram um CPA excepcional de apenas <span className="text-brand-green font-bold">R$ 8,14</span>.</p>
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold">Alta Performance</div>
            </motion.div>

            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.2 }}
              className="glass-card p-8 hover:border-brand-green/30 transition-colors"
            >
              <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="text-brand-green" />
              </div>
              <h3 className="text-xl font-bold mb-4">Foco em Atrações</h3>
              <p className="text-zinc-400 mb-4">A banda Mato Seco gerou <span className="text-white font-bold">106 vendas</span> com um custo por venda de R$ 12,51.</p>
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold">Engajamento Real</div>
            </motion.div>

            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.3 }}
              className="glass-card p-8 border-red-500/20 hover:border-red-500/40 transition-colors"
            >
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                <AlertCircle className="text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Oportunidade</h3>
              <p className="text-zinc-400 mb-4">Identificamos campanhas que custaram até <span className="text-red-400 font-bold">R$ 63,00</span> por venda. Nosso foco é eliminar esse desperdício.</p>
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold">Otimização Necessária</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                O Cenário Atual e Nossa <span className="text-brand-green">Expertise em Eventos</span>
              </h2>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                O sucesso de um evento como a WE EXPO vem do cruzamento preciso entre a oferta certa e o público qualificado. Focaremos na faixa de <span className="text-white font-bold">21 a 45 anos</span> na região de <span className="text-white font-bold">Campinas</span>.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "ROAS de até 33,72x em eventos similares",
                  "CPA médio entre R$ 5,92 e R$ 10,13",
                  "Otimização diária focada em CPAs abaixo de R$ 20,00",
                  "Estratégias de Remarketing para carrinhos abandonados"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              <motion.div 
                {...fadeIn}
                className="aspect-video glass-card overflow-hidden flex items-center justify-center border-dashed border-2"
              >
                <img 
                  src="https://ais-dev-fv6krsajtee3zeoxeitb23-350493730351.us-east1.run.app/api/attachments/dashboard_print.png" 
                  alt="Dashboard Performance Meta Ads" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projeção Section */}
      <section id="projecao" className="py-24 px-6 bg-brand-surface/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meta: 1.000 Ingressos Vendidos</h2>
            <p className="text-zinc-400">Projeção de cenários baseada em dados históricos e gatilho de virada de lote (07/04).</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cenário Conservador */}
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="glass-card p-8 flex flex-col">
              <div className="mb-6">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Cenário</span>
                <h3 className="text-2xl font-bold">Conservador</h3>
              </div>
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-400">CPA</span>
                  <span className="font-bold">R$ 50,00</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-400">Orçamento</span>
                  <span className="font-bold">R$ 50.000</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-400">Faturamento</span>
                  <span className="font-bold">R$ 90.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">ROAS</span>
                  <span className="font-bold">1,80x</span>
                </div>
              </div>
            </motion.div>

            {/* Cenário Realista */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="glass-card p-8 border-brand-green/40 ring-1 ring-brand-green/20 flex flex-col scale-105 bg-brand-surface">
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-bold text-brand-green uppercase tracking-widest">Cenário</span>
                    <h3 className="text-2xl font-bold">Realista</h3>
                  </div>
                  <span className="px-2 py-1 bg-brand-green/10 text-brand-green text-[10px] font-bold rounded uppercase">Recomendado</span>
                </div>
              </div>
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-400">CPA</span>
                  <span className="font-bold text-brand-green">R$ 20,00</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-400">Orçamento</span>
                  <span className="font-bold">R$ 20.000</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-400">Faturamento</span>
                  <span className="font-bold">R$ 90.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">ROAS</span>
                  <span className="font-bold">4,50x</span>
                </div>
              </div>
            </motion.div>

            {/* Cenário Otimista */}
            <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="glass-card p-8 flex flex-col">
              <div className="mb-6">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Cenário</span>
                <h3 className="text-2xl font-bold">Otimista</h3>
              </div>
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-400">CPA</span>
                  <span className="font-bold text-emerald-400">R$ 8,00</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-400">Orçamento</span>
                  <span className="font-bold">R$ 8.000</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-400">Faturamento</span>
                  <span className="font-bold">R$ 90.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">ROAS</span>
                  <span className="font-bold">11,25x</span>
                </div>
              </div>
            </motion.div>
          </div>

          <p className="mt-12 text-center text-sm text-zinc-500 italic">
            * Nota: O faturamento real pode ser significativamente maior com a venda do Combo 2 Amigos (R$ 160,00).
          </p>
        </div>
      </section>

      {/* Fechamento Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Vamos escalar a WE EXPO 2026?</h2>
            <p className="text-lg text-zinc-400 mb-12 leading-relaxed">
              Não estamos começando do zero. Já sabemos o que funciona para a sua marca e onde estão os gargalos. Minha proposta é transformar esses dados em lucro real e ingressos esgotados.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://wa.me/5519991506444" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-brand-green text-brand-dark font-bold rounded-full flex items-center justify-center gap-3 hover:scale-105 transition-transform"
              >
                <MessageSquare className="w-6 h-6" />
                Falar no WhatsApp
              </a>
              <button className="w-full sm:w-auto px-10 py-5 border border-white/20 font-bold rounded-full hover:bg-white/5 transition-colors">
                Aceitar Proposta
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 px-6">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <BarChart3 className="text-brand-green" />
            WE EXPO <span className="text-brand-green">2026</span>
          </div>
          <p className="text-zinc-500 text-sm">
            © 2026 Proposta de Gestão de Tráfego. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
