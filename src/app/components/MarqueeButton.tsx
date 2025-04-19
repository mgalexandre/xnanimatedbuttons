import React from "react";

const MarqueeButton = () => {
  return (
    <div className="inline-block">
      <a
        href="/conosciamoci"
        className="
        group
        relative 
        inline-flex 
        items-center
        justify-center
        py-3 
        px-8
        bg-black 
        text-white 
        rounded-full 
        overflow-hidden
        transition-all
        duration-300
        hover:pr-12
        hover:text-black
      "
      >
        {/* Main text layer */}
        <span
          className="
          relative 
          inline-flex 
          items-center
          z-10
          transition-transform
          duration-[400ms]
          group-hover:translate-y-[-150%]
          overflow-hidden
          group-hover:text-black
        "
        >
          Let&apos;s Speak!
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="
              w-5 
              h-5 
              ml-2
              transition-transform
              duration-300
              group-hover:rotate-45
            "
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 17L17 7M17 7H7M17 7V17"
            />
          </svg>
        </span>



        {/* Marquee layer */}
        <div
          className="
          absolute 
          inset-0 
          flex 
          transition-opacity
          duration-300
          opacity-0
          z-50
          group-hover:opacity-100
          white-space: wrap;
        "
        >
          <div
            className="
            animate-[marquee_20s_linear_infinite]
            flex
            items-center
            gap-8
            group-hover:text-black
            whitespace-nowrap
          "
          >
            {[...Array(8)].map((_, index) => (
              <span key={index} className="inline-flex items-center">
                Let&apos;s Speak!
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-2 rotate-45"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </span>
            ))}
          </div>
        </div>
        <div className="bg-white flex justify-center items-center absolute top-0 -left-8 translate-y-20 rounded-full w-[250px] h-[200px] group-hover:-translate-y-12 transition-all duration-500">
          <p></p>
        </div>
      </a>
    </div>
  );
};

export default MarqueeButton;
