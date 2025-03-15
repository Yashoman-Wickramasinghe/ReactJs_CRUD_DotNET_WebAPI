-------------------------------------- Project Setup Guidelines--------------------------------------------------

Author: Yashoman Wickramasinghe  
Date: March 15, 2025  

--------------------Prerequisites-------------------------------------------

Ensure you have the following installed on your system:
-Node.js (for React project)
-VS Code (or any preferred code editor)
-.NET Core 7.0 (for Web API project)
-SQL Server (or any compatible database system)


--------------------Frontend Setup (React)----------------------------------
1.Download the entire project folder./And Use the link to download the React Project: https://github.com/Yashoman-Wickramasinghe/ReactJs_CRUD_DotNET_WebAPI.git](https://github.com/Yashoman-Wickramasinghe/crud_web_api.git
2.Open the React project in VS Code.
3.Install dependencies: npm install  
4.Run the project: npm start


--------------------Backend Setup (Web API - .NET Core 7.0)------------------
1.Open the Web API project in Visual Studio.
2.Configure the database:
    - Open 'appsettings.json'.
    - Ensure the database connection string is correctly set up.
    -Create a database with the same name or modify the connection string to match an existing database.
3.Handle Migrations:
    -This project does not include database initialization.
    -Remove existing migration files and create fresh migrations.
    -Open the Package Manager Console in Visual Studio and run the following commands:
     	add-migration "Initial"
     	update-database


Two links to Download Projects:
React: https://github.com/Yashoman-Wickramasinghe/ReactJs_CRUD_DotNET_WebAPI.git
WebAPI: https://github.com/Yashoman-Wickramasinghe/crud_web_api.git






-------------------------------------------------Additional Info---------------------------------------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
