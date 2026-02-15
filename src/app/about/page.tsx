import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Heart, Zap, Palette, Target, Coffee, Users,
    Figma, Code2, Layout,
    ArrowRight, Sparkles, CheckCircle, ArrowUpRight,
    Layers, MousePointer2, Smartphone, Terminal
} from 'lucide-react';

export const metadata = {
    title: 'Tentang Saya',
    description: 'Kenalan lebih dekat dengan saya, value yang saya pegang, dan tools yang saya gunakan.',
};

export default function AboutPage() {
    // Values
    const values = [
        { icon: Palette, title: 'Estetika', desc: 'Visual yang harmonis', color: 'text-pink-500' },
        { icon: Zap, title: 'Fungsionalitas', desc: 'Efisien & intuitif', color: 'text-blue-500' },
        { icon: Heart, title: 'Empati', desc: 'Human-centered', color: 'text-purple-500' }
    ];

    // Process steps (Workflow)
    const workflow = [
        { step: '01', title: 'Discover', desc: 'Deep dive & research' },
        { step: '02', title: 'Define', desc: 'Strategy & structure' },
        { step: '03', title: 'Design', desc: 'Crafting the visuals' },
        { step: '04', title: 'Develop', desc: 'Bringing it to life' }
    ];

    // Tools
    const tools = [
        { icon: Figma, name: 'Figma' },
        { icon: Code2, name: 'VS Code' },
        { icon: Layout, name: 'React' },
        { icon: Layers, name: 'Next.js' },
        { icon: Palette, name: 'Tailwind' },
        { icon: Smartphone, name: 'Responsive' }
    ];

    return (
        <Section className="py-20 bg-noise min-h-screen">
            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30 mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] opacity-30 mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }} />
            </div>

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                {/* LEFT: Profile Spotlight (Sticky Editorial) */}
                <div className="lg:col-span-5 relative z-10">
                    <div className="lg:sticky lg:top-32 space-y-8 animate-blur-in">
                        {/* Profile Card */}
                        <div className="group relative">
                            {/* Premium Card - Model Inspired (Pink & White) */}
                            <div className="absolute inset-0 bg-white/95 dark:bg-[#030712]/95 backdrop-blur-md rounded-[2.5rem] border-2 border-pink-500/40 dark:border-pink-500/30 shadow-2xl shadow-pink-500/10 -z-10 transition-all duration-500" />

                            {/* Vibrant Pink Glow on Hover */}
                            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-transparent via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="p-10 text-center space-y-8">
                                {/* Avatar Monogram - Clean & Sharp */}
                                <div className="relative mx-auto w-32 h-32 group-hover:scale-105 transition-transform duration-500 ease-out">
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent dark:from-pink-500/20 rounded-full blur-2xl transform scale-90 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <div className="relative w-full h-full rounded-full bg-white dark:bg-pink-950/20 border-[6px] border-pink-50 dark:border-pink-500/20 flex items-center justify-center overflow-hidden shadow-lg">
                                        <span className="font-heading font-black text-4xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-pink-500 to-purple-600 dark:from-pink-300 dark:to-purple-300">
                                            SZ
                                        </span>
                                    </div>
                                    <div className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-500 border-[3px] border-white dark:border-pink-950 rounded-full z-10">
                                        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
                                    </div>
                                </div>

                                {/* Identity Block */}
                                <div className="space-y-2">
                                    <h1 className="text-4xl font-black font-heading tracking-tight text-foreground">
                                        Syifa Zahra
                                    </h1>
                                    <p className="text-lg font-medium text-slate-600 dark:text-pink-200/90">
                                        UI/UX Designer & Frontend Engineer
                                    </p>
                                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-500/10 text-[10px] font-bold uppercase tracking-widest text-pink-600 dark:text-pink-300 border border-pink-100 dark:border-pink-500/20 mt-2">
                                        Education Technology Student
                                    </div>
                                </div>

                                {/* Clean Stats Row */}
                                <div className="flex justify-center gap-4 py-2">
                                    <div className="px-5 py-3 rounded-2xl bg-pink-50 dark:bg-pink-950/30 border-2 border-pink-100 dark:border-transparent hover:border-pink-500/30 transition-all group/stat shadow-sm">
                                        <Palette className="w-5 h-5 text-pink-500 mx-auto mb-1 group-hover/stat:scale-110 transition-transform" />
                                        <span className="text-xs font-bold text-pink-600/70 dark:text-pink-200/70 group-hover/stat:text-pink-700 dark:group-hover/stat:text-pink-100">Design</span>
                                    </div>
                                    <div className="px-5 py-3 rounded-2xl bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-100 dark:border-transparent hover:border-purple-500/30 transition-all group/stat shadow-sm">
                                        <Terminal className="w-5 h-5 text-purple-500 mx-auto mb-1 group-hover/stat:scale-110 transition-transform" />
                                        <span className="text-xs font-bold text-purple-600/70 dark:text-purple-200/70 group-hover/stat:text-purple-700 dark:group-hover/stat:text-purple-100">Code</span>
                                    </div>
                                </div>

                                {/* Refined Actions */}
                                <div className="space-y-3 pt-2">
                                    <Link href="/contact" className="block">
                                        <Button size="lg" className="w-full rounded-2xl h-14 font-bold text-base shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all bg-primary dark:bg-foreground text-white dark:text-background hover:bg-primary/90 dark:hover:bg-foreground/90">
                                            Contact Me Now <ArrowUpRight className="ml-2 w-4 h-4 opacity-70" />
                                        </Button>
                                    </Link>
                                    <Link href="/projects" className="block">
                                        <Button variant="ghost" size="lg" className="w-full rounded-2xl h-12 font-semibold text-slate-600 dark:text-pink-200/60 hover:text-pink-600 dark:hover:text-pink-100 hover:bg-pink-50 dark:hover:bg-pink-500/10 transition-all">
                                            View Portfolio
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                {/* RIGHT: Editorial Content (Bento Flow) */}
                <div className="lg:col-span-7 space-y-16 py-8">

                    {/* Intro */}
                    <div className="space-y-6 animate-blur-in delay-100">
                        <Badge variant="outline" className="rounded-full px-4 py-1 border-primary/20 text-primary bg-primary/5 uppercase tracking-widest text-[10px]">
                            Tentang Saya
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-black font-heading leading-tight">
                            Mengubah ide kompleks menjadi <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">antarmuka yang indah.</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Hai! Saya Syifa. Saya percaya bahwa desain UI/UX yang hebat bukan hanya tentang tampilan visual, tapi tentang bagaimana ia <strong>bekerja</strong>. Saya menggabungkan kreativitas desain dengan ketelitian teknis kode untuk menciptakan produk digital yang utuh.
                        </p>
                    </div>

                    {/* Values Section */}
                    <div className="space-y-8 animate-blur-in delay-200">
                        <div className="flex items-center gap-4">
                            <div className="h-px flex-1 bg-border" />
                            <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">My Core Values</span>
                            <div className="h-px flex-1 bg-border" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {values.map((val, idx) => (
                                <div key={val.title} className="group p-6 rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-all hover:-translate-y-1 shadow-sm hover:shadow-lg">
                                    <div className={`mb-4 p-3 rounded-2xl w-fit ${val.color} bg-current/10`}>
                                        <val.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">{val.title}</h3>
                                    <p className="text-sm text-muted-foreground">{val.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Workflow Section */}
                    <div className="space-y-8 animate-blur-in delay-300">
                        <div className="flex items-center gap-4">
                            <div className="h-px flex-1 bg-border" />
                            <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Workflow</span>
                            <div className="h-px flex-1 bg-border" />
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {workflow.map((flow) => (
                                <div key={flow.step} className="p-5 rounded-2xl bg-muted/30 border border-white/5 text-center hover:bg-muted/50 transition-colors">
                                    <span className="block text-3xl font-black text-foreground/10 mb-2">{flow.step}</span>
                                    <h4 className="font-bold text-foreground mb-1">{flow.title}</h4>
                                    <p className="text-xs text-muted-foreground">{flow.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-8 animate-blur-in delay-400">
                        <div className="flex items-center gap-4">
                            <div className="h-px flex-1 bg-border" />
                            <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Tech Arsenal</span>
                            <div className="h-px flex-1 bg-border" />
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {tools.map((tool) => (
                                <div key={tool.name} className="flex items-center gap-3 px-5 py-3 rounded-full bg-card border border-border/50 hover:border-primary/50 transition-colors shadow-sm">
                                    <tool.icon className="w-5 h-5 text-muted-foreground" />
                                    <span className="font-medium">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mini Journey Link */}
                    <div className="p-8 rounded-[2rem] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 animate-blur-in delay-500 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold font-heading mb-2">My Journey</h3>
                            <p className="text-muted-foreground max-w-md">
                                Dari belajar otodidak hingga memenangkan kompetisi nasional.
                            </p>
                        </div>
                        <Link href="/journey">
                            <Button size="lg" className="rounded-full gap-2 shadow-lg shadow-indigo-500/20">
                                Lihat Timeline <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
        </Section>
    );
}
