"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // In production, this would call Supabase auth
        setTimeout(() => {
            window.location.href = "/dashboard";
        }, 1000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 gradient-mesh">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 mb-4">
                        <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-white font-bold text-xl">K</div>
                    </Link>
                    <h1 className="text-2xl font-bold">Create your KAIKI Link</h1>
                    <p className="text-[var(--text-muted)] mt-2">Free forever. No credit card required.</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]">
                    <div className="space-y-4">
                        {/* Username */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Choose your username</label>
                            <div className="flex items-center bg-[var(--background)] border border-[var(--border)] rounded-lg overflow-hidden focus-within:border-[var(--primary)]">
                                <span className="px-3 text-[var(--text-muted)] text-sm">link.kaiki.studio/</span>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9]/g, ''))}
                                    placeholder="yourname"
                                    required
                                    className="flex-1 bg-transparent border-none outline-none px-2 py-3 text-white"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                required
                                className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg outline-none focus:border-[var(--primary)] transition-colors"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                                minLength={8}
                                className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg outline-none focus:border-[var(--primary)] transition-colors"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 gradient-primary hover:opacity-90 text-white font-semibold rounded-lg transition-all disabled:opacity-50"
                        >
                            {loading ? "Creating..." : "Create my link →"}
                        </button>
                    </div>

                    <p className="text-center text-sm text-[var(--text-muted)] mt-6">
                        Already have an account?{" "}
                        <Link href="/login" className="text-[var(--primary)] hover:underline">Log in</Link>
                    </p>
                </form>

                <p className="text-center text-xs text-[var(--text-dim)] mt-6">
                    By signing up, you agree to our{" "}
                    <Link href="/terms" className="underline">Terms</Link> and{" "}
                    <Link href="/privacy" className="underline">Privacy Policy</Link>
                </p>
            </div>
        </div>
    );
}
