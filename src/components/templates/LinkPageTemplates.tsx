"use client";

import { UserProfile, Link } from "@/lib/types";

interface MinimalTemplateProps {
    user: UserProfile;
}

export function MinimalTemplate({ user }: MinimalTemplateProps) {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-gray-100">
                <img src={user.avatarUrl} alt={user.displayName} className="w-full h-full object-cover" />
            </div>

            {/* Name & Bio */}
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{user.displayName}</h1>
            <p className="text-gray-600 text-center max-w-xs mb-8">{user.bio}</p>

            {/* Links */}
            <div className="w-full max-w-md space-y-3">
                {user.links.filter(l => l.enabled).map((link) => (
                    <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-4 px-6 text-center bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg font-medium transition-all hover:scale-[1.02]"
                    >
                        {link.title}
                    </a>
                ))}
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-8">
                {user.socials.map((social, i) => (
                    <a
                        key={i}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    >
                        <SocialIcon platform={social.platform} />
                    </a>
                ))}
            </div>

            {/* Branding */}
            {user.plan === "free" && (
                <a href="/" className="mt-12 text-xs text-gray-400 hover:text-gray-600">
                    Made with KAIKI Link
                </a>
            )}
        </div>
    );
}

export function GradientTemplate({ user }: MinimalTemplateProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex flex-col items-center py-12 px-4">
            {/* Avatar */}
            <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-white/30 shadow-xl">
                <img src={user.avatarUrl} alt={user.displayName} className="w-full h-full object-cover" />
            </div>

            {/* Name & Bio */}
            <h1 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{user.displayName}</h1>
            <p className="text-white/80 text-center max-w-xs mb-8">{user.bio}</p>

            {/* Links */}
            <div className="w-full max-w-md space-y-3">
                {user.links.filter(l => l.enabled).map((link) => (
                    <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-4 px-6 text-center bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-xl font-medium transition-all hover:scale-[1.02] border border-white/20"
                    >
                        {link.title}
                    </a>
                ))}
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-8">
                {user.socials.map((social, i) => (
                    <a
                        key={i}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors text-white"
                    >
                        <SocialIcon platform={social.platform} />
                    </a>
                ))}
            </div>

            {user.plan === "free" && (
                <a href="/" className="mt-12 text-xs text-white/50 hover:text-white/80">
                    Made with KAIKI Link
                </a>
            )}
        </div>
    );
}

export function DarkTemplate({ user }: MinimalTemplateProps) {
    return (
        <div className="min-h-screen bg-[#0A0A0B] flex flex-col items-center py-12 px-4">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-gray-700">
                <img src={user.avatarUrl} alt={user.displayName} className="w-full h-full object-cover" />
            </div>

            {/* Name & Bio */}
            <h1 className="text-2xl font-bold text-white mb-2">{user.displayName}</h1>
            <p className="text-gray-400 text-center max-w-xs mb-8">{user.bio}</p>

            {/* Links */}
            <div className="w-full max-w-md space-y-3">
                {user.links.filter(l => l.enabled).map((link) => (
                    <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-4 px-6 text-center bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-all hover:scale-[1.02] border border-gray-700"
                    >
                        {link.title}
                    </a>
                ))}
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-8">
                {user.socials.map((social, i) => (
                    <a
                        key={i}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors text-gray-400 hover:text-white"
                    >
                        <SocialIcon platform={social.platform} />
                    </a>
                ))}
            </div>

            {user.plan === "free" && (
                <a href="/" className="mt-12 text-xs text-gray-600 hover:text-gray-400">
                    Made with KAIKI Link
                </a>
            )}
        </div>
    );
}

// Social Icon Component
function SocialIcon({ platform }: { platform: string }) {
    const icons: Record<string, string> = {
        twitter: "𝕏",
        instagram: "📸",
        youtube: "▶️",
        tiktok: "♪",
        linkedin: "in",
        github: "⌘",
        spotify: "🎵",
        twitch: "📺",
    };
    return <span className="text-sm">{icons[platform] || "🔗"}</span>;
}

// Template Renderer
export function TemplateRenderer({ user }: MinimalTemplateProps) {
    switch (user.templateId) {
        case "gradient":
            return <GradientTemplate user={user} />;
        case "dark":
            return <DarkTemplate user={user} />;
        case "minimal":
        default:
            return <MinimalTemplate user={user} />;
    }
}
