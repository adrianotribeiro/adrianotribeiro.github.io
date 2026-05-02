import { useForm } from "@tanstack/react-form"
import { useState } from "react"
import { useTranslation } from "react-i18next"

interface FormspreeError {
  field: string
  code: string
  message: string
}

interface FormspreeResponse {
  ok: boolean
  errors?: FormspreeError[]
}

export function Form() {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: async ({ value }) => {
      setIsSubmitting(true)
      setMessage("")

      try {
        const response = await fetch(
          `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_FORM_ID}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(value),
          },
        )

        const result: FormspreeResponse = await response.json()

        if (response.ok) {
          setMessage(t("contact.email-sent-message"))
          form.reset()
        } else {
          const errorMessage = result.errors
            ? result.errors
                .map((error: FormspreeError) => error.message)
                .join(", ")
            : t("contact.unknown-message")
          setMessage(`Erro: ${errorMessage}`)
        }
      } catch (error) {
        console.error(`${t("contact.req-message")}: `, error)
        setMessage(t("contact-error-sending-mail-message"))
      } finally {
        setIsSubmitting(false)
      }
    },
  })

  const getMessageStyles = () => {
    const isSuccess =
      message.toLowerCase().includes("sucesso") ||
      message.toLowerCase().includes("successfully")
    return isSuccess
      ? "bg-green-100 text-green-700 border border-green-200"
      : "bg-red-100 text-red-700 border border-red-200"
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          if (!isSubmitting) {
            form.handleSubmit()
          }
        }}
        className="space-y-5"
      >
        <form.Field name="name">
          {(field) => (
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                {t("name")}
              </label>
              <input
                type="text"
                id="name"
                name={field.name}
                onBlur={field.handleBlur}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder={t("contact.your-name")}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none"
              />
              {field.state.meta.errors.length > 0 && (
                <em className="mt-1 block text-sm text-red-500">
                  {field.state.meta.errors[0]}
                </em>
              )}
            </div>
          )}
        </form.Field>

        <form.Field name="email">
          {(field) => (
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                {t("email")}
              </label>
              <input
                type="email"
                id="email"
                name={field.name}
                onBlur={field.handleBlur}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder={t("contact.your-mail")}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none"
              />
              {field.state.meta.errors.length > 0 && (
                <em className="mt-1 block text-sm text-red-500">
                  {field.state.meta.errors[0]}
                </em>
              )}
            </div>
          )}
        </form.Field>

        <form.Field name="message">
          {(field) => (
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                {t("message")}
              </label>
              <textarea
                id="message"
                name={field.name}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                value={field.state.value}
                placeholder={t("contact.how-can-help")}
                rows={5}
                className="min-h-30 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none"
              />
              {field.state.meta.errors.length > 0 && (
                <em className="mt-1 block text-sm text-red-500">
                  {field.state.meta.errors.join(",")}
                </em>
              )}
            </div>
          )}
        </form.Field>

        <form.Subscribe
          selector={(state) => [state.isPristine || !state.canSubmit]}
        >
          {([disabled]) => (
            <button
              type="submit"
              disabled={disabled}
              className="inline-flex w-full cursor-pointer items-center justify-center rounded-md bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {t("contact.to-send")}
            </button>
          )}
        </form.Subscribe>
      </form>

      {message && (
        <div
          className={`mt-4 rounded-md border p-3 text-sm ${getMessageStyles()}`}
        >
          {message}
        </div>
      )}
    </>
  )
}
