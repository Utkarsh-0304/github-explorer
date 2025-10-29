# GitHub Explorer

A micro production-ready application built with React and TypeScript that allows searching and bookmarking GitHub repositories. 

## Features

- **Real-time Search:** Instantly search for repositories as you type, with debouncing to optimize API requests.
- **Repository Cards:** View search results in a clear and organized card layout.
- **Bookmarking:** Bookmark your favourite repositories.
- **Filter by Bookmarks:** Easily filter the view to see only your bookmarked repositories.

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
    git clone https://github.com/Utkarsh-0304/github-explorer.git
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

## Decisions and Trade-Offs
- **Styling**: Using TailwindCSS, ruled out the need to define separate CSS files and instead write CSS with the HTML itself.
- **State Management**: In the current scenario, I didn't find the need for any state-management library like Redux Toolkit. But as the project complexity grows, some libraries would be needed.
- **Fetch API**: Currently, only the browser Fetch API is being used. In future, Axios can be used to improve data fetching from the public GitHub API.

## Future-Scope
- Add an option to show all bookmarks irrespective of the current search query.
- Implement Pagination to display more than 30 repository cards concisely.
- Add more sort options (like newest, oldest, recently updated, etc.)
- Feature to filter based on languages, similar to GitHub.

## Deployments

This application is deployed on **Render** and can be accessed [here](https://github-explorer-01sf.onrender.com/)
