import { motion } from 'motion/react';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold font-heading text-primary mb-6">
                Let's Build the <br />
                <span className="text-gradient">Future Together</span>
              </h1>
              <p className="text-xl text-secondary mb-12 leading-relaxed max-w-md">
                Whether you're looking to partner, join our team, or learn more about our technology, we'd love to hear from you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface border border-border text-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-primary mb-1">Email Us</h3>
                    <div className="space-y-2 text-secondary">
                      <p><span className="font-medium text-primary">General:</span> hello@visl.ai</p>
                      <p><span className="font-medium text-primary">Partnerships:</span> partners@visl.ai</p>
                      <p><span className="font-medium text-primary">Careers:</span> careers@visl.ai</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface border border-border text-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-primary mb-1">Office</h3>
                    <p className="text-secondary leading-relaxed">
                      91Springboard 21B, Udyog Vihar Phase 4,<br />
                      Gurgaon, Haryana 122015<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-surface p-8 sm:p-10 rounded-3xl border border-border shadow-sm"
            >
              <h3 className="text-2xl font-bold font-heading text-primary mb-6">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-secondary">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white transition-all bg-background text-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-secondary">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white transition-all bg-background text-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-secondary">Company (Optional)</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white transition-all bg-background text-primary"
                    placeholder="Your Company"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-secondary">Subject</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white transition-all bg-background text-primary"
                  >
                    <option>General Inquiry</option>
                    <option>Partnership</option>
                    <option>Careers</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-secondary">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white transition-all bg-background text-primary resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
