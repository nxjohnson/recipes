import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Button from "../components/ui/Button";

export default function SignOut() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/signin");
    }
  }, [session, router]);

  return (
    <>
      Signed in <br />
      <Button onClick={() => signOut()}>Sign out</Button>
    </>
  );
}
