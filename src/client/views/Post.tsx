import * as React from "react";
import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export const Post: React.FC<PostProps> = (props: PostProps) => {
  let id = useParams();

  const [content, setContent] = useState<string>("");

  const handleClickUsers = async () => {
    try {
      await fetch(`/api/blog/${props.match.params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: content, id: props.match.params.id }),
      });
    } catch (error) {
      console.log(error);
    }
    props.history.push("/home");
  };

  return (
    <React.Fragment>
      <Menu />

      <div className="container">
        <form action="" className="form-group p-5">
          <label htmlFor="content">content:</label>
          <textarea
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            cols={10}
            rows={10}
            className="form-control"
          >
            {" "}
          </textarea>
          <button onClick={handleClickUsers} className="btn text-success mt-2">
            Click To Update Message
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

interface PostProps extends RouteComponentProps<{ id: string }> {}
interface IPost {
  title: string;
  content: string;
  authorid: number;
}
export default Post;
