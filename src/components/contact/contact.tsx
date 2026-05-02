import { FiLinkedin } from "react-icons/fi"
import { SlSocialGithub } from "react-icons/sl"
import { AtSign, Mail } from "lucide-react"
import { Form } from "../form/Form"
import { useTranslation } from "react-i18next"

export function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-20" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="contact-heading"
          className="mb-12 text-center text-3xl font-bold text-gray-900"
        >
          {t("contact.contact-title")}
        </h2>

        <div className="flex flex-col gap-10 md:flex-row">
          <div className="md:w-1/2">
            <Form />
          </div>

          <div className="md:w-1/2">
            <h3 className="mb-6 text-xl font-semibold text-gray-900">
              {t("contact.lets-talk")}
            </h3>
            <p className="mb-8 leading-relaxed text-gray-700">
              {t("contact.lets-talk-content")}
            </p>

            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:adrianotribeiro092@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded text-gray-700 transition-colors hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
                >
                  <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <p className="text-sm sm:text-base">
                    adrianotribeiro092
                    <AtSign width={15} height={15} className="inline-block" />
                    gmail.com
                  </p>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/adrianotribeiro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded text-gray-700 transition-colors hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
                >
                  <SlSocialGithub
                    className="h-5 w-5 shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-sm sm:text-base">
                    github.com/adrianotribeiro
                  </p>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/adrianotribeiro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded text-gray-700 transition-colors hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
                >
                  <FiLinkedin className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <p className="text-sm sm:text-base">
                    linkedin.com/in/adrianotribeiro
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
