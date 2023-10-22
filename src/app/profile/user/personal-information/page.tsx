import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'

const PersonalInformationPage = async () => {
  const session = await getServerSession()

  if (session?.user?.email === 'admin@gmail.com') {
    return redirect('/profile/admin')
  }

  return (
    <div>
      PersonalInformationPage
    </div>
  )
}

export default PersonalInformationPage
