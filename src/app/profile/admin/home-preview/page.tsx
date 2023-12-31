import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'

const HomePreviewPage = async () => {
  const session = await getServerSession()

  if (session?.user?.email !== 'admin@gmail.com') {
    return redirect('/profile/user')
  }

  return <div>HomePreviewPage</div>
}

export default HomePreviewPage
