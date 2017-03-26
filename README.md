# Open Source Live Chat For CRM

An app with AngularJS on the fron, Socket.io + Express + Node on the back. 

Contains angular libraries, test libraries and a bunch of scripts all preconfigured for
instant web development gratification. Just clone the repo (or download the zip/tarball) and
you're ready to develop your application.

This app shows how to wire together Angular client-side components with Socket.io and Express
on the server. 

## How to use it

Clone the Open-Source-Live-Chat-For-CRM repository and start hacking!

### Running the app

Runs like a typical express app:

```shell
node app.js
```

### Running tests

Coming soon!

### Receiving updates from upstream

Just fetch the changes and merge them into your project with git.

### Updating `angular.js`

Alternatively, you can update AngularJS with [Bower](http://bower.io):

```shell
bower update angular
```

## Example Application

Comming soon

## Directory Layout
    
    app.js                  --> app config
    bower.json              --> for bower
    package.json            --> for npm
    public/                 --> all of the files to be used in on the client side
      css/                  --> css files
        app.css             --> default stylesheet
      img/                  --> image files
      js/                   --> javascript files
        app.js              --> declare top-level app module
        controllers.js      --> application controllers
        directives.js       --> custom angular directives
        filters.js          --> custom angular filters
        services.js         --> custom angular services
      index.html            --> main page for app
      chat.html             --> template page for chat widget
      chat-builder.js       --> javscript template for chat widget
      partials/             --> angular view partials 
        partial1.html
        partial2.html
      bower_components/
        angular/            --> angular.js
        angular-socket-io/  --> socket.io adapter for angular
    routes/
      index.js              --> route for serving HTML pages and partials
    



## Contact

For more information on AngularJS please check out http://angularjs.org/
For more on Express, http://expressjs.com/.
