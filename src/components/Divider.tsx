export default function Divider() {
  return (
    <section className="flex justify-between items-center p-3 bg-slate-200 px-8  shadow-md">
      <div className="flex gap-x-24">
        <span className="text-xl  tracking-tight font-bold text-gray-700  ">
          Date
        </span>
        <span className="text-xl   tracking-tight font-bold text-gray-700  ">
          Report Name
        </span>
      </div>
      <span className="text-xl   tracking-tight font-bold text-gray-700  ">
        Download
      </span>
    </section>
  );
}
