# MyFashion Corner - E-commerce Platform

A full-featured e-commerce platform built with Next.js 14, featuring a modern design, complete admin dashboard, and comprehensive shopping experience.

## Features

- **Modern Design**: Built with Tailwind CSS, DaisyUI, and Shadcn/ui components
- **Type-Safe**: Full TypeScript implementation
- **Database**: MongoDB integration with Mongoose
- **Image Management**: Cloudinary integration for image uploads
- **User Authentication**: NextAuth.js with secure credential-based authentication
- **Admin Dashboard**: Complete admin panel for managing products, orders, and users
- **SEO Optimized**: Server-side rendering for better SEO performance
- **Image Optimization**: Plaiceholder for blurred image placeholders
- **Payment**: Cash on Delivery (COD) payment method
- **Cart Management**: Full shopping cart with Zustand state management
- **Order Management**: Complete order tracking and history

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS + DaisyUI
- **Database**: MongoDB
- **Authentication**: NextAuth.js
- **State Management**: Zustand
- **Image Optimization**: Sharp, Plaiceholder
- **Forms**: React Hook Form
- **API Data Fetching**: SWR

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB database (local or Atlas)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file in the root directory with the following variables:
```
MONGO_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
CLOUDINARY_SECRET=your_cloudinary_secret
NEXT_PUBLIC_CLOUDINARY_API_KEY=your_cloudinary_api_key
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
NEXT_PUBLIC_APP_NAME=MyFashion Corner
NEXT_PUBLIC_APP_DESC=Your app description
```

3. Seed the database (optional):
```bash
# Start the dev server first
npm run dev

# Then visit: http://localhost:3000/api/products/seed
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Default Credentials

After seeding the database:
- **Admin**: `admin@admin.com` / `admin123`
- **User**: `john@example.com` / `user123`

## Project Structure

```
├── app/              # Next.js app directory
│   ├── (front)/      # Frontend routes
│   ├── admin/        # Admin dashboard routes
│   └── api/          # API routes
├── components/       # React components
├── lib/              # Utilities, models, and services
└── public/           # Static assets
```

## License

Private project - All rights reserved
# ecommerce-project-nextjs
# ecommerce-project-nextjs
# ecommerce-project-nextjs
