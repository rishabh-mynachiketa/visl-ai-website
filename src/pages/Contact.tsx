import { motion } from 'motion/react';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="contact-style-1">
      <section className="contact-style-2">
        <div className="contact-style-3">
          <div className="contact-style-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="contact-style-5">
                Let's Build the <br />
                <span className="text-gradient">Future Together</span>
              </h1>
              <p className="contact-style-6">
                Whether you're looking to partner, join our team, or learn more about our technology, we'd love to hear from you.
              </p>

              <div className="contact-style-7">
                <div className="contact-style-8">
                  <div className="contact-style-9">
                    <Mail className="contact-style-10" />
                  </div>
                  <div>
                    <h3 className="contact-style-11">Email Us</h3>
                    <div className="contact-style-12">
                      <p><span className="contact-style-13">General:</span> hello@visl.ai</p>
                      <p><span className="contact-style-14">Partnerships:</span> partners@visl.ai</p>
                      <p><span className="contact-style-15">Careers:</span> careers@visl.ai</p>
                    </div>
                  </div>
                </div>

                <div className="contact-style-16">
                  <div className="contact-style-17">
                    <MapPin className="contact-style-18" />
                  </div>
                  <div>
                    <h3 className="contact-style-19">Office</h3>
                    <p className="contact-style-20">
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
              className="contact-style-21"
            >
              <h3 className="contact-style-22">Send a Message</h3>
              <form className="contact-style-23" onSubmit={(e) => e.preventDefault()}>
                <div className="contact-style-24">
                  <div className="contact-style-25">
                    <label htmlFor="name" className="contact-style-26">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="contact-style-27"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="contact-style-28">
                    <label htmlFor="email" className="contact-style-29">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="contact-style-30"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="contact-style-31">
                  <label htmlFor="company" className="contact-style-32">Company (Optional)</label>
                  <input
                    type="text"
                    id="company"
                    className="contact-style-33"
                    placeholder="Your Company"
                  />
                </div>

                <div className="contact-style-34">
                  <label htmlFor="subject" className="contact-style-35">Subject</label>
                  <select
                    id="subject"
                    className="contact-style-36"
                  >
                    <option>General Inquiry</option>
                    <option>Partnership</option>
                    <option>Careers</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="contact-style-37">
                  <label htmlFor="message" className="contact-style-38">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="contact-style-39"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="contact-style-40"
                >
                  Send Message
                  <Send className="contact-style-41" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
