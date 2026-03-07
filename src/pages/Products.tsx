import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';

export default function Products() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <section className="flex-grow flex items-center justify-center py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-surface p-12 rounded-3xl shadow-black/50 border border-border"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-background border border-border text-primary mb-8">
              <span className="font-heading font-bold text-2xl">V</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold font-heading text-primary mb-6">
              Products Coming Soon
            </h1>
            
            <p className="text-xl text-secondary mb-10 leading-relaxed">
              We're building the next generation of AI-native products. 
              Stay tuned for announcements.
            </p>

            <div className="max-w-md mx-auto mb-12">
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <div className="relative flex-grow">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white transition-all bg-background text-primary"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors whitespace-nowrap flex items-center justify-center gap-2"
                >
                  Notify Me
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            <div className="text-left border-t border-border pt-8">
              <h3 className="text-sm font-bold text-secondary uppercase tracking-wider mb-4 text-center">
                What we're working on
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Enterprise AI agents',
                  'Workflow automation platforms',
                  'Multi-modal AI tools',
                  'Production AI infrastructure'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-primary font-medium bg-background border border-border p-4 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
