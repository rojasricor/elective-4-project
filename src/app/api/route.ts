import { NextResponse } from 'next/server'
import pkg from '../../../package.json'

export function GET() {
  return NextResponse.json({
    name: pkg.name,
    version: pkg.version,
    authors: pkg.contributors
  })
}
