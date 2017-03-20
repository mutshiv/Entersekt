# Todo list exercise

### Install

- Install https://nodejs.org/en/
- Download archive from link provided
- Unzip file and cd into it
- run `npm install`

### Run
`node app.js`

Visit http://localhost:8080 in your browser

### High level application requirements
1. Multiple users should be able to view the shared public todo list
2. Should be able to add items
3. Should be able to delete items
4. Should be able to edit items (Missing feature)
5. Must be able to deploy in docker (Missing feature)

### Tasks
1. Add missing requirement #4 to the application
2. Add sufficient test coverage to the application and update readme on howto run the tests
3. Add missing requirement #5 to the application (Dockerfile and update readme with instructions)

### Bonus
4. Display test coverage after tests are executed
5. Find and fix the XSS vulnerability in the application. Also make sure that it wont happen again by including a test.

> ### Notes
> - Update the code as needed and document what you have done in the readme below
> - Will be nice if you can git tag the tasks by number

### Solution
Explain what you have done here and why...

Task #1

Plus (+) represents edit.
When clicked, it preloads the item ID and the text to be edited where the user can edit.

Task #2
Run the test with mocha in the base folder.

$ mocha

Edit test-server.js for data to add if needed.

Task #3
The docker file has been created ready for build and deployment.

Run:
Build the docker image
$ docker build -t my-todolist-app .

Make sure the image has been created and deployed.
$ docker images
$ docker run -t my-todolist-app
