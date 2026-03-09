import { Link } from 'react-router-dom';

import vislLogo from '../visl_logo_transparent.png';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border text-primary pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={vislLogo} alt="VISL AI Logo" className="w-8 h-8 object-contain" />
              <span className="font-heading font-bold text-xl tracking-tight">
                VISL AI
              </span>
            </Link>
            <p className="text-secondary text-sm leading-relaxed mb-6">
              Building the next generation of autonomous AI systems.
              AI-native software that understands goals, reasons through complexity,
              and autonomously executes complete workflows.
            </p>
          </div>



          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-secondary hover:text-primary transition-colors text-sm">Blog (Coming Soon)</Link></li>
              <li><Link to="#" className="text-secondary hover:text-primary transition-colors text-sm">Docs (Coming Soon)</Link></li>
              <li><Link to="/careers" className="text-secondary hover:text-primary transition-colors text-sm">Careers</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary text-sm">
            © {new Date().getFullYear()} VISL AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-secondary hover:text-primary transition-colors text-sm">Privacy Policy</Link>
            <Link to="#" className="text-secondary hover:text-primary transition-colors text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
