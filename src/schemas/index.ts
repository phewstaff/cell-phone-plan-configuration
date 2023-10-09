import * as z from "zod";
import validator from "validator";

export const formSchema = z.object({
  phone: z
    .string({
      required_error: "Обязательное поле",
    })
    .refine(validator.isMobilePhone, { message: "Невалидный номер" }),
  operator: z
    .string({
      required_error: "Обязательное поле",
    })
    .min(1),
});
