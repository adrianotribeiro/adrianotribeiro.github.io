import { useTranslation } from "react-i18next"

export function About() {
  const { t } = useTranslation()

  return (
    <section
      id="about"
      className="bg-gray-50 py-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="about-heading"
          className="mb-12 text-center text-3xl font-bold text-gray-900"
        >
          {t("about.about-title")}
        </h2>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:px-8 lg:px-8">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-gray-900">
            {t("about.perfil")}
          </h3>
          <p className="text-base leading-relaxed text-gray-700">
            {t("about.about-me")}
          </p>
        </div>

        <div>
          <h3 className="mb-6 text-xl font-semibold text-gray-900">
            {t("about.trajectory-title")}
          </h3>

          <ul className="border-l-2 border-gray-300 pl-6">
            <li className="relative mb-8 last:mb-0">
              <h4 className="text-sm font-medium text-gray-500">
                {t("about.trajectory-nissian-data")}
              </h4>
              <p className="mt-1 font-semibold text-gray-900">
                {t("about.trajectory-nissian-title")}
              </p>
            </li>

            <li className="relative mb-8 last:mb-0">
              <h4 className="text-sm font-medium text-gray-500">
                06/2022 – 06/2023
              </h4>
              <p className="mt-1 font-semibold text-gray-900">
                {t("about.trajectory-dino-title")}
              </p>
            </li>

            <li className="relative mb-8 last:mb-0">
              <h4 className="text-sm font-medium text-gray-500">
                {t("about.trajectory-narvik-data")}
              </h4>
              <p className="mt-1 font-semibold text-gray-900">
                {t("about.trajecotry-narvik-title")}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
