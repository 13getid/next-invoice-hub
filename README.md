# Next Invoice Hub

A full-stack invoice management application built with Next.js App Router. It provides a secure dashboard for creating, viewing, updating, and deleting invoices, along with customer management and authentication.

## Features

- Secure login with NextAuth credentials authentication
- Invoice CRUD operations with form validation using Zod
- Customer listing and management
- Dashboard with sidebar navigation
- Server-side data fetching with React Server Components
- PostgreSQL database with direct SQL queries
- Responsive UI built with Tailwind CSS

## How It Works

The application follows the Next.js App Router architecture with server components and server actions:

1. **Authentication**: Users log in via the credentials provider configured in `auth.ts` and `auth.config.ts`. The middleware in `proxy.ts` protects dashboard routes.

2. **Data Layer**: PostgreSQL is used as the database. Server actions in `app/lib/actions.ts` handle all database mutations (create, update, delete invoices) with Zod validation and revalidation via `revalidatePath`.

3. **Dashboard**: Authenticated users access a dashboard with a sidebar for navigation between invoices and customers. Invoices are fetched server-side and displayed in a table with status indicators.

4. **Forms**: Invoice creation and editing use React Server Actions with `useActionState` for progressive enhancement and error handling.

## Tech Stack

- Next.js (App Router)
- NextAuth for authentication
- PostgreSQL via `postgres` driver
- Tailwind CSS for styling
- Zod for schema validation
- TypeScript

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Set up your PostgreSQL database and add the connection URL to your environment variables as `POSTGRES_URL`.

3. Run the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Login
   Default login credentials
- **Email**: user@nextmail.com
- **Password**: 123456

## Deployed

Live version: [https://next-invoice-4b3930q9m-ianotieno813-4064s-projects.vercel.app/](https://next-invoice-4b3930q9m-ianotieno813-4064s-projects.vercel.app/)

## Credits

This project is built with [Next.js](https://nextjs.org/), the React framework for production. It is inspired by the [Next.js App Router Course](https://nextjs.org/learn) and extends the dashboard tutorial into a complete invoice management solution.
