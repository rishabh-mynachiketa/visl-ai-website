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
    <div className="technology-style-1">
      <div className="technology-style-2">
        <motion.div 
          className="technology-style-3"
          initial={{ width: '0%' }}
          animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      <div className="technology-style-4">
        <div className="technology-style-5">
          <Code2 className="technology-style-6" />
          <span>workflow_execution.ts</span>
        </div>
        <div className="technology-style-7">
          <div className="technology-style-8" />
          <div className="technology-style-9" />
          <div className="technology-style-10" />
        </div>
      </div>

      <div className="technology-style-11">
        {/* Connecting Line */}
        <div className="technology-style-12" />

        {steps.map((step, index) => {
          const isActive = index === activeStep;
          const isPast = index < activeStep;
          
          return (
            <div key={step.id} className="technology-style-13">
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                isActive ? 'bg-primary border-primary text-background' : 
                isPast ? 'bg-surface border-primary/50 text-primary' : 
                'bg-background border-border text-secondary'
              }`}>
                {isPast ? <CheckCircle2 className="technology-style-14" /> : <step.icon className="technology-style-15" />}
              </div>
              
              <div className={`flex-grow pt-2 transition-opacity duration-300 ${isActive || isPast ? 'opacity-100' : 'opacity-40'}`}>
                <h4 className={`font-bold text-sm mb-1 ${isActive ? 'text-primary' : 'text-secondary'}`}>
                  {step.label}
                </h4>
                <p className="technology-style-16">
                  {isActive ? (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                    >
                      {step.desc}...
                    </motion.span>
                  ) : isPast ? (
                    <span className="technology-style-17">Completed in {Math.floor(Math.random() * 200 + 50)}ms</span>
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
    <div className="technology-style-18">
      <section className="technology-style-19">
        <div className="technology-style-20">
          <div className="technology-style-21">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="technology-style-22">
                Advanced AI Systems for <br />
                <span className="text-gradient">Real-World Impact</span>
              </h1>
              <div className="technology-style-23">
                {['Agentic AI', 'Multimodal', 'Neurosymbolic', 'Infrastructure'].map((pill) => (
                  <a
                    key={pill}
                    href={`#${pill.toLowerCase().replace(' ', '-')}`}
                    className="technology-style-24"
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

      <section id="agentic-ai" className="technology-style-25">
        <div className="technology-style-26">
          <div className="technology-style-27">
            <div>
              <div className="technology-style-28">
                <BrainCircuit className="technology-style-29" />
              </div>
              <h2 className="technology-style-30">Agentic AI</h2>
              <p className="technology-style-31">
                Goal-driven systems that reason through complex workflows, breaking tasks into structured steps and iteratively improving results through autonomous execution loops.
              </p>
              
              <div className="technology-style-32">
                {[
                  { title: 'Intent Understanding', desc: 'Natural language goal interpretation and context-aware objective extraction.' },
                  { title: 'Structured Planning', desc: 'Hierarchical task decomposition and dependency management.' },
                  { title: 'Tool Selection & Execution', desc: 'Dynamic tool choosing and API orchestration.' },
                  { title: 'Iterative Improvement', desc: 'Result evaluation, feedback incorporation, and self-correction loops.' }
                ].map((feature, i) => (
                  <div key={i} className="technology-style-33">
                    <div className="technology-style-34">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="technology-style-35">{feature.title}</h4>
                      <p className="technology-style-36">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="technology-style-37">
              <AgenticWorkflowDiagram />
            </div>
          </div>
        </div>
      </section>

      <section id="multimodal" className="technology-style-38">
        <div className="technology-style-39">
          <div className="technology-style-40">
            <div className="technology-style-41">
              {['Text', 'Images', 'Audio', 'Video', 'Structured Data'].map((modality, i) => (
                <div key={i} className={`bg-surface p-6 rounded-2xl shadow-sm border border-border flex flex-col items-center justify-center text-center gap-3 ${i === 4 ? 'col-span-2' : ''}`}>
                  <Layers className="technology-style-42" />
                  <span className="technology-style-43">{modality}</span>
                </div>
              ))}
            </div>
            <div className="technology-style-44">
              <div className="technology-style-45">
                <Layers className="technology-style-46" />
              </div>
              <h2 className="technology-style-47">Multimodal Intelligence</h2>
              <p className="technology-style-48">
                Unified AI systems that process and generate combinations of text, images, audio, video, and structured data across diverse environments.
              </p>
              <ul className="technology-style-49">
                {[
                  'Unified embedding space',
                  'Cross-modal reasoning',
                  'Context-aware processing',
                  'Seamless transitions between modalities'
                ].map((item, i) => (
                  <li key={i} className="technology-style-50">
                    <div className="technology-style-51" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="neurosymbolic" className="technology-style-52">
        <div className="technology-style-53">
          <div className="technology-style-54">
            <div>
              <div className="technology-style-55">
                <Network className="technology-style-56" />
              </div>
              <h2 className="technology-style-57">Neurosymbolic Systems</h2>
              <p className="technology-style-58">
                Hybrid architectures combining neural networks with symbolic reasoning for interpretable, reliable AI capable of logical constraints and deterministic decision-making.
              </p>
              <div className="technology-style-59">
                <div className="technology-style-60">
                  <h4 className="technology-style-61">Neural</h4>
                  <ul className="technology-style-62">
                    <li>Pattern recognition</li>
                    <li>Generative capabilities</li>
                    <li>Learned representations</li>
                  </ul>
                </div>
                <div className="technology-style-63">
                  <h4 className="technology-style-64">Symbolic</h4>
                  <ul className="technology-style-65">
                    <li>Logical constraints</li>
                    <li>Structured knowledge</li>
                    <li>Deterministic reasoning</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="infrastructure">
              <div className="technology-style-66">
                <Server className="technology-style-67" />
              </div>
              <h2 className="technology-style-68">Production Infrastructure</h2>
              <p className="technology-style-69">
                Scalable systems designed for reliability at scale, with evaluation frameworks, optimized inference, and continuous monitoring for real-world performance.
              </p>
              <ul className="technology-style-70">
                {[
                  { title: 'Evaluation Framework', desc: 'Automated testing suites and quality metrics' },
                  { title: 'Scalable Inference', desc: 'Distributed computing and load balancing' },
                  { title: 'Latency Optimization', desc: 'Model quantization and caching strategies' },
                  { title: 'Cost Efficiency', desc: 'Model selection algorithms and batch processing' }
                ].map((item, i) => (
                  <li key={i} className="technology-style-71">
                    <div className="technology-style-72" />
                    <div>
                      <h4 className="technology-style-73">{item.title}</h4>
                      <p className="technology-style-74">{item.desc}</p>
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
