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
import { ImageWithFallback } from '@/components/ui/image-with-fallback';

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

import { Container } from '@/components/ui/container';

// ... (imports remain)

export default function Home() {
  const featuredProjects = projects.slice(0, 2);
  const featuredCompetitions = competitions.slice(0, 2);
  const journeyTeaser = journey.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[55vh] flex flex-col pt-8 lg:pt-20 pb-6 overflow-hidden">
        <HeroBackground />

        <Container className="relative z-10 flex-1 flex flex-col justify-start">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-8 items-center pt-8 lg:pt-0">

            {/* Left Content: Typography & CTAs */}
            <div className="lg:col-span-7 space-y-3 lg:space-y-6 animate-blur-in">
              <div className="space-y-2 lg:space-y-4 text-center lg:text-left">
                <span className="inline-flex items-center text-primary font-bold tracking-widest uppercase text-[10px] sm:text-xs">
                  <span className="w-6 h-[2px] bg-primary mr-3 hidden lg:block" />
                  Halo, Saya Syifa Zahra
                </span>

                <h1 className="font-black font-heading tracking-tight leading-none text-foreground transition-all" style={{ fontSize: 'clamp(40px, 8vw, 6rem)' }}>
                  UI/UX <br />
                  <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Designer</span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed font-medium mx-auto lg:mx-0 opacity-90 text-balance">
                  {personalInfo.bio.short} Saya fokus pada pembuatan antarmuka yang bersih, intuitif, dan berdampak bagi pengguna.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-5">
                <Link href="/about">
                  <Button size="lg" className="h-10 sm:h-13 px-5 sm:px-9 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-xs sm:text-base shadow-lg shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95">
                    ABOUT ME
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="h-10 sm:h-13 px-5 sm:px-9 rounded-xl border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/40 font-bold text-xs sm:text-base text-foreground transition-all active:scale-95">
                    CONTACT ME
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content: Photo (Natural & No Frame) */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end animate-pop-in duration-1000 delay-300 -mt-4 lg:mt-0">
              <div className="relative w-full max-w-[400px] aspect-[4/5] sm:aspect-[3/4]">
                {/* No frame, just the image sat naturally */}
                <Image
                  src="/images/hero-syifa-natural.png"
                  alt="Syifa Zahra"
                  width={550}
                  height={750}
                  className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(236,72,153,0.12)]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* ==================== STATS BAR (Sleek & Interactive) ==================== */}
          <div className="mt-8 lg:mt-12 w-full relative z-20">
            <div className="bg-white/5 dark:bg-black/20 backdrop-blur-xl rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden">
              <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
                {[
                  { value: '1+', label: 'Years Exp' },
                  { value: '5+', label: 'Web Works' },
                  { value: '5+', label: 'Awards Won' },
                  { value: '10+', label: 'Design Concepts' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="px-5 py-6 text-center bg-transparent hover:bg-primary/5 transition-all duration-500 group relative cursor-default overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
                      <div className="text-3xl lg:text-4xl font-black font-heading tracking-tighter text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-[10px] lg:text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mt-1 group-hover:text-primary transition-colors">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 lg:hidden opacity-30">
          <ChevronDown className="h-5 w-5 text-muted-foreground animate-bounce" />
        </div>
      </section>

      {/* ==================== STATUS + TOOLS ==================== */}
      <ScrollReveal>
        <Section className="py-4 md:py-6">
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
            <div className="border-t border-primary/10 pt-6">
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-5 text-center lg:text-left opacity-70">
                Tools & Skills
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-card/40 border border-primary/10 text-sm font-bold text-foreground/80 hover:border-primary/40 hover:bg-card hover:text-primary hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default group"
                  >
                    <tool.icon className="h-4 w-4 text-primary/60 group-hover:text-primary transition-colors" strokeWidth={2.5} />
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </ScrollReveal>

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 150}>
                <Link href={`/projects/${project.slug}`} className="group block h-full">
                  <Card className="h-full overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 bg-card/40 border-primary/10">
                    <div className="aspect-[16/9] relative overflow-hidden bg-muted group">
                      {/* Image with Branded Fallback */}
                      <ImageWithFallback
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />

                      <div className="absolute top-4 right-4 z-10">
                        <Badge variant="secondary" className="bg-white/95 dark:bg-black/80 backdrop-blur shadow-sm text-[10px] font-bold px-3 py-1 text-slate-900 dark:text-slate-100">
                          {project.type}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6 flex flex-col gap-3.5 flex-1">
                      <div className="space-y-3 flex-1">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map(tag => (
                            <Badge key={tag} variant="outline" className="text-[10px] bg-secondary/10 border-primary/10 text-muted-foreground">{tag}</Badge>
                          ))}
                        </div>
                        <h3 className="text-2xl font-bold font-heading group-hover:text-primary transition-colors flex items-center leading-tight">
                          {project.title} <ArrowUpRight className="ml-1 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 transition-all" />
                        </h3>
                        <p className="text-muted-foreground text-base leading-relaxed line-clamp-2">
                          {project.shortSummary}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-primary/5">
                        <span className="text-sm font-bold text-primary inline-flex items-center group-hover:translate-x-1 transition-transform">
                          Lihat detail project →
                        </span>
                      </div>
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
