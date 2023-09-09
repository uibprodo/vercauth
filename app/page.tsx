import Login from "@/comp/Login";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";
import { redirect } from 'next/navigation';

export default  async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/dashboard');
    // if (
    //   session.user?.name === "admin"
    // ) {
    //   redirect('/dashboard');
    // } else {
    //   redirect('/mydashboard');
    // }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Login />
      </div>
    </main>
  )
}
