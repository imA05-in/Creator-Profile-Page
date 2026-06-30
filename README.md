# Creator Profile
Link: [Creator Profile Page](https://creator-profile-page.vercel.app)
A React-based creator profile showcase built with Vite, React Router, Redux Toolkit, and Tailwind CSS.

NOTE: only 2 profile images are used, rest profiles are compeletly fictional

## Overview

This project displays clickable creator cards. Each card navigates to a detail view with a full creator profile, including audience and performance data, social media metrics, and collaboration information.

## Key Features

On clicking the cards its lead to a section containg following information.

- Creator introduction
- Social media overview
- Audience insights
- Previous brand collaborations
- Performance metrics
- Contact / Collaboration CTA


I have used redux to store the dummy data of creators, which can be replaced with custom api/hook in future (if required), and would need to fetch the data only oncenp, making it easier on the servers.

From redux i have imported data in only one component i.e. /src/pages/Content.jsx and have passed down values to other components called inside it.

then for components i made Box and BoxOWO (object within object) and reused them for Components like CreatorInro, PerformaceMetrices, etc, to avoid repeating the code. 

Further more i haved also used react-router to perform the client side routing.


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

