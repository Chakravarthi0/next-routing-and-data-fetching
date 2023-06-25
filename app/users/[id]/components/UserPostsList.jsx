async function UserPostsList({promise}) {
  const posts = await promise;
  return (
    <div>
      <ul>
        {posts.map((post) => {
          return (
            <li className="py-2">
              <h4 className="font-semibold">{post.title}</h4>
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UserPostsList;
