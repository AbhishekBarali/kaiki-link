"use client";

import { motion } from "motion/react";
import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns";

const testimonials: Testimonial[] = [
    {
        text: "KAIKI Link transformed how I share my content. One link for everything - my followers love it!",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        name: "Sarah Chen",
        role: "Content Creator",
    },
    {
        text: "The analytics feature is incredible. I can see exactly which links get the most clicks.",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        name: "Marcus Johnson",
        role: "YouTuber",
    },
    {
        text: "Setup took literally 60 seconds. The templates are beautiful and professional.",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
        name: "Emily Rodriguez",
        role: "Photographer",
    },
    {
        text: "Finally, a link-in-bio that actually looks good on mobile. My engagement doubled!",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
        name: "David Kim",
        role: "Podcaster",
    },
    {
        text: "The custom branding options let me match my personal style perfectly.",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
        name: "Aisha Patel",
        role: "Fashion Blogger",
    },
    {
        text: "Been using KAIKI Link for 6 months - it's the best free tool for creators.",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
        name: "Lisa Wang",
        role: "Musician",
    },
    {
        text: "The instant setup and zero coding required made this perfect for my clients.",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
        name: "James Miller",
        role: "Social Media Manager",
    },
    {
        text: "Love how I can update my links anytime and my bio URL stays the same.",
        image: "https://randomuser.me/api/portraits/women/8.jpg",
        name: "Sofia Garcia",
        role: "Artist",
    },
    {
        text: "The free plan has everything I need. No hidden costs or limitations.",
        image: "https://randomuser.me/api/portraits/men/9.jpg",
        name: "Alex Thompson",
        role: "Startup Founder",
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
    return (
        <section className="bg-[var(--background)] py-20 relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
                >
                    <div className="flex justify-center">
                        <div className="border border-[var(--border)] py-1 px-4 rounded-lg text-sm text-[var(--text-muted)]">
                            Testimonials
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mt-5 text-center">
                        What our users say
                    </h2>
                    <p className="text-center mt-5 text-[var(--text-muted)]">
                        See what creators have to say about KAIKI Link.
                    </p>
                </motion.div>

                <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={15} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
                </div>
            </div>
        </section>
    );
}
