import { useTranslation } from "react-i18next"
import { ProjectCard } from "../projectCard/projectCard"

export function Projects() {
  const { t } = useTranslation()
  const projectsData = [
    {
      title: "DRH Relações Humanas",
      descriptionKey: t("projects.drh-content"),
      technologies: ["Angular", "MySQL", "Lumen Framework"],
      demoUrl: "https://drhrs.com.br/",
      repoUrl: "#",
      image: "/images/logos/DH_Logo.svg",
    },
    {
      title: "The Utility Hub",
      descriptionKey: t("projects.theUtilityHubContent"),
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Framer Motion",
        "Apollo",
      ],
      demoUrl: "https://www.theutilityhub.net/",
      repoUrl: "#",
      image: "/images/logos/about-us-logo.svg",
    },
    {
      title: "Klik Vapes",
      descriptionKey: t("projects.klikVapes"),
      technologies: ["Next.js", "TypeScript", "Apollo"],
      demoUrl: "https://klik-vapes-dev.vercel.app/",
      repoUrl: "#",
      image: "/images/logos/klik-logo.webp",
    },
  ]
  return (
    <section id="projects" className="py-20" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="projects-heading"
          className="mb-12 text-center text-3xl font-bold text-gray-900"
        >
          {t("projects.projects-title")}
        </h2>

        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" role="list">
          {projectsData.map((project) => (
            <li key={project.title}>
              <ProjectCard
                title={project.title}
                description={t(project.descriptionKey)}
                technologies={project.technologies}
                demoUrl={project.demoUrl}
                repoUrl={project.repoUrl}
                image={project.image}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
