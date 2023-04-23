import { useRouter } from "next/router";
import React, { useState } from "react";
import * as fs from "fs";
const Blogs = (props) => {
  const router = useRouter();
  const [blogs, setBlogs] = useState(props.allBlogs);
  return (
    <div className="container w-full m-auto">
      <h1 className="text-center text-xl lg:text-3xl font-medium tracking-wide py-5">Blogs</h1>
        <hr />
      <div className=" grid gap-2 lg:grid-cols-5 md:grid-cols-4 grid-cols-1 py-5">
        {blogs.map((data, index) => (
          <div
            key={index}
            onClick={() => router.push(`/blogpost/${data.slug}`)}
            className="border border-gray-900 hover:border-red-50 duration-200 ease-in-out p-4 rounded-xl cursor-pointer"
          >
            <h3 className="text-2xl font-semibold">{data.title}</h3>
            <p className="line-clamp-5">{data.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogData");
  let myFile;
  let allBlogs = [];

  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myFile = await fs.promises.readFile("blogData/" + item, "utf-8");
    allBlogs.push(JSON.parse(myFile));
  }
  return {
    props: { allBlogs },
  };
}

export default Blogs;
