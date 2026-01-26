/*

|--frontend
//    |--home page
//        |--navigation
//        |--header
//        |--form for making short link
//            |--input tag for original link
//           |--optional input for shorten keyword
//            |--shorten (submit) button
//        |--table for recently created shorten links
//    |--all links of user's page
//        |--form for making short link
//            |--input tag for original link
//            |--optional input for shorten keyword
//            |--shorten (submit) button
//        |--table containing all shorten links sorted by recently created links
//            |--form
//                |--update functionality
//                |--delete functionality
    |--user profile
        |--form
            |--update email
            |--update password
//    |--contact us
//        |--for larger screen (header image)
//        |--form
//            |--readonly input (will contain logged in email)
//            |--textarea (for message)
//            |--submit button
//    |--authentication
//        |--form
//            |--registration
//                |--name
//                |--email
//                |--password
//                |--confirm password
//            |--login
//                |--email
//                |--password
//                |--remember me 
//                |--forgot password
//            |--social logins
//                |--google
//                |--facebook

|--backend
//    |--db connection
//        |--connect db to server
    |--models
        |--auth.model.js
    |--controllers
        |--auth.controller.js
            |--jwt authentication using cookie and req.headers for private authorization
    |--routes
        |--user route - postman
            |-auth.route.js
                |--register - post
                    // |--create user and store auth details
                    // |--password hashing
                    // |--generate auth token
                    // |--store auth token in cookie
                |--login - post
                    // |--retrieve email and password from form
                    // |--check user already exists
                    // |--check password is correct
                    // |--generate auth token
                    // |--store auth token in cookie
                |--profile - get
                    |--retrieve user details for profile
                    |--private authentication controller - jwt token authentication using cookie and headers
            |--links.route.js
                |--short-link - post
                    |--retrieve original link and shorten keyword (optional) from form
                    |--shorten link logic
                    |--store in database
    |--app.js

*/