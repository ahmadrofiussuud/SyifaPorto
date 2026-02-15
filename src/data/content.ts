export type ProjectType = 'Project' | 'Lomba' | 'Organisasi';

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
        email: "syifazahraas@gmail.com",
        linkedin: "https://www.linkedin.com/in/syifa-zahra-amelia-shofa-075b08316/",
        dribbble: "https://dribbble.com/syifadesign",
        github: "https://github.com/Syifazahraas",
        instagram: "https://www.instagram.com/syifazahraas_/"
    }
};

export const journey: JourneyPhase[] = [
    {
        id: "phase-1",
        title: "Langkah Pertama",
        timeframe: "2024",
        story: "Mulai tertarik dengan dunia kreatif dan mencoba belajar desain secara mandiri. Masih banyak belajar tentang dasar-dasar visual melalui tugas perkuliahan.",
        keyLesson: "Desain adalah proses belajar yang terus menerus.",
        relatedWorks: []
    },
    {
        id: "phase-2",
        title: "Belajar Teknologi",
        timeframe: "2024",
        story: "Seiring berjalannya kuliah di PTI, saya mulai mengenal dunia koding. Mencoba memahami bagaimana sebuah desain bisa diimplementasikan menjadi website sederhana.",
        keyLesson: "Teknologi membantu mewujudkan ide dasar menjadi nyata.",
        relatedWorks: []
    },
    {
        id: "phase-3",
        title: "Eksplorasi & Pengalaman",
        timeframe: "2025",
        story: "Mulai mengikuti beberapa lomba untuk menambah wawasan dan pengalaman. Di sini saya belajar bahwa masih banyak hal yang perlu diperdalam lagi.",
        keyLesson: "Pengalaman di lapangan adalah guru yang terbaik.",
        relatedWorks: [{ title: "Lomba & Project", link: "/projects" }]
    },
    {
        id: "phase-4",
        title: "Proses Saat Ini",
        timeframe: "Sekarang",
        story: "Masih fokus menyeimbangkan kuliah sambil pelan-pelan mengasah skill desain dan koding. Berusaha memberikan yang terbaik di setiap kesempatan belajar.",
        keyLesson: "Satu langkah kecil setiap hari jauh lebih berarti.",
        relatedWorks: [{ title: "Lihat Project", link: "/projects" }]
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
        coverImage: "/images/competitions/iss-malaysia-cert.jpg",
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
        coverImage: "/images/competitions/greenovation-cert.jpg",
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
        coverImage: "/images/competitions/cipta-nusantara-cert.jpg",
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
        coverImage: "/images/competitions/youth-ideas-cert.png",
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
        coverImage: "/projects/lidm-cover.jpg",
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
        title: "Amora",
        slug: "amora",
        type: "Lomba",
        year: "2026",
        role: "UI/UX Designer",
        tags: ["Mobile Design", "Figma", "Prototyping"],
        shortSummary: "Desain UI/UX untuk produk lomba, fokus pada alur yang ringkas dan tampilan yang nyaman dipakai.",
        problem: "Detail problem untuk project Amora akan segera dilengkapi setelah revisi final.",
        process: "Detail proses pengerjaan Amora mencakup riset kompetitor dan desain iteratif.",
        result: "Impact: Menghasilkan desain yang clean dan user-centric.",
        coverImage: "/projects/amora-cover.jpg",
        gallery: ["/projects/amora/01.webp", "/projects/amora/02.webp"]
    },
    {
        title: "SerenityHub",
        slug: "serenityhub",
        type: "Lomba",
        year: "2026",
        role: "UI/UX Designer",
        tags: ["Mobile Design", "Figma", "UX Flow"],
        shortSummary: "Rancangan pengalaman pengguna untuk ide lomba, menekankan kejelasan flow dan konsistensi komponen.",
        problem: "Detail problem untuk project SerenityHub akan segera dilengkapi sesuai revisi terbaru.",
        process: "Detail proses pengerjaan SerenityHub fokus pada alur navigasi yang intuitif.",
        result: "Impact: Menciptakan alur pengguna yang intuitif dan kohesif.",
        coverImage: "/projects/serenityhub-cover.jpg"
    },
    {
        title: "Rantaweb",
        slug: "rantaweb",
        type: "Lomba",
        year: "2026",
        role: "UI/UX Designer",
        tags: ["UI Design", "Figma", "Design System"],
        shortSummary: "Konsep UI/UX untuk proyek lomba dengan layout yang rapi, hierarki jelas, dan siap diprototipekan.",
        problem: "Detail problem untuk project Rantaweb akan segera dilengkapi untuk deskripsi produk.",
        process: "Detail proses pengerjaan Rantaweb melibatkan pembuatan design system yang terintegrasi.",
        result: "Impact: Membangun sistem desain yang skalabel dan estetik.",
        coverImage: "/projects/rantaweb-cover.jpg"
    },
    {
        title: "KBMDSI",
        slug: "kbmdsi",
        type: "Organisasi",
        year: "2026",
        role: "MEDKOMINFO",
        tags: ["Organisasi", "HIMA", "Kepanitiaan"],
        shortSummary: "Peran MEDKOMINFO dalam kegiatan organisasi: mengelola komunikasi visual dan materi publikasi yang konsisten.",
        problem: "Detail problem untuk project KBMDSI terkait standarisasi visual komunikasi organisasi.",
        process: "Detail proses pengerjaan KBMDSI meliputi manajemen branding dan publikasi rutin.",
        result: "Impact: Meningkatkan visibilitas organisasi melalui konten visual yang profesional.",
        coverImage: "/projects/kbmdsi-cover.jpg"
    },
    {
        title: "LIDM",
        slug: "lidm",
        type: "Lomba",
        year: "2024",
        role: "UI/UX Designer",
        tags: ["Lomba", "UI/UX", "Case Study"],
        shortSummary: "Inovasi desain untuk kompetisi LIDM, berfokus pada solusi inklusif dan antarmuka yang modern.",
        problem: "Detail problem untuk project LIDM akan segera dilengkapi.",
        process: "Detail proses pengerjaan LIDM meliputi riset dan pengembangan prototipe.",
        result: "Impact: Menghasilkan konsep desain yang kompetitif dan inovatif.",
        coverImage: "/projects/lidm-cover.jpg"
    },
    {
        title: "Web Sekolah (Misra)",
        slug: "web-sekolah-misra",
        type: "Project",
        year: "2024",
        role: "Web Developer",
        tags: ["Education", "Management System", "Web"],
        shortSummary: "Platform digital untuk memodernisasi administrasi sekolah, fokus pada efisiensi pengelolaan data.",
        problem: "Kebutuhan akan sistem terpusat untuk memantau kehadiran dan nilai siswa secara transparan.",
        process: "Pengembangan arsitektur database dan dashboard admin yang informatif.",
        result: "Impact: Mengurangi penggunaan kertas dan manualitas administrasi hingga 60%.",
        coverImage: "/projects/misra-school.jpg"
    },
    {
        title: "Web Toko Bangunan (SEMAR)",
        slug: "web-toko-bangunan-semar",
        type: "Project",
        year: "2024",
        role: "Product Designer",
        tags: ["E-commerce", "Inventory", "Project"],
        shortSummary: "Sistem manajemen inventaris dan penjualan untuk mempermudah operasional toko bangunan.",
        problem: "Pelacakan stok barang yang sulit dan pencatatan transaksi yang masih konvensional.",
        process: "Desain sistem inventory cerdas dengan pengingat stok minimum.",
        result: "Impact: Meminimalisir kesalahan pencatatan stok dan mempercepat proses transaksi.",
        coverImage: "/projects/semar-building.jpg"
    },
    {
        title: "TenangIn",
        slug: "tenangin",
        type: "Lomba",
        year: "2024",
        role: "UI/UX Designer",
        tags: ["Mental Health", "Mobile App", "Lomba"],
        shortSummary: "Aplikasi kesehatan mental yang berfokus pada ketenangan dan manajemen stres pengguna.",
        problem: "Meningkatnya tingkat stres di kalangan mahasiswa yang membutuhkan pertolongan pertama secara digital.",
        process: "Riset mendalam mengenai perilaku pengguna dan desain antarmuka yang menenangkan (calm UI).",
        result: "Impact: Menghasilkan prototipe aplikasi yang divalidasi oleh pakar psikologi.",
        coverImage: "/projects/tenangin-cover.png"
    }
];
