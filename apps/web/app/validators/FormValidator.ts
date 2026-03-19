import type { I18nLocale, MessageSchema } from '@web/../../i18n/schema'
import type { ComposerTranslation, LocaleMessages } from 'vue-i18n'
import z from 'zod'

type Messages = LocaleMessages<MessageSchema, I18nLocale>
type TranslateFn = ComposerTranslation<Messages, I18nLocale, MessageSchema>
type RuleMessageResolver = (_t: TranslateFn, _args: unknown[]) => unknown
type RuleMessageResolvers<TSchema extends z.ZodType> = Partial<
  Record<Extract<keyof TSchema, string>, RuleMessageResolver>
>

function preprocessIfRequired<T extends z.ZodSchema>(schema: T) {
  return z.preprocess((v) => (v === null || v === '' ? undefined : v), schema)
}

const STRING_RULE_MESSAGE_RESOLVERS: RuleMessageResolvers<z.ZodString> = {
  max: (t, args) => t('form.error.max_char', { max: args[0] }),
  min: (t, args) => t('form.error.min_char', { min: args[0] }),
}

const NUMBER_RULE_MESSAGE_RESOLVERS: RuleMessageResolvers<z.ZodNumber> = {
  max: (t, args) => t('form.error.max_number', { max: args[0] }),
  min: (t, args) => t('form.error.min_number', { min: args[0] }),
}

function withLocalizedRuleMessage(
  methodName: string,
  args: unknown[],
  t: TranslateFn,
  resolvers: RuleMessageResolvers<z.ZodType>,
) {
  const resolver = (resolvers as Partial<Record<string, RuleMessageResolver>>)[methodName]
  if (!resolver || (args.length > 1 && args[1] !== undefined)) {
    return args
  }

  return [args[0], resolver(t, args)]
}

function createChainableSchema<TChainable extends z.ZodType>(
  t: TranslateFn,
  schema: TChainable,
  resolvers: RuleMessageResolvers<TChainable>,
  isChainable: (schema: unknown) => schema is TChainable,
): TChainable {
  const preprocessedSchema = preprocessIfRequired(schema)

  return new Proxy(preprocessedSchema, {
    get(target, prop, receiver) {
      const targetValue = Reflect.get(target, prop, receiver)
      if (targetValue !== undefined)
        return typeof targetValue === 'function' ? targetValue.bind(target) : targetValue

      const schemaValue = Reflect.get(schema, prop, schema)
      if (typeof schemaValue !== 'function') {
        return schemaValue
      }

      return (...rawArgs: unknown[]) => {
        const methodName = String(prop)
        const nextArgs = withLocalizedRuleMessage(methodName, rawArgs, t, resolvers)
        const maybeSchema = schemaValue.apply(schema, nextArgs)

        if (isChainable(maybeSchema))
          return createChainableSchema(t, maybeSchema, resolvers, isChainable)

        return maybeSchema
      }
    },
  }) as unknown as TChainable
}

export const FormValidator = {
  string(t: TranslateFn) {
    const schema = z.string({ error: t('form.error.required') }).trim()
    return createChainableSchema(
      t,
      schema,
      STRING_RULE_MESSAGE_RESOLVERS,
      (s): s is z.ZodString => s instanceof z.ZodString,
    )
  },

  number(t: TranslateFn) {
    const schema = z.number({ error: t('form.error.required') })
    return createChainableSchema(
      t,
      schema,
      NUMBER_RULE_MESSAGE_RESOLVERS,
      (s): s is z.ZodNumber => s instanceof z.ZodNumber,
    )
  },

  email(t: TranslateFn) {
    const schema = z.email({ error: t('form.error.invalid_email') }).trim()
    return preprocessIfRequired(schema)
  },
}
