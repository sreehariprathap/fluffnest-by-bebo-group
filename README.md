# FluffNest E-Commerce Platform

FluffNest is a modern e-commerce platform built using Nuxt 3, Vue 3, and other cutting-edge technologies. It supports multiple languages (English, French, and Japanese), providing a seamless shopping experience for users around the world.

## Technologies Used

- Nuxt 3: The core framework that powers the application.
- Vue 3: The underlying JavaScript framework for building dynamic user interfaces.
- Tailwind CSS: A utility-first CSS framework for styling.
- SASS: Used for additional styling and customization.
- DaisyUI: A component library and set of utilities for Tailwind CSS.
- Pinia: A modern and lightweight state management system for Vue applications.
- Supabase: Provides database hosting and authentication services.
- Prisma: A database toolkit for designing and querying databases.
- Stripe: Integrated for secure and seamless payment processing.

## Features

- Multilingual Support: FluffNest supports English, French, and Japanese languages, making it accessible to a wider audience.
- Responsive Design: The platform offers a responsive and user-friendly design, ensuring a consistent experience across devices.
- Secure Payment: Integrated Stripe for secure payment processing. Test card number: 4242 4242 4242 4242, Expiry: 12/24, CVV: 123.
- State Management: Utilizes Pinia for efficient state management, ensuring a smooth user experience.
- Database Hosting: Supabase is used to host the database and provide authentication services.
- Internationalization: Translate the platform's content into multiple languages for a global reach.
- Stylish UI: Tailwind CSS with DaisyUI provides a clean and modern visual design.

## Getting Started

1. Clone the repository: `git clone https://github.com/yourusername/fluffnest.git`
2. Install dependencies: `npm install`
3. Copy the `.env.example` file to `.env` and configure environment variables.
4. Run the development server: `npm run dev`

## Development Guides
### Prisma
1. **Initialize Prisma**  
   Run the following command to initialize Prisma in your project:
   ```bash
   npx prisma init
   ```

2. **Generate Prisma Client**  
   Generate the Prisma Client to use in your application:
   ```bash
   npx prisma generate
   ```

3. **Run Database Migrations**  
   Apply your database migrations:
   ```bash
   npx prisma migrate dev --name init
   ```

4. **Seed the Database**  
   Populate your database with seed data:
   ```bash
   npx prisma db seed
   ```


### Test Cards for Stripe

Here are some test card numbers you can use for testing Stripe integration:

| Card Type           | Card Number        | CVV         | Expiry Date    |
|---------------------|--------------------|-------------|----------------|
| Visa                | 4242 4242 4242 4242| Any 3 digits| Any future date|
| Visa (debit)        | 4000 0566 5566 5556| Any 3 digits| Any future date|
| Mastercard          | 5555 5555 5555 4444| Any 3 digits| Any future date|
| Mastercard (2-series)| 2223 0031 2200 3222| Any 3 digits| Any future date|


## Configuration

- Check the `nuxt.config.js` file for Nuxt-specific configurations.
- Configure your Supabase credentials in the `.env` file.
- Configure Stripe credentials in the appropriate places (e.g., payment processing code).

## Contribution

Contributions are welcome! Feel free to open issues and submit pull requests.

---

**FluffNest** - Your Go-To E-Commerce Platform
