import { z } from 'zod'

export const signUpSchema = z
  .object({
    document_type: z.string(),

    document: z
      .string()
      .min(7, {
        message: 'El número de documento debe tener al menos 7 caracteres.'
      })
      .max(12, {
        message: 'El número de documento debe tener un máximo de 12 caracteres.'
      }),

    first_name: z
      .string()
      .min(4, {
        message: 'Los nombres deben tener al menos 4 caracteres.'
      })
      .max(50, {
        message: 'Los nombres deben tener un máximo de 50 caracteres.'
      }),

    last_name: z
      .string()
      .min(4, {
        message: 'Los apellidos deben tener al menos 4 caracteres.'
      })
      .max(50, {
        message: 'Los apellidos deben tener un máximo de 50 caracteres.'
      }),

    email: z.string().email({
      message: 'El correo electrónico debe ser válido.'
    }),

    phone_number: z
      .string()
      .min(8, {
        message: 'El número de teléfono debe tener al menos 8 caracteres.'
      })
      .max(12, {
        message: 'El número de teléfono debe tener un máximo de 12 caracteres.'
      }),

    password: z
      .string()
      .min(8, {
        message: 'La contraseña debe tener al menos 8 caracteres.'
      })
      .max(50, {
        message: 'La contraseña debe tener un máximo de 50 caracteres.'
      }),

    confirm_password: z.string().min(8, {
      message: 'La contraseña debe tener al menos 8 caracteres.'
    })
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Las contraseñas no coinciden.',
    path: ['confirm_password']
  })
