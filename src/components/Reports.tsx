import { FaFileDownload } from "react-icons/fa";

export type ObjectType = {
  time: {
    date: string;
    hours: string;
  };
  report_name: string;
};

export default function Reports({ posts }: any) {
  return (
    <section className="flex flex-col divide-y-2 divide-slate-400/25">
      {posts?.map((report: ObjectType, id: number) => (
        <div key={id} className="flex justify-between p-4  px-8  items-center">
          <div className="flex gap-x-12">
            <span className="text-lg flex flex-col justify-center tracking-tight   ">
              {report?.time.date}

              <span className="text-sm font-light">{report?.time.hours}</span>
            </span>
            <span className="text-lg tracking-wider  ">
              {report?.report_name}
            </span>
          </div>

          <button className="p-3  rounded-md  text-black font-extrabold shadow-2xl  hover:bg-gray-300 transition-all ease-in hover:shadow-2xl">
            <FaFileDownload className="text-2xl " />
          </button>
        </div>
      ))}
    </section>
  );
}
