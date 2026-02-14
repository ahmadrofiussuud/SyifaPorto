"use client";

import { useState } from 'react';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card";
import { personalInfo } from '@/data/content';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSent(true);
    }

    return (
        <Section>
            <div className="max-w-2xl mx-auto">
                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl font-bold">Get In Touch</h1>
                    <p className="text-muted-foreground text-lg">
                        Tertarik berkolaborasi atau sekadar ingin menyapa? Jangan ragu untuk menghubungi saya.
                    </p>
                </div>

                <Card className="border-border/60 bg-muted/20">
                    <CardContent className="p-6 md:p-10">
                        {isSent ? (
                            <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in duration-500">
                                <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="h-8 w-8" />
                                </div>
                                <h3 className="text-2xl font-bold">Pesan Terkirim!</h3>
                                <p className="text-muted-foreground">
                                    Terima kasih sudah menghubungi. Saya akan membalas pesan Anda sesegera mungkin.
                                </p>
                                <Button onClick={() => setIsSent(false)} variant="outline" className="mt-4">
                                    Kirim Pesan Lain
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Nama
                                        </label>
                                        <input
                                            id="name"
                                            required
                                            placeholder="Nama Lengkap"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            placeholder="contoh@email.com"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Subjek
                                    </label>
                                    <input
                                        id="subject"
                                        required
                                        placeholder="Project Inquiry / Hello"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Pesan
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={5}
                                        placeholder="Ceritakan tentang project Anda..."
                                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                                    />
                                </div>

                                <Button type="submit" className="w-full" size="lg" isLoading={isSubmitting}>
                                    <Send className="mr-2 h-4 w-4" /> Kirim Pesan
                                </Button>
                            </form>
                        )}
                    </CardContent>
                </Card>

                <div className="mt-12 text-center">
                    <p className="text-muted-foreground">Atau hubungi saya langsung melalui email:</p>
                    <a href={`mailto:${personalInfo.socials.email}`} className="text-primary font-bold hover:underline mt-2 inline-flex items-center">
                        <Mail className="mr-2 h-4 w-4" /> {personalInfo.socials.email}
                    </a>
                </div>
            </div>
        </Section>
    );
}
