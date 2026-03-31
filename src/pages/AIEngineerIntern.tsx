import { motion } from 'motion/react';
import { ArrowRight, MapPin, Briefcase, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIEngineerIntern() {
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
                                <Briefcase className="w-3.5 h-3.5 mr-1.5" /> Internship
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface border border-border text-xs font-medium text-secondary">
                                <MapPin className="w-3.5 h-3.5 mr-1.5" /> Gurgaon, Onsite
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface border border-border text-xs font-medium text-secondary">
                                <Clock className="w-3.5 h-3.5 mr-1.5" /> 2–6 Months
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-8 text-primary">
                            AI Engineer Intern
                        </h1>
                        <a
                            href="https://forms.gle/uG2VqhGBJyX1NhEt7"
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
                        <h2 className="text-2xl font-bold font-heading text-primary mt-0 mb-6">AI Engineer Intern</h2>
                        <p>
                            This is not a run-of-the-mill internship where you sit on the sidelines. You will be embedded directly within our product pods, working alongside founding AI engineers to build and ship real AI products — across text, video, and multimodal use cases. You will get your hands dirty on production-grade systems from day one.
                        </p>
                        <p>
                            If you are someone who learns by building, this is your environment.
                        </p>

                        <h3 className="text-xl font-bold font-heading text-primary mt-12 mb-6">What You'll Do:</h3>
                        <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                            <li>Assist AI engineers in designing, building, and iterating on AI-powered products</li>
                            <li>Work on agentic AI pipelines, LLM integrations, and multimodal systems</li>
                            <li>Help with AI evaluations, debugging, prompt engineering, and performance analysis</li>
                            <li>Contribute to production deployments and help handle real user feedback loops</li>
                            <li>Support rapid prototyping and experimentation to test product hypotheses</li>
                            <li>Learn and apply best practices around cost optimization, latency, and reliability</li>
                        </ul>

                        <h3 className="text-xl font-bold font-heading text-primary mt-12 mb-6">Who Should Apply:</h3>
                        <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                            <li>B.Tech / B.E. students from any branch and any year</li>
                            <li>Strong interest in AI/ML, with hands-on experience building something — projects, hackathons, open-source contributions, or personal experiments count</li>
                            <li>Comfortable writing clean, working code (Python preferred)</li>
                            <li>Curious, self-driven, and able to operate in an ambiguous early-stage environment</li>
                            <li>Prior exposure to LLMs, AI APIs, or ML frameworks is a strong plus — but not mandatory if you can demonstrate the ability to pick things up fast</li>
                        </ul>

                        <h3 className="text-xl font-bold font-heading text-primary mt-12 mb-6">What's in it for you:</h3>
                        <div className="space-y-4">
                            <p>
                                <strong className="text-primary mr-2">Stipend:</strong>
                                ₹35,000 per month
                            </p>
                            <p>
                                <strong className="text-primary mr-2">PPO Opportunity:</strong>
                                High-performing interns will be considered for a full-time offer as a Founding AI Engineer — with a CTC of ₹10L + ₹10L ESOPs (accelerated 2-year vesting). This is a meaningful path to becoming a core member of the founding team.
                            </p>
                        </div>

                        <h3 className="text-xl font-bold font-heading text-primary mt-12 mb-6">Why This Internship:</h3>
                        <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                            <li>Work directly on products being built for real users — not toy problems</li>
                            <li>Learn from a founder who has built and exited a $100M AI company</li>
                            <li>See the full arc of product development: from idea to GTM</li>
                            <li>Gain the experience that sets the foundation for being a future founder yourself</li>
                        </ul>

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
                            href="https://forms.gle/uG2VqhGBJyX1NhEt7"
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
