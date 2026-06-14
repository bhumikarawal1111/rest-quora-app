# REST Quora App

A simple Quora-inspired web application built using Express.js and EJS to practice RESTful routing and CRUD operations.

## Features

* View all posts
* Create a new post
* View an individual post
* Edit post content
* Delete posts
* Unique ID generation for each post using UUID
* Server-side rendering with EJS templates

## Tech Stack

* Node.js
* Express.js
* EJS
* UUID
* HTML
* CSS

## REST Routes

| Method | Route           | Description               |
| ------ | --------------- | ------------------------- |
| GET    | /posts          | Display all posts         |
| GET    | /posts/new      | Form to create a new post |
| POST   | /posts          | Create a new post         |
| GET    | /posts/:id      | View a specific post      |
| GET    | /posts/:id/edit | Edit form for a post      |
| PATCH  | /posts/:id      | Update a post             |
| DELETE | /posts/:id      | Delete a post             |

## Learning Objectives

This project was created to practice:

* RESTful routing
* CRUD operations
* Express.js
* EJS templating
* Route parameters
* Form handling
* Method override (PATCH and DELETE requests)
* Dynamic content rendering

## Installation

1. Clone the repository

```bash
git clone [<repository-url>](https://github.com/bhumikarawal1111/rest-quora-app)
```

2. Install dependencies

```bash
npm install
```

3. Start the server

```bash
node index.js
```

4. Open in browser

```text
http://localhost:3000/posts
```

## Note

This project stores posts in memory using a JavaScript array. Data is not persisted and will reset whenever the server restarts. The purpose of the project is educational and focused on understanding REST APIs and CRUD functionality.
