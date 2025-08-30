This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Expense Tracker

A modern, AI-powered expense tracking web application built with Next.js 15, featuring intelligent categorization, real-time analytics, and personalized financial insights.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Set-up .env
```bash
# Database
DATABASE_URL="your-neon-database-url"
```

## Prisma Setup

Create a project in [Neon](https://neon.com).

1. Created a project: Expense Tracker
2. Copied database URL to .env with variable name DATABASE_URL
3. Install Prisma
``` bash
npm i -D prisma
```
4. Initialize Prisma schema

``` bash
npx prisma init
```
5. Run prisma dev to start a local Prisma Postgres server.
6. Define models in the schema.prisma file.
7. T generate prisma schema.
``` bash
 npx prisma generate
 ```
8. Run prisma migrate dev to migrate your local Prisma Postgres database.
``` bash
npx prisma migrate dev
```
9. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and a managed serverless Postgres database. Read: https://pris.ly/cli/beyond-orm

More information in our documentation:
https://pris.ly/d/getting-started

