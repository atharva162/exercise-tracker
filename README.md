# Exercise Tracker

A full stack JavaScript Application build with NodeJs, ExpressJs and MongoDB(for database) that keeps record of the user's exercise sessions.
### User Stories:-
- User can POST to /api/exercise/new-user with form data username to create a new user. The returned response will be an object with username and _id properties.

- User can make a GET request to api/exercise/users to get an array of all users. Each element in the array is an object containing a user's username and _id.

- User can POST to /api/exercise/add with form data userId=_id, description, duration, and optionally date. If no date is supplied, the current date will be used. The response returned will be the user object with the exercise fields added.

- User can make a GET request to /api/exercise/log with a parameter of userId=_id to retrieve a full exercise log of any user. The returned response will be the user object with a log array of all the exercises added. Each log item has the description, duration, and date properties.

- A request to a user's log (/api/exercise/log) returns an object with a count property representing the number of exercises returned.

- You can add from, to and limit parameters to a /api/exercise/log request to retrieve part of the log of any user. from and to are dates in yyyy-mm-dd format. limit is an integer of how many logs to send back
### Steps to run this repo:-
1.Clone this repository from GitHub.

2.Upon heading to your favourite Code Editor run this command into the terminal ```npm install``` to install all the required dependencies.

3.When all the required dependencies are installed, run ```npm run start``` in the terminal to start the development server, the API will start running in the port 3000, to view it go to the following URL "http://localhost:3000".

4.Create a .env file and add a variable named URI and add your Mongodb connection url, as by doing this the short URLs will be directly saved into your database. Now you can start making requests to the API endpoints.
