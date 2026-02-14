import { Section } from '@/components/ui/section';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { journey } from '@/data/content';
import { Lightbulb, Link as LinkIcon, Calendar } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'My Journey',
    description: 'Cerita perjalanan saya dari awal hingga menjadi UI/UX Designer.',
};

export default function JourneyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Intro */}
            <Section className="pt-20 pb-12 text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <div className="animate-blur-in">
                        <Badge className="mb-2">My Journey</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                            Dari <span className="text-primary">&quot;Coba-coba&quot;</span> Menjadi <span className="text-secondary">&quot;Cinta Mati&quot;</span>
                        </h1>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed animate-blur-in delay-100">
                        Saya percaya bahwa portofolio bukan hanya tentang hasil akhir, tapi juga proses panjang di belakangnya.
                        Inilah cerita bagaimana saya tumbuh, belajar dari kesalahan, dan menemukan passion di dunia desain.
                    </p>
                </div>
            </Section>

            {/* Timeline */}
            <Section className="pb-24">
                <div className="relative max-w-4xl mx-auto animate-blur-in delay-200">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary/40 to-secondary/20 rounded-full" />

                    <div className="space-y-12 md:space-y-24">
                        {journey.map((phase, index) => (
                            <div key={phase.id} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Node Dot */}
                                <div className="absolute left-[11px] md:left-1/2 top-0 w-5 h-5 bg-background border-4 border-primary rounded-full z-10 -translate-x-1/2 md:-translate-x-1/2 shadow-sm shadow-primary/30" />

                                {/* Date (Desktop only - opposite side) */}
                                <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'pl-12 text-left' : 'pr-12 text-right'} pt-1`}>
                                    <span className="font-bold text-primary/80 font-heading text-xl">{phase.timeframe}</span>
                                </div>

                                {/* Content Card */}
                                <div className={`md:w-1/2 ${index % 2 === 0 ? 'pr-0 md:pr-12' : 'pl-0 md:pl-12'} pl-12`}>
                                    <div className="block md:hidden mb-2">
                                        <span className="font-bold text-primary/80 text-sm flex items-center gap-2">
                                            <Calendar className="h-4 w-4" /> {phase.timeframe}
                                        </span>
                                    </div>
                                    <Card className="hover:border-primary/30 transition-all hover:shadow-lg group">
                                        <CardContent className="p-6 md:p-8 space-y-6">
                                            <div>
                                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{phase.title}</h3>
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {phase.story}
                                                </p>
                                            </div>

                                            {/* Lesson Box */}
                                            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 flex gap-3 items-start">
                                                <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                <p className="text-sm font-medium text-primary/90 italic">
                                                    &quot;{phase.keyLesson}&quot;
                                                </p>
                                            </div>

                                            {/* Related Works */}
                                            {phase.relatedWorks && phase.relatedWorks.length > 0 && (
                                                <div className="pt-2 border-t border-border/40">
                                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Related Works</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {phase.relatedWorks.map(work => (
                                                            <Link key={work.link} href={work.link}>
                                                                <Badge variant="outline" className="hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors py-1.5 px-3">
                                                                    <LinkIcon className="h-3 w-3 mr-2" /> {work.title}
                                                                </Badge>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}
