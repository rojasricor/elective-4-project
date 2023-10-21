import pkg from '@/../package.json'
import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({
    name: pkg.name,
    version: pkg.version,
    authors: pkg.contributors
  })
}
