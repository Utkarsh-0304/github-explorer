# GitHub Explorer

A simple and clean web application built with React and TypeScript that allows you to search for GitHub repositories in real-time. You can view repository details and bookmark your favorites for later.

## Features

- **Real-time Search:** Instantly search for repositories as you type, with debouncing to optimize API requests.
- **Repository Cards:** View search results in a clear and organized card layout.
- **Bookmarking:** Save your favorite repositories. Bookmarks are stored in your browser's local storage.
- **Filter by Bookmarks:** Easily filter the view to see only your bookmarked repositories.
- **Responsive Design:** A clean interface that works on different screen sizes.

## Tech Stack

- **Frontend:** [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Code Quality:** [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher) and [npm](https://www.npmjs.com/) installed.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/github-explorer.git
    cd github-explorer
    ```

2.  **Install the dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

The application should now be running on `http://localhost:5173` (or another port if 5173 is in use).

## Available Scripts

In the project directory, you can run:

-   `npm run dev`: Runs the app in development mode.
-   `npm run build`: Builds the app for production.
-   `npm run lint`: Runs the linter to check for code quality issues.
-   `npm run format`: Formats all source files using Prettier.
-   `npm run preview`: Serves the production build locally for preview.
