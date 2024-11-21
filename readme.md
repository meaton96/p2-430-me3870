**1. What is the purpose of your application? What does it do?**
> Kitchen Sync combines multiple apps into a single streamlined experience. It provides a simple social media experience, a location to store and share recipes, and will directly integrate with online shopping lists to keep a running database of user's owned food items. This information will be used with generative ai to provide users with immediate recipes based on the food items they own.

**2. How are you using React?**
> React is almost 100% of my frontend code.

**3. What components do you have?**

- Account Settings
> ChangeAvatarModal.jsx
> ChangeAvatarSection.jsx
> PremiumSection.jsx
> SecuritySection.jsx

- Feeds
> FeedPost.jsx
> FollowingFeed.jsx
> SimplePostFeed.jsx

- Login
> login.jsx
> LoginModal.jsx
> PasswordInput.jsx
> SelectAvatar.jsx
> UsernameInput.jsx

- Nav
> DesktopNav.jsx
> MobileNav.jsx
> Nav.jsx
> NavButton.jsx

- New Posts
> NewPostModal.jsx
> NewReplyModal.jsx
> PostModalFooter.jsx
> PostModalHeader.jsx
> PostModalTextArea.jsx
> ReplyModalOPText.jsx

- Outlets
> AccountSettings.jsx
> Feed.jsx
> Pantry.jsx
> PostView.jsx
> Profile.jsx
> Recipes.jsx
> UserProfile.jsx

- Posts
> SinglePost.jsx

- Shared
> FeedPost.jsx

- App
> App.jsx

**4. What data are you storing in MongoDB?**

- User Accounts
username, password hash, avatar string, premium status

- Simple Post, (tweet)
post text, power owner

- Shares
a share by a user of a post

- Likes 
a like by a user of a post

**5. What went right in the development of this project?**

Everything has been going great

**6. What went wrong in the development of this project?**

Nothing yet.

**7. What did you learn while developing this project?**

How much work goes into every little piece of a web app when having to make it secure, functional, and pretty.
How or maybe how not to design DBMs for a scalable social media system. More about how React functions vs just building projects in Vite. React context and custom hooks.

**8. If you were to continue, what would you do to improve your application?**

Ill answer this after finishing the project

**9. If you went above and beyond, how did you do so?**

Rofl


**10. If you used any borrowed code or code fragments, where did you get them from?**

Nothing yet.

**11. What do the code fragments do? Where are they in your code?**

None yet.

# Endpoints
URL: /login
Supported Methods: GET
Middleware: Requires Secure, Requires Logout
Query Params: 
Description: Displays the login page.
Return Type(s): JSON

URL: /login
Supported Methods: POST
Middleware: Requires Secure, Requires Logout
Body Params: username and password
Description: Logs in a user.
Return Type(s): JSON

URL: /logout
Supported Methods: GET
Middleware: Requires Login
Query Params: 
Description: Logs out a user.
Return Type(s): JSON

URL: /signup
Supported Methods: POST
Middleware: Requires Secure, Requires Logout
Query Params: username, password, password confirm
Description: Signs up a new user.
Return Type(s): JSON

URL: /changeAvatar
Supported Methods: POST
Middleware: Requires Login
Query Params: new avatar path
Description: Changes the user's avatar.
Return Type(s): JSON

URL: /validateUsername
Supported Methods: POST
Middleware: Requires Secure, Requires Logout
Query Params: the username to validate
Description: Validates if a username is available.
Return Type(s): JSON

URL: /getPremium
Supported Methods: GET
Middleware: Requires Login
Query Params: 
Description: Retrieves premium status of the user.
Return Type(s): JSON

URL: /changePassword
Supported Methods: POST
Middleware: Requires Secure, Requires Login
Query Params: new password, old password, confirm password
Description: Changes the user's password.
Return Type(s): JSON

URL: /setPremium
Supported Methods: POST
Middleware: Requires Login
Query Params: true/false
Description: Sets the user's premium status.
Return Type(s): JSON

URL: /getUsername/:id
Supported Methods: GET
Middleware: 
Query Params: the id of the user
Description: Retrieves the username by user ID.
Return Type(s): JSON

URL: /getUsername
Supported Methods: GET
Middleware: 
Query Params: 
Description: Retrieves the username of the current user.
Return Type(s): JSON

URL: /getDefaultAvatars
Supported Methods: GET
Middleware: 
Query Params: 
Description: Retrieves the default avatars.
Return Type(s): JSON

URL: /getAvatar
Supported Methods: GET
Middleware: Requires Login
Query Params: 
Description: Retrieves the avatar of the current user.
Return Type(s): JSON

URL: /getAvatar/:id
Supported Methods: GET
Middleware: 
Query Params: the id of the user
Description: Retrieves the avatar by user ID.
Return Type(s): JSON

URL: /getAvatarByUsername/:username
Supported Methods: GET
Middleware: 
Query Params: the username of the user
Description: Retrieves the avatar by username.
Return Type(s): JSON

URL: /simplePost
Supported Methods: POST
Middleware: Requires Login
Query Params: 
Description: Creates a new simple post.
Return Type(s): JSON

URL: /simplePublicPosts
Supported Methods: GET
Middleware: 
Query Params: 
Description: Retrieves public simple posts.
Return Type(s): JSON

URL: /getPostsForCurrentUser
Supported Methods: GET
Middleware: Requires Login
Query Params: 
Description: Retrieves posts for the current user.
Return Type(s): JSON

URL: /getPostsForUser/:userId
Supported Methods: GET
Middleware: 
Query Params: the id of the user
Description: Retrieves posts for a specific user by user ID.
Return Type(s): JSON

URL: /getPostsForUserByVisibility/:userId/:visibility
Supported Methods: GET
Middleware: 
Query Params: the id of the user and visbility of the post
Description: Retrieves posts for a specific user by visibility.
Return Type(s): JSON

URL: /simplePost/:postId
Supported Methods: GET
Middleware: 
Query Params: the id of the post
Description: Retrieves a simple post by post ID.
Return Type(s): JSON

URL: /addLike
Supported Methods: POST
Middleware: Requires Login
Query Params: 
Description: Adds a like to a post.
Return Type(s): JSON

URL: /removeLike
Supported Methods: POST
Middleware: Requires Login
Query Params: 
Description: Removes a like from a post.
Return Type(s): JSON

URL: /getNumLikesForPost/:postId
Supported Methods: GET
Middleware: 
Query Params: the id of the post
Description: Retrieves the number of likes for a post.
Return Type(s): JSON

URL: /simplePost/:postId/has-liked
Supported Methods: GET
Middleware: Requires Login
Query Params: the id of the post
Description: Checks if the current user has liked a post.
Return Type(s): JSON

URL: /getNumSharesForPost/:postId
Supported Methods: GET
Middleware: 
Query Params: the id of the post
Description: Retrieves the number of shares for a post.
Return Type(s): JSON

URL: /addShare
Supported Methods: POST
Middleware: Requires Login
Query Params: 
Description: Adds a share to a post.
Return Type(s): JSON

URL: /removeShare
Supported Methods: POST
Middleware: Requires Login
Query Params: 
Description: Removes a share from a post.
Return Type(s): JSON

URL: /simplePost/:postId/has-shared
Supported Methods: GET
Middleware: Requires Login
Query Params: the id of the post
Description: Checks if the current user has shared a post.
Return Type(s): JSON

URL: /app*
Supported Methods: GET
Middleware: Requires Login
Query Params: 
Description: Serves the app for authenticated users.
Return Type(s): JSON

URL: /
Supported Methods: GET
Middleware: Requires Secure
Query Params: 
Description: Redirects based on login state.
Return Type(s): JSON

URL: *
Supported Methods: GET
Middleware: Requires Secure, Requires Login
Query Params: 
Description: Catch-all route for client-side routing.
Return Type(s): JSON