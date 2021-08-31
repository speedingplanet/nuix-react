# Lab 3

## Part 1

Go into `UsersViewContext.jsx` and remove the import of `users`.
Using the `useEffect` hook, make a fetch request to http://localhost:8000/api/zippay/v1/users/. 
When the request comes back, update the state of `UsersViewContext`.