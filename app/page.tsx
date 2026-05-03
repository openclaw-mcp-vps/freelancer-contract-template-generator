export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Legal Contracts
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Freelance Contracts That Are{" "}
          <span className="text-[#58a6ff]">State-Compliant</span> &amp; Ready in Seconds
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Input your project details and get a fully customized contract with state-specific clauses, payment terms, and automatic legal compliance — no lawyer required.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-200"
        >
          Get Started for $7/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. Instant access after payment.</p>
      </section>

      {/* Features strip */}
      <section className="border-y border-[#21262d] bg-[#161b22] py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">50+ States</div>
            <div className="text-sm text-[#8b949e]">State-specific legal clauses auto-applied</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">10+ Contract Types</div>
            <div className="text-sm text-[#8b949e]">Dev, design, writing, consulting &amp; more</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">&lt; 60 Seconds</div>
            <div className="text-sm text-[#8b949e]">From project details to signed-ready PDF</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included.</p>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8">
          <div className="text-4xl font-extrabold text-white mb-1">$7<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] text-sm mb-6">Billed monthly. Cancel anytime.</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited contract generation",
              "AI-powered custom clauses",
              "All 50 US states compliance",
              "PDF &amp; DOCX export",
              "Payment terms &amp; milestone templates",
              "Priority email support"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#3fb950] font-bold">&#10003;</span>
                <span dangerouslySetInnerHTML={{ __html: feature }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base py-3 rounded-lg transition-colors duration-200 text-center"
          >
            Start Generating Contracts
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Are the contracts legally binding?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Our AI generates contracts based on real legal frameworks and state-specific statutes. We recommend having a lawyer review for high-value engagements, but for most freelance work they are ready to use.</p>
          </div>
          <div className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which states and contract types are supported?</h3>
            <p className="text-sm text-[#8b949e]">All 50 US states are supported. Contract types include software development, graphic design, copywriting, consulting, photography, marketing, and more.</p>
          </div>
          <div className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription at any time?</h3>
            <p className="text-sm text-[#8b949e]">Absolutely. Cancel with one click from your billing portal. You keep access until the end of your billing period with no hidden fees.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} ContractForge. Not a law firm. For informational purposes only.
      </footer>
    </main>
  );
}
