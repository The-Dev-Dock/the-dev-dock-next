# The Dev Dock - Next.js Application

A modern website for The Dev Dock, a tech education and career advancement platform.

## Features

- Responsive design
- Modern UI with animations and interactive elements
- Contact form with email functionality
- Server-side rendering with Next.js

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dev-dock-next
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Environment Setup:
   - Create a `.env.local` file in the root directory
   - Copy contents from `.env.local.example` and update with your credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   ```
   Note: For Gmail, you'll need to create an App Password in your Google account security settings.

### Development

Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## Tech Stack

- Next.js
- React
- TypeScript
- Node.js
- Nodemailer for email functionality
- Font Awesome for icons
- CSS with custom styles

## Project Structure

- `/src/app` - Next.js app router files
- `/src/components` - React components
- `/src/styles` - CSS styles
- `/src/app/api` - API routes for server-side functionality
- `/public` - Static assets

## Custom Email Setup

The contact form uses Next.js API routes to handle form submissions and send emails via Nodemailer. Emails are sent using the Gmail SMTP server.

To customize the email template or recipient, modify the `/src/app/api/send-email/route.ts` file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.