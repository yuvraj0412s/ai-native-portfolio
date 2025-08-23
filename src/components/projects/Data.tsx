// File: data.tsx

import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// --- PROJECT DATABASE ---
// This array holds the detailed information for each project.
const PROJECT_CONTENT = [
    {
    // --- NEW AI-NATIVE PORTFOLIO PROJECT ---
    title: 'AI-Native Portfolio',
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
      { src: '/Projects/ai-portfolio-chat.png', alt: 'The AI Native Portfolio chat interface in action' },
      { src: '/Projects/ai-portfolio-home.png', alt: 'Homepage of the AI Native Portfolio' },
    ],
  },
  {
    title: 'AgroAI',
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
        src: '/Projects/agroai-home.png',
        alt: 'AgroAI Homepage - AI-Powered Plant Health Companion',
      },
      {
        src: '/Projects/agroai-result.png',
        alt: 'AgroAI Analysis Result Page with Prediction and Confidence Score',
      },
      {
        src: '/Projects/agroai-guide.png',
        alt: 'AgroAI Crop-wise Disease Guides Page',
      },
      {
        src: '/Projects/agroai-guide-detail.png',
        alt: 'AgroAI Tomato Disease Guide Detail Page with Accordion',
      },
      {
        src: '/Projects/agroai-how-it-works.png',
        alt: 'AgroAI How It Works Page with a 3-step flowchart',
      },
      {
        src: '/Projects/agroai-resources.png',
        alt: 'AgroAI Farming & Plant Care Resources Page',
      },
      {
        src: '/Projects/agroai-about.png',
        alt: 'AgroAI About and Contact Page',
      },
    ],
  },
  {
    // --- NEW DJANGO E-COMMERCE PROJECT ---
    title: 'Holohype',
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
      { src: '/Projects/holohype-home.png', alt: 'E-commerce platform homepage with product listings' },
      { src: '/Projects/holohype-login.png', alt: 'Modern user login and authentication page' },
      { src: '/Projects/holohype-product.png', alt: 'Product detail page with AI-powered recommendations' },
      { src: '/Projects/holohype-cart.png', alt: 'Dynamic shopping cart with real-time updates' },
    ],
  },
  {
    // --- NEW REACT PORTFOLIO PROJECT ---
    title: 'Old Portfolio',
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
      { src: '/Projects/old-portfolio-home.png', alt: 'Homepage of the React portfolio with hero section' },
      { src: '/Projects/old-portfolio-about.png', alt: 'About Me section with description' },
      { src: '/Projects/old-portfolio-skills.png', alt: 'Filterable skills grid with progress bars' },
      { src: '/Projects/old-portfolio-projects.png', alt: 'Project showcase section with cards' },
      { src: '/Projects/old-portfolio-contact.png', alt: 'Contact page with form to reach out directly' },
    ],
  },
  {
    // --- YOUTUBE CLONE PROJECT (FROM YOUR README) ---
    title: 'YouTube Clone',
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
      { src: '/Projects/yt-clone-home.png', alt: 'Screenshot of the YouTube Clone project homepage' },
      // Add more screenshots here if you have them!
    ],
  },
  {
    title: 'Latency-Aware Task Partitioning',
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
        src: '/Projects/RP_preview.png', // Placeholder image
        alt: 'Latency-Aware Task Partitioning project image 1',
      },
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
   {
    category: 'AI & Next.js',
    title: 'AI-Native Portfolio',
    src: '/Projects/ai-portfolio-preview.png', // <-- TODO: Make sure you have a preview image at this path
    content: (
      // The `title` here MUST match the full title in PROJECT_CONTENT
      <ProjectContent project={{ title: 'AI-Native Portfolio' }} />
    ),
  },
  {
    category: 'Full-Stack AI',
    title: 'AgroAI',
    src: '/Projects/agroai-preview.png', // Use the main homepage screenshot for the preview
    content: (
      <ProjectContent project={{ title: 'AgroAI' }} />
    ),
  },
  {
    category: 'Full-Stack & AI',
    title: 'Holohype',
    src: '/Projects/holohype-preview.png', // <-- TODO: Make sure you have a preview image at this path
    content: (
      <ProjectContent project={{ title: 'Holohype' }} />
    ),
  },
  {
    category: 'Frontend Development',
    title: 'Old Portfolio',
    src: '/Projects/old-portfolio-preview.png', // <-- TODO: Make sure you have a preview image at this path
    content: (
      <ProjectContent project={{ title: 'Old Portfolio' }} />
    ),
  },
  {
    category: 'Frontend Development',
    title: 'YouTube Clone',
    src: '/Projects/yt-clone-preview.png', // <-- TODO: Make sure you have a preview image at this path
    content: (
      <ProjectContent project={{ title: 'YouTube Clone' }} />
    ),
  },
  {
    category: 'Edge Computing',
    title: 'Latency-Aware Task Partitioning',
    src: '/Projects/RP_preview.png', // Placeholder image
    content: (
      <ProjectContent project={{ title: 'Latency-Aware Task Partitioning' }} />
    ),
  },
];