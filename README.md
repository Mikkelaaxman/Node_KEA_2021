# Node_KEA_2021
Notes for Node.js Class of Kea comp sci class 2021

SERVER NOTES

//Create package.json (with {}) > add a dependency> npm install will make package-lock
Express is "local" and each developer will need to install it with npm install when cloning repo
With nodemon.cmd in terminal the server wont need to be restarted. install globaly with npm install -g nodemon 

We can define what extensions nodemon with --ext "js,json,html" OR by creating a json file called nodemon.js with {"ext":"js,html,json"} 

for different DBs or environments:
process.env.ENV === "PRODUCTION" ? "prod" : "dev"

DIfference between name and id: you may have several radio buttons with different id attributes, but the same name. When submitted, there is just the one value in the response - the radio button you selected.