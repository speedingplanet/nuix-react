# Lab 2

## Part 1

### ListUsers.jsx

Import `users` from @speedingplanet/rest-server.

Iterate over `users` and generate an HTML table from the results. Display the following fields in the table:
- Display Name
- User Type
- City
- State

If you're using Bootstrap, it has a few classes that make tables render nicely:
- table (yes, the class is actually "table")
- table-hover
- table-striped

Navigate to /users/list. Make sure that the list shows up as expected.

STOP HERE.

## Part 2

### UsersGrid.jsx

Create a new file, `UsersGrid.jsx`. It should be a component that takes the following properties:

- users: An array of users
- selectUser: An event that selects a User

### ListUsers.jsx

Takes two familiar properties: 
- users: An array of users
- selectUser: An event that selects a User

Extract the `<table>` portion into the new component `UsersGrid`.  
Replace the '<table>' with `UsersGrid`. 
Pass the props `users` and `selectUser` to `UsersGrid`.

### UsersView.jsx

Change the event handler for `searchDisplayName`. Instead of logging to the console or the DOM, it should now create a copy of the `users` array, filtered by the value from `searchDisplayName`. Render a `UsersGrid` under `FindUsers` with the results from the search.  You can either render a container component (that contains both `FindUsers` and `UsersGrid`) or you can make `UsersGrid` part of `FindUsers`. 

Should the `UsersGrid` appear when `FindUsers` is first rendered? If not, how could you hide it? (CSS? HTML attribute? JSX/React?) And, how can you change the state (hint!) of `UsersView` so that `UsersGrid` appears where there are results to display?

STOP HERE.

## Part 3

### UsersView.jsx

Using `useEffect`, query http://localhost:8000/api/zippay/v1/users and get a count of the number of users. (Retrieving the entire array and getting the length of said array is sufficient.)  
Display the results as "There are X users" in `UsersView`. 

STOP HERE.

## Part 4

### UsersView.jsx

Replace the Promise-oriented code from part 4 with `async/await` code.

STOP HERE.

## Part 5

Overall, we are going to consolidate `users` into `UsersView`. 

### UsersView.jsx

Remove the import of the `users` array.
Using `useEffect`, query http://localhost:8000/api/zippay/v1/users or use `dao.findAllUsers` to find all the users.
Pass the users as appropriate to `FindUsers` `UserBrowser`, and `ListUsers`.

### FindUsers.jsx

Remove any reference to importing `users` from @speedingplanet/rest-server.
Update props as needed.

### ListUsers.jsx

Remove any reference to importing `users` from @speedingplanet/rest-server.
Update props as needed.

### UserBrowser.jsx

Remove any reference to importing `users` from @speedingplanet/rest-server.
Update props as needed.

STOP HERE. 