# BookACook

## What this project is about

This is my own FullStack concept project. This is a website for booking a cook/chef to visit your place and cook the food that the customer chose. For more info why I am doing this checkout: **[Goals for this project](#goals-for-this-project)**

## Table of contents:

- **[Screenshots](#screenshots)**
- **[Technologies used](#technologies-used)**
- **[Goals for this project](#goals-for-this-project)**
- **[Features to be included in the future](#features-to-be-included-in-the-future)**
- **[My git workflow](#my-git-workflow)**
- **[My agile workflow and wireframe with agile user stories in Trello board](#my-agile-workflow-and-wireframe-with-agile-user-stories-in-trello-board)**
- **[Server-repo](#server-repo)**

## Screenshots

![Homepage](https://raw.githubusercontent.com/jendhordejan/BookACook-client/master/screenshots/HomePage2.png)
![Registration](https://raw.githubusercontent.com/jendhordejan/BookACook-client/create-menu-dish-feature/screenshots/SignupCook1.png)
![Login](https://raw.githubusercontent.com/jendhordejan/BookACook-client/create-menu-dish-feature/screenshots/Login.png)
![CreateMenu1](https://raw.githubusercontent.com/jendhordejan/BookACook-client/create-menu-dish-feature/screenshots/CreateMenu1.png)
![CreateMenu2](https://raw.githubusercontent.com/jendhordejan/BookACook-client/create-menu-dish-feature/screenshots/CreateMenu2.png)

## Technologies used

#### 👀👇 Click links to view some samples in this project 👇👀

- **[react](./src/components/componentCooks/AddDish.js)**  
- **[redux](./src/components/componentCooks/MenuCreateForm.js)**  
- **[redux-thunk](./src/UserCook/action.js)**
- **[Express](https://github.com/jendhordejan/BookACook-server/blob/master/index.js)
- **[JsonWebToken](https://github.com/jendhordejan/BookACook-server/blob/master/auth/jwt.js)
- **[Cloudinary - ImageUploader](https://github.com/jendhordejan/BookACook-client/blob/cf928ae6dc2f897123740a75375f68f4b7fafcc7/src/components/UploadImage.js)** :star:

## Goals for this project:

- To practice for myself of a FullStack development
- To showcase what I have learned during my coding bootcamp at codaisseur.
- To showcase development approach of using **[wireframes](#wireframes)** with **[agile user-story](#user-story)**
- **[To showcase disciplined git usage](#my-git-workflow)**

## Features to be included in the future:

- Functional shopping cart
- Functional search feature
- Send email/sms to cooking when booking
- Chat feature between customers and cook
- Filter dishes by category, dish name, location

#### 👀👇 Click links to view the pull requests 👇👀

- **[Feat/Sign up cook](https://github.com/jendhordejan/BookACook-client/pull/5)**
- **[Feat/create menu](https://github.com/jendhordejan/BookACook-client/pull/4)**
- **[Code Review](https://github.com/jendhordejan/BookACook-client/pull/3)**

## My git workflow

In this project I try to use:

- Good commit messages
- Well named branches
- Pull requests with summaries

If you have feedback to improve my git usage or wants to help out in this project: **[please drop me a line!](www.linkedin.com/in/jendhordejan)** 

Here is my branching model for this project.

```
master (auto deploys) ______________________
                       \               /
development             \_____________/- pull request
                         \           /
feature/some-feature      \_commits_/- pull request
```

## My agile workflow and wireframe with agile user stories in Trello board

I try to maintain a backlog eventhough I'm working on a project by myself. That way people can quickly jump in and start helping out. It also displays how I split up my tasks and try to build this project in an iterative and incremental way!
## Wireframes
**[Check out the wireframes for this project in my mockfow here](https://wireframepro.mockflow.com/view/M5dbc78c2ea1094c1e92b74cc94b978731583163960069)**
## User-story
**[Check out the user stories in my trelloboard here](https://trello.com/b/3IisbXZ6/bac-book-a-cook)**

## Server-repo
The server side of this project is an Express server connected to a Sequelize database. [Click here for more details](https://github.com/jendhordejan/BookACook-server)





