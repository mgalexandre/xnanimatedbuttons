import ButtonAnimated from "./components/ButtonAnimated";
import ButtonFadeUp from "./components/ButtonFadeUp";
import ButtonFadeUpOnce from "./components/ButtonFadeUpOnce";
import ButtonFadeUpSimple from "./components/ButtonFadeUpSimple";
import MarqueeButton from "./components/MarqueeButton";


export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">

      // ButtonAnimated pageHref="/sobre"

      <MarqueeButton />
      <ButtonFadeUp />
      <ButtonFadeUpOnce />
      <ButtonFadeUpSimple />
    </div>
  );
}
