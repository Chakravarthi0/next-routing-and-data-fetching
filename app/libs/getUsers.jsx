async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return await res.json();
}

export default getUsers;
