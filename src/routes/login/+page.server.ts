import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
  login: async ({ locals, url }) => {
    const redirectTo = url.searchParams.get('redirect_to') || '/';

    const { data, error } = await locals.supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        redirectTo,
      },
    });

    if (error) {
      console.log(error);

      return fail(400, {
        message: 'Failed to login with Discord',
      });
    }

    throw redirect(303, data.url);
  },
};
