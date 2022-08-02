# Social Network API

[![MIT Badge](https://img.shields.io/badge/License-MIT-yellow.svg)](https://mit-license.org/)

## Description

The goal of this assignment was to create a backend program for a Social Networking API. This program is meant to allow users and their thoughts to be created, updated, and deleted, as well as allow them to add friends and react to their friend's thoughts. This application utilizes MongoDB and the mongoose npm package to create a document oriented database, which allows for more flexibility of unstructured data.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Routes

A myriad of routes were created for this program:

### User Routes

- **GET** all users, **POST** a new user: `/api/users`
- **GET** a user by ID (and populate their thoughts and friends), **PUT** to update a user, and **DELETE** a user: `/api/users/:userId`
- **POST** a new friend, or **DELETE** a friend: `/api/users/:userId/friends/:friendId`

### Thought Routes

- **GET** all thoughts, **POST** a new thought: `/api/thoughts`
- **GET** a thought by ID, **PUT** to update a thought, **DELETE** a thought: `/api/thoughts/:thoughtId`
- **POST** a thought reaction: `/api/thoughts/:thoughtId/reactions`
- **DELETE** a thought reation: `/api/thoughts/:thoughtId/reactions/:reactionId`

## Demonstration

All functioning user routes can be found by viewing [this video](https://drive.google.com/file/d/1pIDxuJd93z2-cb6e4n4x5ZlJw9njaUrC/view).

Thoughts routes can be viewed in [this video](https://drive.google.com/file/d/1rF6M-aymhTRtLJJT8FiacNGFkgBISVQG/view).

## Current Issues

On the Delete Reaction route for thoughts, the message "Reaction Deleted" is displayed after the route is processed, however, when viewing All Thoughts again, it appears the reaction deletion either isn't properly cascading, or the route doesn't truly function.

## Dependencies

This application requires `mongoose`, `express`, and `moment` packages for proper function.

## License

Copyright (c) 2022 Elizabeth Larson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
