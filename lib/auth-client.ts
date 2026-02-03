import { createAuthClient } from 'better-auth/react';

const baseURL = typeof window !== 'undefined' 
  ? window.location.origin 
  : (process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000');

export const authClient = createAuthClient({
  baseURL,
  plugins: [],
});

export const betterauthClient = authClient;

export const { signIn, signOut, signUp, useSession } = authClient;
