export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <div>
          Built by{' '}
          <a 
            href="https://thefiredev.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            The Fire Dev LLC
          </a>
        </div>
        <div className="flex gap-6">
          <a 
            href="https://github.com/thefiredev-cloud/opsclone" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://thefiredev.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Company
          </a>
        </div>
      </div>
    </footer>
  );
}
