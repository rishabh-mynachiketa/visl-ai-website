import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Network, Wrench, CheckCircle, RefreshCw, User } from 'lucide-react';

const nodes = [
  { id: 0, title: 'Intent Understanding', desc: 'Natural language goal interpretation and context-aware objective extraction.', icon: Brain },
  { id: 1, title: 'Structured Planning', desc: 'Hierarchical task decomposition and dependency management.', icon: Network },
  { id: 2, title: 'Tool Selection & Execution', desc: 'Dynamic API orchestration and interaction with external systems.', icon: Wrench },
  { id: 3, title: 'Result Evaluation', desc: 'Output validation, scoring, and reasoning verification.', icon: CheckCircle },
  { id: 4, title: 'Iterative Improvement', desc: 'Feedback-driven refinement that improves the result and loops back into planning.', icon: RefreshCw },
];

export function AgenticWorkflowDiagram() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [animatingStep, setAnimatingStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatingStep((prev) => (prev + 1) % 5);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const center = { x: 200, y: 220 };
  const radius = 120;
  const nodeRadius = 32;

  const getCoordinates = (index: number) => {
    const angle = (index * 72 - 90) * (Math.PI / 180);
    return {
      x: center.x + radius * Math.cos(angle),
      y: center.y + radius * Math.sin(angle)
    };
  };

  const getArrowPath = (i1: number, i2: number, isCurve = false) => {
    const p1 = getCoordinates(i1);
    const p2 = getCoordinates(i2);
    
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const angle = Math.atan2(dy, dx);
    
    const startX = p1.x + nodeRadius * Math.cos(angle);
    const startY = p1.y + nodeRadius * Math.sin(angle);
    const endX = p2.x - nodeRadius * Math.cos(angle);
    const endY = p2.y - nodeRadius * Math.sin(angle);

    if (isCurve) {
      const midX = (startX + endX) / 2;
      const midY = (startY + endY) / 2;
      // offset control point to make it curve inside the circle
      const cpX = midX;
      const cpY = midY - 60; 
      return `M ${startX} ${startY} Q ${cpX} ${cpY} ${endX} ${endY}`;
    }

    return `M ${startX} ${startY} L ${endX} ${endY}`;
  };

  return (
    <div className="relative w-full max-w-[500px] aspect-square mx-auto flex items-center justify-center bg-surface/50 rounded-3xl border border-border shadow-sm p-4">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" className="text-border" />
          </marker>
          <marker id="arrowhead-active" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" className="text-primary" />
          </marker>
        </defs>

        {/* User Goal Arrow */}
        <g>
          <path
            d="M 200 40 L 200 65"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-border"
            markerEnd="url(#arrowhead)"
            strokeDasharray="4 4"
          />
          {animatingStep === 0 && (
            <motion.path
              d="M 200 40 L 200 65"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
              markerEnd="url(#arrowhead-active)"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          )}
        </g>

        {/* Draw paths between nodes */}
        {[0, 1, 2, 3, 4].map((i) => {
          const nextI = i === 4 ? 1 : i + 1; // 4 loops to 1, others to i+1
          const isCurve = i === 4;
          const isActive = animatingStep === i;
          
          return (
            <g key={`path-${i}`}>
              <motion.path
                d={getArrowPath(i, nextI, isCurve)}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-border"
                markerEnd="url(#arrowhead)"
                strokeDasharray={isCurve ? "4 4" : "none"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.2 + 0.5, duration: 0.5 }}
              />
              {isCurve && (
                 <motion.path
                  d={getArrowPath(i, nextI, isCurve)}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary/30"
                  strokeDasharray="4 4"
                  animate={{ opacity: [0.2, 0.8, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
              {isActive && (
                <motion.path
                  d={getArrowPath(i, nextI, isCurve)}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary"
                  markerEnd="url(#arrowhead-active)"
                  strokeDasharray={isCurve ? "4 4" : "none"}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              )}
            </g>
          );
        })}
      </svg>

      {/* User Goal Label */}
      <motion.div 
        className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-secondary">
          <User className="w-4 h-4" />
        </div>
        <span className="text-xs font-bold text-secondary uppercase tracking-wider">User Goal</span>
      </motion.div>

      {/* Nodes */}
      {nodes.map((node, i) => {
        const { x, y } = getCoordinates(i);
        const isActive = animatingStep === i;
        const isHovered = hoveredNode === i;
        const isClicked = activeNode === i;

        return (
          <div
            key={node.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${(x / 400) * 100}%`, top: `${(y / 400) * 100}%` }}
            onMouseEnter={() => setHoveredNode(i)}
            onMouseLeave={() => setHoveredNode(null)}
            onClick={() => setActiveNode(isClicked ? null : i)}
          >
            <motion.div
              className={`relative w-16 h-16 rounded-2xl border flex items-center justify-center cursor-pointer transition-colors duration-300 z-10 ${
                isActive || isHovered || isClicked
                  ? 'bg-surface border-primary text-primary shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                  : 'bg-background border-border text-secondary'
              }`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: isActive ? 1.05 : 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ 
                opacity: { delay: i * 0.2, duration: 0.5 },
                scale: { delay: i * 0.2, duration: 0.5, type: 'spring' }
              }}
            >
              <node.icon className="w-6 h-6" />
            </motion.div>

            {/* Tooltip / Info Panel */}
            <AnimatePresence>
              {(isHovered || isClicked) && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-background border border-border p-4 rounded-xl shadow-2xl z-50 pointer-events-none"
                >
                  <h4 className="text-sm font-bold text-primary mb-2">{node.title}</h4>
                  <p className="text-xs text-secondary leading-relaxed">{node.desc}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
      
      {/* Center Label */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-10">
        <div className="text-center opacity-50">
          <div className="text-xs font-bold tracking-widest text-secondary uppercase mb-1">Reasoning<br/>Loop</div>
        </div>
      </div>
    </div>
  );
}
