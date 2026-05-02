import { ExternalLink } from "lucide-react"
import { useTranslation } from "react-i18next"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  demoUrl: string
  repoUrl: string
  image: string
}

export function ProjectCard({
  title,
  description,
  technologies,
  demoUrl,
  image,
}: ProjectCardProps) {
  const { t } = useTranslation()

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative h-48 w-full bg-gray-50">
        <img
          src={image || "/placeholder.svg"}
          alt={`Logo do projeto ${title}`}
          className="h-full w-full object-contain p-6"
          loading="lazy"
        />
      </div>

      <div className="flex grow flex-col p-6">
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>

        <p className="mb-4 grow leading-relaxed text-gray-700">{description}</p>

        <div className="mt-auto">
          <div className="mb-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-900"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded text-sm text-gray-700 transition-colors hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              {t("projects.webSite")}
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
