import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, BrainCircuit, Layers, Network, Server, ChevronRight } from 'lucide-react';
import varunImage from '../components/varun.avif';
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
            className="absolute inset-0 opacity-100"
            style={{
              backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 2px, transparent 2px)',
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
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-surface border border-border text-base font-medium text-primary mb-6"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              Building the Stealth
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6"
            >
              <span className="bg-white text-black px-4 py-2 rounded-xl inline-block mr-4">Visl.ai</span>
              <span>Labs</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-secondary mb-10 max-w-2xl leading-relaxed"
            >
              A stealth AI-native startup building high-velocity consumer products.
            </motion.p>


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
                capable of transforming how individuals interact
                with technology. We're building AI that doesn't just assist—it
                actively performs meaningful work alongside humans.
              </p>

              <ul className="space-y-4">
                {[
                  'Understand complex goals',
                  'Plan and execute multi-step processes',
                  'Provide seamless and intuitive user interactions',
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

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="py-24 bg-background-alt border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4 text-primary">Leadership</h2>
            <p className="text-xl text-secondary">Guided by experience and vision.</p>
          </div>

          <div className="max-w-4xl mx-auto bg-surface border border-border rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
              <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-2xl overflow-hidden border border-border">
                <img
                  src={varunImage}
                  alt="Varun Aggarwal"
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold font-heading mb-2 text-primary">Varun Aggarwal</h3>
                <p className="text-primary font-medium mb-6">Founder & CEO</p>
                <div className="space-y-4 text-secondary mb-8 leading-relaxed">
                  <p>
                    Entrepreneur and AI researcher who previously built and scaled Aspiring Minds, a global AI platform for skills assessment adopted by organizations worldwide. Achieved successful exit valued at over $100 million.
                  </p>
                  <p>
                    Author of science, deeptech, and children's books. Built AI products for spoken English evaluation, coding skills, and others, achieving global sales with ARR of $20M+.
                  </p>
                </div>
                <ul className="space-y-3">
                  {[
                    'Built global AI products at scale',
                    'Deep expertise in AI evaluation systems',
                    'Track record of successful AI company building'
                  ].map((highlight, i) => (
                    <li key={i} className="flex items-center gap-3 text-secondary text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
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
