import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import varunImage from '../components/varun.avif';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <section className="py-24 bg-background text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold font-heading mb-6">
              Building AI as an <br />
              <span className="text-gradient">Intelligent Collaborator</span>
            </h1>
            <p className="text-xl text-secondary mb-10 max-w-3xl mx-auto leading-relaxed">
              VISL AI is an AI-first technology company developing the next generation of agentic artificial intelligence systems—intelligent software capable of understanding goals, reasoning through complex problems, and autonomously executing multi-step workflows.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background-alt border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading text-primary mb-4">The Evolution of AI</h2>
            <p className="text-secondary text-lg">From simple tools to autonomous systems.</p>
          </div>

          <div className="bg-surface rounded-2xl shadow-sm border border-border overflow-hidden">
            <div className="grid grid-cols-2 bg-background border-b border-border">
              <div className="p-6 text-center font-semibold text-secondary">Today's AI</div>
              <div className="p-6 text-center font-bold text-primary bg-white/5">Next-Generation AI</div>
            </div>
            {[
              ['Assistants that answer', 'Agents that execute'],
              ['Single-prompt interactions', 'Goal-driven workflows'],
              ['Generated outputs', 'Complete outcomes'],
              ['Manual oversight required', 'Autonomous iteration'],
              ['Isolated tasks', 'End-to-end processes']
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-2 border-b border-border last:border-0">
                <div className="p-6 text-center text-secondary">{row[0]}</div>
                <div className="p-6 text-center text-primary font-medium bg-white/5 flex items-center justify-center gap-2">
                  <ArrowRight className="w-4 h-4 text-secondary hidden sm:block" />
                  {row[1]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-primary mb-4">Leadership</h2>
            <p className="text-secondary text-lg">Guided by experience and vision.</p>
          </div>

          <div className="max-w-4xl mx-auto bg-surface rounded-3xl overflow-hidden shadow-sm border border-border">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 bg-background relative min-h-[300px] border-r border-border">
                <img
                  src={varunImage}
                  alt="Varun Aggarwal"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
              <div className="md:col-span-3 p-8 sm:p-12">
                <h3 className="text-3xl font-bold font-heading text-primary mb-2">Varun Aggarwal</h3>
                <p className="text-secondary font-medium mb-6">Founder & CEO</p>
                <div className="space-y-4 text-secondary leading-relaxed mb-8">
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
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-primary">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ecosystem" className="py-24 bg-background-alt border-t border-border text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold font-heading mb-6">Part of Invention Engine</h2>
              <p className="text-secondary text-lg mb-8 leading-relaxed">
                VISL AI operates within the Invention Engine ecosystem, supporting frontier AI and deep-technology startups through lab and accelerator models.
              </p>
              <p className="text-secondary text-lg mb-8 leading-relaxed">
                In 2 years, Invention Engine has worked with 8 startups in their problem discovery, product development, and GTM journeys, helping them raise $2M+ in follow-on funding.
              </p>
              <a href="#" className="inline-flex items-center text-primary hover:text-secondary transition-colors font-medium">
                Learn More About Invention Engine <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Sonic Lamb', desc: 'Shark Tank S4' },
                { title: 'Magicroll.ai', desc: 'AI Video' },
                { title: 'Desible.ai', desc: 'AI Design' },
                { title: 'Cheerio.in', desc: 'AI Marketing' }
              ].map((startup, i) => (
                <div key={i} className="bg-surface border border-border p-6 rounded-xl backdrop-blur-sm">
                  <h4 className="font-bold font-heading text-lg mb-1">{startup.title}</h4>
                  <p className="text-sm text-secondary">{startup.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
