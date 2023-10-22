import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'

const UsersPreviewPage = async () => {
  const session = await getServerSession()

  if (session?.user?.email !== 'admin@gmail.com') {
    return redirect('/profile/user')
  }

  return <div>UsersPreviewPage</div>
}

export default UsersPreviewPage
