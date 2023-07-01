# MERN A2ZSuperShop

# Lessons
1. Introduction
2. Install tools 
3. Create React App
    1. First create a folder named ASS
    2. Then enter into that folder by following command
        cd ASS
    3. Then create a react app by following command
        create-react-app frontend -> Here frontend is the folder which will contain all the code for frontend desgining.

4. Create Git Repository
5. List Products
    1. First create data.js file inside frontend folder.
    2. Create Product Array name products which will contain several objects of products.
    3. Add Product Images
    4. Render Products
    5. Style Products by CSS in index.css file inside frontend folder.

6. Add routing. It means when click to any link where the routing will take place.
    1. First we need to install react router dom. For that we have a command.
        npm i react-router-dom
    2. For routing we have to keep every thing of app.js inside BrowseRouter Tag
    3. Then we have to import BrowseRouter from react-router-dom
    4. After that we set routing for home page name HomeScreen and for product details page named ProductScreen
    5. We replaced <a> with <Link> tag because for avoiding refresh operation.

7. Create Node.JS Sserver
    1. Create  folder named backend inside A2ZSuperShop
    2. Inside that folder we will create Node.JS project
    3. To create Node.JS project we need to give some command
        cd backend
        npm init
        press enter
    4. By these command package.json will be created inside backend folder
    5. Update package.json file. Right after name set "type" : module. Because instead of require we will use import for importing packages.
    6. Now we will create server. For that inside backend folder we will create a file 
    named server.js. We will create express server.
    7. To install express server type 
        npm install express
    8. After that we have to create server. For that we have to create a file named server.js inside backend folder.
    9. And then we will coding in server.js for creating a server.
    10. node server.js by this command we can activate the server.

    Note: For better view of html code in google chrome we can install an extension which is JSON Viewer.

    11. Whenver we want any changes in the server, first we have to turn of server and then we can do the changes and after that we can run the server again. But we can do it while the server is running. For that we have install nodemon in our tools.
    12. npm install nodemon --save-dev
    13. After that for using the nodemon we have to in package.json file first then inside scripts section we can do as following.
    "start": "nodemon server.js" where server.js is our server name.
    14. The benefit of nodemon sever is, while the server is running we can do the changes we don't need to stop the server for changing where in terms of node server we need to stop the server and then make the changes and then again run the server.
    15. For running the server we can do the command as following
        npm start
    16. For any changes we will just do the changes and will save it.
    17. I faced a problem while setting inside package.json file inside backend folder. It was just showing an error which wasn't supposed to show. After that I opened settings.json file. There I just paste this following line
    "json.schemaDownload.enable": true, a dummy variable.


8. Fetch Products from backend
    1. We need to set proxy in package.json in frontend folder to access from frontend.
    2. We need to install axios - To fetch data from backend we will use axios library.
    3. npm install axios - we have install this inside frontend folder.
    4. Use state hook in HomeScreen.js
    5. Use effect hook
    6. Use Reducer hook
    In this method we linked frontend with backend. For that firstly we updated package.json file in frontend with that proxy which was set in server.js file in backend folder for server.
    Then we installed axios.
    Then we setup axios in HomeScreen.js file to fetch data from backend in homescreen page.

9. Sometimes its happen that many complex situation occurs in react app. For handling those         situation we are going to use reducer hook. It means we will replace useState hook with useReducer hook in homescreen component.
    1. First we wil set Reducer Hook in HomeScreen.js file in frontend folder.
    2. We need to install use-reducer-logger
        npm install use-reducer-logger --force
            With the help of use-reducer-logger we can find is there any issue occuring while change states. It means we can debug the
            states from developer tools. We can see each state and consequences action. Then we can easily understand what is happening each time.

10. Now its time for designing. We will do designing using react bootstrap. We will not use bootstrap directly rather than we will use react bootstrap which converts bootstrap css into react component which will make our task more easier.
    1. First install bootstrap by following command.
        npm install react-bootstrap bootstrap
    2. Update frontend/App.js file
    2. For LinkContainer component which is used in App.js we need to install another packager named react router bootstrap. The command is following.
        npm install react-router-bootstrap
    3. Remove the style for header from frontend/index.css
    4. import react bootstrap in frontend/index.js
    5. Update App.js again to align the screen
    6. Create footer in App.js file

11. Create Product and Rating Component
    1. First update HomeScreen.js. Because product are being seen in the homescreen page. 
    2. Add bootstrap component like Row and Col
    3. Create component folder in frontend/src folder
    4. Inside frontend/src/component create Product.js
    5. Now using Card component from bootstrap create a block in the screen for each product.
    4. Create Product component
    5. Use Rating component in product component.