import { dummyData } from "@/utils/dummyData";
import { filter } from "@/utils/filter";
import { CiFilter } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

interface HeaderProps {
  setFilter: (item: any) => void;
}

export default function Header({ setFilter }: HeaderProps) {
  //function to handle the filtering part
  const handleFilter = () => {
    // Sets the filtered Data
    setFilter(filter(dummyData));
  };
  return (
    <section className="flex justify-between items-center p-3 px-4 pt-4">
      <div className=" hidden md:flex"></div>
      <span className="flex  grow  pl-2 2xl:pl-40 2xl:grow-0 text-left lg:text-center text-2xl ml-32 tracking-wider font-bold  ">
        Recently Generated Reports
      </span>
      <span className="flex items-center gap-x-3 ">
        <span className="text-md hidden text-gray-400 font-bold lg:flex ">
          Apply Filter
        </span>
        <button
          className=" p-3 font-extrabold  bg-transparent rounded-md border border-gray-500 text-black    hover:bg-gray-300 transition-all ease-in hover:shadow-2xl"
          onClick={() => handleFilter()}
        >
          <CiFilter className="text-2xl font-bold" />
        </button>
        <button
          className="p-3 font-extrabold bg-transparent rounded-md border border-gray-500 text-black  hover:bg-gray-300 transition-all ease-in hover:shadow-2xl "
          onClick={() => setFilter(undefined)}
        >
          <RxCross1 className="text-2xl font-bold" />
        </button>
        <span className="text-md hidden text-gray-400 font-bold lg:flex ">
          Revert Filters
        </span>
      </span>
    </section>
  );
}
