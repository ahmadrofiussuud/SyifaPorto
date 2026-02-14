"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { SectionHeading } from '@/components/ui/section-heading';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects, ProjectType } from '@/data/content';
import { cn } from '@/lib/utils';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';

const filters: (ProjectType | 'All')[] = ['All', 'UI/UX', 'Web', 'Lomba', 'Organisasi'];

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
                <div className="text-center space-y-4">
                    <div className="animate-blur-in">
                        <SectionHeading>Portfolio</SectionHeading>
                    </div>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-blur-in delay-100">
                        Koleksi karya terbaik yang pernah saya kerjakan, mulai dari eksplorasi UI hingga aplikasi web fungsional.
                    </p>
                </div>

                {/* Filters & Search */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 sticky top-16 bg-background/80 backdrop-blur-md z-40 px-4 -mx-4 rounded-b-2xl md:static md:bg-transparent md:p-0 animate-blur-in delay-200">
                    {/* Type Filters */}
                    <div className="flex flex-wrap justify-center gap-2 order-2 md:order-1">
                        {filters.map((filter) => (
                            <Button
                                key={filter}
                                variant={currentFilter === filter ? 'primary' : 'outline'}
                                onClick={() => handleFilterChange(filter as string)}
                                className={cn("rounded-full transition-all", currentFilter === filter ? "shadow-md scale-105" : "text-muted-foreground hover:text-foreground")}
                                size="sm"
                            >
                                {filter}
                            </Button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-64 order-1 md:order-2">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Cari project..."
                            className="pl-9 pr-8 rounded-full bg-muted/50 border-primary/20 focus-visible:ring-primary/50"
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-blur-in delay-300">
                        {filteredProjects.map((project) => (
                            <Link key={project.slug} href={`/projects/${project.slug}`} className="group block">
                                <Card className="h-full overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 bg-card/40 border-primary/5">
                                    <div className="aspect-video relative bg-muted overflow-hidden rounded-t-3xl m-2 mb-0">
                                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary/30 group-hover:scale-105 transition-transform duration-500">
                                            {/* Image Placeholder */}
                                            [Image: {project.title}]
                                        </div>
                                        <div className="absolute top-3 right-3">
                                            <Badge variant="secondary" className="bg-white/90 backdrop-blur shadow-sm text-xs font-bold px-3 py-1">
                                                {project.type}
                                            </Badge>
                                        </div>
                                    </div>
                                    <CardContent className="p-5 space-y-4">
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
                                        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                                            {project.shortSummary}
                                        </p>
                                        <div className="pt-2">
                                            <span className="text-xs font-bold text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 inline-flex items-center">
                                                View Case Study →
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
