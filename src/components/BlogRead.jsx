import React, { useEffect, useState } from "react";
import { getNewsById } from "../api";
import { urlFor } from "../sanity";
import { PortableText } from "@portabletext/react";
import NewsEvents from "./NewsEvents";

const BlogRead = ({ id }) => {
  const [myblogs, setBlogs] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogData = await getNewsById(id);
        setBlogs(blogData[0]);
        setTitle(blogData[0].title);
        setAuthor(blogData[0].author);
        const image = urlFor(blogData[0].mainImage).url();
        setMainImage(image);

        console.log("Blogs:", blogData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [id]);

  return (
    <section id="home" className="bg-black">
      <div className="pt-6 sm:pt-16 text-center">
        <h1 className="font-poppins font-normal text-white text-[30px]">
          {title}
        </h1>
      </div>
      <div className="flex md:flex-col flex-col-reverse py-6 sm:py-10">
        <div className="flex-1 flex justify-start items-start md:my-10 relative sm:px-16 px-6">
          <img
            src={mainImage}
            alt={title}
            className="w-[100%] rounded-3xl relative z-[5] object-cover"
          />
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
        <div className="flex-1 justify-center items-center flex-col xl:px-0 md:px-16 px-6">
          <div className="text-black relative font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px]">
            {myblogs && (
              <PortableText
                value={myblogs.body}
                components={{
                  types: {
                    image: ({ value }) => (
                      <img
                        src={urlFor(value).url()}
                        alt={value.alt || "Image"}
                        className="md:w-[50%] w-full md:h-[400px] h-auto rounded-lg mt-4"
                      />
                    ),
                  },
                  marks: {
                    link: ({ children, value }) => (
                      <a
                        href={value.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        {children}
                      </a>
                    ),
                  },
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h2 className="text-2xl font-bold leading-tight text-white sm:text-2xl lg:text-5xl animate-pulse">
          Other Stories
        </h2>
      </div>
      <NewsEvents />
    </section>
  );
};

export default BlogRead;
