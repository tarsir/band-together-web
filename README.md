# Band Together - Web

This is the repository for the frontend of the musician social media platform, Band Together.
This project has been an exercise in building a production-grade application in full-stack
from scratch by myself as a learning experience for React, Redux, and Typescript, as well
as a portfolio piece. It may also be useful to someone as a real application!

## What's Inside

The primary technologies used here are:
* React, as a component framework for UI;
* Redux, as a state manager for the React component tree; and
* Typescript, because it seemed pretty cool and has ES6 features as well as typing
which I enjoy very much

This application is intended to consume an API being developed in tandem, [located here](https://github.com/tarsir/band-together-app).

## Basic Contents

The directory structure is as follows (loosely):

* `api` contains all interaction with the API. It needs some minor refactoring and could
perhaps use a wrapper or two around HTTP requests, but is very simple as these calls should
only ask the API for data.
* `assets` is for any static assets. Right now, these are just placeholders, and some day
these will live in a CDN. But not today.
* `components` is where all React components and Reduxy container components can be found.
If you're wondering why something looks or acts the way it does, that is probably in here.
* `state` is for any and all interactions with the Redux store. This needs some heavy, but
simple refactoring to account for the different types of requests and data the store is now
handling.
* `types` is strictly for defining types to be used throughout the application. Here is where
you'll find the shape of most objects used in the application, though some are missing (marked
by the `any` types in code) due to either being a huge pain to correctly implement with React/
Redux, or because I haven't gotten to it yet.
* `index.tsx` and `App.tsx` are where the application is set up.

## Code Philosophy

The basic code philosophy I use here is that functions and components should be small and
have minimal responsibility. Should I eventually decide to add testing, this will make that
process much easier. It also increases the ability to reason about the flow of higher-order
functions that make use of multiple other functions, which is excellent value.