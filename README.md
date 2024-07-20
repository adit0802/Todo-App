# TodoApp Using React + Vite + Tailwind CSS

This project is a responsive Todo application built with React and styled using Tailwind CSS. It focuses on fundamental React concepts, state management, and data integration with local storage.

## Features

#### Add Todo: Allows users to create and add new tasks to their list.
#### View Todos: Displays all tasks in a list view for easy access and management.
#### Update Todo: Enables modification of existing tasks to keep them up-to-date.
#### Delete Todo: Provides the ability to remove tasks that are no longer needed.
#### Mark as Completed: Offers an option to mark tasks as finished.
#### Completed Count: Shows how many tasks are completed for the day.
#### State Management: Utilizes React's hooks (useState, useEffect) to manage application state efficiently.
#### Data Integration: Saves task data in the browser’s local storage to ensure persistence across sessions.
#### Styling: Designed with Tailwind CSS for a responsive and intuitive user interface.

## Technologies Used

#### React.js
#### JavaScript
#### Tailwind CSS
#### HTML

## Installation

#### 1. Clone the repository:
   git clone https://github.com/adit0802/Todo-App.git

#### 2. Navigate to the project directory:
   cd todoapp

#### 3. Install the dependencies:
   npm install

#### 4. Install Tailwind CSS:

npm install -D tailwindcss
npx tailwindcss init

#### 5. Configure Tailwind CSS by adding the paths to all of your template files in the tailwind.config.js file:
   /** @type {import('tailwindcss').Config} \*/
   export default {
   content: ["./index.html", "./src/**/\*.{js,ts,jsx,tsx}"],
   theme: {
   extend: {},
   },
   plugins: [],
   };

#### 6. Add the Tailwind directives to your CSS file:

#### @tailwind base;
#### @tailwind components;
#### @tailwind utilities;

## Running the Application

#### 7. Start the development server:

npm run dev

## TheTodoApp should now be running on your localhost

## You can also see the project on https://aditodosapp.netlify.app/
