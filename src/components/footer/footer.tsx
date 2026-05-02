import { useTranslation } from "react-i18next"
import { FiLinkedin } from "react-icons/fi"
import { SlSocialGithub } from "react-icons/sl"
import { Mail } from "lucide-react"

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-900 py-10 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold">Adriano Ribeiro</div>
            <div className="text-gray-400">{t("hero.title")}</div>
          </div>

          <nav aria-label="Redes sociais" className="flex gap-4">
            <a
              href="https://github.com/adrianotribeiro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir perfil no GitHub"
              className="rounded text-gray-400 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <SlSocialGithub className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/adrianotribeiro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir perfil no LinkedIn"
              className="rounded text-gray-400 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <FiLinkedin className="h-5 w-5" />
            </a>

            <a
              href="mailto:adrianotribeiro092@gmail.com"
              aria-label="Enviar e-mail para Adriano"
              className="rounded text-gray-400 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Mail className="h-5 w-5" />
            </a>
          </nav>
        </div>

        <div className="mt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Adriano Ribeiro.{" "}
          {t("contact.all-rights")}
        </div>
      </div>
    </footer>
  )
}
