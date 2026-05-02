import { LanguageSwitcher } from "../languageSwitcher/languageSwitcher"
import { Mail } from "lucide-react"
import { Button } from "../ui/button"
import { useTranslation } from "react-i18next"

export function Header() {
  const { t } = useTranslation()

  const menus = [
    t("header.menu.about"),
    t("header.menu.technologies"),
    t("header.menu.projects"),
  ]

  return (
    <header
      className="fixed w-full border-b border-gray-300 bg-white/80 px-3 py-4 backdrop-blur-sm"
      aria-label={t("aria-labels.site-header")}
    >
      <div className="mx-auto flex max-w-384 items-center justify-between">
        <img
          src="/images/logos/AdrianoRibeiroLogo.svg"
          alt={t("aria-labels.logo-alt")}
          width={50}
          height={50}
        />

        <nav
          className="hidden gap-6 md:flex"
          aria-label={t("aria-labels.main-navigation")}
        >
          {menus.map((menu, i) => (
            <a
              className="text-gray-700 hover:text-gray-900"
              key={i}
              href={`#${menu.toLowerCase()}`}
            >
              {menu}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Button
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80 max-w-32 min-w-30 cursor-pointer px-4 py-2"
            aria-label={`${t("aria-labels.contact-button")}`}
          >
            <Mail className="mr-2 h-4 w-4" />
            {t("label.contact")}
          </Button>
        </div>
      </div>
    </header>
  )
}
