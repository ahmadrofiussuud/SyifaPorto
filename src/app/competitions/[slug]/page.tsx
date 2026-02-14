import { notFound } from 'next/navigation';
import { competitions } from '@/data/content';
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';
import { ArrowLeft, ExternalLink, Trophy, Lightbulb, PenTool, CheckCircle, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props) {
    const comp = competitions.find((c) => c.slug === params.slug);
    if (!comp) return { title: 'Not Found' };
    return {
        title: `${comp.title} | Syifa Portfolio`,
        description: comp.shortStory,
    };
}

export default function CompetitionDetailPage({ params }: Props) {
    const comp = competitions.find((c) => c.slug === params.slug);

    if (!comp) {
        notFound();
    }

    return (
        <article className="min-h-screen pb-20">
            {/* Header / Hero */}
            <div className="relative h-[400px] w-full bg-muted">
                <Image
                    src={comp.coverImage}
                    alt={comp.title}
                    fill
                    className="object-cover opacity-30 blur-sm"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

                <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12 relative z-10">
                    <Link href="/competitions">
                        <Button variant="ghost" size="sm" className="mb-6 hover:bg-background/50 -ml-4">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Competitions
                        </Button>
                    </Link>

                    <div className="space-y-4 max-w-4xl">
                        <div className="flex flex-wrap gap-2 text-sm font-medium">
                            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                                {comp.category}
                            </Badge>
                            <Badge variant="outline" className="bg-background/50 backdrop-blur">
                                {comp.year}
                            </Badge>
                            <Badge variant="outline" className="bg-background/50 backdrop-blur">
                                {comp.role}
                            </Badge>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold font-heading text-balance leading-tight">
                            {comp.title}
                        </h1>

                        <div className="flex items-center gap-2 text-lg text-muted-foreground font-medium">
                            <span>{comp.organizer}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1 text-primary">
                                <Trophy className="h-5 w-5" /> {comp.outcome}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <Section className="py-12">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12">

                    {/* Main Content */}
                    <div className="space-y-12">
                        {/* Short Story */}
                        <div className="prose prose-lg dark:prose-invert leading-relaxed text-muted-foreground">
                            <p className="font-medium text-foreground text-xl">
                                {comp.shortStory}
                            </p>
                        </div>

                        {/* Details Grid */}
                        <div className="grid gap-8">
                            {comp.details?.problem && (
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg text-red-600 dark:text-red-400">
                                            <Lightbulb className="h-5 w-5" />
                                        </div>
                                        <h3 className="text-xl font-bold">The Problem</h3>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed pl-12 border-l-2 border-border ml-4">
                                        {comp.details.problem}
                                    </p>
                                </div>
                            )}

                            {comp.details?.solution && (
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-green-600 dark:text-green-400">
                                            <CheckCircle className="h-5 w-5" />
                                        </div>
                                        <h3 className="text-xl font-bold">Our Solution</h3>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed pl-12 border-l-2 border-border ml-4">
                                        {comp.details.solution}
                                    </p>
                                </div>
                            )}

                            {comp.details?.contribution && (
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-blue-600 dark:text-blue-400">
                                            <PenTool className="h-5 w-5" />
                                        </div>
                                        <h3 className="text-xl font-bold">My Contribution</h3>
                                    </div>
                                    <div className="pl-12 space-y-2">
                                        {comp.details.contribution.split('\n').map((item, index) => (
                                            <div key={index} className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                <p className="text-muted-foreground leading-relaxed">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {comp.details?.learned && (
                                <div className="bg-secondary/10 p-6 rounded-2xl space-y-3 border border-secondary/20">
                                    <div className="flex items-center gap-3">
                                        <GraduationCap className="h-6 w-6 text-primary" />
                                        <h3 className="text-xl font-bold text-foreground">Key Lesson</h3>
                                    </div>
                                    <p className="text-muted-foreground italic">
                                        &quot;{comp.details.learned}&quot;
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar / Actions */}
                    <div className="space-y-8">
                        <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm sticky top-24">
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <ExternalLink className="h-4 w-4" /> Deliverables
                            </h3>

                            <div className="space-y-3">
                                {comp.deliverables?.slide && (
                                    <a href={comp.deliverables.slide} target="_blank" rel="noopener noreferrer" className="block">
                                        <Button variant="outline" className="w-full justify-between group">
                                            Pitch Deck <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                                        </Button>
                                    </a>
                                )}
                                {comp.deliverables?.design && (
                                    <a href={comp.deliverables.design} target="_blank" rel="noopener noreferrer" className="block">
                                        <Button variant="outline" className="w-full justify-between group">
                                            Design File <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                                        </Button>
                                    </a>
                                )}
                                {comp.deliverables?.demo && (
                                    <a href={comp.deliverables.demo} target="_blank" rel="noopener noreferrer" className="block">
                                        <Button variant="outline" className="w-full justify-between group">
                                            Live Demo <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                                        </Button>
                                    </a>
                                )}
                                {comp.deliverables?.repo && (
                                    <a href={comp.deliverables.repo} target="_blank" rel="noopener noreferrer" className="block">
                                        <Button variant="outline" className="w-full justify-between group">
                                            Repository <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                                        </Button>
                                    </a>
                                )}

                                {!comp.deliverables && (
                                    <p className="text-sm text-muted-foreground">No public links available.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </article>
    );
}
