# SmileCare Dental - Full Stack Web Application

## Overview

SmileCare Dental is a modern, responsive dental practice website built with React, TypeScript, and Express.js. The application features a professional landing page with appointment booking functionality, contact forms, and service information. It uses a full-stack architecture with a React frontend, Express backend, and PostgreSQL database integration through Drizzle ORM.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Animations**: Framer Motion for smooth page transitions and animations
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API design
- **Middleware**: Express middleware for request logging and error handling
- **Development**: Hot reload with tsx for development server

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Migrations**: Drizzle Kit for schema management
- **Schema**: Shared TypeScript schema definitions with Zod validation

## Key Components

### Frontend Components
- **Layout System**: Header, Footer, and Layout components for consistent structure
- **Page Components**: Home, About, Services, Contact, and Booking pages
- **UI Components**: Comprehensive shadcn/ui component library including forms, buttons, cards, dialogs, and more
- **Animation Components**: Custom AnimatedSection component for scroll-triggered animations

### Backend Services
- **Storage Layer**: Abstracted storage interface with in-memory implementation (ready for database integration)
- **API Routes**: RESTful endpoints for appointments and contacts
- **Validation**: Zod schema validation for all API inputs
- **Error Handling**: Centralized error handling middleware

### Shared Components
- **Schema Definitions**: Shared TypeScript types and Zod schemas for appointments and contacts
- **Type Safety**: End-to-end type safety from database to frontend

## Data Flow

1. **User Interaction**: Users interact with React components in the browser
2. **Form Submission**: Forms use React Hook Form with Zod validation
3. **API Requests**: TanStack Query manages HTTP requests to Express backend
4. **Server Processing**: Express routes validate data and interact with storage layer
5. **Database Operations**: Drizzle ORM handles type-safe database queries
6. **Response Handling**: JSON responses sent back to frontend with proper error handling
7. **UI Updates**: React Query updates UI state and handles caching

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form, TanStack Query
- **UI Framework**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Backend**: Express.js, Drizzle ORM, Neon Database driver
- **Validation**: Zod for schema validation
- **Animation**: Framer Motion, Embla Carousel
- **Development**: Vite, TypeScript, tsx, esbuild

### Build and Development Tools
- **Bundler**: Vite for frontend, esbuild for backend
- **TypeScript**: Full TypeScript setup with path mapping
- **PostCSS**: For Tailwind CSS processing
- **Database Tools**: Drizzle Kit for migrations and schema management

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with hot module replacement
- **Backend**: tsx with hot reload for development
- **Database**: Local PostgreSQL or Neon serverless connection
- **Port Configuration**: Frontend on Vite default, backend on port 5000

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Deployment**: Configured for Replit with autoscale deployment
- **Process**: npm scripts handle both development and production workflows

### Environment Configuration
- **Database**: Uses DATABASE_URL environment variable
- **Replit Integration**: Configured with .replit file for seamless deployment
- **Build Process**: Separate build steps for frontend and backend
- **Static Serving**: Express serves built frontend assets in production

## Changelog

- June 26, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.