import { motion } from 'motion/react';
import { ArrowRight, MapPin, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FoundingAIEngineer() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-background">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_50%)]" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link to="/careers" className="inline-flex items-center text-secondary hover:text-white transition-colors mb-8 text-sm">
                            <ArrowRight className="mr-2 w-4 h-4 rotate-180" />
                            Back to Careers
                        </Link>
                        <div className="flex flex-wrap gap-3 mb-6">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface border border-border text-xs font-medium text-secondary">
                                <Briefcase className="w-3.5 h-3.5 mr-1.5" /> Full-Time
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface border border-border text-xs font-medium text-secondary">
                                <MapPin className="w-3.5 h-3.5 mr-1.5" /> Gurgaon, Onsite
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-8 text-primary">
                            Founding AI Engineer
                        </h1>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSf9AuNH57CUgHOZrrhpGyRL2-xHDkPIhPLlVkskdlF3UkORFg/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors"
                        >
                            Apply for this Position
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-background-alt border-y border-border">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-secondary leading-relaxed space-y-6">
                        <h2 className="text-2xl font-bold font-heading text-primary mt-0 mb-6">Founding AI Engineer</h2>
                        <p>
                            We are a stealth AI-first startup building the next generation high-velocity B2C products. Founded by a second-time founder ($100M exit), we plan to build carefully, market sharply and grow fast.
                        </p>
                        <p>
                            This is not a conventional engineering role. You will be the Chief Product/Technology Officer for your product line, much like a technical founder.
                        </p>
                        <p>
                            You will be a two-people pod owning your AI products, from discovery, product design, to AI algorithms and final production deployment. You will work closely with the founder on strategic direction and decisions. You'll see yourself turning vague ideas into shipped, scalable AI products and fast iteration based on user feedback. In total, you will be part of the VISL AI core team owning and building our first line of products.
                        </p>
                        <p>
                            Excited? To be a tech entrepreneur in a safe environment. This role is for you.
                        </p>

                        <h3 className="text-xl font-bold font-heading text-primary mt-12 mb-6">Responsibilities:</h3>
                        <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                            <li>Work closely with founders to translate ambiguous ideas into clear product and technical direction</li>
                            <li>Act as the CPTO for your product, owning technical vision, execution, and outcomes end-to-end</li>
                            <li>Own an AI product end-to-end, from problem framing to production deployment and iteration</li>
                            <li>Build AI-native products across text, video, and multimodal use cases</li>
                            <li>Build and work with a small team of interns to accelerate product development</li>
                            <li>Design and implement production-grade AI systems with scalability and cost-awareness in mind</li>
                            <li>Iterate rapidly based on real user feedback, improving quality, performance, and reliability</li>
                            <li>Prepare the product for mass deployment, handling scale, latency, and large-user usage patterns</li>
                            <li>Continuously reduce errors and failure cases as the product is used by a growing user base</li>
                        </ul>

                        <h3 className="text-xl font-bold font-heading text-primary mt-12 mb-6">Requirements and Qualifications:</h3>
                        <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                            <li>Degree: Computer Science, Engineering, or a related field (or equivalent demonstrated capability) with high achievement through AI projects, papers and/or core courses achievement. (A degree is not necessary if you are a school kid show high achievement in AI engineering!)</li>
                            <li>0–3 years of experience building AI products (exceptional builders may be considered regardless of experience)</li>
                            <li>Ex-startup founders must apply. This is your second chance to build in a secure environment.</li>
                            <li>Strong interest and experience in building agentic AI systems using SOTA foundational models, fine-tuning and tight orchestration layers.</li>
                            <li>Hands-on experience using LLMs and/or multimodal models to build AI-powered products</li>
                            <li>Understanding of AI evaluations, cost reductions, handling latency and production level issues.</li>
                            <li>Expert-level coding skills with a focus on writing clean, maintainable, and scalable production code</li>
                            <li>Builder mindset with comfort working in high-ambiguity, early-stage environments</li>
                        </ul>

                        <h3 className="text-xl font-bold font-heading text-primary mt-12 mb-6">What's in it for you:</h3>
                        <div className="space-y-4">
                            <p>
                                <strong className="text-primary mr-2">Compensation:</strong>
                                10L CTC + 10L ESOPs (accelerated vesting in 2 years)
                            </p>
                            <p>
                                <strong className="text-primary mr-2">Ownership:</strong>
                                We believe value creators should be value owners. You will receive meaningful equity participation tied to long-term impact.
                            </p>
                            <p>
                                <strong className="text-primary mr-2">Peers:</strong>
                                Work directly with folks who have have built and sold $100M AI product company.
                            </p>
                            <p>
                                <strong className="text-primary mr-2">Entrepreneurial experience:</strong>
                                See full product journey from concept to GTM. Get ready for being a future startup founder.
                            </p>
                        </div>

                        <div className="my-16 border-t border-border"></div>

                        <h3 className="text-xl font-bold font-heading text-primary mt-0 mb-6">Visl AI Labs</h3>
                        <p>
                            Visl AI builds high-velocity, workflow-native agentic AI products that deliver instant user value and drive strong product stickiness. Our systems automate key steps within user workflows, combined with strong user guidance, enabling the creation of high-fidelity assets and production-ready outputs. We focus on building AI that performs consistently beyond demos, with UI/UX at the core of our product strategy. Our stack combines open-source model flexibility, neurosymbolic approaches, production-grade engineering, and rigorous evaluation to ensure reliability at scale. We begin with proprietary IP in long-form video creation, from which our expanding product line spans text, video, and broader multimodal use cases.
                        </p>
                        <p>
                            Visl AI is a bootstrapped stealth mode startup led by Varun Aggarwal. Varun is an entrepreneur (Aspiring Minds, $100M+ exit), AI researcher (1500+ citations) and author (science, deeptech and children's books). He has built AI products for spoken English evaluation, coding skills and others, which are sold globally, and with an ARR of $20M+.
                        </p>

                        <h3 className="text-xl font-bold font-heading text-primary mt-12 mb-6">Invention Engine</h3>
                        <p>
                            Visl AI is incubated at Invention Engine (erstwhile part of Change Engine). Invention Engine is an AI ecosystem builder that runs India's real AI and deeptech startup accelerator – ACE. They partner with founders who are solving hard problems and support them in their journey through their Lab + Accelerator model. Invention Engine is led by Varun Aggarwal. Varun is joined by Shailendra Jha (ISB alum, ex-MMT, nearbuy) and Shubham Bansal (IITD/EPFL alum, YC alum) in the founding team of Invention Engine.
                        </p>
                        <p>
                            In a short period of 2 years, Invention Engine has worked closely with 8 startups in their problem discovery, product development and GTM journeys. They have now gone on to raise a total of $2M+ in follow-on funding. Some notable investments include: Sonic Lamb (Shark Tank S4), Magicroll.ai, Desible.ai, Cheerio.in etc.
                        </p>
                    </div>

                    <div className="mt-16 pt-10 border-t border-border text-center">
                        <h3 className="text-2xl font-bold font-heading mb-8 text-primary">Ready to build the future?</h3>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSf9AuNH57CUgHOZrrhpGyRL2-xHDkPIhPLlVkskdlF3UkORFg/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors"
                        >
                            Apply for this Position
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
