'use client'

import { useSession } from 'next-auth/react'

interface TitleProps {
  text: string
  isTextStatic: boolean
}

<<<<<<< HEAD
function Title ({ text, isTextStatic }: TitleProps): React.ReactNode {
=======
function Title({ text }: TitleProps): React.ReactNode {
>>>>>>> 07069aa1c8165d19f0d59dba3707981f06527eab
  const { data: session, status } = useSession()

  return (
    <span className="typewriter-container">
<<<<<<< HEAD
      <div className="typewriter-text" style={{
        color: status === 'authenticated' && !isTextStatic ? '#008aae' : '#79ad34'
      }}>
        {
          status === 'authenticated' && !isTextStatic ? `${session?.user?.first_name}!` : text
        }
=======
      <div
        className="typewriter-text"
        style={{
          color: status === 'authenticated' ? '#008aae' : '#79ad34'
        }}
      >
        {status === 'authenticated' ? `${session?.user?.first_name}!` : text}
>>>>>>> 07069aa1c8165d19f0d59dba3707981f06527eab
      </div>
    </span>
  )
}

export default Title
