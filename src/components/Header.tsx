import { CiFilter } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

export default function Header() {
  return (
    <section className="flex justify-between items-center p-3 px-4 pt-4">
      <div></div>
      <span className="flex justify-center text-2xl  tracking-wider font-bold  ">
        Recently Generated Reports
      </span>
      <span className="flex gap-x-3 ">
        <button className=" p-3 font-extrabold  bg-transparent rounded-md border border-gray-500 text-black    hover:bg-gray-300 transition-all ease-in hover:shadow-2xl">
          <CiFilter className="text-2xl font-bold" />
        </button>
        <button className="p-3 font-extrabold bg-transparent rounded-md border border-gray-500 text-black  hover:bg-gray-300 transition-all ease-in hover:shadow-2xl ">
          <RxCross1 className="text-2xl font-bold" />
        </button>
      </span>
    </section>
  );
}
