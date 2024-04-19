"use client";
import { useState } from "react";
import { dummyData } from "@/utils/dummyData";
import Header from "./Header";
import Divider from "./Divider";
import Reports from "./Reports";
import Pagination from "./Pagination";

export default function Box() {
  //Initializing state for currentPage
  const [currentPage, setCurrentPage] = useState(1);

  //Initializing state for number of postsPerPage
  const [postsPerPage, setPostsPerPage] = useState(5);
  
  //Initializing state for Filtered Posts
  const [filteredData, setFilteredData] = useState();

  //Code for slicing the data array
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dummyData.slice(indexOfFirstPost, indexOfLastPost);


  //Paginate function which sets the current page index
  const paginate = (index: number) => setCurrentPage(index);

  //Total number of pages to be displayed
  const totalPosts = Math.ceil(dummyData.length / postsPerPage);

  return (
    <section className="w-full h-max rounded-xl flex flex-col justify-between shadow-xl bg-white divide-y-2 divide-slate-400/25 ">
      <Header setFilter={setFilteredData} />
      <Divider />
      <Reports posts={filteredData ? filteredData : currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        setPostsPerPage={setPostsPerPage}
        totalPosts={totalPosts}
        paginate={paginate}
      />
    </section>
  );
}
