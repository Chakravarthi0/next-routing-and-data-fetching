async function getuserPosts(id) {
  await new Promise((res) => {
    setTimeout(res, 3000);
  });
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );

  if (!res.ok) {
    throw new Error("failed to fetch user posts");
  }

  return res.json();
}

export default getuserPosts;
