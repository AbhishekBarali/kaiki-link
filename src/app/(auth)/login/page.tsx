"use client";

import Link from "next/link";
import { useState } from "react";
import { TEST_CREDENTIALS } from "@/lib/types";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // In production, this would call Supabase auth
        setTimeout(() => {
            window.location.href = "/dashboard";
        }, 500);
    };

    const fillTestCredentials = () => {
        setEmail(TEST_CREDENTIALS.email);
        setPassword(TEST_CREDENTIALS.password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 gradient-mesh">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 mb-4">
                        <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-white font-bold text-xl">K</div>
                    </Link>
                    <h1 className="text-2xl font-bold">Welcome back</h1>
                    <p className="text-[var(--text-muted)] mt-2">Log in to manage your links</p>
                </div>

                {/* Quick Test Login */}
                <button
                    onClick={fillTestCredentials}
                    className="w-full mb-4 py-3 bg-[var(--success)]/20 hover:bg-[var(--success)]/30 text-[var(--success)] font-medium rounded-lg transition-all border border-[var(--success)]/30"
                >
                    🧪 Fill Test Credentials
                </button>

                {/* Form */}
                <form onSubmit={handleSubmit} className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]">
                    <div className="space-y-4">
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
                                className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg outline-none focus:border-[var(--primary)] transition-colors"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 gradient-primary hover:opacity-90 text-white font-semibold rounded-lg transition-all disabled:opacity-50"
                        >
                            {loading ? "Logging in..." : "Log in"}
                        </button>
                    </div>

                    <p className="text-center text-sm text-[var(--text-muted)] mt-6">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="text-[var(--primary)] hover:underline">Sign up free</Link>
                    </p>
                </form>

                {/* Test credentials info */}
                <div className="mt-4 p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-xs text-[var(--text-muted)]">
                    <strong className="text-white">Test Account:</strong><br />
                    Email: {TEST_CREDENTIALS.email}<br />
                    Password: {TEST_CREDENTIALS.password}
                </div>
            </div>
        </div>
    );
}
