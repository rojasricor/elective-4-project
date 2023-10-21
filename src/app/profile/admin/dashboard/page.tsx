import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'

const DashboardPage = async () => {
  const session = await getServerSession()

  if (session?.user?.email !== 'admin@gmail.com') {
    return redirect('/profile/user')
  }

  return <div>DashboardPage</div>
}

export default DashboardPage
