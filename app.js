const http = new EezyHTTP();

const url = 'http://jsonplaceholder.typicode.com/users';

// Get Request - Get a user
// http
//   .get(url)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Post Request - Create a user

const data = {
  name: 'John Doe',
  username: 'Johnny',
  email: 'johndoe@aol.com'
};

// http
//   .post(url, data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Put Request - Update user

// http
//   .put(`${url}/2`, data)
//   .then(data => console.log('Updated user details', data))
//   .catch(err => console.log(err));

// Delte Request - Delete a user
http
  .delete(`${url}/3`)
  .then(data => console.log(data))
  .catch(err => console.log(err));
