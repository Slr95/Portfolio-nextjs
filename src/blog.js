import Link from "next/link";
import Layout from "./Layout";

import { posts } from "./profile";

const PostCard = ({ post }) => (
  <div className="col-md-4">
    <div className="card">
      <div className="overflow">
        <img src={post.imageURL} alt="" className="card-img-top" />
      </div>
      <div className="card-body">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <Link href={post.urlcontacto}>
          <button className="btn btn-light">Ver</button>
        </Link>
      </div>
    </div>
  </div>
); 

const blog = () => {
  return (
    <Layout title="Contactame" footer={false} dark>
      <div className="row">
        {posts.map((post, i) => (
          <PostCard post={post} key={i} />
        ))}
      </div>
    </Layout>
  );
};

export default blog;