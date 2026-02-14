import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/content';
import { Metadata } from 'next';

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) return { title: 'Not Found' };

    return {
        title: project.title,
        description: project.shortSummary,
    };
}

export default function ProjectDetailPage({ params }: Props) {
    const projectIndex = projects.findIndex((p) => p.slug === params.slug);
    const project = projects[projectIndex];

    if (!project) {
        notFound();
    }

    const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
    const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

    return (
        <div className="min-h-screen pb-20">
            {/* Hero / Header */}
            <div className="bg-gradient-to-b from-primary/5 to-background border-b border-border/40">
                <Section className="py-12 md:py-20">
                    <div className="mb-8">
                        <Link href="/projects" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
                            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Back to Projects
                        </Link>
                    </div>

                    <div className="space-y-6 max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="flex gap-2">
                            <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-primary/20">{project.type}</Badge>
                            <Badge variant="outline">{project.year}</Badge>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading text-balance leading-tight">{project.title}</h1>
                        <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-2xl leading-relaxed">
                            {project.shortSummary}
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            {project.links?.demo && (
                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                    <Button className="rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40">
                                        <ExternalLink className="mr-2 h-4 w-4" /> View Live Demo
                                    </Button>
                                </a>
                            )}
                            {project.links?.repo && (
                                <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" className="rounded-full px-6">
                                        <Github className="mr-2 h-4 w-4" /> View Code
                                    </Button>
                                </a>
                            )}
                            {project.links?.design && (
                                <a href={project.links.design} target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" className="rounded-full px-6">
                                        <ExternalLink className="mr-2 h-4 w-4" /> View Design File
                                    </Button>
                                </a>
                            )}
                        </div>
                    </div>
                </Section>
            </div>

            <Section className="py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-16">

                        {/* Cover Image Placeholder */}
                        <div className="aspect-video w-full rounded-3xl bg-muted border border-border/50 flex items-center justify-center text-muted-foreground shadow-sm overflow-hidden group">
                            <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/10 transition-colors" />
                            <span className="relative z-10 font-medium">[Cover Image: {project.title}]</span>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold font-heading">The Problem</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                                {project.problem}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold font-heading">Process</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                                {project.process}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold font-heading">Result & Impact</h2>
                            <div className="bg-gradient-to-br from-secondary/30 to-background p-8 rounded-3xl border border-secondary/20 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <p className="text-xl font-medium relative z-10 leading-relaxed">
                                    &quot;{project.result}&quot;
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-8 sticky top-24 h-fit">
                        <div className="p-8 rounded-3xl bg-card/50 border border-primary/10 backdrop-blur-sm shadow-sm space-y-8">
                            <div className="space-y-3">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">My Role</h3>
                                <p className="font-medium text-lg">{project.role}</p>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Tech Stack / Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="px-3 py-1 bg-secondary/10">{tag}</Badge>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Year</h3>
                                <p className="font-medium text-lg">{project.year}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Footer */}
                <div className="mt-24 pt-12 border-t border-border/40 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {prevProject ? (
                        <Link href={`/projects/${prevProject.slug}`} className="group p-6 rounded-2xl border border-border/40 hover:border-primary/20 hover:bg-primary/5 transition-all text-left">
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 block group-hover:text-primary transition-colors">Previous Project</span>
                            <span className="text-lg font-bold group-hover:translate-x-1 transition-transform inline-block">{prevProject.title}</span>
                        </Link>
                    ) : <div />}

                    {nextProject ? (
                        <Link href={`/projects/${nextProject.slug}`} className="group p-6 rounded-2xl border border-border/40 hover:border-primary/20 hover:bg-primary/5 transition-all text-right">
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 block group-hover:text-primary transition-colors">Next Project</span>
                            <span className="text-lg font-bold group-hover:-translate-x-1 transition-transform inline-block">{nextProject.title}</span>
                        </Link>
                    ) : <div />}
                </div>
            </Section>
        </div>
    );
}
