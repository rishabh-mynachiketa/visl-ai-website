import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, BrainCircuit, Layers, Network, Server, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background text-primary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
          <motion.div
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle at center, #333 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-sm font-medium text-primary mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Building the Stealth
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6"
            >
              Autonomous <br />
              <span className="text-gradient">AI Systems</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-secondary mb-10 max-w-2xl leading-relaxed"
            >
              AI-native software that understands goals, reasons through complexity,
              and autonomously executes complete workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors group"
              >
                Explore Our Vision
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/technology"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-surface text-primary font-medium hover:bg-surface/80 transition-colors border border-border"
              >
                Technology Overview
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background-alt border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-secondary font-semibold tracking-wider uppercase text-sm mb-4">Our Vision</p>
              <h2 className="text-4xl font-bold font-heading mb-6 text-primary">
                From AI Tools to Intelligent Collaborators
              </h2>
              <p className="text-secondary text-lg mb-8 leading-relaxed">
                The next era of computing will be driven by autonomous AI systems
                capable of transforming how individuals and organizations interact
                with technology. We're building AI that doesn't just assist—it
                actively performs meaningful work alongside humans.
              </p>

              <ul className="space-y-4">
                {[
                  'Understand complex goals',
                  'Plan and execute multi-step processes',
                  'Adapt to changing conditions',
                  'Deliver complete, production-ready outcomes'
                ].map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-3 text-primary font-medium"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-surface border border-border flex items-center justify-center text-primary">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden bg-surface border border-border p-8 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
              <div className="relative z-10 space-y-6">
                <div className="glass-card p-6 rounded-xl">
                  <p className="text-sm text-secondary mb-2">Static Software</p>
                  <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-secondary" />
                  </div>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <p className="text-sm text-secondary mb-2">AI Tools</p>
                  <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-primary" />
                  </div>
                </div>
                <div className="glass-card p-6 rounded-xl border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                  <p className="text-sm text-primary font-medium mb-2 flex items-center gap-2">
                    <BrainCircuit className="w-4 h-4" /> Autonomous AI
                  </p>
                  <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-gray-400 to-white"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-heading mb-6 text-primary">Core Technology Pillars</h2>
            <p className="text-secondary text-lg">
              Our foundation is built on advanced AI architectures designed for real-world impact and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BrainCircuit,
                title: 'Agentic AI',
                desc: 'Goal-driven systems that reason through complex workflows, breaking tasks into structured steps and iteratively improving results.',
                link: '/technology#agentic-ai'
              },
              {
                icon: Layers,
                title: 'Multimodal Intelligence',
                desc: 'Unified AI systems that process and generate combinations of text, images, audio, video, and structured data.',
                link: '/technology#multimodal'
              },
              {
                icon: Network,
                title: 'Neurosymbolic Systems',
                desc: 'Hybrid architectures combining neural networks with symbolic reasoning for interpretable, reliable AI.',
                link: '/technology#neurosymbolic'
              },
              {
                icon: Server,
                title: 'Production Infrastructure',
                desc: 'Scalable systems designed for reliability at scale, with evaluation frameworks and optimized inference.',
                link: '/technology#infrastructure'
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-2xl bg-surface border border-border hover:border-white/20 hover:shadow-xl hover:shadow-white/5 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-background border border-border text-primary flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-primary">{pillar.title}</h3>
                <p className="text-secondary text-sm leading-relaxed mb-6">{pillar.desc}</p>
                <Link to={pillar.link} className="inline-flex items-center text-primary font-medium text-sm group-hover:text-secondary transition-colors">
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background-alt text-primary border-y border-border overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 bg-[url('https://picsum.photos/seed/tech/1920/1080')] bg-cover bg-center mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-secondary font-semibold tracking-wider uppercase text-sm mb-4">Product Philosophy</p>
            <h2 className="text-4xl font-bold font-heading mb-6">AI-Native from the Ground Up</h2>
            <p className="text-secondary text-lg">
              We build AI-native software systems designed around artificial
              intelligence rather than adding AI as an afterthought. Our products
              integrate advanced models with structured orchestration layers
              for coordinated actions across complex workflows.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-black border border-border rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center px-4 py-3 bg-surface border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="ml-4 text-xs text-secondary font-mono">system_architecture.ts</div>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="font-mono text-sm leading-relaxed">
                <code className="text-primary">
                  <span className="text-purple-400">const</span> <span className="text-blue-400">VISL_System</span> = {'{'}
                  {'\n  '}foundation: <span className="text-green-400">"Advanced Language & Multimodal Models"</span>,
                  {'\n  '}orchestration: {'{'}
                  {'\n    '}reasoning: <span className="text-green-400">"Multi-step planning & logic"</span>,
                  {'\n    '}tools: <span className="text-green-400">"Function calling & APIs"</span>,
                  {'\n    '}execution: <span className="text-green-400">"Iterative refinement loops"</span>,
                  {'\n    '}evaluation: <span className="text-green-400">"Quality assessment & self-correction"</span>
                  {'\n  }'},
                  {'\n  '}output: <span className="text-green-400">"Complete, production-ready results"</span>
                  {'\n}'};
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6 text-primary">
            Ready to Build with Autonomous AI?
          </h2>
          <p className="text-xl text-secondary mb-10">
            Join us in defining the future of intelligent software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              to="/careers"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-surface text-primary font-medium hover:bg-surface/80 transition-colors border border-border shadow-sm"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
