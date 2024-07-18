import SvgCloud from "@/components/SvgCloud";
import DancingLines from "@/DancingLines/DancingLines";

export default function Home() {
  return (
    <div className="px-24">
      <DancingLines />
      <div className="css-1gtx2zw"></div>
      <div className="css-irwfw9"></div>
      {/* Home section */}
      <section className="flex items-center min-h-screen justify-between z-10">
        <div className="flex flex-col gap-2.5 w-2/3">
          <h1 className="text-8xl font-black">ABDUL REHMAN<span className="text-[#bb66e2]">.</span></h1>
          <h3 className="text-4xl font-bold">I{"'"}m a<span className="gradient-text font-extrabold"> Front-End Developer</span></h3>
          <p className="text-lg text-gray-200">Passionate web developer creating visually stunning, responsive websites 🎨. Crafting custom sites tailored to your needs, optimized for all devices 🖥️🌐. Let{"'"}s build your online presence together!</p>
          <div className="mt-2">
            <button className="border-2 hover:-translate-y-1 font-semibold border-[#bb66e2] hover:bg-transparent hover:text-[#bb66e2] transition-all outline-none rounded-md px-6 py-3 bg-[#bb66e2] text-white hover: red-btn-shadow">See Work</button>
            <button className="ms-3 border-2 hover:-translate-y-1 font-semibold border-[#bb66e2] hover:bg-transparent hover:text-[#bb66e2] transition-all outline-none rounded-md px-6 py-3 bg-[#bb66e2] text-white red-btn-shadow">Contact Me</button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="rounded-full bg-[#bb66e2] home-img"></div>
        </div>
      </section>
      {/* About Section */}
      <section className="flex items-center justify-between pb-40">
        <div className="w-[52%] flex flex-col gap-4">
          <h2 className="text-7xl font-black">Me<span className="text-[#bb66e2]">,</span> Myself &amp; I<span className="text-[#bb66e2]">.</span></h2>
          <p className="text-lg text-gray-200">I’m a Front-End Developer located in Pakistan. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
          <p className="text-lg text-gray-200">Detail-oriented, problem-solving individual pursuing a Computer Science degree. A self-motivated, organized team player passionate about coding. Enthusiastic about creating exceptional websites through dedication and independent work. 🖥️✨</p>
          <p className="text-lg text-gray-200">Embarked on my web development journey in 2021, crafting stunning sites and honing my skills diligently. If you{"'"}re a fellow programmer with questions, feel free to reach out! 🌐💻</p>
          <p className="text-lg text-gray-200">Interested in the entire frontend spectrum and working on ambitious projects with positive people.</p>
          <a href="/contact" className="text-[#bb66e2] underline">Let’s make something special.</a>
        </div>
        <div className="text-[#bb66e2]">
          <SvgCloud/>
        </div>
      </section>
      {/* My Portfolio */}
      <section>
      <h2 className="text-7xl font-black mb-4">My Portfolio<span className="text-[#bb66e2]">.</span></h2>
      <p className="text-lg text-gray-200">A small gallery of recent projects chosen by me. I{"'"}ve done them all together with amazing people from companies around the globe. It{"'"}s only a drop in the ocean compared to the entire list. Interested to see some more? Visit my <a href="/contact" className="text-[#bb66e2] underline">work page</a>. A small gallery of recent projects chosen by me. I{"'"}ve done them all together with amazing people from companies around the World.</p>
      <div className="flex justify-between flex-wrap py-6">
        <div className="w-1/5 h-52 p-1">
          <div className="h-full relative rounded-sm w-full bg-purple-400 overflow-hidden">
            <div className="h-full w-full flex hover:opacity-100 transition-all opacity-0 items-center justify-center">
              <div className="absolute rounded-full bg-white shadow-lg h-32 w-32 flex items-center justify-center text-black font-semibold underline cursor-pointer">Show more</div>
            </div>
          </div>
        </div>
        <div className="w-1/5 h-52 p-1">
          <div className="h-full relative rounded-sm w-full bg-yellow-400 overflow-hidden">
            <div className="h-full w-full flex hover:opacity-100 transition-all opacity-0 items-center justify-center">
              <div className="absolute rounded-full bg-white shadow-lg h-32 w-32 flex items-center justify-center text-black font-semibold underline cursor-pointer">Show more</div>
            </div>
          </div>
        </div>
        <div className="w-1/5 h-52 p-1">
          <div className="h-full relative rounded-sm w-full bg-blue-400 overflow-hidden">
            <div className="h-full w-full flex hover:opacity-100 transition-all opacity-0 items-center justify-center">
              <div className="absolute rounded-full bg-white shadow-lg h-32 w-32 flex items-center justify-center text-black font-semibold underline cursor-pointer">Show more</div>
            </div>
          </div>
        </div>
        <div className="w-1/5 h-52 p-1">
          <div className="h-full relative rounded-sm w-full bg-yellow-400 overflow-hidden">
            <div className="h-full w-full flex hover:opacity-100 transition-all opacity-0 items-center justify-center">
              <div className="absolute rounded-full bg-white shadow-lg h-32 w-32 flex items-center justify-center text-black font-semibold underline cursor-pointer">Show more</div>
            </div>
          </div>
        </div>
        <div className="w-1/5 h-52 p-1">
          <div className="h-full relative rounded-sm w-full bg-purple-400 overflow-hidden">
            <div className="h-full w-full flex hover:opacity-100 transition-all opacity-0 items-center justify-center">
              <div className="absolute rounded-full bg-white shadow-lg h-32 w-32 flex items-center justify-center text-black font-semibold underline cursor-pointer">Show more</div>
            </div>
          </div>
        </div>
        <div className="w-1/5 h-52 p-1">
          <div className="h-full relative rounded-sm w-full bg-yellow-400 overflow-hidden">
            <div className="h-full w-full flex hover:opacity-100 transition-all opacity-0 items-center justify-center">
              <div className="absolute rounded-full bg-white shadow-lg h-32 w-32 flex items-center justify-center text-black font-semibold underline cursor-pointer">Show more</div>
            </div>
          </div>
        </div>
        <div className="w-1/5 h-52 p-1">
          <div className="h-full relative rounded-sm w-full bg-purple-400 overflow-hidden">
            <div className="h-full w-full flex hover:opacity-100 transition-all opacity-0 items-center justify-center">
              <div className="absolute rounded-full bg-white shadow-lg h-32 w-32 flex items-center justify-center text-black font-semibold underline cursor-pointer">Show more</div>
            </div>
          </div>
        </div>
        <div className="w-1/5 h-52 p-1">
          <div className="h-full relative rounded-sm w-full bg-yellow-400 overflow-hidden">
            <div className="h-full w-full flex hover:opacity-100 transition-all opacity-0 items-center justify-center">
              <div className="absolute rounded-full bg-white shadow-lg h-32 w-32 flex items-center justify-center text-black font-semibold underline cursor-pointer">Show more</div>
            </div>
          </div>
        </div>
        <div className="w-1/5 h-52 p-1">
          <div className="h-full relative rounded-sm w-full bg-purple-400 overflow-hidden">
            <div className="h-full w-full flex hover:opacity-100 transition-all opacity-0 items-center justify-center">
              <div className="absolute rounded-full bg-white shadow-lg h-32 w-32 flex items-center justify-center text-black font-semibold underline cursor-pointer">Show more</div>
            </div>
          </div>
        </div>
        <div className="w-1/5 h-52 p-1">
          <div className="h-full relative rounded-sm w-full bg-yellow-400 overflow-hidden">
            <div className="h-full w-full flex hover:opacity-100 transition-all opacity-0 items-center justify-center">
              <div className="absolute rounded-full bg-white shadow-lg h-32 w-32 flex items-center justify-center text-black font-semibold underline cursor-pointer">Show more</div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}
