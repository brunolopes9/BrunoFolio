import { NextResponse } from 'next/server'

interface ContactRequestBody {
  name: string
  email: string
  subject: string
  message: string
}

function validateContactRequest(body: unknown): { valid: boolean; errors: string[]; data?: ContactRequestBody } {
  const errors: string[] = []

  if (!body || typeof body !== 'object') {
    return { valid: false, errors: ['Invalid request body'] }
  }

  const { name, email, subject, message } = body as Record<string, unknown>

  if (typeof name !== 'string' || name.trim().length < 2) {
    errors.push('Name must be at least 2 characters')
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (typeof email !== 'string' || !emailRegex.test(email)) {
    errors.push('Valid email is required')
  }

  if (typeof subject !== 'string' || subject.trim().length < 3) {
    errors.push('Subject must be at least 3 characters')
  }

  if (typeof message !== 'string' || message.trim().length < 10) {
    errors.push('Message must be at least 10 characters')
  }

  if (errors.length > 0) {
    return { valid: false, errors }
  }

  return {
    valid: true,
    errors: [],
    data: {
      name: (name as string).trim(),
      email: (email as string).trim().toLowerCase(),
      subject: (subject as string).trim(),
      message: (message as string).trim(),
    },
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validation = validateContactRequest(body)

    if (!validation.valid) {
      return NextResponse.json(
        { message: 'Validation failed', errors: validation.errors },
        { status: 400 }
      )
    }

    // Log to server console for monitoring
    console.log('[Contact Form]', {
      name: validation.data!.name,
      email: validation.data!.email,
      subject: validation.data!.subject,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { message: 'Message received successfully. I will get back to you soon!' },
      { status: 200 }
    )
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to process request'
    return NextResponse.json(
      { message: errorMessage },
      { status: 500 }
    )
  }
}
