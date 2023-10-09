import { z } from 'zod'

export const signUpSchema = z.object({
  document_type: z.string()
    .min(3, {
      message: 'Document type must be at least 3 characters.'
    })
    .max(20),

  document: z.string()
    .min(7, {
      message: 'Document must be at least 7 characters.'
    })
    .max(12, {
      message: 'Document must have a maximum of 8 characters.'
    }),

  first_name: z.string()
    .min(4, {
      message: 'First name must be at least 2 characters.'
    })
    .max(50, {
      message: 'First name must have a maximum of 50 characters.'
    }),

  last_name: z.string()
    .min(4, {
      message: 'Last name must be at least 4 characters.'
    })
    .max(50, {
      message: 'Last name must have a maximum of 50 characters.'
    }),

  email: z.string()
    .email({
      message: 'Invalid email.'
    }),

  phone_number: z.string()
    .min(8, {
      message: 'Phone number must be at least 8 characters.'
    })
    .max(12, {
      message: 'Phone number must have a maximum of 12 characters.'
    }),

  password: z.string()
    .min(8, {
      message: 'Password must be at least 8 characters.'
    })
    .max(100),

  confirm_password: z.string().min(8, {
    message: 'Password must be at least 8 characters.'
  })
}).refine(data => data.password === data.confirm_password, {
  message: 'Passwords do not match.',
  path: ['confirm_password']
})
