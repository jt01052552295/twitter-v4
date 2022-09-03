import Image from "next/image";

export default function News({ article }) {
  return (
    <a rel="noreferrer" href="#" target="_blank">
      <div className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-500 ease-out">
        <div className="space-y-0.5">
          <h6 className="text-sm font-bold">title</h6>
          <p className="text-xs font-medium text-gray-500">name</p>
        </div>
        <Image
          className="rounded-xl "
          width="70"
          height="70"
          src="https://picsum.photos/70"
          alt="news-image"
        />
      </div>
    </a>
  );
}
