import React from "react";
import getUsers from "../libs/getUsers";
import Link from "next/link";

async function UsersPage() {
  const users = await getUsers();
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">users</h1>
      {users.map((user) => {
        return (
          <Link href={`/users/${user.id}`} key={user.id}>
            <h2>{user.name}</h2>
          </Link>
        );
      })}
      <Link href="/" className="text-blue-600">
        Home
      </Link>
    </div>
  );
}

export default UsersPage;
