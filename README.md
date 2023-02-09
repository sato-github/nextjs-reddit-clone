# Next.js Reddit Clone using Firebase

## Features

- Authentication using Firebase authentication
- CRUD for communities
- CRUD for posts
- CRUD for comments
- Voting posts

## Getting Started

```bash
npm install

npm run dev
```

## Technologies used

- Next.js
- Typescript
- Recoil
- Firebase
- Chakra UI

## Structure

```
.
├── functions
├── public
│   └── images
└── src
    ├── atoms
    ├── chakra
    ├── components
    │   ├── Community
    │   ├── Layout
    │   ├── Modal
    │   │   ├── Auth
    │   │   └── CreateCommunity
    │   ├── Navbar
    │   │   ├── Directory
    │   │   └── RightContent
    │   └── Posts
    │       ├── Comments
    │       └── PostForm
    ├── firebase
    ├── hooks
    └── pages
        └── r
            └── [communityId]
                └── comments
```
