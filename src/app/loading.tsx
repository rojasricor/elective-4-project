import Image from 'next/image'

export default function LoadingPage() {
  return (
    <div className="top-0 left-0 w-screen h-screen flex items-center justify-center">
      <div className="absolute animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-[#0E70DF]" />
      <Image
        width={60}
        height={60}
        alt="money"
        src="/money.png"
        className="rounded-full"
      />
    </div>
  )
}
