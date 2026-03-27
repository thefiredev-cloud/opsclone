export default function CTA() {
  return (
    <section id="cta" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Clone Your Best <span className="text-accent">Operator?</span>
        </h2>
        <p className="text-xl text-slate-400 mb-10">
          Join the waitlist and be first to access OpsClone when it launches.
        </p>
        <form 
          action="https://formsubmit.co/tanner@thefiredev.com" 
          method="POST"
          className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="flex-1 px-6 py-3 rounded-lg glass text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input type="hidden" name="_subject" value="OpsClone Waitlist Signup" />
          <input type="hidden" name="_captcha" value="false" />
          <button
            type="submit"
            className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            Join Waitlist
          </button>
        </form>
      </div>
    </section>
  );
}
