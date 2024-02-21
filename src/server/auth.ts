import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import DiscordProvider from "next-auth/providers/discord";
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import TwitchProvider from "next-auth/providers/twitch";
import { env } from "~/env.mjs";
import { prisma } from "~/server/db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  type Session = {
    user: DefaultSession["user"] & {
      id: string;
      // ...other properties
      // role: UserRole;
    };
  } & DefaultSession

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

const providers = {
  apple:
    env.APPLE_ID && env.APPLE_SECRET
      ? AppleProvider({
          clientId: env.APPLE_ID,
          clientSecret: env.APPLE_SECRET,
        })
      : undefined,
  discord:
    env.DISCORD_CLIENT_ID && env.DISCORD_CLIENT_SECRET
      ? DiscordProvider({
          clientId: env.DISCORD_CLIENT_ID,
          clientSecret: env.DISCORD_CLIENT_SECRET,
        })
      : undefined,
  facebook:
    env.FACEBOOK_CLIENT_ID && env.FACEBOOK_CLIENT_SECRET
      ? FacebookProvider({
          clientId: env.FACEBOOK_CLIENT_ID,
          clientSecret: env.FACEBOOK_CLIENT_SECRET,
        })
      : undefined,
  github:
    env.GITHUB_CLIENT_ID && env.GITHUB_CLIENT_SECRET
      ? GitHubProvider({
          clientId: env.GITHUB_CLIENT_ID,
          clientSecret: env.GITHUB_CLIENT_SECRET,
        })
      : undefined,
  google:
    env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET
      ? GoogleProvider({
          clientId: env.GOOGLE_CLIENT_ID,
          clientSecret: env.GOOGLE_CLIENT_SECRET,
        })
      : undefined,
  twitch:
    env.TWITCH_CLIENT_ID && env.TWITCH_CLIENT_SECRET
      ? TwitchProvider({
          clientId: env.TWITCH_CLIENT_ID,
          clientSecret: env.TWITCH_CLIENT_SECRET,
        })
      : undefined,
};

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    ...(providers.apple ? [providers.apple] : []),
    ...(providers.discord ? [providers.discord] : []),
    ...(providers.facebook ? [providers.facebook] : []),
    ...(providers.github ? [providers.github] : []),
    ...(providers.google ? [providers.google] : []),
    ...(providers.twitch ? [providers.twitch] : []),

    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
