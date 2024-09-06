# Nails 4 Life - <a href="https://nails4lifesurrey.com/">Website</a>

Welcome to the official website for Nails 4 Life, a real business based in Surrey, BC. This site provides essential information about the business, including operating hours, location, and contact details. It also showcases customer reviews and social media updates. The site is built using modern front-end technologies and integrates with Google APIs to pull dynamic data from the backend.

![Screenshot 2024-09-04 at 11 06 03 PM](https://github.com/user-attachments/assets/a4c5e3ba-d11b-4606-a284-d57c153653ff)
![Screenshot 2024-09-04 at 11 05 48 PM](https://github.com/user-attachments/assets/d000326a-4a45-463d-9069-eb4484e8cc6b)
![Screenshot 2024-09-04 at 11 05 35 PM](https://github.com/user-attachments/assets/b364eee1-7a69-4649-9367-fd11a68f4f84)

## Key Features

- **Business Information:** Displays essential business details such as hours, address, and phone number.
- **Customer Reviews:** Integrated with Google Places API to pull and display real-time reviews from the business's Google listing.
- **Instagram Gallery:** Showcases social media photos from Instagram using a widget to keep the gallery updated.
- **Social Media Integration:** Links to the business’s Instagram, TikTok, and Google Maps profile.
- **Responsive Design:** Optimized for both desktop and mobile views with flexible layouts.
- **Smooth Animations:** Utilizes Framer Motion for scroll-triggered animations, including fade-in effects for the testimonials section and social icons.

## Tech Stack

- **Frontend:** React.js with TypeScript, SCSS for styling, and Framer Motion for animations.
- **Backend:** Created and hosted using Node.js and Express. The backend serves data to the frontend.
- **API Integration:** The site uses Axios to make requests to Google’s Places API to fetch and display live reviews and business details.
- **Responsive Design:** The layout adapts seamlessly to both desktop and mobile screens using CSS Grid, Flexbox, and media queries.

## Installation and Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/nails4life.git
    cd nails4life
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up the environment variables: Create a `.env` file in the root directory and include your Google Places API key:
    ```bash
    VITE_API_URL=http://localhost:3000/place-details
    ```

4. Run the application:
    ```bash
    npm run dev
    ```

5. Open the application in your browser:
    ```bash
    http://localhost:3000
    ```

## Google API Integration

The Google Places API is used to pull customer reviews and other business information dynamically. The API fetches data from the backend and automatically updates the reviews on the website to reflect the latest feedback from customers.

## Business Purpose

This website was specifically designed for Nails 4 Life, a nail salon in Surrey, BC. It is aimed at providing potential customers with up-to-date information, showcasing real-time reviews, and improving the salon’s online presence through integrated social media and easy navigation to their location.
