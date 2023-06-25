async function getuser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error("something went wrong");
  return await res.json();
}

export default getuser;
