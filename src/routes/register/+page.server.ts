import prisma from '$lib/server/db';
import { fail, type Actions } from '@sveltejs/kit';

export const actions = {
	async default({ request }) {
		const data = await request.formData();

		const username = data.get('username') as string;
		const password = data.get('password') as string;

		if (!username || !password) {
			return fail(400, {
				username,
				password,
				missing: true
			});
		}

		const user = await prisma.user.create({
			data: {
				username,
				password
			}
		});

		return {
			body: {
				user
			}
		};
	}
} satisfies Actions;
