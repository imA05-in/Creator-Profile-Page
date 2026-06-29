# Creator Profile
Link: [Creator Profile Page](https://creator-profile-page.vercel.app)
A React-based creator profile showcase built with Vite, React Router, Redux Toolkit, and Tailwind CSS.

## Overview

This project displays clickable creator cards. Each card navigates to a detail view with a full creator profile, including audience and performance data, social media metrics, and collaboration information.

## Key Features

- Clickable creator cards with profile navigation
- Detailed creator introduction and bio
- Social media overview with follower counts
- Audience insights and demographic data
- Previous brand collaborations history
- Performance metrics for content impact
- Contact / collaboration CTA sections
- Responsive layout with Tailwind CSS styling
- State managed using Redux Toolkit
- Routing with React Router v8

## Tech Stack

- React 19
- Vite
- Redux Toolkit
- React Redux
- React Router
- Tailwind CSS
- nanoid

## Project Structure

- `src/App.jsx` – application shell and outlet for routed pages
- `src/main.jsx` – entry point, router setup, Redux provider
- `src/pages/Content.jsx` – creator card list and navigation
- `src/store/CProfileSlice.js` – profile data slice backed by Redux Toolkit
- `src/store/store.js` – Redux store configuration
- `src/components/` – reusable UI components and creator profile sections
- `src/assets/` – project images and media assets

