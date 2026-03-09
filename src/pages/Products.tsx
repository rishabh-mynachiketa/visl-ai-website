import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';

export default function Products() {
  return (
    <div className="products-style-1">
      <section className="products-style-2">
        <div className="products-style-3" />
        <div className="products-style-4" />

        <div className="products-style-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="products-style-6"
          >
            <div className="products-style-7">
              <span className="products-style-8">V</span>
            </div>
            
            <h1 className="products-style-9">
              Products Coming Soon
            </h1>
            
            <p className="products-style-10">
              We're building the next generation of AI-native products. 
              Stay tuned for announcements.
            </p>

            <div className="products-style-11">
              <form className="products-style-12" onSubmit={(e) => e.preventDefault()}>
                <div className="products-style-13">
                  <Mail className="products-style-14" />
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="products-style-15"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="products-style-16"
                >
                  Notify Me
                  <ArrowRight className="products-style-17" />
                </button>
              </form>
            </div>

            <div className="products-style-18">
              <h3 className="products-style-19">
                What we're working on
              </h3>
              <div className="products-style-20">
                {[
                  'Enterprise AI agents',
                  'Workflow automation platforms',
                  'Multi-modal AI tools',
                  'Production AI infrastructure'
                ].map((item, i) => (
                  <div key={i} className="products-style-21">
                    <div className="products-style-22" />
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
