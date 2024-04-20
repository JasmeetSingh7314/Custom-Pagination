"use client";
import { useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

//Type Defintion for Pagination Component Props
type paginationType = {
  postsPerPage: number;
  setPostsPerPage: (postsPerPage: number) => void;
  totalPosts: number;
  paginate: (index: number) => void;
};

export default function Pagination({
  postsPerPage,
  setPostsPerPage,
  totalPosts,
  paginate,
}: paginationType) {
  // Selected state keeps a track of the current page number.
  // Default is set to 1.
  const [selected, setSelected] = useState(1);

  //Function to increase page selection count when Next button is clicked
  const increase = () => {
    //Check for conditions
    if (selected < totalPosts && selected > 0) {
      setSelected((prev) => prev + 1);
      paginate(selected + 1);
      
    }
  };

  //Function to decrease page selection count when Prev is clicked
  const decrease = () => {
    //Check for conditions
    if (selected <= totalPosts && selected >= 2) {
      setSelected((prev) => prev - 1);
      paginate(selected - 1);
      
    }
  };

  //Function to handle change when total posts per page is changed
  const handleChange = (e: any) => {
    //Setting total number of posts
    setPostsPerPage(e.target.value);
    // Setting the selected state back to default
    setSelected(1);
    paginate(1);
   
  };

  return (
    <section className="flex justify-around items-center p-8">
      <div className=" justify-center p-3  text-2xl hidden md:flex">
        
      </div>
      <div className="flex gap-x-2 items-center">
        <button
          className="p-3 flex gap-x-2  rounded-md   text-black font-extrabold  hover:bg-gray-300 transition-all ease-in hover:shadow-2xl"
          onClick={() => decrease()}
        >
          <FaLongArrowAltLeft className="text-2xl" />
          Prev
        </button>
        {/* To instantiate an array for the total number of posts  */}
        {[...Array(totalPosts)].map((_, id) => (
          <button
            key={id}
            className={`p-1 md:p-4  rounded-md border border-gray-200  text-black font-extrabold ${
              selected === id + 1
                ? "bg-orange-500"
                : "bg-transparent hover:bg-gray-300"
            }     transition-all ease-in`}
            onClick={() => {
              setSelected(id + 1);
              paginate(id + 1);
            }}
          >
            {id + 1}
          </button>
        ))}
        <button
          className=" flex gap-x-2 p-3  rounded-md   text-black font-extrabold  hover:bg-gray-300 transition-all ease-in hover:shadow-2xl"
          onClick={() => increase()}
        >
          Next
          <FaLongArrowAltRight className="text-2xl" />
        </button>
      </div>
      <div className="flex gap-x-2">
        <span className="tracking-tight text-gray-500">Rows per page:</span>
        <select
          className="border border-gray-500/25 p-1 focus:border-gray-500"
          onChange={handleChange}
        >
          {/* To instantiate an array for the 6 choices */}
          {[...Array(6)].map((_, index) => (
            <option key={index} value={(index + 1) * 5}>
              {(index + 1) * 5}{" "}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
