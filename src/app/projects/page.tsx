"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/section-heading';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects, ProjectType } from '@/data/content';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { cn } from '@/lib/utils';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';

const filters: (ProjectType | 'All')[] = ['All', 'Lomba', 'Project', 'Organisasi'];

function ProjectsContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const currentFilter = searchParams.get('type') || 'All';
    const searchQuery = searchParams.get('q') || '';

    const [searchTerm, setSearchTerm] = useState(searchQuery);

    // Debounce search update to URL
    useEffect(() => {
        const timer = setTimeout(() => {
            const params = new URLSearchParams(searchParams);
            if (searchTerm) {
                params.set('q', searchTerm);
            } else {
                params.delete('q');
            }
            router.replace(`${pathname}?${params.toString()}`, { scroll: false });
        }, 300);

        return () => clearTimeout(timer);
    }, [searchTerm, searchParams, pathname, router]);


    const handleFilterChange = (filter: string) => {
        const params = new URLSearchParams(searchParams);
        if (filter === 'All') {
            params.delete('type');
        } else {
            params.set('type', filter);
        }
        // Reset page if needed, here just update filter
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const filteredProjects = projects.filter((project) => {
        const matchesType = currentFilter === 'All' || project.type === currentFilter;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesType && matchesSearch;
    });

    return (
        <Section>
            <div className="space-y-8 min-h-screen">
                <div className="text-center space-y-3">
                    <div className="animate-blur-in">
                        <SectionHeading>Portfolio</SectionHeading>
                    </div>
                    <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto animate-blur-in delay-100 opacity-90">
                        Koleksi karya terbaik yang pernah saya kerjakan, mulai dari eksplorasi UI hingga aplikasi web fungsional.
                    </p>
                </div>

                {/* Filters & Search */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-3 sticky top-16 bg-background/80 backdrop-blur-md z-40 px-4 -mx-4 rounded-b-2xl md:static md:bg-transparent md:p-0 animate-blur-in delay-200">
                    {/* Type Filters */}
                    <div className="flex flex-wrap justify-center gap-2 order-2 md:order-1">
                        {filters.map((filter) => (
                            <Button
                                key={filter}
                                variant={currentFilter === filter ? 'primary' : 'outline'}
                                onClick={() => handleFilterChange(filter as string)}
                                className={cn("rounded-full transition-all text-xs h-8 px-4", currentFilter === filter ? "shadow-md scale-105" : "text-muted-foreground hover:text-foreground")}
                                size="sm"
                            >
                                {filter}
                            </Button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-56 order-1 md:order-2">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                        <Input
                            placeholder="Cari project..."
                            className="pl-9 pr-8 h-9 rounded-full bg-muted/50 border-primary/20 focus-visible:ring-primary/50 text-xs"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            >
                                <X className="h-3 w-3" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Gallery */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-blur-in delay-300">
                        {filteredProjects.map((project) => (
                            <Link key={project.slug} href={`/projects/${project.slug}`} className="group block">
                                <Card className="h-full overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 bg-card/40 border-primary/5">
                                    <div className="aspect-video relative bg-muted overflow-hidden rounded-t-3xl m-2 mb-0">
                                        {/* Image with Branded Fallback */}
                                        <ImageWithFallback
                                            src={project.coverImage}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute top-3 right-3 z-10">
                                            <Badge variant="secondary" className="bg-white/90 dark:bg-black/80 backdrop-blur shadow-sm text-[10px] font-bold px-2.5 py-0.5 text-slate-900 dark:text-slate-100">
                                                {project.type}
                                            </Badge>
                                        </div>
                                    </div>
                                    <CardContent className="p-5 flex flex-col flex-1 space-y-4">
                                        <div className="flex-1 space-y-3">
                                            <div>
                                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-1 mb-1">
                                                    {project.title}
                                                </h3>
                                                <p className="text-xs text-muted-foreground font-medium">{project.year} • {project.role}</p>
                                            </div>

                                            <div className="flex flex-wrap gap-1.5">
                                                {project.tags.slice(0, 3).map(tag => (
                                                    <Badge key={tag} variant="outline" className="text-[10px] bg-secondary/10 border-primary/10 text-muted-foreground">{tag}</Badge>
                                                ))}
                                            </div>
                                            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed h-[2.5rem]">
                                                {project.shortSummary}
                                            </p>
                                        </div>
                                        <div className="pt-2 border-t border-primary/5">
                                            <span className="text-xs font-bold text-primary inline-flex items-center group-hover:translate-x-1 transition-transform">
                                                Lihat detail →
                                            </span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 text-muted-foreground">
                        <p className="text-lg">Tidak ada project yang ditemukan.</p>
                        <Button variant="link" onClick={() => { setSearchTerm(''); handleFilterChange('All'); }}>Reset Filter</Button>
                    </div>
                )}
            </div>
        </Section>
    );
}

export default function ProjectsPage() {
    return (
        <Suspense fallback={<div className="text-center py-20">Loading projects...</div>}>
            <ProjectsContent />
        </Suspense>
    );
}
