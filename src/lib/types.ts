// Types for the KAIKI Link application

export interface Link {
    id: string;
    title: string;
    url: string;
    icon?: string;
    enabled: boolean;
    clicks: number;
}

export interface UserProfile {
    id: string;
    username: string;
    displayName: string;
    bio: string;
    avatarUrl: string;
    templateId: string;
    customColors?: {
        background?: string;
        text?: string;
        accent?: string;
    };
    links: Link[];
    socials: SocialLink[];
    plan: "free" | "pro" | "business";
    views: number;
    createdAt: Date;
}

export interface SocialLink {
    platform: "twitter" | "instagram" | "youtube" | "tiktok" | "linkedin" | "github" | "spotify" | "twitch";
    url: string;
}

export interface Template {
    id: string;
    name: string;
    description: string;
    isPro: boolean;
    preview: string;
}

// Available templates - ALL FREE FOR TESTING
export const TEMPLATES: Template[] = [
    { id: "minimal", name: "Minimal", description: "Clean and simple", isPro: false, preview: "/templates/minimal.png" },
    { id: "gradient", name: "Gradient", description: "Vibrant colors", isPro: false, preview: "/templates/gradient.png" },
    { id: "dark", name: "Dark Pro", description: "Sleek dark theme", isPro: false, preview: "/templates/dark.png" },
    { id: "creator", name: "Creator", description: "Bold for influencers", isPro: false, preview: "/templates/creator.png" },
    { id: "professional", name: "Professional", description: "Business focused", isPro: false, preview: "/templates/professional.png" },
    { id: "neon", name: "Neon", description: "Eye-catching glow", isPro: false, preview: "/templates/neon.png" },
];

// Test credentials for quick testing
export const TEST_CREDENTIALS = {
    email: "test@kaiki.studio",
    password: "test123",
};

// Demo user for testing - Pro plan enabled
export const DEMO_USER: UserProfile = {
    id: "demo",
    username: "demo",
    displayName: "Alex Creator",
    bio: "Content creator & designer. Building cool stuff on the internet ✨",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=demo",
    templateId: "gradient",
    links: [
        { id: "1", title: "🎥 My YouTube Channel", url: "https://youtube.com", icon: "", enabled: true, clicks: 1234 },
        { id: "2", title: "📸 Follow me on Instagram", url: "https://instagram.com", icon: "", enabled: true, clicks: 567 },
        { id: "3", title: "🛒 Shop my merch", url: "https://shop.example.com", icon: "", enabled: true, clicks: 89 },
        { id: "4", title: "📧 Business inquiries", url: "mailto:hello@example.com", icon: "", enabled: true, clicks: 45 },
    ],
    socials: [
        { platform: "twitter", url: "https://twitter.com" },
        { platform: "instagram", url: "https://instagram.com" },
        { platform: "youtube", url: "https://youtube.com" },
    ],
    plan: "pro", // Pro for testing
    views: 5678,
    createdAt: new Date(),
};
