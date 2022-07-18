import { Nav } from 'components/nav/Nav'
import type { NextPage } from 'next'
import { User } from 'next-auth';
import { getSession } from "next-auth/react"


interface ProjectsProps {
	user: User;
}

const Projects: NextPage<ProjectsProps> = ({ user }) => {
	console.log(user)
	return (
		<div>
			<Nav user={user} />
			Projects
			{JSON.stringify(user)}
		</div>
	)
}

export async function getServerSideProps(ctx: any) {
	const session = await getSession(ctx)
	if (!session) {
		return {
			redirect: {
			destination: '/',
			permanent: false,
			},
		}
	}
	const { user } = session;
	return {
		props: { user }
	}
}

export default Projects
