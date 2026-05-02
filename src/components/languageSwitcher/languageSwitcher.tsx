import { Globe } from "lucide-react"
import { useTranslation } from "react-i18next"

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation()

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value
    i18n.changeLanguage(selectedLanguage)
  }
  return (
    <div
      className="flex gap-1"
      aria-label={`${t("aria-labels.switcher-description")}`}
    >
      <Globe className="text-black" />
      <select onChange={handleChange} value={i18n.language}>
        <option value="pt-BR">BR</option>
        <option value="en">EN</option>
      </select>
    </div>
  )
}
