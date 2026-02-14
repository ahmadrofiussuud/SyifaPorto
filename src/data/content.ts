export type ProjectType = 'UI/UX' | 'Web' | 'Lomba' | 'Organisasi';

export interface Project {
    slug: string;
    title: string;
    role: string;
    year: string;
    tags: string[];
    type: ProjectType;
    shortSummary: string;
    problem: string;
    process: string; // Brief description of what was done
    result: string; // e.g. "Impact: [isi nanti]"
    links?: {
        demo?: string;
        repo?: string;
        design?: string;
    };
    coverImage: string; // Path to image
    gallery?: string[]; // Additional images
}

export interface JourneyPhase {
    id: string;
    title: string;
    timeframe: string;
    story: string; // Personal narrative for this phase
    keyLesson: string;
    relatedWorks?: { title: string; link: string }[];
}

export interface Competition {
    id: string;
    slug: string; // URL friendly ID
    title: string;
    organizer: string;
    year: string;
    category: string; // e.g. "UI/UX Design", "Web Development"
    role: string;
    outcome: string; // e.g. "Juara 1", "Finalis"
    shortStory: string; // 2-3 sentences context
    coverImage: string;
    deliverables?: {
        slide?: string;
        demo?: string;
        repo?: string;
        design?: string;
    };
    details?: {
        problem: string;
        solution: string;
        contribution: string;
        learned: string;
    };
    link?: string; // Fallback link
    scale?: string; // e.g. "Internasional", "Nasional", "Regional"
    teamSize?: string; // e.g. "5 orang", "Solo"
}

export interface PersonalInfo {
    name: string;
    role: string;
    bio: {
        short: string; // For home
        long: string; // For about page
        values: string[]; // Core values
        tools: string[]; // Tech stack/design tools
    };
    now: {
        status: string;
        values: string[];
    };
    socials: {
        email: string;
        linkedin: string;
        dribbble?: string;
        github?: string;
        instagram?: string;
    };
}

export const personalInfo: PersonalInfo = {
    name: "Syifa Zahra Amelia Shofa",
    role: "UI/UX Designer & Frontend Engineer",
    bio: {
        short: "Mewujudkan ide menjadi pengalaman digital yang manis dan bermakna.",
        long: "Halo, aku Syifa Zahra Amelia Shofa — Mahasiswa Pendidikan Teknologi Informasi yang gemar merancang UI/UX estetik dan membangun website yang intuitif & nyaman.",
        values: ["Estetika", "Fungsionalitas", "Empati"],
        tools: ["Figma", "VS Code", "React", "Tailwind CSS"]
    },
    now: {
        status: "Mahasiswa Pendidikan Teknologi Informasi",
        values: ["Belajar Teknologi Baru", "Eksplorasi Desain"]
    },
    socials: {
        email: "syifa@example.com",
        linkedin: "https://www.linkedin.com/in/syifa-zahra-amelia-shofa-075b08316/",
        dribbble: "https://dribbble.com/syifadesign",
        github: "https://github.com/Syifazahraas",
        instagram: "https://www.instagram.com/syifazahraas_/"
    }
};

export const journey: JourneyPhase[] = [
    {
        id: "phase-1",
        title: "Awal Mula",
        timeframe: "2021",
        story: "Semua berawal dari rasa penasaran saat melihat desain aplikasi yang cantik. Saya mulai belajar otodidak tentang kombinasi warna dan tipografi, mencoba membuat desain sederhana untuk tugas kuliah.",
        keyLesson: "Visual yang baik membuat orang betah berlama-lama.",
        relatedWorks: []
    },
    {
        id: "phase-2",
        title: "Mendalami Kode",
        timeframe: "2022",
        story: "Saya menyadari desain saja tidak cukup. Di jurusan PTI, saya mulai serius belajar frontend development agar bisa mewujudkan desain saya menjadi website interaktif yang nyata.",
        keyLesson: "Coding mengajarkan saya berpikir logis dan terstruktur.",
        relatedWorks: []
    },
    {
        id: "phase-3",
        title: "Eksplorasi & Kompetisi",
        timeframe: "2023",
        story: "Mulai memberanikan diri mengikuti lomba UI/UX dan mengerjakan proyek kecil. Bertemu banyak teman baru dan belajar bahwa kolaborasi adalah kunci untuk menghasilkan karya yang lebih baik.",
        keyLesson: "Feedback adalah sarapan para juara.",
        relatedWorks: [{ title: "Lomba UI/UX", link: "/competitions" }]
    },
    {
        id: "phase-4",
        title: "Fokus Saat Ini",
        timeframe: "Sekarang",
        story: "Kini saya menyeimbangkan kuliah dengan terus mengasah skill desain dan koding. Saya ingin membangun karir sebagai desainer yang mengerti teknis, atau developer yang punya rasa seni.",
        keyLesson: "Konsistensi mengalahkan motivasi sesaat.",
        relatedWorks: [{ title: "Portfolio V1", link: "/projects/portfolio-v1" }]
    }
];

export const competitions: Competition[] = [
    {
        id: "2nd-iss-malaysia-2026",
        slug: "2nd-iss-malaysia-2026",
        title: "2nd ISS Malaysia",
        organizer: "Universitas Sains Islam Malaysia x Sentosa Foundation",
        year: "2026 Februari",
        category: "Essay",
        role: "Researcher & Desain UI/UX",
        outcome: "Bronze Medal",
        shortStory: "Kompetisi internasional dengan tim 5 orang. Kami gabungkan riset mendalam dengan desain pitch deck yang persuasif.",
        coverImage: "/images/competitions/iss-malaysia.webp",
        deliverables: {
            slide: "https://slides.com/iss-malaysia-example"
        },
        details: {
            problem: "Detail problem akan dilengkapi setelah revisi final.",
            solution: "Detail solusi akan dilengkapi setelah revisi final.",
            contribution: "1) Desain Pitch Deck\n2) Research data\n3) Prototype",
            learned: "Kolaborasi tim internasional mengajarkan pentingnya komunikasi yang jelas dan desain yang universal."
        },
        scale: "Internasional",
        teamSize: "5 orang"
    },
    {
        id: "greenovation-2025",
        slug: "greenovation-2025",
        title: "Greenovation: Green Energy Innovation Challenge",
        organizer: "Universitas Muhammadiyah Sidoarjo",
        year: "2025",
        category: "Business Plan",
        role: "Pitcher & Designer",
        outcome: "Juara 3",
        shortStory: "Merancang pitch untuk solusi energi terbarukan—dari riset sampai deck yang bikin juri antusias.",
        coverImage: "/images/competitions/greenovation.svg",
        deliverables: {
            slide: "https://slides.com/greenovation-example"
        },
        details: {
            problem: "Komunitas pesisir kesulitan akses listrik murah dan ramah lingkungan karena jaringan PLN belum menjangkau.",
            solution: "Microhydro generator portable yang memanfaatkan arus laut dengan biaya perawatan rendah dan mudah dipasang.",
            contribution: "1) Desain pitch deck (alur problem–solusi–impact)\n2) Riset data untuk memperkuat argumen\n3) Menyelaraskan visual dan storytelling",
            learned: "Pitch yang kuat bukan hanya soal ide brilian, tapi bagaimana menyampaikannya dengan data yang solid dan narasi yang mengena."
        }
    },
    {
        id: "cipta-nusantara-2025",
        slug: "cipta-nusantara-2025",
        title: "Cipta Nusantara Fest",
        organizer: "Universitas Negeri Yogyakarta x Eduhub Inkubator",
        year: "2025",
        category: "Business Plan",
        role: "Pitcher & Designer",
        outcome: "Silver Medal",
        shortStory: "Kompetisi nasional untuk solusi edukasi digital. Kami bawa ide platform pembelajaran yang bisa jalan tanpa internet.",
        coverImage: "/images/competitions/cipta-nusantara.svg",
        deliverables: {
            slide: "https://slides.com/example"
        },
        details: {
            problem: "Siswa di daerah 3T kesulitan akses materi belajar berkualitas karena keterbatasan internet dan buku.",
            solution: "Platform pembelajaran offline-first dengan konten interaktif yang bisa diunduh dan diakses tanpa koneksi internet.",
            contribution: "1) Desain pitch deck (alur problem–solusi–impact)\n2) Riset data untuk memperkuat argumen\n3) Menyelaraskan visual dan storytelling",
            learned: "Pitch yang kuat bukan hanya soal ide brilian, tapi bagaimana menyampaikannya dengan data yang solid dan narasi yang mengena."
        }
    },
    {
        id: "youth-ideas-2025",
        slug: "youth-ideas-2025",
        title: "Youth Ideas Competition",
        organizer: "Universitas Lambung Mangkurat",
        year: "2025",
        category: "Business Model",
        role: "Business Analyst",
        outcome: "Finalis",
        shortStory: "Lomba ide bisnis sosial untuk pemuda. Kami tawarkan platform mentorship untuk UMKM muda.",
        coverImage: "/images/competitions/youth-ideas.svg",
        deliverables: {
            slide: "https://canva.com/example"
        },
        details: {
            problem: "UMKM muda kesulitan mendapatkan pendanaan awal karena kurangnya track record dan proposal bisnis yang kuat.",
            solution: "Mentorship platform yang menghubungkan UMKM muda dengan mentor berpengalaman dan investor angel.",
            contribution: "1) Desain deck presentasi (struktur & visual)\n2) Riset data untuk mendukung BMC\n3) Membuat value proposition lebih tajam",
            learned: "Business Model Canvas yang baik harus didukung validasi pasar nyata, bukan asumsi semata."
        }
    },
    {
        id: "lidm-2025",
        slug: "lidm-2025",
        title: "LIDM (Lomba Inovasi Digital Mahasiswa)",
        organizer: "Universitas Brawijaya",
        year: "2025",
        category: "Essay",
        role: "Product Designer",
        outcome: "Lolos UB",
        shortStory: "Inovasi edutech tingkat nasional. Kami rancang adaptive learning platform buat cara belajar yang lebih personal.",
        coverImage: "/images/competitions/lidm.svg",
        deliverables: {
            design: "https://figma.com/lidm-example"
        },
        details: {
            problem: "Mahasiswa kesulitan belajar mandiri karena materi yang tidak terstruktur dan kurangnya feedback instan.",
            solution: "Adaptive learning platform yang menyesuaikan konten berdasarkan progress dan gaya belajar individu.",
            contribution: "1) Design thinking (merumuskan masalah & arah solusi)\n2) Riset data untuk kebutuhan & validasi\n3) Menyusun flow pembelajaran",
            learned: "Solusi edutech yang efektif harus dimulai dari pemahaman mendalam tentang bagaimana siswa benar-benar belajar."
        }
    },
];

export const projects: Project[] = [
    {
        slug: "fintask-mobile",
        title: "FinTask Mobile App",
        role: "UI/UX Designer",
        year: "2024",
        tags: ["Figma", "Mobile Design", "Prototyping"],
        type: "UI/UX",
        shortSummary: "Aplikasi manajemen keuangan pribadi dengan pendekatan gamifikasi untuk Gen Z.",
        problem: "Generasi Z kesulitan mengatur keuangan karena aplikasi yang ada terlalu kaku.",
        process: "Riset pengguna, Wireframing, Hi-Fi Design, Usability Testing.",
        result: "Dedesain ulang untuk meningkatkan engagement pengguna sebesar 40%.",
        coverImage: "/images/projects/uiux-1.svg",
        gallery: []
    },
    {
        slug: "learnit-education",
        title: "LearnIt Platform",
        role: "Product Designer",
        year: "2023",
        tags: ["Case Study", "Education", "User Research"],
        type: "UI/UX",
        shortSummary: "Platform pembelajaran daring yang inklusif untuk siswa berkebutuhan khusus.",
        problem: "Kurangnya platform belajar yang ramah aksesibilitas.",
        process: "Empathize, Define, Ideate, Prototype, Test.",
        result: "Konsep final memenangkan Best Design Award di kompetisi kampus.",
        coverImage: "/images/projects/uiux-2.svg",
        gallery: []
    },
    {
        slug: "corpweb-redesign",
        title: "CorpWeb Redesign",
        role: "Frontend Developer",
        year: "2024",
        tags: ["Next.js", "Tailwind CSS", "Corporate"],
        type: "Web",
        shortSummary: "Redesign website profil perusahaan agar lebih modern dan responsif.",
        problem: "Website lama lambat dan tidak mobile-friendly.",
        process: "Slicing design ke Next.js, optimasi performa.",
        result: "Loading time berkurang 50% dan traffic meningkat.",
        coverImage: "/images/projects/web-1.svg",
        gallery: []
    },
    {
        slug: "metrics-dashboard",
        title: "Admin Metrics Dashboard",
        role: "Fullstack Developer",
        year: "2023",
        tags: ["React", "Chart.js", "Internal Tool"],
        type: "Web",
        shortSummary: "Sistem monitoring data internal untuk tim operasional.",
        problem: "Data tersebar di berbagai spreadsheet manual.",
        process: "Integrasi API, visualisasi data real-time.",
        result: "Efisiensi pelaporan meningkat signifikan.",
        coverImage: "/images/projects/web-2.svg",
        gallery: []
    },
    {
        slug: "techfair-2023",
        title: "TechFair 2023",
        role: "Head of Design",
        year: "2023",
        tags: ["Event", "Branding", "Teamwork"],
        type: "Organisasi",
        shortSummary: "Memimpin divisi visual untuk seminar teknologi nasional terbesar di kampus.",
        problem: "Butuh identitas visual yang fresh dan menarik minat mahasiswa luar.",
        process: "Brainstorming tema, produksi aset sosial media dan merchandise.",
        result: "Tiket terjual habis dalam 3 hari, visual mendapat banyak pujian.",
        coverImage: "/images/projects/org-1.svg",
        gallery: []
    },
    {
        slug: "charity-run",
        title: "Charity Run for Hope",
        role: "Event Coordinator",
        year: "2022",
        tags: ["Leadership", "Social Impact", "Public Relations"],
        type: "Organisasi",
        shortSummary: "Menggalang dana untuk panti asuhan melalui event lari virtual.",
        problem: "Kesulitan mengumpulkan donasi di masa pasca-pandemi.",
        process: "Kampanye digital, kerjasama sponsorship.",
        result: "Mengumpulkan donasi 20 juta rupiah untuk panti asuhan.",
        coverImage: "/images/projects/org-2.svg",
        gallery: []
    }
];
