import { useState } from "react";
import { getProviders, signIn, signOut, useSession, getSession, getCsrfToken } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";

import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useForm } from "react-hook-form";
import Button from "../components/ui/Button";
import { Input } from "../components/ui/Form";

interface FormProps {
  email: string;
  password: string;
}

export default function Login() {
  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in <br/>
      <Button onClick={() => signOut()}>Sign out</Button>
    </>
  }
  return <>
    Not signed in <br/>
    <Button onClick={() => signIn()}>Sign in</Button>
  </>
}

// export default function Login({ csrfToken }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//   const [email, setEmail] = useState<string>('')
//   const [password, setPassword] = useState<string>('')

//   const defaultValues = {
//     email,
//     password
//   }

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     control,
//   } = useForm({ defaultValues });

//   async function submitForm({ email, password }: FormProps): Promise<void> {
//     signIn("credentials", { redirect: false, email, password });
//   }

//   return (
//     <div className="flex flex-col w-full gap-4 px-8 py-8 lg:px-24">
//       <div className=" w-full pb-4 border-b-2 border-neutral-200">
//           <h1 className="font-heading text-4xl lg:text-7xl">Login</h1>
//         </div>
//       <form className="flex flex-col gap-2" onSubmit={handleSubmit(submitForm)}>
//         <Input type="email" label="Email" name="email" required={true} register={register} />
//         <Input type="password" label="Password" name="password" required={true} register={register} />
//         <Button className="mt-2" type="submit">
//           Submit
//         </Button>
//       </form>
//     </div>
//   )
// }

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const { req, res } = context;
//   const session = await getServerSession(req, res, authOptions);

//   if (session) {
//     return { redirect: { destination: "/" } };
//   }

//   return {
//     props: {
//       csrfToken: await getCsrfToken(context),
//     },
//   }
// }