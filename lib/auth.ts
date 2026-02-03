import { betterAuth } from 'better-auth';
import { nextCookies } from 'better-auth/next-js';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import {
  user,
  session,
  verification,
  account,
  chat,
  message,
  extremeSearchUsage,
  messageUsage,
  subscription,
  payment,
  dodosubscription,
  customInstructions,
  stream,
  lookout,
} from '@/lib/db/schema';
import { db } from '@/lib/db';
import { config } from 'dotenv';

config({
  path: '.env.local',
});

export const auth = betterAuth({
  rateLimit: {
    max: 100,
    window: 60,
  },
  experimental: { joins: true },
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: {
      user,
      session,
      verification,
      account,
      chat,
      message,
      extremeSearchUsage,
      messageUsage,
      subscription,
      payment,
      dodosubscription,
      customInstructions,
      stream,
      lookout,
    },
  }),
  socialProviders: {
    // Add your social providers here
    // github: {
    //   clientId: process.env.GITHUB_CLIENT_ID!,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    // },
  },
  plugins: [
    nextCookies(),
  ],
  trustedOrigins: ['http://localhost:3000'],
  allowedOrigins: ['http://localhost:3000'],
});
