import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'

const HelpAdminPage = async () => {
  const session = await getServerSession()

  if (session?.user?.email !== 'admin@gmail.com') {
    return redirect('/profile/user')
  }

  return (
    <div>HelpAdminPage</div>
  )
}

export default HelpAdminPage
