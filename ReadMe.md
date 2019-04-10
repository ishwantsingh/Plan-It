# Plan-It

Welcome to [Plan-it Web App!](https://plan-it-88.firebaseapp.com)

 Screenshot: 
![alt text][Screenshot]
 
[Screenshot]: https://github.com/ishwantsingh/Plan-It/blob/master/plan-it/src/Screenshot%20(73).png "Screenshot"

# Tech-Stack

## Back-End 

### Firebase Cloud Functions
Create functions that are triggered by Firebase products, such as changes to data in the Realtime Database, new user sign-ups via Auth, and conversion events in Analytics.

### Firebase Cloud Firestore
Cloud Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud Platform. Like Firebase Realtime Database, it keeps your data in sync across client apps through realtime listeners and offers offline support for mobile and web so you can build responsive apps that work regardless of network latency or Internet connectivity. Cloud Firestore also offers seamless integration with other Firebase and Google Cloud Platform products, including Cloud Functions.

### Firebase Authentication
Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

## Front-End Dependencies 

### React

React is the current industry standard that offers a lot of out of the box benefits. It is fast, efficient, and scalable. Due to the large community, finding solutions to potential problems and reference material is much easier, even for a potential dev without a lot of experience who would like to contribute to Main Course. | [View Dependency](https://reactjs.org/docs/getting-started.html)

### Redux

A state management tool making it possible to store the entire state of the application in a single store. This means a unidirectional data flow, and as the application scales we have predictable state updates which subsequently make things easier to test and introduce new features. Redux also has solid documentation and an active community, meaning that as new devs become introduced to the project it's likely that any problems they face would have already been encountered by someone else, thus making solutions easy to find. | [View Dependency](https://redux.js.org/)

### Redux Thunk

A middleware that allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. This functionality makes it easier to scale and implement features given diverse needs in a growing project. | [View Dependency](https://github.com/reduxjs/redux-thunk)

### Styled Components

Has a thriving community and offers the ability to directly style multiple components within a file. The syntax used is familiar to JavaScript and improves code cleanliness and makes it easy to get up and going for those without a lot of css experience. Styled components are also very efficient, improving load time for users. | [View Dependency](https://www.styled-components.com/docs/)

### Connected React Router

Allows for the ability to synchronize state with redux store through uni-directional data flow, time traveling, and dispatching of history methods. This makes for an incredibly useful tool when dealing with various stages of state and subsequent routing for a seamless and intuitive UI. | [View Dependency](https://www.npmjs.com/package/connected-react-router)

### Moment

A lightweight option for formatting JavaScript dates and time.

### Redux Firestore

Redux bindings for Firestore. Provides low-level API used in other libraries such as react-redux-firebase

### React-Redux Firebase

Redux bindings for Firebase. Includes Higher Order Component (HOC) for use with React, with Out of the box support for authentication (with auto load user profile).


# Guide

## Log In/ Sign Up on the App
Click on the Log In button to Sign Up/Sign In using your Email and set up a Password.

## Project-List
In the App Dashboard, All the posts are shown in a list format on the left side containing information about the user and the time at which it was posted and the Post Title.

## Notifications
Whenever a new user joins the app or creates a new project, a Notification is displayed on the App Dashboard using Google Cloud Functions.

## Project-Details
Whenever a user clicks on a project on the Dashboard, the user is taken to the project page, where all the Content of the project along with other information like Author Name, Date of creation etc are provided.

## Create Project
Click on the Create button to Create Your Own Projct! 
Type out the Project Title and Content and click the create button and you are good to go!

### Its That Simple!!!
