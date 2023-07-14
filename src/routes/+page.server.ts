import { fail } from '@sveltejs/kit';

export const load = async ({ locals }) => {
  const session = await locals.getSession();

  if (!session) {
    return fail(401, {
      message: 'Unauthorized',
    });
  }

  const todos = await locals.prisma.todo.findMany({
    where: {
      userId: session.user.id,
    },
  });

  return {
    todos,
  };
};

export const actions = {
  addTodo: async ({ locals, request }) => {
    const session = await locals.getSession();

    if (!session) {
      return fail(401, {
        message: 'Unauthorized',
      });
    }

    const data = await request.formData();
    const title = data.get('title')?.toString();

    if (!title) {
      return fail(400, {
        message: 'Title is required',
      });
    }

    await locals.prisma.todo.create({
      data: {
        title,
        userId: session.user.id,
      },
    });
  },
};
