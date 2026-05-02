import { ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"

export function Hero() {
  const { t } = useTranslation()

  return (
    <section
      className="bg-white py-20 md:py-32 lg:py-40"
      aria-label={t("aria-labels.hero-section")}
    >
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-4 md:flex-row md:items-center md:px-8 lg:px-8">
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Adriano Ribeiro
            </h1>
            <div className="mb-6">
              <h2 className="text-xl text-gray-600 md:text-2xl">
                {t("hero.title")}
              </h2>
              <p className="mt-1 text-sm font-light text-gray-500">
                {t("hero.subtitle")}
              </p>
            </div>

            <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-gray-700 md:mx-0">
              {t("hero.content")}
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start md:gap-6">
            <a
              className="flex w-full cursor-pointer items-center justify-center rounded-md bg-gray-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 sm:w-fit sm:text-base"
              href="#projects"
            >
              {t("label.projects")}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>

            <a
              className="flex w-full items-center justify-center rounded-md border border-gray-200 px-8 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 sm:w-fit sm:text-base"
              href="#contact"
            >
              {t("label.contact-me")}
            </a>
          </div>
        </div>

        <div className="flex w-full shrink-0 justify-center md:w-1/2 md:justify-end">
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-gray-100 shadow-2xl md:h-80 md:w-80 xl:h-96 xl:w-96">
            <img
              src="/images/logos/AdrianoRibeiroLogo.svg"
              className="h-full w-full object-cover"
              alt={t("aria-labels.logo-alt")}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
