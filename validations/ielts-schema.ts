import * as z from "zod"

export const ieltsSchema = z.object({
  listening: z.coerce
    .number()
    .gte(1, { message: "La valeur doit être supérieure ou égale à 1" })
    .lte(9, { message: "La valeur doit être inférieure ou égale à 9" }),

  reading: z.coerce
    .number()
    .gte(1, { message: "La valeur doit être supérieure ou égale à 1" })
    .lte(9, { message: "La valeur doit être inférieure ou égale à 9" }),

  speaking: z.coerce
    .number()
    .gte(1, { message: "La valeur doit être supérieure ou égale à 1" })
    .lte(9, { message: "La valeur doit être inférieure ou égale à 9" }),

  writing: z.coerce
    .number()
    .gte(1, { message: "La valeur doit être supérieure ou égale à 1" })
    .lte(9, { message: "La valeur doit être inférieure ou égale à 9" }),
})
