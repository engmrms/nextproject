import { yupResolver } from "@hookform/resolvers/yup";
import { getCsrfToken, getProviders, getSession, signIn, SignInOptions } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { TextField } from "../../Core/UI/Controls";

interface IFORM extends SignInOptions {
  email: string;
  password: string;
  callbackUrl: string;
}

function SignIn({ providers, csrfToken }: { providers: { name: any; id: string }; csrfToken: string }) {
  if (Object.values(providers)?.length === 0) return null;
  const schemaValidation = yup.object().shape({
    email: yup.string().email("Invalid Email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFORM>({ resolver: yupResolver(schemaValidation) });
  const submitHandler = (data: IFORM) => {
    data.callbackUrl = `${window.location.origin}/`;
    signIn("credentials", data);
    console.log(data);
  };
  return (
    <>
      {/* {Object.values(providers).map(provider => (
        <div className="w-80 mx-auto space-y-10 mt-10" key={provider.name}>
          {console.log(provider)}
          <button className="border border-gray-400 px-20 py-7 hover:bg-slate-200 shadow-md" type="button" onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))} */}

      <div className="max-w-3xl md:min-w-[480px] m-auto border border-stone-400 p-8  rounded shadow">
        <form method="post" onSubmit={handleSubmit(submitHandler)}>
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <div className="grid grid-cols-1 space-y-4">
            <TextField
              register={register}
              name="email"
              title="Email"
              errors={errors}
              required
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"></TextField>

            <TextField
              register={register}
              name="password"
              title="Password"
              type="password"
              required
              errors={errors}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"></TextField>

            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10">
              Sign in
            </button>
          </div>
        </form>

        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>
        <div className="flex mt-4 gap-x-2">
          <button
            type="button"
            onClick={() => signIn("google")}
            className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
          <button
            onClick={() => signIn("github")}
            className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
          </button>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Don't have an account?
          <Link href="/register">
            <a href="" className="font-medium text-purple-600 hover:underline">
              Sign up
            </a>
          </Link>
        </p>
      </div>
    </>
  );
}

export default SignIn;

export async function getServerSideProps(context: { req: any; query: any }) {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken();
  const { req, query } = context;
  const session = await getSession({ req });
  if (session) {
    return {
      redirect: {
        destination: query?.callbackUrl ? query?.callbackUrl : "/",
        permanent: false,
      },
    };
  }
  return {
    props: { providers, csrfToken },
  };
}
