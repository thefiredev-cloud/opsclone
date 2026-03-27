export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Observe',
      description: 'AI shadows your top operator, capturing every decision and action in real-time.',
    },
    {
      number: '02',
      title: 'Extract',
      description: 'Decision patterns are mapped and encoded into a replicable knowledge system.',
    },
    {
      number: '03',
      title: 'Replicate',
      description: 'Every team member runs the same playbook, executing with expert-level precision.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 bg-[#0d0d14]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Three Steps to <span className="text-accent">Operational Excellence</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="text-6xl font-bold text-accent/20 mb-4">{step.number}</div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-slate-400">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 right-0 w-12 h-0.5 bg-accent/30 translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
