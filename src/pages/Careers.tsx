import { motion } from 'motion/react';
import { ArrowRight, Code, Rocket, Shield } from 'lucide-react';

export default function Careers() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <section className="relative py-24 bg-background text-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-surface" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-secondary font-semibold tracking-wider uppercase text-sm mb-4">Join The Team</p>
            <h1 className="text-5xl sm:text-6xl font-bold font-heading mb-6">
              Build the Future of <br className="hidden sm:block" />
              <span className="text-gradient">Autonomous AI</span>
            </h1>
            <p className="text-xl text-secondary mb-10 max-w-3xl mx-auto leading-relaxed">
              Join a team of exceptional builders creating the next generation 
              of agentic AI systems. Work directly with experienced founders, 
              own products end-to-end, and shape the future of intelligent software.
            </p>
            <a
              href="#open-positions"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors"
            >
              View Open Positions
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
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
                className="bg-surface p-8 rounded-2xl shadow-sm border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-background border border-border text-primary flex items-center justify-center mb-6">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-4 text-primary">{card.title}</h3>
                <p className="text-secondary text-sm leading-relaxed mb-6">{card.desc}</p>
                <ul className="space-y-2">
                  {card.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-secondary">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
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
            <p className="text-secondary text-lg">Join us in Gurgaon to build the next generation of AI.</p>
          </div>

          <div className="bg-surface rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="p-6 sm:p-8 border-b border-border">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <h3 className="text-2xl font-bold font-heading text-primary">Founding AI Engineer</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-background border border-border text-primary text-xs font-medium">Full-Time</span>
                  <span className="px-3 py-1 rounded-full bg-background border border-border text-primary text-xs font-medium">Onsite (Gurgaon)</span>
                  <span className="px-3 py-1 rounded-full bg-background border border-border text-primary text-xs font-medium">0-3 years</span>
                </div>
              </div>
              <p className="text-secondary mb-6 italic">
                "Act as the CPTO for your product line. Own AI products from discovery to deployment."
              </p>
              
              <div className="prose prose-sm max-w-none text-secondary space-y-6">
                <div>
                  <h4 className="text-primary font-semibold text-base mb-2">Role Overview</h4>
                  <p>
                    This is not a conventional engineering role. You will be the Chief Product/Technology Officer for your product line, much like a technical founder. You will be a two-people pod owning your AI products, from discovery, product design, to AI algorithms and final production deployment.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-primary font-semibold text-base mb-2">Key Responsibilities</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Work closely with founders to translate ambiguous ideas into clear product and technical direction</li>
                    <li>Act as the CPTO for your product, owning technical vision, execution, and outcomes end-to-end</li>
                    <li>Build AI-native products across text, video, and multimodal use cases</li>
                    <li>Design and implement production-grade AI systems with scalability and cost-awareness in mind</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-primary font-semibold text-base mb-2">Compensation & Benefits</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Base Salary: ₹10 Lakhs CTC</li>
                    <li>ESOPs: ₹10 Lakhs (accelerated vesting in 2 years)</li>
                    <li>Total Package: ₹20 Lakhs</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf9AuNH57CUgHOZrrhpGyRL2-xHDkPIhPLlVkskdlF3UkORFg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors"
                >
                  Apply for this Position
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
