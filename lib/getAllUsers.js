export default async function getAllUsers() {
  try {
    const res = await fetch("http://jsonplaceholder.typicode.com/users", {
      next: { revalidate: 60 },
    });
    return res.json();
  } catch (err) {
    console.log(err.message);
    throw new Error("Couldn't get all users");
  }
}
