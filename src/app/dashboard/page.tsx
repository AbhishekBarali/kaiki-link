"use client";

import Link from "next/link";
import { useState } from "react";
import { DEMO_USER, Link as LinkType, TEMPLATES } from "@/lib/types";

export default function DashboardPage() {
    const [user, setUser] = useState(DEMO_USER);
    const [editingLink, setEditingLink] = useState<string | null>(null);
    const [newLinkTitle, setNewLinkTitle] = useState("");
    const [newLinkUrl, setNewLinkUrl] = useState("");
    const [showAddLink, setShowAddLink] = useState(false);

    const addLink = () => {
        if (!newLinkTitle || !newLinkUrl) return;
        const newLink: LinkType = {
            id: Date.now().toString(),
            title: newLinkTitle,
            url: newLinkUrl.startsWith("http") ? newLinkUrl : `https://${newLinkUrl}`,
            enabled: true,
            clicks: 0,
        };
        setUser({ ...user, links: [...user.links, newLink] });
        setNewLinkTitle("");
        setNewLinkUrl("");
        setShowAddLink(false);
    };

    const deleteLink = (id: string) => {
        setUser({ ...user, links: user.links.filter(l => l.id !== id) });
    };

    const toggleLink = (id: string) => {
        setUser({
            ...user,
            links: user.links.map(l => l.id === id ? { ...l, enabled: !l.enabled } : l),
        });
    };

    return (
        <div className="min-h-screen bg-[var(--background)]">
            {/* Header */}
            <header className="border-b border-[var(--border)] bg-[var(--surface)]">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-white font-bold">K</div>
                        <span className="font-semibold">KAIKI Link</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <a
                            href={`/${user.username}`}
                            target="_blank"
                            className="text-sm text-[var(--text-muted)] hover:text-white flex items-center gap-1"
                        >
                            <span>link.kaiki.studio/{user.username}</span>
                            <span>↗</span>
                        </a>
                    </div>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Editor */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Profile Section */}
                        <div className="bg-[var(--surface)] rounded-xl border border-[var(--border)] p-6">
                            <h2 className="font-semibold mb-4">Profile</h2>
                            <div className="flex items-start gap-4">
                                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[var(--border)]">
                                    <img src={user.avatarUrl} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 space-y-3">
                                    <input
                                        type="text"
                                        value={user.displayName}
                                        onChange={(e) => setUser({ ...user, displayName: e.target.value })}
                                        placeholder="Display Name"
                                        className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg outline-none focus:border-[var(--primary)]"
                                    />
                                    <textarea
                                        value={user.bio}
                                        onChange={(e) => setUser({ ...user, bio: e.target.value })}
                                        placeholder="Bio"
                                        rows={2}
                                        className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg outline-none focus:border-[var(--primary)] resize-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Links Section */}
                        <div className="bg-[var(--surface)] rounded-xl border border-[var(--border)] p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="font-semibold">Links</h2>
                                <button
                                    onClick={() => setShowAddLink(true)}
                                    className="text-sm px-3 py-1.5 gradient-primary text-white rounded-lg"
                                >
                                    + Add Link
                                </button>
                            </div>

                            {/* Add Link Form */}
                            {showAddLink && (
                                <div className="mb-4 p-4 bg-[var(--background)] rounded-lg border border-[var(--border)] animate-slide-up">
                                    <div className="space-y-3">
                                        <input
                                            type="text"
                                            value={newLinkTitle}
                                            onChange={(e) => setNewLinkTitle(e.target.value)}
                                            placeholder="Link title (e.g., My YouTube Channel)"
                                            className="w-full px-3 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-lg outline-none focus:border-[var(--primary)]"
                                        />
                                        <input
                                            type="url"
                                            value={newLinkUrl}
                                            onChange={(e) => setNewLinkUrl(e.target.value)}
                                            placeholder="URL (e.g., https://youtube.com/@you)"
                                            className="w-full px-3 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-lg outline-none focus:border-[var(--primary)]"
                                        />
                                        <div className="flex gap-2">
                                            <button onClick={addLink} className="px-4 py-2 gradient-primary text-white rounded-lg text-sm">
                                                Add
                                            </button>
                                            <button onClick={() => setShowAddLink(false)} className="px-4 py-2 text-[var(--text-muted)] text-sm">
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Links List */}
                            <div className="space-y-2">
                                {user.links.map((link) => (
                                    <div
                                        key={link.id}
                                        className={`p-4 bg-[var(--background)] rounded-lg border border-[var(--border)] flex items-center gap-4 ${!link.enabled ? "opacity-50" : ""
                                            }`}
                                    >
                                        <div className="cursor-move text-[var(--text-dim)]">⋮⋮</div>
                                        <div className="flex-1 min-w-0">
                                            <div className="font-medium truncate">{link.title}</div>
                                            <div className="text-sm text-[var(--text-muted)] truncate">{link.url}</div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-[var(--text-dim)]">{link.clicks} clicks</span>
                                            <button
                                                onClick={() => toggleLink(link.id)}
                                                className={`w-10 h-6 rounded-full transition-colors ${link.enabled ? "bg-[var(--success)]" : "bg-[var(--border)]"
                                                    }`}
                                            >
                                                <div className={`w-4 h-4 rounded-full bg-white mx-1 transition-transform ${link.enabled ? "translate-x-4" : ""
                                                    }`} />
                                            </button>
                                            <button
                                                onClick={() => deleteLink(link.id)}
                                                className="text-[var(--text-dim)] hover:text-[var(--error)] transition-colors"
                                            >
                                                🗑
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Templates Section */}
                        <div className="bg-[var(--surface)] rounded-xl border border-[var(--border)] p-6">
                            <h2 className="font-semibold mb-4">Templates</h2>
                            <div className="grid grid-cols-3 gap-3">
                                {TEMPLATES.map((template) => (
                                    <button
                                        key={template.id}
                                        onClick={() => setUser({ ...user, templateId: template.id })}
                                        className={`relative p-4 rounded-lg border-2 transition-all ${user.templateId === template.id
                                            ? "border-[var(--primary)] bg-[var(--primary)]/10"
                                            : "border-[var(--border)] hover:border-[var(--primary)]/50"
                                            }`}
                                    >
                                        <div className="text-2xl mb-2">🎨</div>
                                        <div className="text-sm font-medium">{template.name}</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Preview */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8">
                            <h3 className="text-sm text-[var(--text-muted)] mb-3">Preview</h3>
                            <div className="bg-white rounded-2xl overflow-hidden shadow-xl" style={{ height: "600px" }}>
                                <iframe
                                    src={`/${user.username}`}
                                    className="w-full h-full border-0"
                                    title="Preview"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
