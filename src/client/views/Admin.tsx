//file to get single blog
import * as React from "react";
import { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { validateLocaleAndSetLanguage } from "typescript";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export const Admin: React.FC<AdminProps> = (props: AdminProps) => {
  const [blog, setBlog] = useState<blog[]>([]);
  const [tag, setTag] = useState<tag>([]);

  // Get Single Blog from Database
  const getblogs = async () => {
    try {
      let res = await fetch(`/api/blog/${props.match.params.id}`);
      let data = await res.json();

      setBlog(data);
    } catch (err) {
      console.log(err);
    }
  };

  // Get tags from data base
  const getTags = async () => {
    try {
      let res = await fetch(`/api/blog/tag/${props.match.params.id}`);
      let data = await res.json();
      setTag(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getTags();
  }, []);

  useEffect(() => {
    getblogs();
  }, []);

  const deleteblog = async () => {
    try {
      await fetch(`/api/blog/${props.match.params.id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }
    props.history.push("/home");
  };

  return (
    <React.Fragment>
      <div className="container ">
        <Menu />
        <div className="row  d-flex justify-content-center ">
          {blog.map((val) => (
            <div className="card col-5 m-4" key={`adminuuid-${val.id}`}>
              <div className="card-header">Author: Kenneth </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p> {val.content}</p>
                  <footer className="blockquote-footer">
                    Tag Name: <cite title="Source Title">{tag}</cite>
                  </footer>
                </blockquote>
                <button className="btn text-danger" onClick={deleteblog}>
                  Click To Remove blog
                </button>
                <Link to={`/post/${val.id}`}>
                  <button className="btn text-success">Update Blog Post</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

interface AdminProps extends RouteComponentProps<{ id: string }> {}

interface blog {
  id: number;
  title: string;
  content: string;
  authorid: number;
  _create: number;
}

interface tag {}

export default Admin;
