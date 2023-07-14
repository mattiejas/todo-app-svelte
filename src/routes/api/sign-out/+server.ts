import { redirect } from '@sveltejs/kit';

export const POST = async ({ locals }) => {
  await locals.supabase.auth.signOut();

  const session = await locals.getSession();

  throw redirect(303, '/');
};
