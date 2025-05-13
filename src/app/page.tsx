
import ButtonFadeUp from "./components/ButtonFadeUp";
import ButtonFadeUpOnce from "./components/ButtonFadeUpOnce";
import ButtonFadeUpSimple from "./components/ButtonFadeUpSimple";
import MarqueeButton from "./components/MarqueeButton";

// ButtonAnimated pageHref="/sobre"


export default function Home() {



  return (
    <>
    <div>
      <div className="bg-pink-400 h-10 flex justify-around items-center">
      <span className="icon icon-images"></span>
      <span className="icon icon-camera"></span>
      <span className="icon icon-headphones"></span>
      <span className="icon icon-music"></span>
      <span className="icon icon-play"></span>
      <span className="icon icon-film"></span>
      <span className="icon icon-video-camera"></span>
      <span className="icon icon-dice"></span>
      <span className="icon icon-pacman"></span>
      <span className="icon icon-spades"></span>
      </div>
    </div>


    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <MarqueeButton />
      <ButtonFadeUp />
      <ButtonFadeUpOnce />
      <ButtonFadeUpSimple />
    </div>
    </>
  );
}
