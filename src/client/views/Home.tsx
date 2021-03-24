import * as React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Menu from "./Menu";

export const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const [blogs, setBlogs] = useState<Blogs[]>([]);

  useEffect(() => {
    async function getBlogs() {
      try {
        const res = await fetch("api/blog/");
        const blog = await res.json();
        setBlogs(blog);
      } catch (error) {
        console.log(error);
      }
    }
    getBlogs();
  }, []);

  return (
    <React.Fragment>
      <Menu />

      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Blog Page</h1>
        <p className="lead">Blog Posts</p>
      </div>

      <div className="container">
        <div className="row">
          {blogs.map((item) => (
            <div
              className="card-deck mb-3 col-3 text-center"
              key={`uniqueid-${item.id}`}
            >
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">{item.title}</h4>
                </div>

                <div className="card-body">
                  <p className="card-text">{item.content}</p>
                  <Link to={`/admin/${item.id}`}>
                    <button className="btn btn-secondary btn-sm">Admin</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

interface HomeProps {}
interface Blogs {
  id: number;
  title: string;
  content: string;
  authorid: number;
  _create: string;
}

export default Home;
