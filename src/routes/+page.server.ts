import type { Todo } from '@prisma/client';
export const load = async ({ locals }) => {
  const session = await locals.getSession();

  if (!session) {
    return {
      data: {
        todos: [],
      },
    };
  }

  return {
    data: {
      todos: [
        {
          id: 1,
          title: 'test',
          completed: false,
          createdAt: new Date(),
          userId: session.user.id,
        },
      ] as Todo[],
    },
  };
};
