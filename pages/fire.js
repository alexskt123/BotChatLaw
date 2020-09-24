import { useState, useEffect, Fragment } from 'react';
import fire from '../config/fire-config';

export default function Fire() {
  const [blogs, setBlogs] = useState([]);

  const listBlogs = () => {
    return blogs.map(blog => {
      console.log(blog)
      return (
        <pre key={blog.id}>{JSON.stringify(blog, null, 2)}</pre>
      )
    })
  }

  useEffect(() => {
    fire.firestore()
      .collection('Intent')
      .onSnapshot(snap => {
        const blogs = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogs(blogs);
      });
  }, []);

  return (
    <Fragment>
      {listBlogs()}
    </Fragment>
  )
}

