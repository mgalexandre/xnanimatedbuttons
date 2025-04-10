import Link from "next/link";

function ButtonAnimated({ pageHref }: { pageHref: string }) {
  return (
    <Link href={pageHref} >
    <button className="group border flex h-[50px] w-[200px] items-center overflow-hidden rounded-full transition-all duration-[0.7s] hover:border-none px-4 hover:p-0">
          <img className="w-[20px] relative -z-40 rounded-full group-hover:w-full group-hover:m-0 transition-all duration-[0.6s] ease-[cubic-bezier(0.22, 1, 0.36, 1)]" src="button.svg" alt="" />
          <p className="absolute ml-14 group-hover:ml-8 transition-all duration-[1.2s]">Clique aqui</p>
      </button>
    </Link>
  );
}

export default ButtonAnimated;