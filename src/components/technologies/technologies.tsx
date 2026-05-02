import { FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { SiTypescript, SiShadcnui } from "react-icons/si"
import { RiTailwindCssFill } from "react-icons/ri"
import { useTranslation } from "react-i18next"

const techStack = [
  { icon: FaReact, name: "React" },
  { icon: IoLogoJavascript, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiShadcnui, name: "ShadCN" },
  { icon: RiTailwindCssFill, name: "TailwindCSS" },
]

export function Technologies() {
  const { t } = useTranslation()

  return (
    <section id="technologies" className="py-20" aria-labelledby="tech-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="tech-heading"
          className="mb-12 text-center text-3xl font-bold text-gray-900"
        >
          {t("technologies.technologies-title")}
        </h2>

        <ul
          className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5"
          role="list"
        >
          {techStack.map((tech) => {
            const Icon = tech.icon

            return (
              <li
                key={tech.name}
                className="group flex flex-col items-center gap-3 rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6"
              >
                <Icon
                  className="h-12 w-12 text-gray-700 transition-colors group-hover:text-gray-900 sm:h-16 sm:w-16"
                  aria-hidden="true"
                />

                <p className="text-center text-xs font-medium text-gray-900 sm:text-sm">
                  {tech.name}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
