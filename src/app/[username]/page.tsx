import { DEMO_USER } from "@/lib/types";
import { TemplateRenderer } from "@/components/templates/LinkPageTemplates";

// In production, this would fetch from Supabase
async function getUserByUsername(username: string) {
    // For demo, return demo user
    if (username === "demo") {
        return DEMO_USER;
    }
    return null;
}

export default async function UserPage({ params }: { params: Promise<{ username: string }> }) {
    const { username } = await params;
    const user = await getUserByUsername(username);

    if (!user) {
        return (
            <div className="min-h-screen bg-[var(--background)] flex flex-col items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">404</h1>
                    <p className="text-[var(--text-muted)] mb-6">This page doesn&apos;t exist yet.</p>
                    <a href="/signup" className="text-[var(--primary)] hover:underline">
                        Claim @{username} →
                    </a>
                </div>
            </div>
        );
    }

    return <TemplateRenderer user={user} />;
}

export async function generateMetadata({ params }: { params: Promise<{ username: string }> }) {
    const { username } = await params;
    const user = await getUserByUsername(username);

    if (!user) {
        return { title: "Page Not Found | KAIKI Link" };
    }

    return {
        title: `${user.displayName} | KAIKI Link`,
        description: user.bio,
    };
}
