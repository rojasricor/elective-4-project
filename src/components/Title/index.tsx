'use client'

import { useSession } from 'next-auth/react'

interface TitleProps {
  text: string
}

function Title({ text }: TitleProps): React.ReactNode {
  const { data: session, status } = useSession()

  return (
    <span className="typewriter-container">
      <div
        className="typewriter-text"
        style={{
          color: status === 'authenticated' ? '#008aae' : '#79ad34'
        }}
      >
        {status === 'authenticated' ? `${session?.user?.first_name}!` : text}
      </div>
    </span>
  )
}

export default Title
