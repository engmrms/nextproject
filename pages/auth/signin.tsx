import { getProviders, signIn } from "next-auth/react";

export default function SignIn({ providers }) {
  return (
    <>
      {Object.values(providers).map(provider => (
        <div className="w-80 mx-auto space-y-10 mt-10" key={provider.name}>
          {console.log(provider.id)}
          <button className="border border-gray-400 px-20 py-7 hover:bg-slate-200 shadow-md" type="button" onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
