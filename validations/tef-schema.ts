import * as z from "zod"

export const tefSchema = z.object({
  listening: z.coerce
    .number()
    .int({ message: "Les décimales ne sont pas autorisées" })
    .gte(145, { message: "La valeur doit être supérieure ou égale à 145" })
    .lte(360, { message: "La valeur doit être inférieure ou égale à 360" }),

  reading: z.coerce
    .number()
    .int({ message: "Les décimales ne sont pas autorisées" })
    .gte(121, { message: "La valeur doit être supérieure ou égale à 121" })
    .lte(300, { message: "La valeur doit être inférieure ou égale à 300" }),

  speaking: z.coerce
    .number()
    .int({ message: "Les décimales ne sont pas autorisées" })
    .gte(181, { message: "La valeur doit être supérieure ou égale à 181" })
    .lte(450, { message: "La valeur doit être inférieure ou égale à 450" }),

  writing: z.coerce
    .number()
    .int({ message: "Les décimales ne sont pas autorisées" })
    .gte(181, { message: "La valeur doit être supérieure ou égale à 181" })
    .lte(450, { message: "La valeur doit être inférieure ou égale à 450" }),
})
