import { motion } from 'motion/react';
import { ArrowRight, Code, Rocket, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Careers() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-block px-4 py-1.5 rounded-full bg-surface border border-border text-sm font-medium text-primary mb-6">Join The Team</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6">
              Build the Future with <br className="hidden sm:block" />
              <span className="text-gradient">VISL AI</span>
            </h1>
            <p className="text-xl text-secondary mb-10 max-w-2xl leading-relaxed">
              Join a team of exceptional builders creating the next generation
              of agentic AI systems. Work directly with experienced founders,
              own products end-to-end, and shape the future of intelligent software.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background-alt border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "True Ownership",
                desc: "Work as a founding engineer with meaningful equity participation. Act as the CPTO for your product line, owning technical vision and outcomes end-to-end. Value creators are value owners at VISL AI.",
                points: ["Meaningful equity (accelerated vesting)", "End-to-end product ownership", "Direct impact on company direction"]
              },
              {
                icon: Rocket,
                title: "Build Like a Founder",
                desc: "Experience the full product journey from concept to market. Work in a safe environment with the autonomy of a startup founder and the backing of experienced entrepreneurs.",
                points: ["Work directly with $100M exit founder", "Full product lifecycle experience", "High-velocity environment"]
              },
              {
                icon: Code,
                title: "Cutting-Edge AI",
                desc: "Build production-grade agentic AI systems using state-of-the-art foundation models, multimodal intelligence, and neurosymbolic approaches. Ship products that work beyond demos.",
                points: ["SOTA AI models and techniques", "Production-grade engineering", "Real-world impact at scale"]
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-surface border border-border h-full flex flex-col hover:border-white/20 hover:shadow-xl hover:shadow-white/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-background border border-border text-primary flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-4 text-primary">{card.title}</h3>
                <p className="text-secondary mb-6 flex-grow leading-relaxed">{card.desc}</p>
                <ul className="space-y-3 mt-auto">
                  {card.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-3 text-secondary text-sm">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="open-positions" className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4 text-primary">Open Positions</h2>
            <p className="text-xl text-secondary">Join us in Gurgaon to build the next generation of AI.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-surface rounded-2xl border border-border p-8 md:p-10 hover:border-white/20 transition-colors group">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 border-b border-border pb-8">
                <div>
                  <h3 className="text-2xl font-bold font-heading mb-3 text-primary group-hover:text-white transition-colors">Founding AI Engineer</h3>
                  <p className="text-primary font-medium italic md:text-left max-w-sm text-sm">
                    "Act as the CPTO for your product line. Own AI products from discovery to deployment."
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end md:max-w-xs">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-background border border-border text-xs font-medium text-secondary">Full-Time</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-background border border-border text-xs font-medium text-secondary">Onsite (Gurgaon)</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-background border border-border text-xs font-medium text-secondary">0-3 years</span>
                </div>
              </div>

              <div className="space-y-8 text-secondary mb-10 text-sm leading-relaxed">
                <div>
                  <h4 className="text-primary font-semibold mb-3">Role Overview</h4>
                  <p>
                    This is not a conventional engineering role. You will be the Chief Product/Technology Officer for your product line, much like a technical founder. You will be a two-people pod owning your AI products, from discovery, product design, to AI algorithms and final production deployment.
                  </p>
                </div>

                <div>
                  <h4 className="text-primary font-semibold mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2 list-disc list-outside ml-4 marker:text-primary">
                    <li>Work closely with founders to translate ambiguous ideas into clear product and technical direction</li>
                    <li>Act as the CPTO for your product, owning technical vision, execution, and outcomes end-to-end</li>
                    <li>Build AI-native products across text, video, and multimodal use cases</li>
                    <li>Design and implement production-grade AI systems with scalability and cost-awareness in mind</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-primary font-semibold mb-3">Compensation & Benefits</h4>
                  <ul className="space-y-2 list-disc list-outside ml-4 marker:text-primary">
                    <li>Base Salary: ₹10 Lakhs CTC</li>
                    <li>ESOPs: ₹10 Lakhs (accelerated vesting in 2 years)</li>
                    <li>Total Package: ₹20 Lakhs</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t border-border mt-8">
                <Link
                  to="/careers/founding-ai-engineer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-surface border border-border text-primary font-medium hover:bg-white/5 transition-colors w-full sm:w-auto"
                >
                  Know More
                </Link>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf9AuNH57CUgHOZrrhpGyRL2-xHDkPIhPLlVkskdlF3UkORFg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors w-full sm:w-auto"
                >
                  Apply for this Position
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
