import dynamic from 'next/dynamic';

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false });

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Clone Your Best <span className="text-accent">Operator</span>
          </h1>
          <p className="text-xl text-slate-400">
            AI that watches how your top performer works, then replicates their decisions across your entire operation.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="glass p-4 rounded-lg">
              <div className="text-2xl font-bold text-accent">10,000+</div>
              <div className="text-sm text-slate-400">Decisions/day</div>
            </div>
            <div className="glass p-4 rounded-lg">
              <div className="text-2xl font-bold text-accent">94%</div>
              <div className="text-sm text-slate-400">Accuracy rate</div>
            </div>
            <div className="glass p-4 rounded-lg">
              <div className="text-2xl font-bold text-accent">3x</div>
              <div className="text-sm text-slate-400">Team output</div>
            </div>
            <div className="glass p-4 rounded-lg">
              <div className="text-2xl font-bold text-accent">48hr</div>
              <div className="text-sm text-slate-400">Onboarding</div>
            </div>
          </div>
        </div>
        <div className="h-[500px] relative">
          <Scene3D />
        </div>
      </div>
    </section>
  );
}
