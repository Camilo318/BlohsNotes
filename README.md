# Blohsh Notes
## Taking notes has never been so easy

This is a full stack web application made with the **MERN stack** (MongoDB, Express, React.js, Node.js).

### Features:
* Create notes
* Edit notes
* Delete notes
* Search notes
* Sort notes by categories

### Future features: 
* Add images to the notes
* Have an archive folder
* Share notes with co-workers
* Edit the color for the note


### Accounts and information
When you create an account, your password is *encrypted and safely stored in the database*, so only **you** will have access to your notes. The authentication mechanism is **JWT** (JSON Web Token).

In a nutshell, when the user logs in using his credentials, a JSON Web Token is returned. This token has a expiration time of 15 minutes. After that, the user must login again. Whenever the user wants to access a protected *route* (create, edit or delete notes) or *resource* (your notes), the browser sends the JWT, typically in the **Authorization** header using the *Bearer schema*.

The server's protected routes will check for a valid **JWT** in the *Authorization header*, and if it is present, the user will be allowed to access protected resources.
So in this way is the client who knows what kind of access it has, therefore, avoiding unnecessary calls to the database.

### Scripts:

You'll need to run two commands to getting working. 

**npm run dev**

This will start the development server and communication with MongoDB

**npm run devServer**

This will run the webpack dev server to see the UI on localhost port 3000

> Note: You should use the main branch to run these commands

Please feel free to play around with the project. If you want to contribute, by all means go ahead and submit your PR 😁

Take a look to the deployed version [here](https://blohsh-notes.herokuapp.com/)
