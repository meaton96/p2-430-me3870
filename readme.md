**1. What is the purpose of your application? What does it do?**
> Kitchen Sync combines multiple apps into a single streamlined experience. It provides a simple social media experience, a location to store and share recipes, and will directly integrate with online shopping lists to keep a running database of user's owned food items. This information will be used with generative ai to provide users with immediate recipes based on the food items they own.

**2. How are you using React?**
> React is almost 100% of my frontend code.

**3. What components do you have?**

- Account Settings
``` 
 ChangeAvatarModal
 ChangeAvatarSection
 PremiumSection
 SecuritySection
```

- Feeds
```
 FeedPost
 FollowingFeed
 SimplePostFeed
```

- Shared
```
BottomLeftToast
FeedPostFooter
PasswordInput
SelectAvatar
UnderConstruction
```

- Login
```
 login
 LoginModal
 PasswordInput

 UsernameInput
```
- Nav
```
 DesktopNav
 MobileNavButton
 MobileNav
 Nav
 DesktopNavButton
```

- Recipe Search
```
RecipeSearchBox
RecipeSearchResults
RecipeSearchWrapper
SpoonSearchResults
```

- Single Recipes
```
Ingredients
Instructions
QuickInfo
RecipeDescription
RecipeHeader
SingleRecipe
```

- New Posts
```
 NewPostModal
 NewReplyModal
 PostModalFooter
 PostModalHeader
 PostModalTextArea
 ReplyModalOPText
```

- Post View
```
Comments Box
Comments
```

- Outlets
```
 AccountSettings
 Feed
 Pantry
 PostView
 Profile
 Recipes
 RecipeSearch
 SingleRecipeContainer
 UserProfile
```

- Posts
```
 SinglePost
```

- App
```
 App
```
**4. What data are you storing in MongoDB?**

- User Accounts
username, password hash, avatar string, premium status

- Simple Post / Comments, (tweet)
post text, post owner, link to a media object

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

I would have loved to spend more time on this but I had other priorities. I would like:
- Expand the twitter clone to include followers/following
- Custom user avatars, profile banner
- Much expanded recipe searching
- Allow users to upload, save, edit recipes
- Allow users to upload a list of food items to store in their pantry
- Create a system to provide recipe recommendations based off of items in the pantry
- Integrate the recipe system with the twitter clone, the goal being a social media feed 100% related to food and recipe sharing 

**9. If you went above and beyond, how did you do so?**

- Way more than the required number of components, more than required endpoints and database schema. Attempted to build a scalable DB system for the twitter clone.

- Fully responsive design, works on mobile and desktop.

- Users can upload images in their posts

- Multiple external APIs, 2 recipe APIs, profanity filter API to check usernames

**10. If you used any borrowed code or code fragments, where did you get them from?**

Nothing yet.

**11. What do the code fragments do? Where are they in your code?**

None yet.

# Endpoints
URL: /login
```
Supported Methods: GET
Middleware: Requires Secure, Requires Logout
Query Params: 
Description: Displays the login page.
Return Type(s): JSON
```

URL: /login
```
Supported Methods: POST
Middleware: Requires Secure, Requires Logout
Body Params: username and password
Description: Logs in a user.
Return Type(s): JSON
```

URL: /logout
```
Supported Methods: GET
Middleware: Requires Login
Query Params: 
Description: Logs out a user.
Return Type(s): JSON
```

URL: /signup
```
Supported Methods: POST
Middleware: Requires Secure, Requires Logout
Query Params: username, password, password confirm
Description: Signs up a new user.
Return Type(s): JSON
```

URL: /changeAvatar
```
Supported Methods: POST
Middleware: Requires Login
Query Params: new avatar path
Description: Changes the user's avatar.
Return Type(s): JSON
```

URL: /validateUsername
```
Supported Methods: POST
Middleware: Requires Secure, Requires Logout
Query Params: the username to validate
Description: Validates if a username is available.
Return Type(s): JSON
```

URL: /getPremium
```
Supported Methods: GET
Middleware: Requires Login
Query Params: 
Description: Retrieves premium status of the user.
Return Type(s): JSON
```

URL: /changePassword
```
Supported Methods: POST
Middleware: Requires Secure, Requires Login
Query Params: new password, old password, confirm password
Description: Changes the user's password.
Return Type(s): JSON
```

URL: /setPremium
```
Supported Methods: POST
Middleware: Requires Login
Query Params: true/false
Description: Sets the user's premium status.
Return Type(s): JSON
```

URL: /getUsername/:id
```
Supported Methods: GET
Middleware: 
Query Params: the id of the user
Description: Retrieves the username by user ID.
Return Type(s): JSON
```

URL: /getUsername
```
Supported Methods: GET
Middleware: 
Query Params: 
Description: Retrieves the username of the current user.
Return Type(s): JSON
```

URL: /getDefaultAvatars
```
Supported Methods: GET
Middleware: 
Query Params: 
Description: Retrieves the default avatars.
Return Type(s): JSON
```

URL: /getAvatar
```
Supported Methods: GET
Middleware: Requires Login
Query Params: 
Description: Retrieves the avatar of the current user.
Return Type(s): JSON
```

URL: /getAvatar/:id
```
Supported Methods: GET
Middleware: 
Query Params: the id of the user
Description: Retrieves the avatar by user ID.
Return Type(s): JSON
```

URL: /getAvatarByUsername/:username
```
Supported Methods: GET
Middleware: 
Query Params: the username of the user
Description: Retrieves the avatar by username.
Return Type(s): JSON
```

URL: /simplePost
```
Supported Methods: POST
Middleware: Requires Login
Query Params: 
Description: Creates a new simple post.
Return Type(s): JSON
```

URL: /simplePublicPosts
```
Supported Methods: GET
Middleware: 
Query Params: 
Description: Retrieves public simple posts.
Return Type(s): JSON
```

URL: /getPostsForCurrentUser
```
Supported Methods: GET
Middleware: Requires Login
Query Params: 
Description: Retrieves posts for the current user.
Return Type(s): JSON
```

URL: /getPostsForUser/:userId
```
Supported Methods: GET
Middleware: 
Query Params: the id of the user
Description: Retrieves posts for a specific user by user ID.
Return Type(s): JSON
```

URL: /getPostsForUserByVisibility/:userId/:visibility
```
Supported Methods: GET
Middleware: 
Query Params: the id of the user and visbility of the post
Description: Retrieves posts for a specific user by visibility.
Return Type(s): JSON
```

URL: /simplePost/:postId
```
Supported Methods: GET
Middleware: 
Query Params: the id of the post
Description: Retrieves a simple post by post ID.
Return Type(s): JSON
```

URL: /addLike
```
Supported Methods: POST
Middleware: Requires Login
Query Params: 
Description: Adds a like to a post.
Return Type(s): JSON
```

URL: /removeLike
```
Supported Methods: POST
Middleware: Requires Login
Query Params: 
Description: Removes a like from a post.
Return Type(s): JSON
```

URL: /getNumLikesForPost/:postId
```
Supported Methods: GET
Middleware: 
Query Params: the id of the post
Description: Retrieves the number of likes for a post.
Return Type(s): JSON
```

URL: /simplePost/:postId/has-liked
```
Supported Methods: GET
Middleware: Requires Login
Query Params: the id of the post
Description: Checks if the current user has liked a post.
Return Type(s): JSON
```

URL: /getNumSharesForPost/:postId
```
Supported Methods: GET
Middleware: 
Query Params: the id of the post
Description: Retrieves the number of shares for a post.
Return Type(s): JSON
```

URL: /addShare
```
Supported Methods: POST
Middleware: Requires Login
Query Params: 
Description: Adds a share to a post.
Return Type(s): JSON
```

URL: /removeShare
```
Supported Methods: POST
Middleware: Requires Login
Query Params: 
Description: Removes a share from a post.
Return Type(s): JSON
```

URL: /simplePost/:postId/has-shared
```
Supported Methods: GET
Middleware: Requires Login
Query Params: the id of the post
Description: Checks if the current user has shared a post.
Return Type(s): JSON
```

URL: /addComment
```
Supported Methods: POST
Middleware: Requires Login, Requires PostID
Description: Adds a comment to a post, similar to adding a simple post, but also takes a post ID for the parent post in the body
Return Type(s): JSON
```

URL: /getCommentsForPost/:postId
```
Supported Methods: GET
Middleware: Requires PostID
Query Params: the id of the post
Description: Gets the comments for a post with the given ID
Return Type(s): JSON
```

URL: /countCommentsForPost/:postId
```
Supported Methods: GET
Middleware: Requires PostID
Query Params: the id of the post
Description: Returns the number of comments a post has
Return Type(s): JSON
```

URL: /api/recipes/spoon/basic-search
```
Supported Methods: GET
Middleware: Requires Login
Query Params: the search term
Description: Performs a search using the Spoonacular API with the given search term and returns the recipe result list
Return Type(s): JSON
```

URL: /api/recipes/edamam/basic-search
```
Supported Methods: GET
Middleware: Requires Login
Query Params: the id of the post
Description: Performs a search using the Edamam API with the given search term and returns the recipe result list
Return Type(s): JSON
```

URL: /api/recipes/spoon/:id
```
Supported Methods: GET
Middleware: Requires Login
Query Params: the id of the recipe
Description: gets the details of a spoonacular recipe
Return Type(s): JSON
```

URL: /app*
```
Supported Methods: GET
Middleware: Requires Login
Query Params: 
Description: Serves the app for authenticated users.
Return Type(s): JSON
```

URL: /
```
Supported Methods: GET
Middleware: Requires Secure
Query Params: 
Description: Redirects based on login state.
Return Type(s): JSON
```

URL: *
```
Supported Methods: GET
Middleware: Requires Secure, Requires Login
Query Params: 
Description: Catch-all route for client-side routing.
Return Type(s): JSON
```