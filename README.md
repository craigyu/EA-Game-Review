# EA Game Review Project
## Description
This is a project done for the EA SRE interview, the detailed requirements are at the bottom.

## Guide

### Environment
* Node v14.15.4
* NPM v6.14.10
* Docker v20.10.2

### Local
#### Backend
1. Change directory `cd api`
2. run `npm install`
3. run `npm start`
#### Frontend
1. Change directory `cd webapp`
2. run `npm install`
3. run `npm start`
4. Open browser with `http://localhost:3000`

### Docker
#### Backend
1. pull the image `docker pull craigzyu/ea-game-review-api:latest`
2. run `docker run -p 5000:5000 -d craigzyu/ea-game-review-api`
3. The server should start right away

#### Frontend
1. pull the image `docker pull craigzyu/ea-game-review-webapp:latest`
2. run `docker run -p 3000:3000 -d craigzyu/ea-game-review-webapp`
3. Need to wait for the server start
4. Open browser with `http://localhost:3000`

### API Documentation
A Swagger documentation can be viewed [here](https://app.swaggerhub.com/apis-docs/craigyu/EA-Game-Review-API/1.0.0).

### Test
Tests can be only ran locally, but it can be easily integrated into CI/CD pipeline.\
These are end to end tests for backend only.\
To run the tests: 
1. Go in to `/api` directory
2. Make sure no backend server is running locally or on docker
3. run `npm test`, assuming you have already ran `npm install` from earlier

#### Credits:
The front end is based on a template from Material-UI, made/maintained by a fellow UBC alumnus\
[Link](https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/blog)

## Project Description

### User Story
_As an avid video game reviewer_\
_I want a way to create blog posts for my video game reviews_\
_So that I can share my reviews in a way that my readers can respond to_

### Acceptance Criteria
* A blog post will show a title, article text (plain text) and an author name
* Comments are made on blog posts and show comment text (plain text) and an author name 

### Non-functional Requirements 

* The code should be the type of code you would consider production ready and could be supported by a team. Write the sort of code you would want to receive from another engineer. 

* The application must have a build system 

* The application build should be built or compiled in a docker container, so the build is portable 

* The application build should produce a docker container as an artifact, so the deployment is portable 

* The application should not have any runtime dependencies (so the datastore needs to be in memory or similar




