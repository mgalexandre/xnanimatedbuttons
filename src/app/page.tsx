"use client"

import ButtonFadeUp from "./components/ButtonFadeUp";
import MarqueeButton from "./components/MarqueeButton";
import MenuFooter from "./components/MenuFooter";
import NavbarBottom from "./components/NavbarBottom";

// ButtonAnimated pageHref="/sobre"

export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-4 items-center justify-center h-screen bg-pink-500">
        <NavbarBottom />
      </section>
      
      {/* Home Section */}
      <section id="home" className="flex flex-col gap-4 items-center justify-center h-screen z-[100]">
        <MarqueeButton />
        <ButtonFadeUp href="/sobre" variant="fadeUp">Sign up</ButtonFadeUp>
        <ButtonFadeUp href="/sobre" variant="fadeUpOnce">Sign in</ButtonFadeUp>
        <ButtonFadeUp href="/sobre" variant="simple">Login</ButtonFadeUp>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who I Am</h3>
              <p className="text-gray-600 leading-relaxed">
                I&apos;m Alexandre and I turn ideas into interactive experiences using pixels, code, and a stubborn amount of curiosity. 
                I&apos;m a front-end developer with a multimedia background, which means I don&apos;t just build things that work — I build things that feel.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                I believe in creating experiences that are not only functional but also delightful. 
                Every pixel, every interaction, and every line of code is crafted with purpose and passion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Animated Buttons</h3>
              <p className="text-gray-600">A collection of beautifully animated buttons with smooth transitions and modern design.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Interactive UI</h3>
              <p className="text-gray-600">Creating engaging user interfaces that respond to user interactions with elegance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Web Experiences</h3>
              <p className="text-gray-600">Building immersive web experiences that captivate and inspire users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ready to bring your ideas to life? Let&apos;s collaborate on creating something amazing together.
              </p>
              <div className="space-y-3">
                <p className="text-gray-600">
                  <span className="font-medium">Email:</span> hello@alexandre.dev
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Location:</span> São Paulo, Brazil
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Let&apos;s Work Together</h3>
              <p className="text-gray-600 leading-relaxed">
                Whether you have a specific project in mind or just want to explore possibilities, 
                I&apos;m here to help turn your vision into reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MenuFooter />
    </>
  );
}
