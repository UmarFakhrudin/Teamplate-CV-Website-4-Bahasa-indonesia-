/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Palette, 
  FileText, 
  Globe, 
  Plane, 
  Trophy, 
  Edit, 
  ChevronRight,
  Github,
  Linkedin,
  Instagram,
  Menu,
  X,
  Sparkles,
  Layers,
  Zap,
  Heart,
  Sun,
  Moon,
  MessageCircle,
  Download,
  Image as ImageIcon
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';

// --- Data Dummy Perempuan Modern ---
const profile = {
  name: "CLARA ZEVANYA",
  title: "Creative Copywriter & Visual Designer",
  summary: "Saya adalah seorang profesional kreatif dengan latar belakang pendidikan Teknik Komputer dan Jaringan. Memiliki keahlian mendalam dalam pengolahan visual menggunakan Adobe Photoshop serta strategi penulisan kreatif (copywriting). Saya dikenal sebagai pribadi yang adaptif, inovatif, dan memiliki kemampuan komunikasi yang kuat untuk menerjemahkan ide menjadi karya visual dan tekstual yang menarik.",
  contact: {
    phone: "0812-9876-5432",
    whatsapp: "6281298765432",
    email: "clara.zevanya@example.com",
    location: "Sudirman, Jakarta Pusat",
    socials: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      github: "https://github.com"
    }
  },
  skills: [
    { name: "Adobe Photoshop", level: 95, color: "from-red-500 to-orange-400", icon: <Palette size={24} /> },
    { name: "Creative Writing", level: 92, color: "from-red-600 to-rose-500", icon: <Edit size={24} /> },
    { name: "Visual Branding", level: 88, color: "from-red-700 to-red-500", icon: <Layers size={24} /> },
    { name: "Social Media Strategy", level: 90, color: "from-orange-500 to-red-400", icon: <Globe size={24} /> },
    { name: "UI/UX Design", level: 82, color: "from-rose-500 to-pink-400", icon: <Sparkles size={24} /> }
  ],
  experience: [
    {
      company: "CREATIVE HUB INDONESIA",
      role: "Senior Visual Designer",
      period: "2022 - Sekarang",
      location: "Jakarta",
      description: "Memimpin tim kreatif dalam pembuatan konten visual untuk kampanye pemasaran digital berskala nasional. Bertanggung jawab atas konsistensi brand dan inovasi desain."
    },
    {
      company: "DIGITAL PULSE AGENCY",
      role: "Content Creator & Copywriter",
      period: "2020 - 2022",
      location: "Bandung",
      description: "Menyusun strategi konten dan menulis copy yang persuasif untuk berbagai platform media sosial klien korporat. Meningkatkan engagement rate hingga 40%."
    },
    {
      company: "TECH NOVA SOLUTIONS",
      role: "Junior Graphic Designer",
      period: "2018 - 2020",
      location: "Jakarta",
      description: "Mendukung departemen pemasaran dalam pembuatan aset visual harian, termasuk banner web, infografis, dan materi promosi cetak."
    }
  ],
  education: [
    {
      school: "BINUS UNIVERSITY",
      period: "2014 - 2018",
      major: "Desain Komunikasi Visual",
      location: "Jakarta",
      status: "Lulus dengan IPK 3.85"
    },
    {
      school: "SMK TELKOM JAKARTA",
      period: "2011 - 2014",
      major: "Teknik Komputer dan Jaringan",
      location: "Jakarta",
      status: "Lulus"
    }
  ],
  languages: [
    { name: "Indonesia", level: 100 },
    { name: "Inggris", level: 85 },
    { name: "Korea", level: 60 }
  ],
  hobbies: [
    { name: "Photography", icon: <ImageIcon className="w-5 h-5" /> },
    { name: "Writing", icon: <Edit className="w-5 h-5" /> },
    { name: "Design", icon: <Palette className="w-5 h-5" /> },
    { name: "Traveling", icon: <Plane className="w-5 h-5" /> }
  ]
};

// --- Components ---

const CursorFollower = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div 
      className="cursor-follower hidden md:block"
      animate={{ x: mousePos.x - 10, y: mousePos.y - 10 }}
      transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
    />
  );
};

const Navbar = ({ theme, toggleTheme }: { theme: string, toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-500 rounded-3xl px-6 py-3 flex justify-between items-center ${scrolled ? 'bg-glass-dark shadow-glow-brand' : 'bg-transparent'}`}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-black tracking-tighter"
          >
            <span className="text-brand-500">CLARA</span>
            <span className="text-accent-pink">.Z</span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="px-4 py-2 text-sm font-bold text-slate-400 hover:text-brand-500 hover:bg-white/5 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={toggleTheme}
              className="p-2 ml-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-brand-500"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a 
              href="#contact"
              className="ml-4 px-6 py-2.5 bg-brand-600 text-white text-sm font-black rounded-xl shadow-lg hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all"
            >
              Hubungi Saya
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 text-brand-500">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-brand-500 hover:bg-white/10 rounded-xl transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-2 md:hidden bg-glass-dark backdrop-blur-3xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden z-50 p-6"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-lg font-bold text-slate-400 hover:text-brand-500 transition-all"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-4 py-4 bg-brand-600 text-white text-center font-black rounded-2xl shadow-lg"
              >
                Hubungi Saya
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle, center = false }: { children: React.ReactNode, subtitle?: string, center?: boolean }) => (
  <div className={`mb-16 ${center ? 'text-center flex flex-col items-center' : ''}`}>
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-500 text-xs font-black tracking-widest uppercase mb-4 border border-brand-500/20"
    >
      {children}
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight tracking-tight"
    >
      {subtitle}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 100 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="h-2 bg-brand-500 rounded-full"
    />
  </div>
);

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent, type: 'whatsapp' | 'email') => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    if (type === 'email') {
      const body = `Halo Clara,%0D%0A%0D%0ANama: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0APesan:%0D%0A${message}`;
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.contact.email}&su=${encodeURIComponent(subject || 'Kontak Portfolio')}&body=${body}`;
      window.open(gmailUrl, '_blank');
    } else {
      const text = `Halo Clara Zevanya,%0D%0A%0D%0ANama: ${name}%0D%0AEmail: ${email}%0D%0ASubjek: ${subject}%0D%0A%0D%0APesan: ${message}`;
      window.open(`https://wa.me/${profile.contact.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    }

    setIsSent(true);
    setTimeout(() => { setIsSent(false); setFormData({ name: '', email: '', subject: '', message: '' }); }, 3000);
  };

  return (
    <div className="min-h-screen mesh-gradient-v2 font-sans overflow-x-hidden">
      <CursorFollower />
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-brand-500 z-[60] origin-left" style={{ scaleX }} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-56 md:pb-40 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-brand-600/20 rounded-full blur-[140px] animate-pulse-slow" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-accent-pink/15 rounded-full blur-[120px] animate-pulse-slow" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-brand-500/10 border border-brand-500/20 mb-10"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
              </span>
              <span className="text-sm font-black tracking-tight uppercase">Tersedia untuk Proyek Baru</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-9xl font-display font-black leading-[0.85] mb-10 tracking-tighter"
            >
              Visualisasi <br />
              <span className="text-gradient-vibrant">Kesempurnaan.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-3xl text-slate-400 font-medium mb-12 max-w-3xl leading-relaxed"
            >
              Halo, saya <span className="text-brand-500 font-black">{profile.name}</span>, 
              seorang <span className="text-accent-pink font-black italic">{profile.title}</span> yang berdedikasi menciptakan karya digital berdampak tinggi.
            </motion.p>

            <div className="flex flex-wrap justify-center gap-6">
              <motion.a 
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="px-12 py-6 bg-brand-600 text-white rounded-[2rem] font-black text-xl shadow-2xl shadow-brand-500/30 flex items-center gap-4"
              >
                Mulai Proyek
                <ChevronRight size={24} />
              </motion.a>
              <motion.div className="flex gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => alert('Mengunduh CV dalam format PDF...')}
                  className="px-8 py-6 bg-glass-dark border border-white/10 rounded-[2rem] font-black text-lg flex items-center gap-3"
                >
                  <Download size={20} className="text-brand-500" />
                  Unduh PDF
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => alert('Mengunduh CV dalam format JPG...')}
                  className="px-8 py-6 bg-glass-dark border border-white/10 rounded-[2rem] font-black text-lg flex items-center gap-3"
                >
                  <ImageIcon size={20} className="text-accent-pink" />
                  Unduh JPG
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading subtitle="Membangun cerita melalui desain dan kata.">
                Tentang Saya
              </SectionHeading>
              
              <p className="text-2xl text-slate-400 leading-relaxed mb-12 font-medium">
                {profile.summary}
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <MapPin className="text-brand-500" />, label: 'Lokasi', value: profile.contact.location },
                  { icon: <Mail className="text-accent-pink" />, label: 'Email', value: profile.contact.email },
                  { icon: <Phone className="text-accent-amber" />, label: 'Telepon', value: profile.contact.phone },
                  { icon: <Globe className="text-accent-cyan" />, label: 'Bahasa', value: 'ID, EN, JV' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 p-6 rounded-[2rem] bg-glass border border-white/5 group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-base font-bold truncate max-w-[180px]">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6 pt-12">
                <div className="bento-card-v2 aspect-square flex flex-col items-center justify-center text-center group">
                  <Palette size={40} className="text-brand-500 mb-4 group-hover:scale-125 transition-transform" />
                  <h4 className="text-2xl font-black">Desain</h4>
                </div>
                <div className="bento-card-v2 aspect-square flex flex-col items-center justify-center text-center group">
                  <Edit size={40} className="text-accent-pink mb-4 group-hover:scale-125 transition-transform" />
                  <h4 className="text-2xl font-black">Copy</h4>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                <div className="bento-card-v2 aspect-square flex flex-col items-center justify-center text-center group">
                  <Code size={40} className="text-accent-cyan mb-4 group-hover:scale-125 transition-transform" />
                  <h4 className="text-2xl font-black">Teknis</h4>
                </div>
                <div className="bento-card-v2 aspect-square flex flex-col items-center justify-center text-center group">
                  <Briefcase size={40} className="text-accent-amber mb-4 group-hover:scale-125 transition-transform" />
                  <h4 className="text-2xl font-black">Admin</h4>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading center subtitle="Menguasai alat untuk hasil maksimal.">
            Keahlian
          </SectionHeading>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {profile.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bento-card-v2 group relative overflow-hidden p-8 rounded-[3rem]"
              >
                <div className="flex items-center justify-between mb-10">
                  <div className={`w-16 h-16 bg-linear-to-br ${skill.color} rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                    {skill.icon}
                  </div>
                  <p className="text-5xl font-display font-black opacity-10 group-hover:opacity-20 transition-colors">
                    {skill.level}%
                  </p>
                </div>
                <h3 className="text-3xl font-display font-black mb-8">{skill.name}</h3>
                <div className="relative h-4 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                    className={`absolute top-0 left-0 h-full bg-linear-to-r ${skill.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Jejak pertumbuhan profesional saya.">
            Pengalaman Kerja
          </SectionHeading>

          <div className="space-y-8">
            {profile.experience.map((exp, index) => (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bento-card-v2 p-10 rounded-[3rem]"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <span className="px-5 py-1.5 rounded-full bg-brand-500/10 text-brand-500 text-sm font-black uppercase tracking-widest border border-brand-500/20">
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2 text-slate-500 font-bold">
                        <MapPin size={18} className="text-accent-pink" />
                        {exp.location}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-display font-black mb-4 group-hover:text-brand-500 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-xl font-bold text-accent-cyan mb-6">{exp.company}</p>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-4xl">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bento-card-v2 p-12 md:p-24 relative overflow-hidden rounded-[4rem]">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <SectionHeading subtitle="Mari bangun sesuatu yang luar biasa.">
                  Hubungi Saya
                </SectionHeading>
                <p className="text-2xl text-slate-400 mb-16 max-w-md leading-relaxed font-medium">
                  Punya ide proyek? Saya selalu terbuka untuk diskusi kreatif. Silakan isi formulir di samping untuk menghubungi saya langsung.
                </p>
                
                <div className="space-y-8">
                  {[
                    { icon: <Mail size={24} />, label: 'Email', value: profile.contact.email, color: 'text-brand-500' },
                    { icon: <Phone size={24} />, label: 'WhatsApp', value: profile.contact.phone, color: 'text-accent-pink' },
                    { icon: <MapPin size={24} />, label: 'Lokasi', value: profile.contact.location, color: 'text-accent-cyan' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6">
                      <div className={`w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 ${item.color}`}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                        <p className="text-xl font-bold">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-glass-dark p-10 md:p-16 rounded-[4rem] shadow-2xl border border-white/10"
              >
                <form className="space-y-8">
                  <div className="space-y-4">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-2">Nama Anda</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-3xl focus:outline-none focus:border-brand-500 transition-all font-bold" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-2">Alamat Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-3xl focus:outline-none focus:border-brand-500 transition-all font-bold" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-2">Subjek</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-3xl focus:outline-none focus:border-brand-500 transition-all font-bold" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-2">Pesan</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={4} required className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-3xl focus:outline-none focus:border-brand-500 transition-all font-bold resize-none" />
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={(e) => handleSubmit(e, 'whatsapp')}
                      disabled={isSent}
                      className={`py-6 rounded-3xl font-black text-lg transition-all shadow-xl flex items-center justify-center gap-3 ${isSent ? 'bg-slate-700' : 'bg-emerald-600 text-white hover:bg-emerald-500'}`}
                    >
                      <MessageCircle size={20} />
                      WhatsApp
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={(e) => handleSubmit(e, 'email')}
                      disabled={isSent}
                      className={`py-6 rounded-3xl font-black text-lg transition-all shadow-xl flex items-center justify-center gap-3 ${isSent ? 'bg-slate-700' : 'bg-brand-600 text-white hover:bg-brand-500'}`}
                    >
                      <Mail size={20} />
                      Email
                    </motion.button>
                  </div>
                  {isSent && (
                    <p className="text-center text-emerald-500 font-bold animate-pulse">Pesan sedang diproses...</p>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-16">
            <div className="text-4xl font-display font-black tracking-tighter">
              <span className="text-brand-500">CLARA</span>
              <span className="text-accent-pink">.Z</span>
            </div>
            <p className="text-slate-500 text-sm font-black uppercase tracking-widest">
              © {new Date().getFullYear()} Clara Zevanya. Dibuat dengan <Heart size={16} className="inline text-brand-500 fill-current" /> di Jakarta.
            </p>
            <div className="flex gap-6">
              {[
                { icon: <Instagram size={24} />, href: profile.contact.socials.instagram },
                { icon: <Linkedin size={24} />, href: profile.contact.socials.linkedin },
                { icon: <Github size={24} />, href: profile.contact.socials.github }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-slate-500 hover:text-brand-500 transition-all">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
