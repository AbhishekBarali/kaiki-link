"use client";

import Link from "next/link";
import { useState } from "react";

const PLANS = [
    {
        name: "Free",
        price: "$0",
        period: "forever",
        description: "Perfect for getting started",
        features: [
            { text: "5 links", included: true },
            { text: "3 templates", included: true },
            { text: "Basic analytics", included: true },
            { text: "KAIKI branding", included: true },
            { text: "Unlimited links", included: false },
            { text: "Premium templates", included: false },
            { text: "Custom domain", included: false },
            { text: "Remove branding", included: false },
        ],
        cta: "Get Started Free",
        ctaLink: "/signup",
        popular: false,
    },
    {
        name: "Pro",
        price: "$5",
        period: "/month",
        description: "For creators & businesses",
        features: [
            { text: "Unlimited links", included: true },
            { text: "All templates", included: true },
            { text: "Advanced analytics", included: true },
            { text: "Custom domain", included: true },
            { text: "Remove KAIKI branding", included: true },
            { text: "Priority support", included: true },
            { text: "Custom colors", included: true },
            { text: "Link scheduling", included: true },
        ],
        cta: "Get Pro",
        ctaLink: "/signup",
        popular: true,
    },
    {
        name: "Business",
        price: "$15",
        period: "/month",
        description: "For agencies & teams",
        features: [
            { text: "Everything in Pro", included: true },
            { text: "White-label", included: true },
            { text: "Multiple pages", included: true },
            { text: "Team members", included: true },
            { text: "API access", included: true },
            { text: "Custom CSS", included: true },
            { text: "Dedicated support", included: true },
        ],
        cta: "Contact Sales",
        ctaLink: "/contact",
        popular: false,
    },
];

export default function PricingPage() {
    const [annual, setAnnual] = useState(false);

    return (
        <div className="min-h-screen gradient-mesh">
            {/* Header */}
            <header className="border-b border-[var(--border)] backdrop-blur-lg bg-[var(--background)]/80">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-white font-bold">K</div>
                        <span className="font-semibold">KAIKI Link</span>
                    </Link>
                    <Link href="/signup" className="text-sm gradient-primary text-white px-4 py-2 rounded-lg">
                        Get Started
                    </Link>
                </div>
            </header>

            {/* Main */}
            <main className="max-w-5xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Simple, transparent pricing</h1>
                    <p className="text-[var(--text-muted)] text-lg">Start free, upgrade when you need more</p>
                </div>

                {/* Toggle */}
                <div className="flex items-center justify-center gap-4 mb-12">
                    <span className={annual ? "text-[var(--text-muted)]" : ""}>Monthly</span>
                    <button
                        onClick={() => setAnnual(!annual)}
                        className={`w-12 h-6 rounded-full transition-colors ${annual ? "bg-[var(--primary)]" : "bg-[var(--border)]"}`}
                    >
                        <div className={`w-5 h-5 rounded-full bg-white mx-0.5 transition-transform ${annual ? "translate-x-6" : ""}`} />
                    </button>
                    <span className={!annual ? "text-[var(--text-muted)]" : ""}>
                        Annual <span className="text-[var(--success)] text-sm">Save 20%</span>
                    </span>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {PLANS.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative rounded-2xl p-6 border bg-[var(--surface)] ${plan.popular ? "border-[var(--primary)] shadow-lg shadow-[var(--primary)]/20" : "border-[var(--border)]"
                                }`}
                        >
                            {plan.popular && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 gradient-primary text-white text-xs font-semibold rounded-full">
                                    Most Popular
                                </span>
                            )}

                            <div className="mb-4">
                                <h3 className="text-xl font-semibold">{plan.name}</h3>
                                <p className="text-sm text-[var(--text-muted)]">{plan.description}</p>
                            </div>

                            <div className="mb-6">
                                <span className="text-4xl font-bold">
                                    {annual && plan.price !== "$0" ? `$${parseInt(plan.price.slice(1)) * 0.8}` : plan.price}
                                </span>
                                <span className="text-[var(--text-muted)]">{plan.period}</span>
                            </div>

                            <Link
                                href={plan.ctaLink}
                                className={`block w-full py-3 text-center font-medium rounded-lg transition-all mb-6 ${plan.popular
                                        ? "gradient-primary text-white"
                                        : "border border-[var(--border)] hover:border-[var(--primary)]"
                                    }`}
                            >
                                {plan.cta}
                            </Link>

                            <ul className="space-y-3">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm">
                                        <span className={feature.included ? "text-[var(--success)]" : "text-[var(--text-dim)]"}>
                                            {feature.included ? "✓" : "×"}
                                        </span>
                                        <span className={feature.included ? "" : "text-[var(--text-dim)]"}>{feature.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* FAQ */}
                <div className="mt-20 max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-8">FAQ</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Can I cancel anytime?", a: "Yes! Cancel anytime, no questions asked." },
                            { q: "Is there a free trial?", a: "The Free plan is free forever. Try Pro risk-free with our 30-day money-back guarantee." },
                            { q: "Can I use my own domain?", a: "Yes, Pro and Business plans support custom domains." },
                            { q: "What payment methods do you accept?", a: "Credit cards, PayPal, and more via Paddle." },
                        ].map((faq, i) => (
                            <div key={i} className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                                <h4 className="font-medium mb-1">{faq.q}</h4>
                                <p className="text-sm text-[var(--text-muted)]">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-[var(--border)] py-6 px-6 mt-16">
                <div className="max-w-6xl mx-auto flex items-center justify-between text-sm">
                    <span className="text-[var(--text-dim)]">© 2026 KAIKI Link</span>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-[var(--text-muted)] hover:text-white">Privacy</Link>
                        <Link href="/terms" className="text-[var(--text-muted)] hover:text-white">Terms</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
