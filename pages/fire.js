import { useState, useEffect } from 'react';
import Head from 'next/head';
import fire from '../config/fire-config';


const Home = () => {
  const [blogs, setBlogs] = useState([]);
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
console.log(blogs)
  return (
    <div>abc</div>
  )
}
export default fire;