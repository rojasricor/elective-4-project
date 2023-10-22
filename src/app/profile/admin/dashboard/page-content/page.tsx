import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'

const PageContent = async () => {
  const session = await getServerSession()

  if (session?.user?.email !== 'admin@gmail.com') {
    return redirect('/profile/user')
  }

  return (
    <div>PageContent</div>
  )
}

export default PageContent
