import React, { useEffect, useState } from "react";
import { getNews } from "../api";
import { urlFor } from "../sanity";

const NewsEvents = () => {
  const [myblogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const MAX_LENGTH = 80; // Maximum length of the sentences
  const MAX_LENGTHTITLE = 20; // Maximum length of the sentences

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const blogData = await getNews();
        setBlogs(blogData);
        console.log("News:", blogData);
        setLoading(false);
        return;
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const blogsData = myblogs.map((myblogs) => ({
    title: myblogs.title,
    imageUri: urlFor(myblogs.mainImage).url(),
    body: myblogs.body
      .map(block => block.children ? block.children.map(child => child.text).join('') : '')
      .join(' '),
    id: myblogs._id,
    time: myblogs._updatedAt,
  }));
  

  const BlogItem = ({ blog }) => {
    const [expanded, setExpanded] = useState(false);
  
    const truncatedContent = blog.body.slice(0, MAX_LENGTH);
    const content = expanded
      ? blog.body
      : truncatedContent + (blog.body.length > MAX_LENGTH ? "..." : "");
  
    const truncatedTitle = blog.title.slice(0, MAX_LENGTHTITLE);
    const title = expanded
      ? blog.title
      : truncatedTitle + (blog.title.length > MAX_LENGTHTITLE ? "..." : "");
  
    const toggleExpand = () => {
      setExpanded(!expanded);
    };
  
    const formatDate = (time) => {
      const date = new Date(time);
      return date.toLocaleString();
    };
  
    return (
      <div class="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
        <div class="flex items-center">
          <img
            src={blog.imageUri}
            alt="blogs tailwind section"
            class="rounded-t-2xl w-full"
          />
        </div>
        <div class="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
          <span class="text-pink-600 font-medium mb-3 block">{formatDate(blog.time)}</span>
          <h4 class="text-xl text-gray-900 font-medium leading-8 mb-5">
            {title}
          </h4>
          <p class="text-gray-500 leading-6 mb-10">
            {content}
          </p>
          <a
            // onClick={toggleExpand}
            href={`/readblog/${blog.id}`}
            class="cursor-pointer text-lg text-pink-600 font-semibold"
          >
            {/* {expanded ? "Read less.." : "Read more.."} */}
            Read More..
          </a>
        </div>
      </div>
    );
  };
  
  return (
    <section class="py-24 ">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="font-manrope text-4xl font-bold text-gray-900 text-center">
          Our latest blog
        </h2>
        <div class="flex justify-center  gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {blogsData.map((blog) => (
            <BlogItem blog={blog} key={blog.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
