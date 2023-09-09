'use client'

import { signOut, useSession } from "next-auth/react"
import Link from "next/link";

const layout = ({children}:any) => {
  const user = useSession();
  return (
    <div>
      <div>
        <Link href="/dashboard" prefetch={false}>Dashboard</Link>
        <Link href="/mydashboard" prefetch={false}>My Dashboard</Link>
        <Link href="/employees" prefetch={false}>Employees</Link>
      </div>
      <button className="bg-red-600" onClick={()=> signOut()}>Logout : {user.data?.user?.name}</button>
      {children}
    </div>
  )
}

export default layout