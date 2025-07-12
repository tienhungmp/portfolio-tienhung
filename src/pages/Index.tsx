import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Calendar, GraduationCap, Briefcase, Code, Database, Smartphone, Globe, Server, Menu, Zap, ChevronLeft, ChevronRight, X, Star, Users, Clock, ArrowRight, Trophy, CheckCircle, FileCode } from 'lucide-react';

// Import generated images
import profilePhoto from '@/assets/profile-photo.jpg';
import projectSoja from '@/assets/project-soja.png';
import projectOndia from '@/assets/project-ondia.png';
import projectVinfast from '@/assets/project-vinfast.png';
import projectDashboard from '@/assets/project-dashboard.jpg';
import projectFreemind from '@/assets/project-freemind.png';
import projectHomestay from '@/assets/project-homestay.png';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState('all');
  const [activeSkillTab, setActiveSkillTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const projectsPerPage = 6;

  // Typing animation effect
  useEffect(() => {
    const fullText = "Hi, I'm Tiến Hưng";
    let currentIndex = 0;
    const typingSpeed = 100; // milliseconds per character

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setTypingText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, typingSpeed);
      } else {
        setIsTypingComplete(true);
      }
    };

    // Start typing animation after a short delay
    const startDelay = setTimeout(typeText, 500);
    
    return () => clearTimeout(startDelay);
  }, []);

  // Intersection Observer for revealing sections
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.reveal');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

    const handleViewResume = () => {
      // Create link element
      const link = document.createElement('a');
      
      // Set link attributes for downloading
      link.href = '/resume.pdf'; // Make sure resume.pdf exists in public folder
      link.download = 'TienHung_Resume.pdf'; // Name for downloaded file
      
      // Append link to document, trigger click, then remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

  // Extended projects data with categories and detailed info
  const allProjects = [
    {
      title: "Soja Vietnam - E-commerce Application",
      description: "Nền tảng thương mại điện tử quản lý sản phẩm, đơn hàng và tài khoản người dùng",
      longDescription:
        "Dự án thương mại điện tử hỗ trợ hệ thống tích điểm, chương trình giảm giá và quản lý đơn hàng. Tối ưu hóa cơ sở dữ liệu và xây dựng hệ thống backend hiệu quả với Node.js và PostgreSQL.",
      image: projectSoja,
      tech: ["Node.js", "Express.js", "PostgreSQL"],
      features: [
        "Quản lý sản phẩm và đơn hàng",
        "Hệ thống tích điểm và giảm giá",
        "Authentication & Authorization",
        "Tối ưu hóa schema và hiệu năng cơ sở dữ liệu"
      ],
      metrics: {
        users: "5,000+",
        uptime: "99.8%",
        performance: "90/100"
      },
      github: "https://github.com",
      demo: "https://soja.co",
      category: "web",
      featured: true,
      duration: "4 months",
      team: "4 developers",
      client: "Soja Vietnam"
    },
    {
      title: "Salesforce VinFast Vietnam",
      description: "Phát triển front-end trên nền tảng Salesforce Commerce Cloud",
      longDescription:
        "Tham gia xây dựng giao diện người dùng, tích hợp API Loyalty và Mulesoft, xử lý animation và slicing HTML/SCSS cho trang web thương mại của VinFast.",
      image: projectVinfast,
      tech: ["SFCC", "HTML", "SCSS", "Bootstrap", "JavaScript", "Node.js"],
      features: [
        "Tích hợp API Loyalty và Mulesoft",
        "Responsive UI",
        "Animation & giao diện người dùng",
        "Salesforce Commerce Cloud integration"
      ],
      metrics: {
        users: "10,000+",
        uptime: "99.9%",
        performance: "88/100"
      },
      github: "https://github.com",
      demo: "https://vinfastauto.com",
      category: "web",
      featured: true,
      duration: "3 months",
      team: "5 developers",
      client: "VinFast"
    },
    {
      title: "ondia.vn - E-commerce Website",
      description: "Nền tảng bán hàng trực tuyến với React và Node.js",
      longDescription:
        "Xây dựng frontend và backend cho website thương mại điện tử. Hỗ trợ quản lý giỏ hàng, đơn hàng, người dùng, và thanh toán. Ứng dụng được deploy trên VPS với Nginx và PM2.",
      image: projectOndia,
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      features: [
        "Giỏ hàng, đơn hàng và người dùng",
        "JWT authentication",
        "Responsive design",
        "Triển khai VPS với PM2 & Nginx"
      ],
      metrics: {
        users: "2,000+",
        uptime: "99.8%",
        performance: "93/100"
      },
      github: "https://github.com",
      demo: "https://ondia.vn",
      category: "web",
      featured: true,
      duration: "4 months",
      team: "2 developers",
      client: "Personal Project"
    },
    {
      title: "Freemind Admin Dashboard",
      description: "Hệ thống quản trị nội dung và người dùng",
      longDescription:
        "Xây dựng REST API hỗ trợ quản lý người dùng, phân quyền, và cập nhật dữ liệu real-time. Tối ưu hóa hệ thống backend với Node.js và MongoDB.",
      image: projectDashboard,
      tech: ["Node.js", "Express.js", "MongoDB"],
      features: [
        "Phân quyền người dùng (RBAC)",
        "RESTful API",
        "Real-time updates",
        "Quản lý nội dung hệ thống"
      ],
      metrics: {
        users: "500+ admin users",
        uptime: "99.9%",
        performance: "92/100"
      },
      github: "https://github.com",
      demo: "https://freemind.vn/admin",
      category: "backend",
      featured: false,
      duration: "3 months",
      team: "3 developers",
      client: "Freemind"
    },
    {
      title: "Freemind Company Website",
      description: "Giao diện giới thiệu công ty và dịch vụ",
      longDescription:
        "Thiết kế UI website công ty, hỗ trợ responsive layout, tích hợp thông tin giới thiệu và liên hệ. Cải thiện trải nghiệm người dùng và tối ưu SEO cơ bản.",
      image: projectFreemind,
      tech: ["HTML", "SCSS", "JavaScript", "Bootstrap", "Node.js"],
      features: [
        "Giao diện đẹp, dễ sử dụng",
        "Responsive trên mọi thiết bị",
        "Tối ưu tốc độ và hiển thị",
        "Tích hợp thông tin dịch vụ công ty"
      ],
      metrics: {
        users: "1,000+ lượt truy cập",
        uptime: "99.9%",
        performance: "94/100"
      },
      github: "https://github.com",
      demo: "https://freemind.vn",
      category: "web",
      featured: false,
      duration: "2 months",
      team: "2 developers",
      client: "Freemind"
    },
    {
      title: "Homestay Booking Platform",
      description: "Nền tảng đặt phòng homestay và đánh giá AI",
      longDescription:
        "Thiết kế giao diện người dùng cho nền tảng đặt phòng homestay, hỗ trợ responsive layout, tích hợp tính năng tìm kiếm, đặt phòng và đánh giá. Hệ thống sử dụng AI để phân tích bình luận tiêu cực nhằm cải thiện chất lượng dịch vụ. Tối ưu trải nghiệm người dùng và hỗ trợ SEO cơ bản.",
      image: projectHomestay,
      tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "TensorFlow.js"],
      features: [
        "Tìm kiếm và đặt phòng homestay dễ dàng",
        "Giao diện thân thiện, hiển thị tốt trên mọi thiết bị",
        "Phân tích AI giúp phát hiện và lọc bình luận tiêu cực",
        "Tối ưu hiệu năng và trải nghiệm người dùng",
        "Tích hợp thông tin chi tiết về homestay và đánh giá từ người dùng"
      ],
      metrics: {
        users: "Thử nghiệm",
        uptime: "99.9%",
        performance: "92/100"
      },
      github: "https://github.com/your-username/homestay-booking",
      demo: "https://homestay-booking-demo.com",
      category: "web",
      featured: true,
      duration: "3 months",
      team: "1 developers",
      client: "HomestayConnect"
    }
  ];
  

  // Add functions to handle modal
  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  // Filter projects based on active tab
  const getFilteredProjects = () => {
    if (activeTab === 'all') return allProjects;
    if (activeTab === 'featured') return allProjects.filter(p => p.featured);
    return allProjects.filter(p => p.category === activeTab);
  };

  const filteredProjects = getFilteredProjects();
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  // Reset to first page when tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Project categories with counts
  const getTabCounts = () => {
    return {
      all: allProjects.length,
      featured: allProjects.filter(p => p.featured).length,
      web: allProjects.filter(p => p.category === 'web').length,
      mobile: allProjects.filter(p => p.category === 'mobile').length,
      backend: allProjects.filter(p => p.category === 'backend').length
    };
  };

  const tabCounts = getTabCounts();

  const skills = [
    { name: "React", icon: Code, category: "frontend" },
    { name: "TypeScript", icon: FileCode , category: "frontend" },
    { name: "Tailwind CSS", icon: Code, category: "frontend" },
    
    { name: "Node.js", icon: Server, category: "backend" },
    { name: "Express.js", icon: Server, category: "backend" },
    { name: "Python", icon: Server, category: "backend" },
    
    { name: "MongoDB", icon: Database, category: "database" },
    { name: "PostgreSQL", icon: Database, category: "database" },
    { name: "MySQL", icon: Database, category: "database" },
    { name: "Redis", icon: Database, category: "database" },
    
    { name: "Docker", icon: Globe, category: "devops" },
    { name: "AWS", icon: Globe, category: "devops" },
  ];

  // Filter skills based on active skill tab
  const getFilteredSkills = () => {
    if (activeSkillTab === 'all') return skills;
    return skills.filter(skill => skill.category === activeSkillTab);
  };

  const filteredSkills = getFilteredSkills();

  // Skill categories with counts
  const getSkillTabCounts = () => {
    return {
      all: skills.length,
      frontend: skills.filter(s => s.category === 'frontend').length,
      backend: skills.filter(s => s.category === 'backend').length,
      database: skills.filter(s => s.category === 'database').length,
      devops: skills.filter(s => s.category === 'devops').length,
      mobile: skills.filter(s => s.category === 'mobile').length
    };
  };

  const skillTabCounts = getSkillTabCounts();

  const timeline = [
    {
      year: "2025",
      type: "project",
      title: "Homestay Booking Platform",
      company: "Personal Project",
      description: "Xây dựng nền tảng đặt phòng homestay và đánh giá AI với React, Tailwind CSS, Node.js, Express, MongoDB, và TensorFlow.js."
    },
    {
      year: "2024",
      type: "project",
      title: "ondia.vn - E-commerce Project",
      company: "Personal Project",
      description: "Xây dựng nền tảng bán hàng trực tuyến full-stack với React.js và Node.js. Deploy trên VPS với Nginx và PM2."
    },
    {
      year: "2023",
      type: "work",
      title: "Web Developer",
      company: "Freemind Company",
      description: "Phát triển backend và frontend cho nhiều dự án như Soja Vietnam, VinFast SFCC, QR Code Tool, Admin Dashboard."
    },
    {
      year: "2023",
      type: "internship",
      title: "Web Developer Intern",
      company: "Freemind Company",
      description: "Thực tập tại Freemind, thiết kế giao diện website và làm quen với phát triển frontend và REST API."
    },
    {
      year: "2019 - 2024",
      type: "education",
      title: "Cử nhân Kỹ thuật Phần mềm",
      company: "Đại học Bách Khoa - Đà Nẵng",
      description: "Sinh viên chuyên ngành Kỹ thuật Phần mềm, GPA: 3.25/4. Tập trung vào phát triển phần mềm và giải quyết vấn đề."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
           {/* Navigation */}
           <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-card-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="relative">
              <div className="font-bold text-2xl gradient-text animate-pulse">
                Portfolio
              </div>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-primary opacity-60"></div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {['hero', 'projects', 'skills', 'about', 'experience', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`relative px-4 py-2 capitalize rounded-lg transition-all duration-300 hover:bg-primary/10 ${
                    activeSection === section 
                      ? 'text-primary bg-primary/10 shadow-lg' 
                      : 'text-foreground-muted hover:text-primary'
                  }`}
                >
                  {section === 'hero' ? 'Home' : section}
                  {activeSection === section && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-primary rounded-full"></div>
                  )}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <Menu className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-card-border/50 pt-4">
              <div className="flex flex-col space-y-2">
                {['hero', 'projects', 'skills', 'about', 'experience', 'contact'].map((section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    className={`relative px-4 py-3 capitalize rounded-lg transition-all duration-300 hover:bg-primary/10 ${
                      activeSection === section 
                        ? 'text-primary bg-primary/10 shadow-lg' 
                        : 'text-foreground-muted hover:text-primary'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {section === 'hero' ? 'Home' : section}
                    {activeSection === section && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-primary rounded-full"></div>
                    )}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center reveal active relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-accent/10 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-block">
                <Badge className="animated-gradient text-primary-foreground px-6 py-3 text-sm font-medium rounded-full shadow-lg">
                  <Zap className="w-4 h-4 mr-2 animate-bounce" />
                  Available for Work
                </Badge>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-fade-in">
                  <span className="inline-block">
                    {typingText.includes('Tiến Hưng') ? (
                      <>
                        Hi, I'm <span className="gradient-text bg-clip-text text-transparent">Tiến Hưng</span>
                      </>
                    ) : (
                      typingText
                    )}
                    {!isTypingComplete && (
                      <span className="animate-pulse text-primary ml-1">|</span>
                    )}
                  </span>
                </h1>
                <div className="relative">
                  <h2 className="text-2xl lg:text-4xl font-semibold text-foreground-muted opacity-90">
                    Web Developer
                  </h2>
                  <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-primary rounded-full opacity-60"></div>
                </div>
              </div>
              
              <p className="text-lg lg:text-xl text-foreground-muted max-w-2xl leading-relaxed">
                Tôi chuyên phát triển các ứng dụng web hiện đại với <span className="text-primary font-semibold">React</span>, <span className="text-primary font-semibold">Node.js</span> và công nghệ cloud. 
                Với <span className="text-secondary font-semibold">1.5+ năm kinh nghiệm</span>, tôi tạo ra những sản phẩm có giao diện đẹp và hiệu năng cao.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary px-10 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <Mail className="w-5 h-5 mr-3" />
                  Hire Me
                </Button>
                <Button variant="outline" className="btn-secondary px-10 py-4 text-lg rounded-full border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300" onClick={handleViewResume}>
                  <ExternalLink className="w-5 h-5 mr-3" />
                  View Resume
                </Button>
              </div>
              
              <div className="flex justify-center lg:justify-start space-x-4">
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" }, 
                  { icon: Mail, href: "#", label: "Email" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className="group relative p-4 glass-card rounded-2xl hover:glow-primary transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 group-hover:text-primary transition-colors" />
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-background text-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {social.label}
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative group cursor-pointer">
                {/* Multiple layered glow effects with smoother animations */}
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse group-hover:opacity-40 transition-all duration-700 ease-in-out"></div>
                <div className="absolute inset-0 bg-gradient-secondary rounded-full blur-2xl opacity-15 animate-pulse group-hover:opacity-30 transition-all duration-1000 ease-in-out" style={{animationDelay: '1s'}}></div>
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-10 animate-pulse group-hover:opacity-25 transition-all duration-500 ease-in-out" style={{animationDelay: '2s'}}></div>
                
                {/* Smooth rotating rings */}
                <div className="absolute inset-0 rounded-full border border-primary/20 opacity-30 animate-spin group-hover:border-primary/40 transition-all duration-300" style={{animationDuration: '20s'}}></div>
                <div className="absolute inset-2 rounded-full border border-secondary/15 opacity-25 animate-spin group-hover:border-secondary/30 transition-all duration-300" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
                
                {/* Main profile container with enhanced smoothness */}
                <div className="relative p-3 glass-card rounded-full transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-2xl">
                  <div className="relative overflow-hidden rounded-full">
                    <img
                      src={profilePhoto}
                      alt="Tiến Hưng - Web Developer"
                      className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-2"
                      style={{
                        animation: 'float 8s ease-in-out infinite',
                        filter: 'brightness(1.05) contrast(1.1)'
                      }}
                    />
                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                
                {/* Smooth floating decoration elements */}
                <div 
                  className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-60 transition-all duration-300 group-hover:scale-125 group-hover:opacity-80"
                  style={{
                    animation: 'float 6s ease-in-out infinite',
                    animationDelay: '0s'
                  }}
                ></div>
                <div 
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full opacity-60 transition-all duration-300 group-hover:scale-125 group-hover:opacity-80"
                  style={{
                    animation: 'float 6s ease-in-out infinite',
                    animationDelay: '2s'
                  }}
                ></div>
                <div 
                  className="absolute top-1/4 -left-8 w-4 h-4 bg-accent rounded-full opacity-40 transition-all duration-300 group-hover:scale-150 group-hover:opacity-70"
                  style={{
                    animation: 'float 7s ease-in-out infinite',
                    animationDelay: '4s'
                  }}
                ></div>
                <div 
                  className="absolute bottom-1/4 -right-8 w-5 h-5 bg-primary/60 rounded-full opacity-50 transition-all duration-300 group-hover:scale-125 group-hover:opacity-80"
                  style={{
                    animation: 'float 5s ease-in-out infinite',
                    animationDelay: '1s'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Featured Projects</h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Khám phá portfolio dự án đa dạng qua các danh mục và công nghệ khác nhau
            </p>
          </div>
          
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 glass-card mb-12 h-auto">
              <TabsTrigger value="all" className="relative flex flex-col sm:flex-row items-center gap-1 py-3 text-xs sm:text-sm">
                <span>All Projects</span>
                <Badge variant="secondary" className="text-xs">
                  {tabCounts.all}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="featured" className="relative flex flex-col sm:flex-row items-center gap-1 py-3 text-xs sm:text-sm">
                <span>Featured</span>
                <Badge variant="secondary" className="text-xs">
                  {tabCounts.featured}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="web" className="relative flex flex-col sm:flex-row items-center gap-1 py-3 text-xs sm:text-sm">
                <span>Web Apps</span>
                <Badge variant="secondary" className="text-xs">
                  {tabCounts.web}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="mobile" className="relative flex flex-col sm:flex-row items-center gap-1 py-3 text-xs sm:text-sm">
                <span>Mobile</span>
                <Badge variant="secondary" className="text-xs">
                  {tabCounts.mobile}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="backend" className="relative flex flex-col sm:flex-row items-center gap-1 py-3 text-xs sm:text-sm">
                <span>Backend</span>
                <Badge variant="secondary" className="text-xs">
                  {tabCounts.backend}
                </Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[600px]">
                {currentProjects.map((project, index) => (
                  <Card key={index} className="glass-card group overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="backdrop-blur-md">
                            <Github className="w-4 h-4 mr-1" />
                            Code
                          </Button>
                          <Button 
                            size="sm" 
                            className="backdrop-blur-md"
                            onClick={() => openProjectModal(project)}
                          >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Demo
                          </Button>
                        </div>
                      </div>
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-gradient-primary text-primary-foreground">
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <Badge variant="outline" className="text-xs capitalize">
                          {project.category}
                        </Badge>
                      </div>
                      <p className="text-foreground-muted mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 mt-12">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="glass-card"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>
                  
                  <div className="flex space-x-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 ${
                          currentPage === page 
                            ? "bg-gradient-primary text-primary-foreground" 
                            : "glass-card"
                        }`}
                      >
                        {page}
                      </Button>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="glass-card"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              )}

              <div className="text-center mt-6 text-sm text-foreground-muted">
                Showing {currentProjects.length} of {filteredProjects.length} projects
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-background-secondary reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Technical Skills</h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Công nghệ và framework mà tôi sử dụng hàng ngày để tạo ra những sản phẩm tuyệt vời
            </p>
          </div>
          
          <Tabs value={activeSkillTab} onValueChange={setActiveSkillTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 glass-card mb-12 max-w-4xl mx-auto h-auto">
              <TabsTrigger value="all" className="relative flex flex-col sm:flex-row items-center gap-1 py-3 text-xs sm:text-sm">
                <span>All Skills</span>
                <Badge variant="secondary" className="text-xs">
                  {skillTabCounts.all}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="frontend" className="relative flex flex-col sm:flex-row items-center gap-1 py-3 text-xs sm:text-sm">
                <span>Frontend</span>
                <Badge variant="secondary" className="text-xs">
                  {skillTabCounts.frontend}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="backend" className="relative flex flex-col sm:flex-row items-center gap-1 py-3 text-xs sm:text-sm">
                <span>Backend</span>
                <Badge variant="secondary" className="text-xs">
                  {skillTabCounts.backend}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="database" className="relative flex flex-col sm:flex-row items-center gap-1 py-3 text-xs sm:text-sm">
                <span>Database</span>
                <Badge variant="secondary" className="text-xs">
                  {skillTabCounts.database}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="devops" className="relative flex flex-col sm:flex-row items-center gap-1 py-3 text-xs sm:text-sm">
                <span>DevOps</span>
                <Badge variant="secondary" className="text-xs">
                  {skillTabCounts.devops}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="mobile" className="relative flex flex-col sm:flex-row items-center gap-1 py-3 text-xs sm:text-sm">
                <span>Mobile</span>
                <Badge variant="secondary" className="text-xs">
                  {skillTabCounts.mobile}
                </Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeSkillTab} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 min-h-[300px]">
                {filteredSkills.map((skill, index) => (
                  <Card key={index} className="glass-card p-6 text-center group hover:glow-primary transition-all duration-300 hover:scale-105">
                    <skill.icon className="w-16 h-16 mx-auto mb-4 text-primary group-hover:text-secondary transition-colors duration-300" />
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-8 text-sm text-foreground-muted">
                Showing {filteredSkills.length} skills in {activeSkillTab === 'all' ? 'all categories' : activeSkillTab}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 reveal">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 gradient-text">About Me</h2>
              <div className="space-y-6 text-lg text-foreground-muted">
                <p>
                  Xin chào! Tôi là Tiến Hưng, một Web Developer đam mê tạo ra những trải nghiệm web 
                  tuyệt vời. Với hơn 1.5 năm kinh nghiệm trong ngành, tôi đã làm việc với nhiều công nghệ 
                  từ frontend đến backend.
                </p>
                <p>
                  Tôi tin rằng code tốt không chỉ hoạt động mà còn phải dễ đọc, dễ bảo trì và có thể mở rộng. 
                  Tôi luôn cập nhật những công nghệ mới nhất và áp dụng best practices trong mọi dự án.
                </p>
                <p>
                  Khi không code, tôi thích đọc sách về công nghệ, chơi game, và khám phá những địa điểm mới. 
                  Tôi cũng tích cực tham gia các cộng đồng developer và chia sẻ kiến thức với mọi người.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-secondary rounded-2xl blur-3xl opacity-20"></div>
              <Card className="relative glass-card p-8">
                <h3 className="text-2xl font-semibold mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-primary" />
                    <span>Da Nang, Vietnam</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-3 text-primary" />
                    <span>1+ years experience</span>
                  </div>
                  <div className="flex items-center">
                    <Code className="w-5 h-5 mr-3 text-primary" />
                    <span>6+ projects completed</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 mr-3 text-primary" />
                    <span>Always learning new tech</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 bg-background-secondary reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Experience & Education</h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Hành trình phát triển sự nghiệp và học tập của tôi qua từng giai đoạn
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-primary"></div>
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                    <Card className="glass-card p-6">
                      <div className="flex items-center mb-3">
                        {item.type === 'work' ? (
                          <Briefcase className="w-5 h-5 mr-2 text-primary" />
                        ) : (
                          <GraduationCap className="w-5 h-5 mr-2 text-secondary" />
                        )}
                        <Badge variant={item.type === 'work' ? 'default' : 'secondary'}>
                          {item.year}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-primary mb-3">{item.company}</p>
                      <p className="text-foreground-muted">{item.description}</p>
                    </Card>
                  </div>
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-background rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Let's Work Together</h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Bạn có một dự án thú vị? Hãy liên hệ với tôi để thảo luận về cách chúng ta có thể hợp tác
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-foreground-muted">tienhunggnx@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-foreground-muted">0984 085 615</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-foreground-muted">Da Nang, Vietnam</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <a href="#" className="p-3 glass-card rounded-full hover:glow-primary transition-all">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 glass-card rounded-full hover:glow-primary transition-all">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 glass-card rounded-full hover:glow-primary transition-all">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input className="bg-background-secondary border-card-border" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input className="bg-background-secondary border-card-border" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input className="bg-background-secondary border-card-border" placeholder="Project inquiry" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    className="bg-background-secondary border-card-border min-h-32" 
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button className="btn-primary w-full">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-card-border">
        <div className="container mx-auto px-6">
          <div className="text-center text-foreground-muted">
            <p>&copy; 2024 Tiến Hưng. All rights reserved. Built with React & Tailwind CSS</p>
          </div>
        </div>
      </footer>

      {/* Project Details Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-background/95 backdrop-blur-2xl rounded-3xl border border-border/50 shadow-2xl overflow-hidden animate-scale-in">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-20 rounded-full bg-background/80 backdrop-blur-sm hover:bg-destructive/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </Button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
              {/* Hero Section with Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Hero Content */}
                <div className="absolute bottom-6 left-6 right-20">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-3xl font-bold text-white">
                      {selectedProject.title}
                    </h2>
                    {selectedProject.featured && (
                      <Badge className="bg-gradient-primary text-primary-foreground animate-pulse">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  <p className="text-white/90 text-lg mb-3">
                    {selectedProject.description}
                  </p>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {selectedProject.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 hover:border-primary/40 transition-colors">
                    <Users className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">Users</p>
                    <p className="text-xl font-bold gradient-text">
                      {selectedProject.metrics?.users || "10K+"}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
                    <Zap className="w-6 h-6 mx-auto mb-2 text-emerald-500" />
                    <p className="text-sm text-muted-foreground">Uptime</p>
                    <p className="text-xl font-bold text-emerald-500">
                      {selectedProject.metrics?.uptime || "99.9%"}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
                    <Trophy className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
                    <p className="text-sm text-muted-foreground">Rating</p>
                    <p className="text-xl font-bold text-yellow-500">
                      {selectedProject.metrics?.performance || "A+"}
                    </p>
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* About */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold gradient-text">About Project</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.longDescription || selectedProject.description + " This project showcases modern web development practices with a focus on user experience and performance optimization."}
                    </p>
                    
                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold mb-3">Key Features</h4>
                      <div className="space-y-2">
                        {(selectedProject.features || [
                          "Responsive Design", 
                          "Modern UI/UX", 
                          "Fast Performance", 
                          "SEO Optimized"
                        ]).map((feature: string, index: number) => (
                          <div key={index} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tech & Details */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold gradient-text">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech: string, index: number) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="px-3 py-1 text-xs font-medium hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Project Info */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                        <div>
                          <span className="font-medium">Duration: </span>
                          <span className="text-muted-foreground">{selectedProject.duration || "3 months"}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                        <div>
                          <span className="font-medium">Team: </span>
                          <span className="text-muted-foreground">{selectedProject.team || "3 developers"}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm">
                        <Briefcase className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                        <div>
                          <span className="font-medium">Client: </span>
                          <span className="text-muted-foreground">{selectedProject.client || "Personal Project"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <Button 
                    className="flex-1 btn-primary h-12 text-base font-medium"
                    onClick={() => window.open(selectedProject.demo, '_blank')}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 h-12 text-base font-medium hover:bg-primary/5"
                    onClick={() => window.open(selectedProject.github, '_blank')}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;