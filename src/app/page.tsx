import Link from 'next/link';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/section-heading';
import { ArrowRight, Sparkles, Trophy, ArrowUpRight, Figma, Code2, Palette, Layout, Smartphone, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { HeroBackground } from '@/components/ui/HeroBackground';
import { personalInfo, projects, competitions, journey } from '@/data/content';

const tools = [
  { name: 'Figma', icon: Figma },
  { name: 'Frontend', icon: Code2 },
  { name: 'UI Design', icon: Palette },
  { name: 'Wireframing', icon: Layout },
  { name: 'Mobile', icon: Smartphone },
  { name: 'Web', icon: Globe },
];

const competitionGradients = [
  'from-blue-500/10 via-blue-400/5 to-indigo-500/10 border-blue-200/40',
  'from-violet-500/10 via-purple-400/5 to-fuchsia-500/10 border-violet-200/40',
  'from-rose-500/10 via-pink-400/5 to-orange-500/10 border-rose-200/40',
  'from-emerald-500/10 via-teal-400/5 to-cyan-500/10 border-emerald-200/40',
];

const competitionAccents = [
  'text-blue-600 bg-blue-50',
  'text-violet-600 bg-violet-50',
  'text-rose-600 bg-rose-50',
  'text-emerald-600 bg-emerald-50',
];

export default function Home() {
  const featuredProjects = projects.slice(0, 2);
  const featuredCompetitions = competitions.slice(0, 2);
  const journeyTeaser = journey.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* ==================== HERO SECTION ==================== */}
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-start overflow-hidden">
        <HeroBackground />

        <div className="container mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-12 relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
          <div className="max-w-6xl space-y-4 flex flex-col items-center text-center">
            {/* Status badge */}
            <div className="animate-pop-in duration-700 mb-2">
              <Badge className="bg-primary/10 backdrop-blur-md border border-primary/20 text-primary px-4 py-1.5 text-sm hover:bg-primary/15 dark:bg-primary/20 dark:border-primary/30 dark:text-primary rounded-full shadow-sm">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                Open for UI/UX Collaboration
              </Badge>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-heading tracking-tighter leading-[1.0] animate-blur-in delay-150">
              <span className="text-foreground block">Crafting Digital</span>
              <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent block pb-3">Experiences that Matter.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed font-medium animate-blur-in delay-300 mx-auto">
              {personalInfo.bio.long}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto animate-blur-in delay-[450ms] justify-center">
              <Link href="/projects" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-1 font-bold">
                  View Selected Works <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 text-base rounded-full border-2 border-primary/10 hover:bg-primary/5 hover:border-primary/30 transition-all text-foreground font-semibold">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-in fade-in duration-1000 delay-700">
          <span className="text-muted-foreground/50 text-xs uppercase tracking-[0.3em] font-medium">Scroll</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground/50 animate-bounce" />
        </div>
      </section>

      {/* ==================== STATUS + TOOLS ==================== */}
      <ScrollReveal>
        <Section className="py-8 md:py-12">
          <div className="bg-card/40 backdrop-blur-sm border border-primary/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Sparkles className="h-5 w-5" />
                  <span>Status Saat Ini</span>
                </div>
                <h3 className="text-2xl font-bold font-heading">{personalInfo.now.status}</h3>
              </div>

            </div>

            {/* Tools Strip */}
            <div className="border-t border-primary/10 pt-5">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Tools & Skills</p>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-card/70 border border-border/50 text-sm font-medium text-foreground/80 hover:border-primary/30 hover:bg-card hover:text-primary hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                  >
                    <tool.icon className="h-4 w-4" />
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </ScrollReveal>

      {/* ==================== FEATURED PROJECTS ==================== */}
      <ScrollReveal>
        <Section className="py-8 md:py-12">
          <div className="flex justify-between items-end mb-6 md:mb-8">
            <SectionHeading align="left" className="mb-0">Featured Projects</SectionHeading>
            <Link href="/projects">
              <Button variant="link" className="group">
                Lihat Semua <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 150}>
                <Link href={`/projects/${project.slug}`} className="group block h-full">
                  <Card className="h-full overflow-hidden border-border/40 shadow-sm bg-card/50 hover:bg-card hover:border-primary/20 hover:shadow-lg transition-all duration-300 flex flex-col">
                    <div className="aspect-[2/1] relative overflow-hidden bg-muted">
                      <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500">
                        <Image
                          src={project.coverImage}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col gap-3 flex-1">
                      <div className="flex gap-2">
                        {project.tags.slice(0, 2).map(tag => (
                          <Badge key={tag} variant="secondary" className="text-[10px] bg-secondary/10 text-secondary-foreground">{tag}</Badge>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold font-heading group-hover:text-primary transition-colors flex items-center leading-tight">
                        {project.title} <ArrowUpRight className="ml-1 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-muted-foreground text-base leading-relaxed line-clamp-3">
                        {project.shortSummary}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      </ScrollReveal>

      {/* ==================== COMPETITIONS ==================== */}
      <ScrollReveal>
        <Section className="py-8 md:py-12 relative">
          <div className="absolute inset-0 bg-secondary/5 -skew-y-1 transform origin-top-left -z-10 w-full h-full scale-105" />
          <div className="flex justify-between items-end mb-3">
            <SectionHeading align="left" className="mb-0">Highlighted Competitions</SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredCompetitions.map((comp, index) => (
              <ScrollReveal key={comp.id} delay={index * 150} className="h-full">
                <Card className={`h-full border-0 bg-gradient-to-br ${competitionGradients[index % competitionGradients.length]} backdrop-blur-sm shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300`}>
                  <CardContent className="p-6 flex flex-col sm:flex-row gap-5 h-full items-start">
                    <div className={`shrink-0 p-3.5 rounded-2xl ${competitionAccents[index % competitionAccents.length]} bg-white/50 backdrop-blur-sm self-start shadow-sm border border-white/20`}>
                      <Trophy className="h-6 w-6" />
                    </div>
                    <div className="space-y-3 w-full">
                      <div className="space-y-1">
                        <h3 className="font-bold font-heading text-lg leading-tight">{comp.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full w-fit bg-white/10 border border-white/10 ${competitionAccents[index % competitionAccents.length].split(' ')[0]}`}>
                            {comp.outcome}
                          </span>
                          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full w-fit bg-white/10 border border-white/10 text-muted-foreground">
                            {comp.year}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground/90 leading-relaxed line-clamp-3 text-pretty">{comp.shortStory}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      </ScrollReveal>

      {/* ==================== MINI JOURNEY ==================== */}
      <ScrollReveal>
        <Section className="py-12 md:py-16">
          <div className="text-center mb-8">
            <SectionHeading>My Journey</SectionHeading>
            <p className="text-muted-foreground">Little steps that made me who I am.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {journeyTeaser.map((phase, index) => (
              <ScrollReveal key={phase.id} delay={index * 150}>
                <div className="relative text-center p-6 rounded-2xl bg-gradient-to-b from-card/50 to-transparent border border-border/40 hover:border-primary/20 hover:bg-card/80 transition-all group">
                  <div className="text-6xl font-heading font-black text-primary/25 absolute -top-6 left-4 z-0 group-hover:text-primary/35 transition-colors select-none">
                    0{index + 1}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold font-heading pt-2">{phase.title}</h3>
                    <p className="text-xs text-primary font-medium mb-2">{phase.timeframe}</p>
                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{phase.story}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/journey">
              <Button variant="outline" className="rounded-full h-10 px-6 text-sm">Lihat Perjalanan Lengkap <ArrowRight className="ml-2 h-3 w-3" /></Button>
            </Link>
          </div>
        </Section>
      </ScrollReveal>

      {/* ==================== FOOTER CTA ==================== */}
      <ScrollReveal>
        <Section className="pt-8 pb-20 text-center">
          <div className="max-w-2xl mx-auto space-y-6 p-10 bg-gradient-to-br from-primary/10 via-card to-secondary/10 rounded-[2.5rem] border border-border/50 shadow-xl shadow-primary/5">
            <div className="text-4xl mb-2">💬</div>
            <h2 className="text-2xl md:text-4xl font-bold font-heading">
              Kalau kamu butuh partner UI/UX, mari ngobrol.
            </h2>
            <Link href="/contact" className="inline-block">
              <Button size="lg" className="rounded-full">
                Hubungi Saya
              </Button>
            </Link>
          </div>
        </Section>
      </ScrollReveal>
    </div>
  );
}
