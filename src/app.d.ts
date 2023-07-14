// See https://kit.svelte.dev/docs/types#app

import type { PrismaClient } from '@prisma/client';
import type { SupabaseClient, Session } from '@supabase/supabase-js';

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      supabase: SupabaseClient;
      getSession(): Promise<Session | null>;
      prisma: PrismaClient;
    }
    interface PageData {
      session: Session | null;
    }
    // interface Platform {}
  }
}

export {};

declare module '@fortawesome/pro-solid-svg-icons/index.es' {
  export * from '@fortawesome/pro-solid-svg-icons';
}
