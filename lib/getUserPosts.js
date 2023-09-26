export default async function getUserPosts(id) {
  try {
    const res = await fetch(
      `http://jsonplaceholder.typicode.com/posts?userId=${id}`,
      { next: { revalidate: 60 } }
    );
    return res.json();
  } catch (err) {
    console.log(err.message);
    return undefined;
  }
}
