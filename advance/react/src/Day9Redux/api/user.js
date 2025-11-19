export const getUser = () =>
  fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
    res.json()
  );

export const updateUser = (user) =>
  fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "PUT",
    headers: {

    },
    body: JSON.stringify(user),
  }).then((res) => res.json());
