import { motion } from 'motion/react';
import { ArrowRight, MapPin, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductStrategy() {
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
                            Product Strategy — Founders' Office
                        </h1>
                        <a
                            href="https://forms.gle/AETptDc1NvYQjVBp6"
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
                        <h2 className="text-2xl font-bold font-heading text-primary mt-0 mb-6">The Opportunity</h2>
                        <p>
                            We are a stealth AI-first startup building the next generation high-velocity B2C products. Founded by a second-time founder ($100M exit), we plan to build carefully, market sharply and grow fast.
                        </p>
                        <p>
                            This is not a conventional strategy or product role. We are looking for a strategic partner to the CEO to take a product from a blank page to a sharp product thesis, execution roadmap, and GTM engine.
                        </p>
                        <p>
                            You will be part of the highest decision-making work directly with the founders at the intersection of product intelligence, market strategy, and business design, shaping new product bets from first principles.
                        </p>

                        <h3 className="text-xl font-bold font-heading text-primary mt-12 mb-6">Your Mission</h3>

                        <h4 className="text-lg font-bold font-heading text-primary mt-8 mb-4">1. Product Strategy & Gap Analysis</h4>
                        <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                            <li><strong className="text-primary">Market Intelligence:</strong> Deep-dive into specific AI domains to map the competitive landscape and identify meaningful opportunities.</li>
                            <li><strong className="text-primary">Gap Identification:</strong> Analyze existing product shortcomings and user pain points to identify "white spaces."</li>
                            <li><strong className="text-primary">Evaluation:</strong> Develop structured pros/cons frameworks and drive Go / No-Go decisions for new product and feature launches.</li>
                            <li><strong className="text-primary">Ideation:</strong> Build product definition, features, and roadmap.</li>
                        </ul>

                        <h4 className="text-lg font-bold font-heading text-primary mt-8 mb-4">2. GTM Strategy Development</h4>
                        <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                            <li><strong className="text-primary">Business Model:</strong> Define the right business and pricing model (short-term and long-term).</li>
                            <li><strong className="text-primary">Growth Hacking:</strong> Architect creative, resource-efficient paths to initial adoption (first 1,000 users / first revenue milestones) and scale growth strategies.</li>
                            <li><strong className="text-primary">Retention Strategy:</strong> Identify strategies to retain customers.</li>
                            <li><strong className="text-primary">Cross-Functional Execution:</strong> Work across product, growth, and operations to convert strategic ideas into shipped outcomes.</li>
                        </ul>

                        <h3 className="text-xl font-bold font-heading text-primary mt-12 mb-6">Who You Are</h3>
                        <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                            <li>1–3 years of experience in product strategy, founders' office, early-stage startups, management consulting, growth/GTM, or similar roles.</li>
                            <li>Ex-startup founders must apply. This is your second chance to build in a secure environment.</li>
                            <li>First-principles thinker with the ability to identify where the "moat" should be built in crowded markets.</li>
                            <li>Strategic builder who thinks like an operator, not an observer.</li>
                            <li>Strong curiosity for AI products, use cases, and evolving tech landscapes.</li>
                            <li>Prefers execution dashboards over slide decks.</li>
                            <li>Comfortable with ambiguity and ownership in early-stage environments.</li>
                        </ul>

                        <h3 className="text-xl font-bold font-heading text-primary mt-12 mb-6">What's in it for you:</h3>
                        <div className="space-y-4">
                            <p>
                                <strong className="text-primary mr-2">Compensation:</strong>
                                10L CTC + 10L ESOPs (accelerated vesting in 2 years)
                            </p>
                            <p>
                                <strong className="text-primary mr-2">Ownership:</strong>
                                Meaningful equity tied to long-term impact.
                            </p>
                            <p>
                                <strong className="text-primary mr-2">Peers:</strong>
                                Work with leaders who have built and sold a $100M AI company.
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
                            href="https://forms.gle/AETptDc1NvYQjVBp6"
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
