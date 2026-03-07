import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrainCircuit, Layers, Network, Server, Database, Sparkles, Code2, CheckCircle2, ArrowRight } from 'lucide-react';
import { AgenticWorkflowDiagram } from '../components/AgenticWorkflowDiagram';

function WorkflowDiagram() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { id: 0, icon: BrainCircuit, label: 'Intent Parsing', desc: 'Analyzing user request' },
    { id: 1, icon: Network, label: 'Reasoning Engine', desc: 'Formulating plan' },
    { id: 2, icon: Database, label: 'Data Retrieval', desc: 'Fetching context' },
    { id: 3, icon: Sparkles, label: 'Action Generation', desc: 'Executing workflow' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="bg-surface border border-border rounded-2xl p-6 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-border">
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: '0%' }}
          animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      <div className="flex items-center justify-between mb-8 pt-2">
        <div className="flex items-center gap-2 text-sm font-mono text-secondary">
          <Code2 className="w-4 h-4" />
          <span>workflow_execution.ts</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-border" />
          <div className="w-2.5 h-2.5 rounded-full bg-border" />
          <div className="w-2.5 h-2.5 rounded-full bg-border" />
        </div>
      </div>

      <div className="space-y-4 relative">
        {/* Connecting Line */}
        <div className="absolute left-6 top-6 bottom-6 w-px bg-border z-0" />

        {steps.map((step, index) => {
          const isActive = index === activeStep;
          const isPast = index < activeStep;
          
          return (
            <div key={step.id} className="relative z-10 flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                isActive ? 'bg-primary border-primary text-background' : 
                isPast ? 'bg-surface border-primary/50 text-primary' : 
                'bg-background border-border text-secondary'
              }`}>
                {isPast ? <CheckCircle2 className="w-5 h-5" /> : <step.icon className="w-5 h-5" />}
              </div>
              
              <div className={`flex-grow pt-2 transition-opacity duration-300 ${isActive || isPast ? 'opacity-100' : 'opacity-40'}`}>
                <h4 className={`font-bold text-sm mb-1 ${isActive ? 'text-primary' : 'text-secondary'}`}>
                  {step.label}
                </h4>
                <p className="text-xs text-secondary font-mono">
                  {isActive ? (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                    >
                      {step.desc}...
                    </motion.span>
                  ) : isPast ? (
                    <span className="text-green-500">Completed in {Math.floor(Math.random() * 200 + 50)}ms</span>
                  ) : (
                    'Waiting...'
                  )}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Technology() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <section className="py-24 bg-background text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl font-bold font-heading mb-6">
                Advanced AI Systems for <br />
                <span className="text-gradient">Real-World Impact</span>
              </h1>
              <div className="flex flex-wrap gap-3 mt-10">
                {['Agentic AI', 'Multimodal', 'Neurosymbolic', 'Infrastructure'].map((pill) => (
                  <a
                    key={pill}
                    href={`#${pill.toLowerCase().replace(' ', '-')}`}
                    className="px-6 py-2 rounded-full bg-surface border border-border text-sm font-medium hover:bg-surface/80 transition-colors"
                  >
                    {pill}
                  </a>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <WorkflowDiagram />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="agentic-ai" className="py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface border border-border text-primary flex items-center justify-center mb-6">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-bold font-heading text-primary mb-6">Agentic AI</h2>
              <p className="text-secondary text-lg mb-8 leading-relaxed">
                Goal-driven systems that reason through complex workflows, breaking tasks into structured steps and iteratively improving results through autonomous execution loops.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: 'Intent Understanding', desc: 'Natural language goal interpretation and context-aware objective extraction.' },
                  { title: 'Structured Planning', desc: 'Hierarchical task decomposition and dependency management.' },
                  { title: 'Tool Selection & Execution', desc: 'Dynamic tool choosing and API orchestration.' },
                  { title: 'Iterative Improvement', desc: 'Result evaluation, feedback incorporation, and self-correction loops.' }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center text-primary font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{feature.title}</h4>
                      <p className="text-sm text-secondary">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden min-h-[400px] flex items-center justify-center">
              <AgenticWorkflowDiagram />
            </div>
          </div>
        </div>
      </section>

      <section id="multimodal" className="py-24 bg-background-alt border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
              {['Text', 'Images', 'Audio', 'Video', 'Structured Data'].map((modality, i) => (
                <div key={i} className={`bg-surface p-6 rounded-2xl shadow-sm border border-border flex flex-col items-center justify-center text-center gap-3 ${i === 4 ? 'col-span-2' : ''}`}>
                  <Layers className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-primary">{modality}</span>
                </div>
              ))}
            </div>
            <div className="order-1 md:order-2">
              <div className="w-12 h-12 rounded-xl bg-surface border border-border text-primary flex items-center justify-center mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-bold font-heading text-primary mb-6">Multimodal Intelligence</h2>
              <p className="text-secondary text-lg mb-8 leading-relaxed">
                Unified AI systems that process and generate combinations of text, images, audio, video, and structured data across diverse environments.
              </p>
              <ul className="space-y-4">
                {[
                  'Unified embedding space',
                  'Cross-modal reasoning',
                  'Context-aware processing',
                  'Seamless transitions between modalities'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-primary font-medium">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="neurosymbolic" className="py-24 bg-background border-t border-border text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center mb-6">
                <Network className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold font-heading mb-6">Neurosymbolic Systems</h2>
              <p className="text-secondary mb-8 leading-relaxed">
                Hybrid architectures combining neural networks with symbolic reasoning for interpretable, reliable AI capable of logical constraints and deterministic decision-making.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-surface p-6 rounded-xl border border-border">
                  <h4 className="font-bold text-primary mb-3">Neural</h4>
                  <ul className="text-sm text-secondary space-y-2">
                    <li>Pattern recognition</li>
                    <li>Generative capabilities</li>
                    <li>Learned representations</li>
                  </ul>
                </div>
                <div className="bg-surface p-6 rounded-xl border border-border">
                  <h4 className="font-bold text-primary mb-3">Symbolic</h4>
                  <ul className="text-sm text-secondary space-y-2">
                    <li>Logical constraints</li>
                    <li>Structured knowledge</li>
                    <li>Deterministic reasoning</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="infrastructure">
              <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center mb-6">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold font-heading mb-6">Production Infrastructure</h2>
              <p className="text-secondary mb-8 leading-relaxed">
                Scalable systems designed for reliability at scale, with evaluation frameworks, optimized inference, and continuous monitoring for real-world performance.
              </p>
              <ul className="space-y-4">
                {[
                  { title: 'Evaluation Framework', desc: 'Automated testing suites and quality metrics' },
                  { title: 'Scalable Inference', desc: 'Distributed computing and load balancing' },
                  { title: 'Latency Optimization', desc: 'Model quantization and caching strategies' },
                  { title: 'Cost Efficiency', desc: 'Model selection algorithms and batch processing' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-primary">{item.title}</h4>
                      <p className="text-sm text-secondary">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
