import { NextPage } from "next";
import { Provider } from "next-auth/providers";
import { getProviders, signIn as SignIntoProvider, getSession } from "next-auth/react"

interface SignInProps {
    providers: Provider[];
}

const signIn: NextPage<SignInProps> = ({ providers }) => {
    return (
        <>
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/projects"})}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </>
    )
}

export async function getServerSideProps(ctx: any) {

    const session = await getSession(ctx)
	if (session) {
		return {
			redirect: {
			destination: '/projects',
			permanent: false,
			},
		}
	}

    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default signIn