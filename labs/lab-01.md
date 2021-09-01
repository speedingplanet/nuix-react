# Lab 1

## Part 1: Initial routing

Under `UsersView.jsx` add a horizontal unordered list with the following configuration:

- "Add a user" pointing to `AddUser.jsx` on the URL /users/add. 
- "Find users" pointing to `FindUsers.jsx` on the URL /users/find.
- "Browse users" pointing to `BrowseUsers.jsx` on the URL /users/browse.

You will need to create placeholder components for each of these. A simple `div` with a header
or paragraph saying "Add a user" or whatever is enough.

Each bullet above will need a `Link` pointing to a `Route` which loads a component.

Test the links as you go along to make sure they are working. 

STOP HERE.

## Part 2: Passing props

Create a file `UserDetails.jsx`. It should take a User as a prop and display the following information:
- displayName
- userType
- e-mail
- city
- state
- postalCode
- country
- lastUpdated
- whether the user is active

Experiment with displays. Consider using the Bootstrap Card layout (https://getbootstrap.com/docs/5.1/components/card/) to display the user information. 

In `UsersView`, import `users` from `@speedingplanet/rest-server`. The variable `users` is an array of user objects. Add a `Link` and a `Route` for `UserDetails`. Pass one of the users into `UserDetails`. Visit the route and see if the user displays as expected. 

STOP HERE.

## Part 3: Event handling

Create a component: `UserBrowser`. It should contain `UserDetails` and a `div` below it with two buttons "forward" and "back". Label and design the buttons as you see fit. The `UserBrowser` component should receive one prop, an array of `users`, passed to it by `UsersView`. 

For the moment, add event handlers to the buttons which log to the console which button was clicked, e.g. "Clicked the forward button".

STOP HERE.

## Part 4: Working with state

Set up `UserBrowser` so that it tracks which user it is displaying. Add code to the event handlers for the "forward" and "back" buttons so a user can browse the set of users. Decide whether, on reaching user at index 0, or the last user, whether the browser should loop or it should just stop. 

There are several ways to complete this part. All of them should involve at least one call to `useState` in `UserBrowser`. Think about what needs to go in state and what doesn't need to go into state. 

Test your component. 

STOP HERE.

## Part 5: Controlled components

In `FindUsers.jsx`, add the following:
- A form field which is a controlled component
- An output element, such that when the user types in the form field, the text "Searching for {displayName: [searchtext]}" appears, with [searchtext] being the value in the form field
- A button, which when clicked on, logs to the console "Searching on [searchtext]". 

Test your component.

STOP HERE.

## Part 6: Inter-component communication

We want to pass the search term from `FindUsers` up to `UsersView`. The `UsersView` component will manage the state for the application.

### FindUsers.tsx

When the "Find Users" button is clicked on, pass the search term to its parent component in a custom event `searchDisplayName`.

### UsersView.tsx

Create an event handler, and attach it to `FindUsers`'s `searchDisplayName` event. The event handler can log the search term to the console or to the DOM, your choice. Remember to use the `props` pattern, since we're looping over routing configurations. 

Test your component

STOP HERE.

## Part 7: Putting it all together

COMPLETED, but let's review.

In `AddUser.jsx`, set up form fields to capture the following information

* displayName
* email
* street
* city
* state
* postalCode
* country
* corporate or personal user (probably a radio button set)

When the "Add" button is clicked, gather up all the form information and pass it to `UsersView` via a custom event called `createUser`.

In `UsersView` add an event handler for `createUser` on `AddUser`. Make sure it receives the right information when it fires.

There are several ways to tackle this component. You could use controlled components for all the fields, gathering the data when the "Add" button is clicked on.  
Alternatively, you could have the form fields be *uncontrolled* components. Maybe you capture the values in a form field after an `onBlur` or similar event?  
Even more alternatively, you could use only an `onSubmit` event handler for the form, using the `FormData` object (https://developer.mozilla.org/en-US/docs/Web/API/FormData) to gather the data in the form and send it to `UsersView`. Don't forget to prevent the default behavior of a `submit` event!