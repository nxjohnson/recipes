import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import Button from "../components/ui/Button";
import { useRouter } from "next/router";

interface FormProps {
  email: string;
  password: string;
}

export default function SignIn() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  });
  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn()}>Sign in</Button>
    </>
  );
}
