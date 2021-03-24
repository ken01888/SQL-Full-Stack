// This File Contains all Query methods which are exported to the routes folder server/routes.ts



import { Connection } from "./index";

export const allBlogs = async () => {
  return new Promise((resolve, reject) => {
    Connection.query("SELECT * FROM Blogs", 
    (err, result:{id:number,title:string,content:string,authorid:number,_created:number}) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

export const oneBlog = async (id:string) => {
  return new Promise((resolve, reject) => {
    Connection.query(
      "SELECT * FROM Blogs WHERE id = ?",
      [id],
      (err, result:number) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      }
    );
  });
};

export const deleteBlog = async (id:string) => {
  return new Promise((resolve, reject) => {
    Connection.query("DELETE FROM Blogs WHERE id = ?", 
    [id], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

export const updateBlog = async (content:{title:string,content:string}, id:string) => {
  return new Promise((resolve, reject) => {
    Connection.query(
      "UPDATE Blogs SET ? WHERE id = ?",
      [content, id],
      (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      }
    );
  });
};

export const insertBlog = async (title:string,content:string) => {
  return new Promise((resolve, reject) => {
    Connection.query("INSERT INTO Blogs (title,content,authorid) values (?,?,1)",
     [title,content], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

export const blogTags = async (tagid:string) => {
  return new Promise((resolve, reject) => {
    Connection.query("CALL spBlogsTags(?)", 
    [tagid], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};


//Not properly functioning
export const insertBlogId = async (blogid:number) => {
    return new Promise((resolve, reject) => {
      Connection.query("INSERT INTO BlogTags (blogid,tagid) values (?,1)", 
      [blogid], (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  };





export default {
  allBlogs,
  oneBlog,
  deleteBlog,
  updateBlog,
  insertBlog,
  blogTags,
  insertBlogId
};
