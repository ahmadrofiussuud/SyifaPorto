import { MetadataRoute } from 'next';
import { projects, competitions } from '@/data/content';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://portosyifa.vercel.app'; // Replace with actual domain if known, or use localhost for now

    const staticRoutes = [
        '',
        '/about',
        '/projects',
        '/journey',
        '/competitions',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const competitionRoutes = competitions.map((comp) => ({
        url: `${baseUrl}/competitions/${comp.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticRoutes, ...projectRoutes, ...competitionRoutes];
}
