const http = new HTTP();

http.get("https://api.github.com/users").then(data => console.log(data));

const data = {
  name: "sam yao",
  username: "moviegoer",
  email: "yaob@miamioh.edu"
};

http
  .post("https://jsonplaceholder.typicode.com/users", data)
  .then(data => console.log(data));

http
  .put("https://jsonplaceholder.typicode.com/users/2", data)
  .then(data => console.log(data));

http
  .delete("https://jsonplaceholder.typicode.com/users/2")
  .then(data => console.log(data));
