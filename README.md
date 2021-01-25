Project Tongadive assessment
REST API to Generate random Number
Requirements
Create a REST API project which generates a random number. The endpoint should accept the number of random numbers to be generated. The server should ensure the random numbers returned back are unique till date The random number should be 13 digits in length.

Introduction
The intent of this project is to generate a collection of random numbers as per the number given at the endpoint of the API. The contrainsts as per the requirement are that the numbers generated have to be unique and all have to be 13 digit random numbers.

Requirements
We are using Express framework to build the project. Nodemon is installed to monitor the changes and restart the server. The Node version required is v12.17.0 in this project.

Installation
To run the code locally.

Make sure you have latest Node version installed .
You may get it at Node .
Copy the app.js and package.json into a folder.
Then run npm install to install all the dependencies.
How to run the program
Once the environment is set up locally. Open the teminal at the folder location where we have copied our code. Run the command npm start.

This will open the browser window with the API endpoint as http://localhost:3000/api/generateRandomNumberList/<Enter-Your-Number>

Algorithm
Using express framework we have created an endpoint to generate the array of random numbers list. The app generates the number of random numbers specied by the user.

Assumpations made
The bounderies for the list genration is set as lowerBound-1 to upperBound-100. The generated list is saved as a csv file on the desktop of the user.

Naming Convention
Testing
Unit testing is implemented for below use-cases. Post-man is used to test the functionality of app. *

Challenges
