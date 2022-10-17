import { getCsrfToken, getProviders, getSession, signIn } from "next-auth/react";

function SignIn({ providers }: { providers: { name: any; id: string } }) {
  if (Object.values(providers)?.length === 0) return null;
  return (
    <>
      {Object.values(providers).map(provider => (
        <div className="w-80 mx-auto space-y-10 mt-10" key={provider.name}>
          <button className="border border-gray-400 px-20 py-7 hover:bg-slate-200 shadow-md" type="button" onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
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
