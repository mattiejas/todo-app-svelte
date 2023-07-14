import { redirect } from '@sveltejs/kit';

export const POST = async ({ locals, url }) => {
  const redirectTo = url.searchParams.get('redirect_to') || '/';

  const { data, error } = await locals.supabase.auth.signInWithOAuth({
    provider: 'discord',
    options: {
      redirectTo,
    },
  });

  if (error) {
    console.log(error);

    return new Response(JSON.stringify(error), {
      status: 500,
    });
  }

  // throw redirect(303, data.url);
  return new Response(JSON.stringify(data), {
    status: 200,
  });
};
