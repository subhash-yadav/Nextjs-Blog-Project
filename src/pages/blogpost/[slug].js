import React, {useState } from "react";
import * as fs from "fs";
const Slug = (props) => {
  console.log(props.myBlogs,"props.myBlogs")
  const [blog, setBlogs] = useState(props.myBlogs);
  const { title, content } = blog;
  return (
    <>
      <div className="container w-full m-auto">
        <div className=" text-left">
          <h1 className="text-center py-5 tex-lg md:text-2xl">
            Title: {title}
          </h1>
          <hr />
          <p className="py-3 ">{content}</p>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug:"how-to-learn-flask"} }, 
      { params: { slug:"how-to-learn-javascript"} }, 
      { params: { slug:"how-to-learn-nextjs"} }, 
      // { params: { slug:"how-to-learn-java"} }, 
    ],
    fallback: true
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogData/${slug}.json`,'utf-8')
  
  return {
    props: {myBlogs: JSON.parse(myBlog) }, 
  };
}
export default Slug;
