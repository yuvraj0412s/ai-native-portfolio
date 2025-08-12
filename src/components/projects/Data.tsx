import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'Plant Disease Detection',
    description:
      'Built structured dataset pipelines with preprocessing, TensorFlow, EfficientNetB4, and Flask to detect plant diseases from leaf images using transfer learning, delivering detailed predictions including symptoms, causes, and treatments. Achieved 96% classification accuracy across 38 disease classes on the PlantVillage dataset, demonstrating effective transfer learning and supporting early intervention in precision agriculture.',
    techStack: [
      'TensorFlow',
      'EfficientNetB4',
      'Flask',
      'Python',
      'Machine Learning',
      'Data Preprocessing',
    ],
    date: 'Feb 2024 - May 2024',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/yuvraj0412s/Plant-Disease-Detection-System',
      },
    ],
    images: [
      {
        src: '/Plant_disease_detectionwebsite.png',
        alt: 'Plant Disease Detection project website screenshot',
      },
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
        src: '/latency1.png', // Placeholder image
        alt: 'Latency-Aware Task Partitioning project image 1',
      },
    ],
  },
];
// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
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

// Main data export with updated content
export const data = [
  {
    category: 'Machine Learning',
    title: 'Plant Disease Detection',
    src: '/Plant_disease_detectionwebsite.png', // Using the same image for preview
    content: <ProjectContent project={{ title: 'Plant Disease Detection' }} />,
  },
  {
    category: 'Edge Computing',
    title: 'Latency-Aware Task Partitioning',
    src: '/latency-preview.png', // Placeholder image
    content: (
      <ProjectContent project={{ title: 'Latency-Aware Task Partitioning' }} />
    ),
  },
];
