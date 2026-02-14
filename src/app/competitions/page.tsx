"use client";

import { useState } from 'react';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { competitions } from '@/data/content';
import { Trophy, ArrowRight, Calendar, User } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

export default function CompetitionsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const categories = ['All', ...Array.from(new Set(competitions.map(c => c.category)))];

    const filteredCompetitions = competitions.filter(comp => {
        const matchCategory = selectedCategory === 'All' || comp.category === selectedCategory;
        return matchCategory;
    });

    return (
        <Section>
            <div className="max-w-6xl mx-auto space-y-12 min-h-[80vh]">
                <div className="text-center space-y-4 mb-12">
                    <div className="animate-blur-in">
                        <SectionHeading>Competitions & Achievements</SectionHeading>
                    </div>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance animate-blur-in delay-100">
                        Menguji kemampuan dan mendorong batas diri melalui kompetisi. Bukan hanya soal menang, tapi tentang apa yang dipelajari dalam prosesnya.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-2 animate-blur-in delay-200">
                    {categories.map(cat => (
                        <Button
                            key={cat}
                            variant={selectedCategory === cat ? 'primary' : 'outline'}
                            onClick={() => setSelectedCategory(cat)}
                            className="rounded-full transition-all"
                            size="sm"
                        >
                            {cat}
                        </Button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-blur-in delay-300">
                    {filteredCompetitions.map((comp) => (
                        <Link key={comp.id} href={`/competitions/${comp.slug}`} className="group h-full">
                            <Card className="h-full overflow-hidden border-border/60 hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col">
                                {/* Thumbnail */}
                                <div className="aspect-[16/9] relative overflow-hidden bg-muted">
                                    <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors z-10" />
                                    <Image
                                        src={comp.coverImage}
                                        alt={comp.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 z-20">
                                        <Badge className={cn(
                                            "shadow-sm backdrop-blur-md",
                                            comp.outcome.toLowerCase().includes('juara') || comp.outcome.toLowerCase().includes('winner') || comp.outcome.toLowerCase().includes('best') || comp.outcome.toLowerCase().includes('medal')
                                                ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200 border-yellow-200"
                                                : "bg-white/90 text-primary hover:bg-white"
                                        )}>
                                            <Trophy className="w-3 h-3 mr-1" /> {comp.outcome}
                                        </Badge>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-1 space-y-4">
                                    <div>
                                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {comp.year}</span>
                                            <span className="w-1 h-1 rounded-full bg-border" />
                                            <span className="flex items-center gap-1"><User className="w-3 h-3" /> {comp.role}</span>
                                        </div>
                                        <h3 className="text-xl font-bold font-heading group-hover:text-primary transition-colors line-clamp-1 mb-1">
                                            {comp.title}
                                        </h3>
                                        <p className="text-sm text-primary font-medium">{comp.organizer}</p>
                                    </div>

                                    <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                                        {comp.shortStory}
                                    </p>

                                    <div className="mt-auto pt-4 flex items-center text-sm font-bold text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                        Read Full Story <ArrowRight className="ml-2 w-4 h-4" />
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </Section>
    );
}
