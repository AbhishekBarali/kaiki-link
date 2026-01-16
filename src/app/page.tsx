"use client";

import Link from "next/link";
import { HeroLanding } from "@/components/ui/hero-1";
import type { HeroLandingProps } from "@/components/ui/hero-1";

export default function Home() {
    // KAIKI Link customized hero props
    const heroProps: HeroLandingProps = {
        // Logo and branding
        logo: {
            src: "/kaiki-logo.svg",
            alt: "KAIKI Link Logo",
            companyName: "KAIKI Link"
        },

        // Navigation
        navigation: [
            { name: 'Features', href: '#features' },
            { name: 'Templates', href: '#templates' },
            { name: 'Pricing', href: '/pricing' },
        ],
        loginText: "Log in",
        loginHref: "/login",

        // Hero content
        title: "One link for everything you share",
        description: "Create a beautiful link-in-bio page in seconds. Share your links, socials, and content with one simple URL.",

        // Announcement banner
        announcementBanner: {
            text: "✨ Now free forever",
            linkText: "No credit card required",
            linkHref: "/signup"
        },

        // Call to action buttons
        callToActions: [
            {
                text: "Get Started Free",
                href: "/signup",
                variant: "primary"
            },
            {
                text: "View Demo",
                href: "/demo",
                variant: "secondary"
            }
        ],

        // Styling options - KAIKI purple/indigo gradient
        titleSize: "large",
        gradientColors: {
            from: "oklch(0.646 0.222 264)", // Indigo
            to: "oklch(0.6 0.2 280)"        // Purple
        },

        // Additional customization
        className: ""
    };

    return (
        <>
            {/* Hero Section with gradient background */}
            <HeroLanding {...heroProps} />

            {/* Features Section */}
            <section id="features" className="py-20 px-6 bg-[var(--background)]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-purple-400">stand out</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: "🎨", title: "Beautiful Templates", desc: "Stand out with premium designs that match your style" },
                            { icon: "📊", title: "Detailed Analytics", desc: "Track views, clicks, and engagement in real-time" },
                            { icon: "⚡", title: "Instant Setup", desc: "Go live in under 60 seconds with zero coding" },
                            { icon: "🔗", title: "Unlimited Links", desc: "Add as many links as you need, completely free" },
                            { icon: "🎯", title: "Custom Branding", desc: "Make it yours with colors, fonts, and layouts" },
                            { icon: "📱", title: "Mobile Optimized", desc: "Perfect experience on any device, guaranteed" },
                        ].map((f, i) => (
                            <div key={i} className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all hover:shadow-lg hover:shadow-[var(--primary)]/5">
                                <span className="text-3xl mb-3 block">{f.icon}</span>
                                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                                <p className="text-[var(--text-muted)]">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="py-16 px-6 bg-[var(--surface)]">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-sm text-[var(--text-dim)] mb-6">Trusted by creators worldwide</p>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        {["✨ 10k+ links created", "🌍 50+ countries", "⭐ 4.9/5 rating", "🚀 99.9% uptime"].map((s, i) => (
                            <span key={i} className="text-sm text-[var(--text-muted)]">{s}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-[var(--background)]">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to claim your link?</h2>
                    <p className="text-[var(--text-muted)] mb-8">Join thousands of creators who trust KAIKI Link</p>
                    <Link
                        href="/signup"
                        className="inline-block gradient-primary hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
                    >
                        Get Started Free →
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-[var(--border)] py-8 px-6 bg-[var(--background)]">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded gradient-primary"></div>
                        <span className="font-semibold">KAIKI Link</span>
                        <span className="text-[var(--text-dim)] text-sm">© 2026</span>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                        <Link href="/privacy" className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">Privacy</Link>
                        <Link href="/terms" className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">Terms</Link>
                        <Link href="/contact" className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">Contact</Link>
                    </div>
                </div>
            </footer>
        </>
    );
}
