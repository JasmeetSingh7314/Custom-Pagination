# Recent Reports Dialog Box
## Overview
- This project is focused on designing a dialog box that displays a list of recently generated reports within the last 30 days. The project is built using Next.js, TypeScript, and Tailwind CSS. Dummy data is used to populate the list, and a custom paginator is implemented 
  without using any npm package or module.

## Features
 - Display a list of recently generated reports within the last 30 days.
 - Use dummy data to populate the list for demonstration purposes.
 - Implement a custom paginator without using any npm package or module.
 - Built-in Next.js for server-side rendering and routing.
 - Utilizes TypeScript for type safety.
 - Styling with Tailwind CSS for rapid UI development.
## Technologies Used
- Next.js
- TypeScript
- Tailwind CSS
## Custom Paginator Implementation
- The custom paginator is implemented within the Pagination.tsx component. It allows users to navigate through report pages by providing previous and next buttons. The logic to calculate the number of pages and handle page navigation is handled internally within the component.
## Filter
To filter the reports within the last 30 days, the following steps are taken:

- Get the current date.
- Subtract 30 days from the current date to get the date 30 days ago.
- Compare the date of each report with the date 30 days ago.
- Include only those reports whose date is greater than or equal to the date 30 days ago.

## Installation
 - Clone the repository
 - Install dependencies: npm install
## Usage
- Start the development server: npm run dev
- Open your browser and navigate to http://localhost:3000
- The dialog box should automatically display the list of recently generated reports.
