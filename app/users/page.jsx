import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Users",
};

const UsersPage = async () => {
  const users = await getAllUsers();

  let content = (
    <div>
      <h1>Users page</h1>
      <p>
        {users.map((user) => (
          <Link key={user.id} href={`/users/${user.id}`}>
            {user.name}
            <br />
          </Link>
        ))}
      </p>
    </div>
  );

  return content;
};

export default UsersPage;
