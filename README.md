# Leaderboard App

A React-based leaderboard application that displays a list of users and their scores.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/leaderboard-app.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open your web browser and navigate to `http://localhost:3000`

## Features

* Displays a list of users and their scores
* Allows users to view their own scores and rankings
* Supports multiple leaderboard types (e.g. daily, weekly, monthly)
* Uses a RESTful API to retrieve data from a backend server

## Components

* `App`: The main application component
* `Leaderboard`: The leaderboard component that displays the list of users and scores
* `LeaderboardHeader`: The header component for the leaderboard
* `LeaderboardRanking`: The ranking component that displays the top users
* `LeaderboardUsers`: The users component that displays the list of users

## API

The application uses a RESTful API to retrieve data from a backend server. The API endpoints are:

* `GET /api/users`: Retrieves a list of all users
* `POST /api/users`: Adds new user
* `POST /api/claim-points/:userId`: Claims random points
* `GET /api/history`: Retrieves the history of claimed points

## Environment Variables

The application uses the following environment variables:

* `REACT_APP_BACKEND_URI`: The URL of the backend server

## Dependencies

The application uses the following dependencies:

* `react`: The React library
* `react-router-dom`: The React Router library
* `axios`: The Axios library for making HTTP requests
* `@mui/material`: The Material-UI library for styling

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.