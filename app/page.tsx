import { getServerSession } from "next-auth";
import { authOptions} from "./utils/auth"
import LogoutButton from './components/LogOutButton';
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {

  const session = await getServerSession(authOptions)

  return (
    <div className="p-10">
    <h1>Hello from the index, public route</h1>

    {session ? (
      <div>
      <h1>You are logged in.</h1>
      <LogoutButton />

      </div>

    ): (
      <div>
        <h1>Please login to see something special.</h1>
        <Button asChild>
          <Link href="/auth">Login</Link>
        </Button>
      </div>
    )}


    </div>
  
  );
}
