import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import getAllUsers from "@/lib/getAllUsers";

import { notFound } from "next/navigation";

export const generateMetadata = async ({ params: { id } }) => {
  const userData = await getUser(id);
  const user = await userData;

  if (!user.name)
    return {
      title: "User Not Found",
    };

  return {
    title: `${user.name}`,
    descripton: `This is the user page of ${user.name}`,
  };
};

const UserPage = async ({ params: { id } }) => {
  const userData = getUser(id);
  const postsData = getUserPosts(id);

  const user = await userData;

  if (!user.name) notFound();

  return (
    <div>
      <h1>{user.name}</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <UserPosts promise={postsData} />
      </Suspense>
    </div>
  );
};

export const generateStaticData = async () => {
  const usersData = getAllUsers();
  const users = await usersData;

  return users.map((user) => ({
    id: user.id.toString(),
  }));
};

export default UserPage;
