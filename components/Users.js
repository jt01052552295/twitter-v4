import Image from "next/image";

export default function Users({ randomUser }) {
  return (
    <div className="flex items-center px-4 py-2  cursor-pointer hover:bg-gray-200 transition duration-500 ease-out">
      <Image
        className="rounded-full "
        width="40"
        height="40"
        src="https://picsum.photos/40"
        alt="user-image"
      />
      <div className="truncate ml-4 leading-5">
        <h4 className="font-bold hover:underline text-[14px] truncate">
          username
        </h4>
        <h5 className="text-[13px] text-gray-500 truncate">first lastName</h5>
      </div>
      <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">
        Follow
      </button>
    </div>
  );
}
