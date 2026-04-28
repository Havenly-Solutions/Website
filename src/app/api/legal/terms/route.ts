import { readFileSync } from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
  const filePath = path.join(process.cwd(), 'src/app/terms-of-service/content.html')
  try {
    const content = readFileSync(filePath, 'utf8')
    return new NextResponse(content, {
      status: 200,
      headers: { 'Content-Type': 'text/html' },
    })
  } catch (e) {
    return new NextResponse('Content not found', { status: 404 })
  }
}
