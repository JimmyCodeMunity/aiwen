import React, { useEffect, useState } from 'react'
import { getNews } from '../api';
import { urlFor } from '../sanity';

const NewsEvents = () => {
  const [myblogs, setBlogs] = useState([]);
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            try {
                const blogData = await getNews();
                setBlogs(blogData);
                console.log('News:', blogData);
                setLoading(false);
                // console.log("blogdata", blogData);
                return;
            } catch (error) {
                console.error('Error fetching blogs:', error);
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const blogsData = myblogs.map((myblogs) => ({
        title: myblogs.title, // Add title to data for rendering in the carousel
        imageUri: urlFor(myblogs.mainImage).url(),
        body: myblogs.body,
        id: myblogs._id,
        time: myblogs._updatedAt
    }));
  return (
    <section className="w-full flex h-screen bg-white">
        <div className="w-full justify-center items-center py-5">
            <h1 className="font-semibold text-center font-poppins md:text-[40px] text-[20px]">News and Events</h1>
        </div>
    </section>
  )
}

export default NewsEvents
