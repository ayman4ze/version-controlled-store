# This is a Simple Version Controlled Key-Value Store with an HTTP API

Building RESTful Web APIs with Node.js, Express, MongoDB and TypeScript.


## Requirements

[NodeJS](https://nodejs.org/en/)

Install global TypeScript and TypeScript Node

```
npm install -g typescript ts-node
```

## Getting Started

You should install [MongoDB](https://docs.mongodb.com/manual/administration/install-community/) on your local machine, or use other services such as [mLab](https://mlab.com/) or [Compose](https://www.compose.com/compare/mongodb)

Then, you will have to replace the mongoURL with your MongoDB address in *lib/app.ts*

## Clone this repository

```
git clone https://github.com/ayman4ze/version-controlled-store.git .
```

Then install the dependencies

```
npm install
```

## Start the server

Run in development mode

```
npm run dev
```

Run in production mode 

```
npm start
```

## Testing 

The default URL is: *http://localhost:3000*