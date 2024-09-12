# ⚛️ React Redux Table with Tailwind & TypeScript

This project is a modern web application built with **React**, **Redux**, **RTK Query**, **Tailwind CSS**, and **TypeScript**. It provides a clean and responsive table component with search functionality in the headers. The project follows best practices in structuring and organizing components, state management, and styling, making it both scalable and easy to maintain.

## 🛠️ Technologies Used

- **React**: Created using `create-react-app`, a fast way to set up modern React applications.
- **Redux**: State management is handled with Redux and the powerful Redux Toolkit, making state handling efficient and simple.
- **RTK Query**: Used for data fetching and server-side state management.
- **Tailwind CSS**: For clean, responsive, and utility-first styling of the UI components.
- **TypeScript**: Provides static type-checking to ensure code quality and reliability.

### Key Components:

- **`table.tsx`**: This is the core table component that brings everything together. It renders the table along with its headers and body.
- **`tableHead.tsx`**: The table header component which includes input fields for filtering/searching across different columns.
- **`tableBody.tsx`**: Displays the actual data rows fetched from the API.
- **`input.tsx`**: A reusable input field component, styled using Tailwind CSS.

### State Management:

- **`store.ts`**: The main Redux store configuration where slices and middleware like RTK Query are included.
- **`usersSlice.ts`**: Handles the state for user-related data, including fetching, loading states, and error handling.
- **`rootActions.ts`**: Combines actions for easy dispatch within components.
- **`useActions.ts`**: A custom hook to simplify dispatching actions from Redux.

  ### API Integration:

- **`users.ts`**: This file is responsible for fetching user data from an API using RTK Query. It handles both fetching and caching the data, making requests efficient and fast.

## 🚀 Getting Started

### Prerequisites

Ensure that you have **Node.js** installed. You can install Node.js from [here](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/smart-business-test.git
   
2. Navigate to the project directory:
   
   ```bash
    cd smart-business-test

4. Install the required dependencies:
   
   ```bash
    cd smart-business-test

6. Start the development server:
   
   ```bash
   npm run dev

The app will be available at http://localhost:3000.

Also you can view the live project at:
https://luvtorn.github.io/smart-business-test/.

### Build

1. To build the app for production, run:
   
   ```bash
   npm run build

This will create an optimized production build in the build/ directory.

## ✨ Features

- Searchable Table: Each column in the table header has a search input to filter data efficiently.
- State Management: The app uses Redux for central state management, making it easy to manage complex state logic.
- Type Safety: Thanks to TypeScript, the entire codebase is type-safe, reducing the likelihood of bugs and making development more reliable.
- Tailwind CSS: Modern utility-first CSS for fast and beautiful styling.

## 📧 Contact

If you have any questions or feedback, feel free to reach out via:

- Email: kolyangermanenko@gmail.com
- GitHub: [luvtorn](https://github.com/luvtorn)

