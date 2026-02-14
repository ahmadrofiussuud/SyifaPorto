import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background text-center">
            <Section>
                <div className="space-y-6">
                    <h1 className="text-9xl font-heading font-bold text-primary/20">404</h1>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">Halaman tidak ditemukan</h2>
                        <p className="text-muted-foreground max-w-md mx-auto">
                            Sepertinya kamu tersesat di antah berantah. Halaman yang kamu cari mungkin sudah dipindahkan atau dihapus.
                        </p>
                    </div>
                    <div className="pt-8">
                        <Link href="/">
                            <Button size="lg" className="rounded-full px-8">
                                Kembali ke Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    );
}
