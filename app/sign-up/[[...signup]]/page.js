import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <>
      <div className='mx-auto container my-2 flex h-screen items-center justify-center'>
        <SignUp />
      </div>
    </>
  )
}