import Link from "next/link";


export default function ButtonFadeUpSimple() {
  return (
    <Link href="/sobre">
      <div className="bg-white px-5 h-[40px] rounded-xl text-orange-600 group transition-all duration-700 flex items-center justify-center">
        <div className="h-[20px] m-0 p-0 flex flex-col justify-start overflow-hidden">
          <p className="-translate-y-[1px] group-hover:-translate-y-6 transition-all duration-700 m-0 p-0">
            Sign up
          </p>
          <p className="group-hover:-translate-y-6 transition-all duration-700 m-0 p-0">
            Sign up</p>
        </div>
      </div>
    </Link>
  );
}