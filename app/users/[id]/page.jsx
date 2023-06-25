import getuser from "@/app/libs/getuser";
import getuserPosts from "@/app/libs/getuserPosts";
import Link from "next/link";
import { Suspense } from "react";
import UserPostsList from "./components/UserPostsList";

async function UserPage({ params }) {
  const { id } = params;
  const userData = getuser(id);
  const userPosts = getuserPosts(id);

  //parallel fetching
  //const [user, posts] = await Promise.all([userData, userPosts]);

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">User Information</h1>
      <h2 className="text-3xl font-bold text-center my-6">{userData.name}</h2>
      <h3 className="text-xl font-bold my-3">Posts by {userData.name}</h3>
      {/* <ul>
        {posts.map((post) => {
          return (
            <li className="py-2">
              <h4 className="font-semibold">{post.title}</h4>
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul> */}

      <Suspense
        fallback={
          <p className="text-3xl text-center text-blue-600">Loading....</p>
        }
      >
        <UserPostsList promise={userPosts} />
      </Suspense>
      <Link href="/" className="m-5 ml-0 text-blue-600">
        Home
      </Link>
      <Link href="/users" className="text-blue-600">
        All users
      </Link>
    </div>
  );
}

export default UserPage;
