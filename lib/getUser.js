export default async function getUser(id) {
  try {
    const res = await fetch(`http://jsonplaceholder.typicode.com/users/${id}`);
    return res.json();
  } catch (err) {
    console.log(err.message);
    return undefined;
  }
}
