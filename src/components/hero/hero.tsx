import { ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"

export function Hero() {
  const { t } = useTranslation()
  return (
    <section className="gap-3 px-3 pt-32 pb-20 md:flex md:pt-48">
      <div className="pb-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Adriano Ribeiro
          </h1>
          <div className="mb-6">
            <h2 className="text-xl text-gray-600 md:text-2xl">
              {t("hero.title")}
            </h2>
            <p className="text-sm font-light text-gray-600">
              {t("hero.subtitle")}
            </p>
          </div>
          <p className="mb-8 max-w-lg text-lg text-gray-700 xl:max-w-md">
            {t("hero.content")}
          </p>
        </div>
        <div className="flex space-x-6">
          <a
            className="flex w-fit cursor-pointer items-center rounded-sm bg-gray-900 px-8 py-2 text-sm text-white hover:bg-gray-800 md:text-base"
            href="#projects"
          >
            {t("label.projects")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            className="flex items-center rounded-md border border-[#ebeff5] px-8"
            href="#projects"
          >
            {t("label.contact-me")}
          </a>
        </div>
      </div>
      <div className="flex justify-center md:w-1/2">
        <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-gray-100 shadow-xl md:h-80 md:w-80">
          <img
            src="/images/logos/AdrianoRibeiroLogo.svg"
            className="h-full w-full object-cover"
            alt={t("aria-labels.logo-alt")}
            width={200}
            height={200}
          />
        </div>
      </div>
    </section>
  )
}
