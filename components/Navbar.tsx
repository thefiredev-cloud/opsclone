export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-accent">OpsClone</div>
        <div className="hidden md:flex gap-8 text-sm text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          <a href="#cta" className="hover:text-white transition-colors">Get Started</a>
        </div>
        <a 
          href="https://github.com/thefiredev-cloud/opsclone" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}
