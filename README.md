# Progressive Web Applications (PWA) Challenge: Text Editor

Welcome to my Text Editor PWA project! This application is a single-page application that meets the Progressive Web App (PWA) criteria. The application features data persistence techniques to serve as redundancy in case one of the options is not supported by the browser, as well as the ability to function offline.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Credits](#credits)

## Installation

To install the application, follow these steps:

1. Clone the repository to your local machine using
```
git clone git@github.com:monicapong/textEditor.git
```
2. Navigate to the root directory of the project in your terminal.
3. Run npm install to install all dependencies.

## Usage

To run the application, follow these steps:
1. Navigate to the root directory of the project in your terminal.
2. Run ```npm run build``` to bundle the JavaScript files using webpack.
3. Run ```npm run start``` to start up the backend and serve the client.
4. Open your browser and go to localhost:3000
5. Enter content in the text editor and click off the DOM window to automatically save the content.
6. Close the application and reopen it to ensure that the saved content has been retrieved from IndexedDB.

## Deployment

The application is deployed to [Heroku](https://monicapong-texteditor.herokuapp.com). The GitHub repository can be found [here](https://github.com/monicapong/textEditor)

## Credits

This application uses the idb package, which is a lightweight wrapper around the IndexedDB API. It also uses the WebpackPwaManifest plug-in and workbox for service worker caching. The starter code for this project was provided by Trilogy Education Services.
