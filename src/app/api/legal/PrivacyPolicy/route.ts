import { readFile } from 'fs/promises'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
  const filePath = path.join(process.cwd(), 'src/app/Privacypolicy/content.html')
  try {
    const content = await readFile(filePath, 'utf8')
    return new NextResponse(content, {
      status: 200,
      headers: { 'Content-Type': 'text/html' },
    })
  } catch (e) {
    return new NextResponse('Content not found', { status: 404 })
  }
}
