export function useApiMessage() {
  const { $i18n } = useNuxtApp()
  const { t, te } = $i18n

  const getTranslatedError = (code: string | undefined): string => {
    if (!code) return t('api.error.internal_server_error')

    const key = `api.error.${code.toLowerCase()}`
    if (te(key)) return t(key)

    return t('api.error.internal_server_error')
  }

  return { getTranslatedError }
}
