export default function Features() {
  const features = [
    {
      title: 'Decision Capture',
      description: 'AI observes every decision your best operator makes, understanding context, timing, and reasoning patterns.',
    },
    {
      title: 'Pattern Replication',
      description: 'Complex decision-making patterns are encoded and made available to your entire team instantly.',
    },
    {
      title: 'Continuous Learning',
      description: 'The system adapts and improves as it processes more decisions, becoming smarter over time.',
    },
    {
      title: 'Team Scaling',
      description: 'Scale your best operator\'s expertise across unlimited team members without quality loss.',
    },
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          How <span className="text-accent">OpsClone</span> Works
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="glass p-6 rounded-lg hover:bg-accent/10 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-3 text-accent">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
