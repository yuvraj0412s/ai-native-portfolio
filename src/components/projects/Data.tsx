// File: data.tsx

import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// --- PROJECT DATABASE ---
// This array holds the detailed information for each project.
const PROJECT_CONTENT = [
  {
    title: 'SynQ',
    tagline: 'Find prospects. Start conversations. Close more deals.',
    description:
      'SynQ is an AI-native B2B SaaS platform that transforms LinkedIn into a collaborative revenue engine for founders, agencies, and sales teams. It centralizes multi-account inbox management, automates outreach workflows, and leverages AI for lead classification and reply generation—all within a secure, shared workspace.',
    techStack: [
      'React',
      'TypeScript',
      'Vite',
      'Node.js',
      'Express',
      'Drizzle ORM',
      'PostgreSQL',
      'Supabase',
      'Gemini',
      'Unipile',
      'Paddle',
    ],
    date: '2025',
    links: [
      {
        name: 'Live Demo',
        url: 'https://usesynq.co',
      },
    ],
    images: [
      { src: '/projects/synq-landing.png', alt: 'Landing Page' },
      { src: '/projects/synq-dashboard.png', alt: 'Dashboard' },
      { src: '/projects/synq-inbox.png', alt: 'LinkedIn Inbox' },
      { src: '/projects/synq-team.png', alt: 'Team Collaboration' },
      { src: '/projects/synq-ai.jpg', alt: 'AI Reply Feature' },
      { src: '/projects/synq-billing.jpg', alt: 'Billing & Checkout' },
      { src: '/projects/synq-subscription.jpg', alt: 'Subscription Management' },
      { src: '/projects/synq-analytics.png', alt: 'Analytics & Insights' },
    ],
  },
  {
    title: 'CWT',
    tagline: 'AI-powered market insights from traders, creators, and communities.',
    description:
      'Built a production-grade AI RAG platform that continuously ingests market intelligence from YouTube, X (Twitter), Discord, and other financial communities. It transforms millions of unstructured conversations into searchable knowledge for traders.',
    techStack: [
      'Python',
      'FastAPI',
      'CrewAI',
      'OpenAI API',
      'ChromaDB',
      'Selenium',
      'RAG',
      'Semantic Search',
    ],
    date: 'Sep 2025 – Feb 2026',
    links: [
      {
        name: 'Live Demo',
        url: 'https://www.crowdwisdomtrading.com/',
      },
    ],
    images: [
      { src: '/projects/cwt-landing.png', alt: 'Landing page of Crowd Wisdom Trading' },
      { src: '/projects/cwt-dashboard.png', alt: 'Dashboard' },
      { src: '/projects/cwt-vs-others.png', alt: 'CrowdWisdom vs ChatGPT or Claude' },
      { src: '/projects/cwt-killer-question.png', alt: 'One killer question for the agent' },
    ],
  },
  {
    title: 'Poise',
    tagline: 'See every subscription. Control every renewal.',
    description:
      'Poise is an AI-native SaaS platform that automatically discovers, organizes, and manages software subscriptions by securely scanning email inboxes. It eliminates manual expense tracking, transforming unstructured email data into a centralized financial dashboard.',
    techStack: [
      'React',
      'TypeScript',
      'Vite',
      'Node.js',
      'Express',
      'Supabase',
      'OpenAI API',
      'BullMQ',
      'Redis',
      'Google Cloud Pub/Sub',
      'Railway',
    ],
    date: 'Jan 2026 – Present',
    links: [
      {
        name: 'Live Demo',
        url: 'https://usepoise.com',
      },
    ],
    images: [
      { src: '/projects/poise-landing.png', alt: 'The Landing Page' },
      { src: '/projects/poise-dashboard.png', alt: 'The main Dashboard showing spend trends and metrics' },
      { src: '/projects/poise-subscriptions.png', alt: 'The Subscriptions list view' },
      { src: '/projects/poise-category.png', alt: 'Category view page' },
      { src: '/projects/poise-payables.png', alt: 'Payables page' },
      { src: '/projects/poise-recurring.png', alt: 'Recurring charges page' },
      { src: '/projects/poise-popup.png', alt: 'Subscription pop up view' },
      { src: '/projects/poise-detail.png', alt: 'Subscription detail page' },
      { src: '/projects/poise-history.png', alt: 'Subscription detail page with transaction history and invoice download feature' },
    ],
  },
  {
    title: 'Baghiravan',
    tagline: 'Nature-inspired silhouettes crafted for timeless resort wear.',
    description:
      'Baghiravan is a premium digital editorial showroom developed for luxury fashion designer Mehak Porwal. Built with Next.js and Framer Motion, it serves as an immersive digital storefront designed to feel like a high-end fashion campaign rather than a traditional e-commerce catalogue.',
    techStack: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'Framer Motion',
      'Lenis Scroll',
      'Vercel',
    ],
    date: '2025',
    links: [
      {
        name: 'Live Demo',
        url: 'https://baghiravan.vercel.app',
      },
    ],
    images: [
      { src: '/projects/baghiravan-hero.png', alt: 'Hero or landing page' },
      { src: '/projects/baghiravan-scroll.png', alt: 'Fluid scrolling or parallax effects page' },
      { src: '/projects/baghiravan-collection.png', alt: 'Collection view page' },
      { src: '/projects/baghiravan-product.png', alt: 'Product detail page' },
    ],
  },
  {
    title: 'TravelBooker',
    tagline: 'Search, compare, and book — flights, trains, and buses in one place.',
    description:
      'TravelBooker is a comprehensive full-stack web platform built with Django. It enables users to search, compare, and book flights, trains, and buses through a unified interface, featuring a complete booking workflow from authentication to reservation management.',
    techStack: [
      'Python',
      'Django',
      'SQLite',
      'MySQL',
      'HTML5',
      'CSS3',
      'JavaScript',
      'Bootstrap 5',
    ],
    date: '2023',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/yuvraj0412s/TravelBooker-Full-Stack-Travel-Booking-Platform',
      },
    ],
    images: [
      { src: '/projects/travelbooker-landing.png', alt: 'Landing page or search page' },
      { src: '/projects/travelbooker-result.png', alt: 'Result page' },
    ],
  },
  {
    title: 'Resume Optimizer AI',
    tagline: 'Optimize every application. Maximize every opportunity.',
    description:
      'Resume Optimizer AI is a streamlined AI application built with Streamlit and the Mistral LLM API. It automates the tedious process of tailoring resumes by analyzing uploaded PDFs against target job descriptions, generating skill gap insights, creating interview prep questions, and exporting dynamically optimized, format-preserved resumes.',
    techStack: [
      'Python',
      'Streamlit',
      'Mistral LLM',
      'PyMuPDF',
      'ReportLab',
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/yuvraj0412s/ai-resume-optimizer',
      },
    ],
    images: [
      { src: '/projects/resume-optimizer-agent.png', alt: 'Resume optimizer agent' },
    ],
  },
  {
    title: 'Mehak Porwal',
    tagline: 'A digital showcase for contemporary couture and craftsmanship.',
    description:
      'The Mehak Porwal Portfolio is a responsive, personal branding website developed for a fashion designer to establish her professional online presence. Built with vanilla HTML, CSS, and JavaScript, it serves as an elegant, fast-loading digital showcase for her creative journey, design philosophy, and fashion collections.',
    techStack: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Vercel',
    ],
    date: '2024',
    links: [
      {
        name: 'Live Demo',
        url: 'https://mahek-porwal-portfolio.vercel.app',
      },
    ],
    images: [
      { src: '/projects/mahek-hero.png', alt: 'Main hero section' },
      { src: '/projects/mahek-parallel.png', alt: 'Projects parallel effect' },
      { src: '/projects/mahek-detail.png', alt: 'Project detail page' },
    ],
  },
  {
    // --- NEW AI-NATIVE PORTFOLIO PROJECT ---
    title: 'AI Native Portfolio',
    tagline: 'Meet my AI before you meet me.',
    description:
      'Static portfolios are boring. Mine talks back. The world’s first AI-native portfolio where an AI avatar answers your questions about me in real time.',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Mistral AI API',
      'OpenAI API',
      'Node.js',
      'Vercel',
    ],
    date: 'August 2025', // <-- TODO: Update with your project date
    links: [
      {
        name: 'Live Demo - You Are Here!',
        url: 'https://www.yuvraj.bio',
      },
      {
        name: 'GitHub Repository',
        url: 'https://github.com/yuvraj0412s/ai-native-portfolio',
      },
    ],
    images: [
      { src: '/projects/ai-portfolio-chat.png', alt: 'The AI Native Portfolio chat interface in action' },
      { src: '/projects/ai-portfolio-home.png', alt: 'Homepage of the AI Native Portfolio' },
    ],
  },
  {
    title: 'AgroAI',
    tagline: 'Snap a leaf. Get a diagnosis. Save the crop.',
    description:
      'Snap a leaf, get a diagnosis! This AI-powered web app detects 38 plant diseases with 96% accuracy and gives instant tips on symptoms, causes, and treatment—making plant care smarter and easier for farmers and gardeners.',
    techStack: [
      'Python',
      'Flask',
      'TensorFlow',
      'Keras',
      'Deep Learning',
      'Computer Vision',
      'EfficientNetB4',
      'HTML5',
      'CSS3',
      'JavaScript',
    ],
    date: 'May 2024',
    links: [
      {
        name: 'Live Demo',
        url: 'https://github.com/yuvraj0412s/AgroAI', // <-- TODO: Replace with your live deployment URL.... will do later
      },
      {
        name: 'GitHub Repository',
        url: 'https://github.com/yuvraj0412s/AgroAI', // <-- TODO: Replace with your actual repo URL if different
      },
    ],
    // All seven of screenshots are showcased here
    images: [
      {
        src: '/projects/agroai-home.png',
        alt: 'AgroAI Homepage - AI-Powered Plant Health Companion',
      },
      {
        src: '/projects/agroai-result.png',
        alt: 'AgroAI Analysis Result Page with Prediction and Confidence Score',
      },
      {
        src: '/projects/agroai-guide.png',
        alt: 'AgroAI Crop-wise Disease Guides Page',
      },
      {
        src: '/projects/agroai-guide-detail.png',
        alt: 'AgroAI Tomato Disease Guide Detail Page with Accordion',
      },
      {
        src: '/projects/agroai-how-it-works.png',
        alt: 'AgroAI How It Works Page with a 3-step flowchart',
      },
      {
        src: '/projects/agroai-resources.png',
        alt: 'AgroAI Farming & Plant Care Resources Page',
      },
      {
        src: '/projects/agroai-about.png',
        alt: 'AgroAI About and Contact Page',
      },
    ],
  },
  {
    // --- NEW DJANGO E-COMMERCE PROJECT ---
    title: 'Holohype',
    tagline: 'Smart shopping with AI recommendations baked in.',
    description:
      'HoloHype is a quirky full-stack e-commerce hub with a clever AI that knows what you want, a lightning-fast cart, secure logins, and a super-handy admin panel to keep all the goodies in check.',
    techStack: [
      'Django',
      'Python',
      'Cython',
      'Content-Based Filtering',
      'NumPy',
      'Pandas',
      'JavaScript',
      'AJAX',
      'HTML5',
      'CSS3',
    ],
    date: 'June 2025', // <-- TODO: Update with your project date
    links: [
      {
        name: 'Live Demo',
        url: 'https://github.com/yuvraj0412s/holohype', // <-- TODO: Replace with your live deployment URL
      },
      {
        name: 'GitHub Repository',
        url: 'https://github.com/yuvraj0412s/holohype', // <-- TODO: Update with your actual repo URL
      },
    ],
    images: [
      { src: '/projects/holohype-home.png', alt: 'E-commerce platform homepage with product listings' },
      { src: '/projects/holohype-login.png', alt: 'Modern user login and authentication page' },
      { src: '/projects/holohype-product.png', alt: 'Product detail page with AI-powered recommendations' },
      { src: '/projects/holohype-cart.png', alt: 'Dynamic shopping cart with real-time updates' },
    ],
  },
  {
    // --- NEW REACT PORTFOLIO PROJECT ---
    title: 'Old Portfolio',
    tagline: 'Dark mode, shooting stars, and a cosmic developer showcase.',
    description:
      'A stellar dev portfolio with shooting stars on a dark space background! Built with React, Vite & Tailwind, it features sleek animations, dark/light mode, a filterable skills grid, dynamic project showcase, and a working contact form. A cosmic way to show off my frontend skills!',
    techStack: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Radix UI',
      'Lucide Icons',
      'TypeScript',
      'Responsive Design',
    ],
    date: '2024', // <-- TODO: Update with your project date
    links: [
      {
        name: 'Live Demo',
        url: 'https://yuvraj-portfolio-phi.vercel.app', // <-- TODO: Update if this is the correct link
      },
      {
        name: 'GitHub Repository',
        url: 'https://github.com/yuvraj0412s/react-tailwind-portfolio', // <-- TODO: Update with your actual repo URL
      },
    ],
    images: [
      { src: '/projects/old-portfolio-home.png', alt: 'Homepage of the React portfolio with hero section' },
      { src: '/projects/old-portfolio-about.png', alt: 'About Me section with description' },
      { src: '/projects/old-portfolio-skills.png', alt: 'Filterable skills grid with progress bars' },
      { src: '/projects/old-portfolio-projects.png', alt: 'Project showcase section with cards' },
      { src: '/projects/old-portfolio-contact.png', alt: 'Contact page with form to reach out directly' },
    ],
  },
  {
    // --- YOUTUBE CLONE PROJECT (FROM YOUR README) ---
    title: 'YouTube Clone',
    tagline: 'Pixel-perfect. Fully responsive. Built from scratch.',
    description:
      'A pixel-perfect, responsive clone of the YouTube user interface, built from scratch using modern HTML5 and CSS3. The project showcases a deep understanding of frontend fundamentals, featuring a dynamic video grid built with CSS Grid, a fully responsive sidebar and header created with Flexbox, and a mobile-first design approach that ensures a seamless experience on any device.',
    techStack: [
      'HTML5',
      'CSS3',
      'Flexbox',
      'CSS Grid',
      'Responsive Design',
      'Mobile-First',
    ],
    date: '2023', // <-- TODO: Update with your project date
    links: [
      {
        name: 'Live Demo',
        url: 'https://github.com/yuvraj0412s/YouTube_clone', // <-- TODO: Replace with your live deployment URL
      },
      {
        name: 'GitHub Repository',
        url: 'https://github.com/yuvraj0412s/YouTube_clone', // <-- TODO: Update if your repo name is different
      },
    ],
    images: [
      { src: '/projects/yt-clone-home.png', alt: 'Screenshot of the YouTube Clone project homepage' },
      // Add more screenshots here if you have them!
    ],
  },
  {
    title: 'Latency-Aware Task Partitioning',
    tagline: 'Optimizing edge–fog–cloud offloading with metaheuristic intelligence.',
    description:
      'Proposed a framework for optimal task partitioning and user association across edge–fog–cloud layers, implementing metaheuristic algorithms (ACO, GA, PSO) to solve MILP-based formulations for both dependent and independent subtasks.',
    techStack: [
      'Python',
      'Metaheuristic Algorithms (ACO, GA, PSO)',
      'MILP',
      'Edge Computing',
    ],
    date: 'Ongoing',
    links: [],
    images: [
      {
        src: '/projects/RP_preview.png', // Placeholder image
        alt: 'Latency-Aware Task Partitioning project image 1',
      },
    ],
  },
  {
    title: 'Zomato Global Restaurant Analysis',
    tagline: 'Uncovering hidden dining trends and expansion opportunities worldwide.',
    description:
      'An end-to-end data analytics project using Microsoft Excel to analyze global restaurant data. The project involved data cleaning, custom array formulas, LookUp functions, and conditional formatting. The final dashboard provides actionable business insights into market competition, price distributions, cuisine impact on ratings, and strategic recommendations for expanding into new countries.',
    techStack: [
      'Microsoft Excel',
      'Data Cleaning',
      'Data Visualization',
      'Array Formulas',
      'Pivot Tables',
      'Business Intelligence',
    ],
    date: 'Ongoing (Newton School)',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/yuvraj0412s/Zomato-global-restaurant-expansion-analysis.git',
      },
    ],
    images: [
      { src: '/projects/Zomato_Interactive Zomato Dashboard.png', alt: 'Interactive Zomato Dashboard' },
      { src: '/projects/Zomato_City-Level Expansion & Expenditure Analysis.png', alt: 'City-Level Expansion' },
      { src: '/projects/Zomato_Strategic Recommendations & Action Plan.png', alt: 'Strategic Recommendations' },
    ],
  },
  {
    title: 'IPL / RCB Performance Analytics',
    tagline: 'Deep diving into a decade of cricket data to decode team strategies.',
    description:
      'A comprehensive SQL-based analytics project evaluating historical IPL data, with a specific focus on the Royal Challengers Bangalore (RCB) franchise. Utilized advanced SQL concepts including complex JOINs, window functions, and aggregations to analyze player versatility, toss decision impacts, home-ground advantage, and team win percentages. The analysis culminates in data-driven strategies for player acquisition and auction planning.',
    techStack: [
      'SQL',
      'Advanced Aggregations',
      'Window Functions',
      'Data Analysis',
      'Relational Databases',
      'Business Strategy',
    ],
    date: 'Ongoing (Newton School)',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/yuvraj0412s/RCB-sql-sports-analytics.git',
      },
    ],
    images: [
      { src: '/projects/IPL_RCB_Business Problem & Objectives (hero image).png', alt: 'Business Problem & Objectives' },
      { src: '/projects/IPL_RCB_Home vs Away Venue Dashboard.png', alt: 'Home vs Away Venue Dashboard' },
      { src: '/projects/IPL_RCB_Top Players by Strike Rate Dashboard.png', alt: 'Top Players Dashboard' },
      { src: '/projects/IPL_RCB_Venue-Specific Player Performance Heatmap.png', alt: 'Venue Heatmap' },
    ],
  },
];

// --- COMPONENT & INTERFACE DEFINITIONS ---
// Define interface for project prop
interface ProjectProps {
  title: string;
}

// This component dynamically renders the project details
const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data from the database
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Tagline — shown only when available */}
      {projectData.tagline && (
        <p className="font-sans text-base font-medium tracking-wide text-neutral-500 dark:text-neutral-400 italic">
          {projectData.tagline}
        </p>
      )}

      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- MAIN DATA EXPORT ---
// This is the data used by your main portfolio page.
export const data = [
  // 1. SynQ
  {
    category: 'AI-Powered LinkedIn CRM',
    title: 'SynQ',
    src: '/projects/synq-preview.png',
    coverSrc: '/projects/synq-cover.png',
    content: (
      <ProjectContent project={{ title: 'SynQ' }} />
    ),
  },
  // 2. Poise
  {
    category: 'AI Subscription Intelligence',
    title: 'Poise',
    src: '/projects/poise-preview.png',
    coverSrc: '/projects/poise-cover.png',
    content: (
      <ProjectContent project={{ title: 'Poise' }} />
    ),
  },
  // 3. CWT
  {
    category: 'Collective Market Intelligence',
    title: 'CWT',
    src: '/projects/cwt-preview.png',
    coverSrc: '/projects/cwt-cover.png',
    content: (
      <ProjectContent project={{ title: 'CWT' }} />
    ),
  },
  // 4. Baghiravan
  {
    category: 'Luxury Fashion Collection',
    title: 'Baghiravan',
    src: '/projects/baghiravan-preview.png',
    coverSrc: '/projects/baghiravan-cover.png',
    content: (
      <ProjectContent project={{ title: 'Baghiravan' }} />
    ),
  },
  // 5. AI Native Portfolio
  {
    category: 'Interactive AI Portfolio',
    title: 'AI Native Portfolio',
    src: '/projects/ai-portfolio-preview.png',
    coverSrc: '/projects/ai-portfolio-cover.png',
    content: (
      <ProjectContent project={{ title: 'AI Native Portfolio' }} />
    ),
  },
  // 6. Mehak Porwal
  {
    category: 'Designer Portfolio Experience',
    title: 'Mehak Porwal',
    shortTitle: 'Fashion Portfolio',
    src: '/projects/mahek-preview.png',
    coverSrc: '/projects/mahek-cover.png',
    content: (
      <ProjectContent project={{ title: 'Mehak Porwal' }} />
    ),
  },
  // 7. Resume Optimizer AI
  {
    category: 'AI Resume Assistant',
    title: 'Resume Optimizer AI',
    src: '/projects/resume-optimizer-preview.png',
    content: (
      <ProjectContent project={{ title: 'Resume Optimizer AI' }} />
    ),
  },
  // 8. Zomato Global Restaurant Analysis
  {
    category: 'Data Analysis & Visualization',
    title: 'Zomato Global Restaurant Analysis',
    shortTitle: 'Zomato Analysis',
    src: '/projects/Zomato_coverpage.png',
    coverSrc: '/projects/Zomato_coverpage.png',
    content: (
      <ProjectContent project={{ title: 'Zomato Global Restaurant Analysis' }} />
    ),
  },
  // 9. IPL / RCB Performance Analytics
  {
    category: 'Sports Analytics & SQL',
    title: 'IPL / RCB Performance Analytics',
    shortTitle: 'IPL / RCB Analysis',
    src: '/projects/IPL_RCB_coverpage.png',
    coverSrc: '/projects/IPL_RCB_coverpage.png',
    content: (
      <ProjectContent project={{ title: 'IPL / RCB Performance Analytics' }} />
    ),
  },
  // 10. TravelBooker
  {
    category: 'Full-Stack Django Platform',
    title: 'TravelBooker',
    src: '/projects/travelbooker-preview.png',
    content: (
      <ProjectContent project={{ title: 'TravelBooker' }} />
    ),
  },
  // 11. AgroAI
  {
    category: 'Computer Vision & AI',
    title: 'AgroAI',
    src: '/projects/agroai-preview.png',
    content: (
      <ProjectContent project={{ title: 'AgroAI' }} />
    ),
  },
  // 12. Holohype
  {
    category: 'AI-Powered E-Commerce',
    title: 'Holohype',
    src: '/projects/holohype-preview.png',
    content: (
      <ProjectContent project={{ title: 'Holohype' }} />
    ),
  },
  // 13. Old Portfolio
  {
    category: 'React Developer Portfolio',
    title: 'Old Portfolio',
    src: '/projects/old-portfolio-preview.png',
    content: (
      <ProjectContent project={{ title: 'Old Portfolio' }} />
    ),
  },
  // 14. YouTube Clone
  {
    category: 'Frontend Fundamentals',
    title: 'YouTube Clone',
    src: '/projects/yt-clone-preview.png',
    content: (
      <ProjectContent project={{ title: 'YouTube Clone' }} />
    ),
  },
  // 15. Latency-Aware Task Partitioning
  {
    category: 'Edge Computing Research',
    title: 'Latency-Aware Task Partitioning',
    src: '/projects/RP_preview.png',
    content: (
      <ProjectContent project={{ title: 'Latency-Aware Task Partitioning' }} />
    ),
  },
];