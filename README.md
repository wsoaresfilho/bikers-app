# Bikers App

This project is an [AngularJS][https://angularjs.org/] web app made for a job vacancy at Venturus.

The project was made following the requirements given by the company.

## Application development requirements

Create an application that following the layout and structure of the next page. In order to complete your
project you must use the following:
* CSS
* HTML
* A JS framework (Ember.js is a plus)
* FontAwesome (for the cool icons)
* Any grid system

We want to test your skills as a front-end developer, so please do not use CSS/HTML frameworks such as
Bootstrap, Boilerplates, etc.

You can code using task runner managers (gulp, grunt) as well as CSS pre-processors (LESS, SCSS).
Consider sending all source codes so we can evaluate your development process.

## Application flow

The application must have the following flow:
* Help message must be closed by default, when user clicks on the link the content should be opened as an
accordion
* User Registration and Bikers are always visible - On the user registration form, your application should add the new biker in question on the table below it,
following all data as presented on the UI
* Your application may persist data
* There should be an initial payload as is shown on the UI
* Your application can edit exiting bikers as well as remove then

## Getting Started

To get started you can simply clone the `bikers-app` repository and install the dependencies:

### Prerequisites

You need git to clone the `bikers-app` repository. You can get git from [here][https://git-scm.com/].

You must have Node.js and its package manager (npm) installed. You can get them from [here][https://nodejs.org/].

### Clone `bikers-app`

Clone the `bikers-app` repository using git:

```
git clone https://github.com/wsoaresfilho/bikers-app.git
cd bikers-app
```

### Install Dependencies

The project has preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files

### Run the Application

The simplest way to start this server is:

```
npm start
```

Now browse to the app at [`localhost:8000`][localhost:8000].