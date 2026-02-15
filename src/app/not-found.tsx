import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { Construction } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background text-center relative overflow-hidden">
            {/* Background elements to match the theme */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />

            <Section className="relative z-10">
                <div className="space-y-8 max-w-2xl mx-auto">
                    <div className="flex justify-center">
                        <div className="p-6 rounded-3xl bg-primary/10 text-primary animate-pulse">
                            <Construction size={56} strokeWidth={1.5} />
                        </div>
                    </div>

                    <div className="space-y-4 px-4">
                        <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-foreground">
                            Sedang Dalam <br />
                            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent uppercase">Pengembangan</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md mx-auto">
                            Ups! Syifa sedang merapikan detail untuk bagian ini agar lebih manis. Tunggu sebentar ya, semuanya akan segera siap!
                        </p>
                    </div>

                    <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center px-6">
                        <Link href="/">
                            <Button size="lg" className="w-full sm:w-auto rounded-2xl px-10 h-14 font-bold shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all">
                                Kembali ke Beranda
                            </Button>
                        </Link>
                        <Link href="/projects">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-2xl px-10 h-14 font-bold border-2 border-primary/20 hover:bg-primary/5">
                                Lihat Project Lain
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    );
}
