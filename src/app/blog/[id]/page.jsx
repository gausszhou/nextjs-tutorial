import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

const BlogPost = async ({ params }) => {
  const post = await getData(params.id);
  console.log(post);
  return <div>BlogPost</div>;
};

export default BlogPost;
