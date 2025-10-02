import { z } from 'zod'

const emailSchema = z
  .email('Please enter a valid email address')
  .max(80, 'Email must be less than 80 characters')
  .transform((email) => email.toLowerCase().trim())
  .refine(
    (email) => {
      const fakeDomains = [
        'example.com',
        'test.com',
        'fake.com',
        'tempmail.com',
        'guerrillamail.com',
        'mailinator.com',
        '10minutemail.com',
        'throwaway.com',
        'yopmail.com',
      ]
      const domain = email.split('@')[1]
      if (!domain) return false
      return !fakeDomains.includes(domain)
    },
    { message: 'Please use a real email domain' },
  )
  .refine(
    (email) => {
      const validTLDs = [
        '.com',
        '.org',
        '.net',
        '.edu',
        '.gov',
        '.io',
        '.co',
        '.me',
        '.dev',
        '.ai',
        '.ng',
        '.biz',
      ]
      const domain = email.split('@')[1]
      if (!domain) return false
      return validTLDs.some((tld) => domain.endsWith(tld))
    },
    { message: 'Email must have a valid domain extension' },
  )

const nameSchema = z
  .string()
  .min(1, 'Name is required')
  .min(3, 'Name must be at least 3 characters')
  .max(100, 'Name must be less than 100 characters')
  .regex(
    /^(?!.*\s{2,})[a-zA-ZÀ-ÿ]+(?:[',.-][a-zA-ZÀ-ÿ]+)*\s[a-zA-ZÀ-ÿ]+(?:[',.-][a-zA-ZÀ-ÿ]+)*$/,
    'Please enter your first and last name (letters, spaces, and basic punctuation only)',
  )
  .transform((name) => name.trim().replace(/\s+/g, ' '))
  .refine(
    (name) => {
      const parts = name.split(' ').filter((part) => part.length > 1)
      return parts.length >= 2
    },
    { message: 'Please enter both your first and last name' },
  )
  .refine(
    (name) => {
      const hasNumbers = /\d/.test(name)
      const hasRepeatedChars = /(.)\1{3,}/.test(name)
      return !hasNumbers && !hasRepeatedChars
    },
    { message: 'Name appears to be invalid' },
  )

export const waitListSchema = z.object({
  email: emailSchema,
  name: nameSchema,
  title: z
    .string()
    .min(1, 'Title is required')
    .min(4, 'Title must be at least 4 characters')
    .max(50, 'Title must be less than 50 characters')
    .transform((title) => title.trim()),
})

export type WaitListSchema = z.infer<typeof waitListSchema>
