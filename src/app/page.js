"use client";
import BallPool from "@/components/BallPool";
import { useEffect, useState } from 'react';
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SvgCloud from "@/components/SvgCloud";
import DancingLines from "@/DancingLines/DancingLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import $ from 'jquery';
import 'jquery.ripples';
import BallFollower from "@/components/BallFollower";

export default function Home() {
  useGSAP(() => {
    gsap.from("#ripple-element p", {
      duration: 3,
      delay: 2,
      rotateX: -100,
      opacity: 0,
      ease: "elastic.out(1, 0.7)",
    })
    gsap.from("#ripple-element img, #ripple-element .NavigateBtn", {
      duration: 3,
      delay: 2.5,
      rotateX: -10,
      opacity: 0,
      scale: .8,
      stagger: .2,
      ease: "elastic.out(1, 0.7)",
    })
  })

  useEffect(() => {
    // Initialize ripples effect on the element with id 'ripple-element'
    $('#ripple-element').ripples({
      resolution: 512,
      dropRadius: 20,
      perturbance: 0.04,
    });

    // Clean up the ripples effect when the component is unmounted
    return () => {
      $('#ripple-element').ripples('destroy');
    };
  }, []);
  const [isLoading, setisLoading] = useState(true)
  const [closeLoading, setcloseLoading] = useState(false)
  const hideLoading = () => {
    setcloseLoading(true);
    setTimeout(() => {
      setisLoading(false);
    }, 1000);
  }
  return (
    <>
      {isLoading && <div id="ripple-element" className={`transition-all duration-1000 h-screen w-screen ball-container fixed bg-black ${closeLoading ? '-translate-y-full' : ''}`}>
        <p className="flex items-center py-4 px-9 fixed uppercase text-gray-400 text-[11px] font-semibold tracking-wider">Hold a ball and and move it to play with gravity <span className="h-[1px] w-40 bg-gray-400 ms-3"></span></p>
        <div className="text-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center flex-col justify-center">
          <img src="https://res.cloudinary.com/datvbo0ey/image/upload/v1723095622/thunder_1_dxnbte.png" alt="rehman logo" />
          <div className="NavigateBtn">
            <button onClick={hideLoading} className="border border-white z-20 relative text-white rounded-full font-semibold mt-7 mb-20 px-10 py-3 hover:bg-white hover:text-black transition-all flex items-center hover:scale-110">
              Naviagte to next
              <span className="ms-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </span>
            </button>
          </div>
        </div>
        <BallFollower />
        <BallPool />
      </div>}
      {!isLoading && <div>
        <Navbar />
        <div id="main-container">
          <DancingLines />
          <div className="px-24">
            {/* <div className="css-1gtx2zw"></div>
          <div className="css-irwfw9"></div> */}
            {/* Home section */}
            <section className="flex items-center min-h-screen justify-between z-10" >
              <div className="flex flex-col gap-2.5 w-2/3">
                <h1 className="text-8xl font-black" >ABDUL REHMAN<span className="text-[#bb66e2]">.</span></h1>
                <h3 className="text-4xl font-bold">I{"'"}m a<span className="gradient-text font-extrabold"> Front-End Developer</span></h3>
                <p className="text-lg text-gray-200">Passionate web developer creating visually stunning, responsive websites 🎨. Crafting custom sites tailored to your needs, optimized for all devices 🖥️🌐. Let{"'"}s build your online presence together!</p>
                <div className="mt-2">
                  <button className="border-2 hover:-translate-y-1 font-semibold border-[#bb66e2] hover:bg-transparent hover:text-[#bb66e2] transition-all outline-none rounded-md px-6 py-3 bg-[#bb66e2] text-white hover: red-btn-shadow">See Work</button>
                  <button className="ms-3 border-2 hover:-translate-y-1 font-semibold border-[#bb66e2] hover:bg-transparent hover:text-[#bb66e2] transition-all outline-none rounded-md px-6 py-3 bg-[#bb66e2] text-white red-btn-shadow">Contact Me</button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="rounded-full bg-[#bb66e2] home-img" ></div>
              </div>
            </section>
            
            {/* About Section */}
            <section className="flex items-center justify-between" >
              <div className="w-[52%] flex flex-col gap-4">
                <h2 className="text-7xl font-black" >Me, Myself & I<span className="text-[#bb66e2]">.</span></h2>
                <p className="text-lg text-gray-200">I’m a Front-End Developer located in Pakistan. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
                <p className="text-lg text-gray-200">Detail-oriented, problem-solving individual pursuing a Computer Science degree. A self-motivated, organized team player passionate about coding. Enthusiastic about creating exceptional websites through dedication and independent work. 🖥️✨</p>
                <p className="text-lg text-gray-200">Embarked on my web development journey in 2021, crafting stunning sites and honing my skills diligently. If you{"'"}re a fellow programmer with questions, feel free to reach out! 🌐💻</p>
                <p className="text-lg text-gray-200">Interested in the entire frontend spectrum and working on ambitious projects with positive people.</p>
                <a href="/contact" className="text-[#bb66e2] underline">Let’s make something special.</a>
              </div>
              <div className="text-[#bb66e2]">
                <SvgCloud />
              </div>
            </section>
            {/* Skills */}
            <section className="py-40" >
              <div className="text-center">
                <h2 className="text-7xl font-black mb-4">Skills & Experience<span className="text-[#bb66e2]">.</span></h2>
                <p className="text-lg text-gray-200 pt-2 px-10">I currently did not have any experience in working with team or organization, but since my journey from 2021 I have independently developed many of the stunning websites🔗 and that have amazing features. The skills in which i am proficcent as a web develpoer make site for you are as follows.</p>
              </div>
              <div className="flex mt-10">
                <div className="w-1/2">
                  <div className="pe-8">
                    <div className="pb-2">
                      <div className="flex text-lg py-3 justify-between">
                        <h4>HTML5</h4>
                        <h5>95%</h5>
                      </div>
                      <div className="h-[3px] bg-gray-700 rounded-sm">
                        <div className="h-full bg-red-500 w-11/12"></div>
                      </div>
                    </div>
                    <div className="pb-2">
                      <div className="flex text-lg py-3 justify-between">
                        <h4>CSS3</h4>
                        <h5>85%</h5>
                      </div>
                      <div className="h-[3px] bg-gray-700 rounded-sm">
                        <div className="h-full bg-yellow-500 w-4/5"></div>
                      </div>
                    </div>
                    <div className="pb-2">
                      <div className="flex text-lg py-3 justify-between">
                        <h4>Javascript</h4>
                        <h5>90%</h5>
                      </div>
                      <div className="h-[3px] bg-gray-700 rounded-sm">
                        <div className="h-full bg-violet-400 w-5/6"></div>
                      </div>
                    </div>
                    <div className="pb-2">
                      <div className="flex text-lg py-3 justify-between">
                        <h4>Bootstrap 4/5</h4>
                        <h5>80%</h5>
                      </div>
                      <div className="h-[3px] bg-gray-700 rounded-sm">
                        <div className="h-full bg-teal-400 w-11/12"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="ps-8">
                    <div className="pb-2">
                      <div className="flex text-lg py-3 justify-between">
                        <h4>ReactJs</h4>
                        <h5>80%</h5>
                      </div>
                      <div className="h-[3px] bg-gray-700 rounded-sm">
                        <div className="h-full bg-red-500 w-11/12"></div>
                      </div>
                    </div>
                    <div className="pb-2">
                      <div className="flex text-lg py-3 justify-between">
                        <h4>NextJs</h4>
                        <h5>90%</h5>
                      </div>
                      <div className="h-[3px] bg-gray-700 rounded-sm">
                        <div className="h-full bg-yellow-500 w-4/5"></div>
                      </div>
                    </div>
                    <div className="pb-2">
                      <div className="flex text-lg py-3 justify-between">
                        <h4>Python</h4>
                        <h5>85%</h5>
                      </div>
                      <div className="h-[3px] bg-gray-700 rounded-sm">
                        <div className="h-full bg-violet-400 w-5/6"></div>
                      </div>
                    </div>
                    <div className="pb-2">
                      <div className="flex text-lg py-3 justify-between">
                        <h4>Tailwind</h4>
                        <h5>80%</h5>
                      </div>
                      <div className="h-[3px] bg-gray-700 rounded-sm">
                        <div className="h-full bg-teal-400 w-11/12"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20 bg-gray-900 rounded-3xl overflow-hidden relative">
                <div className="p-20 flex justify-between items-center relative z-20">
                  <div className="py-4">
                    <h3 className="text-4xl pb-2.5 font-extrabold">Let{"'"}s start making project now</h3>
                    <p className="text-lg text-gray-200">We can make awesome & amazing projects with you that you also like.</p>
                  </div>
                  <button className="rounded-full shadow-lg mr-16 bg-black text-white px-10 py-4" type="button">Contact Now</button>
                </div>
                <div className="flex float-right absolute -mt-[38vh] ml-[78vh]">
                  <div className="shadow-2xl bg-yellow-400 h-[400px] w-[400px] border-black rounded-full"></div>
                  <div className="shadow-2xl -ml-[35vh] bg-violet-400 h-[400px] w-[400px] border-black rounded-full"></div>
                  <div className="shadow-2xl -ml-[35vh] bg-teal-300 h-[400px] w-[400px] border-black rounded-full"></div>
                  <div className="shadow-2xl -ml-[35vh] bg-red-500 h-[400px] w-[400px] border-black rounded-full"></div>
                </div>
              </div>
            </section>
            {/* My Portfolio */}
            <section className="relative pb-40" >
              <h2 className="text-7xl font-black mb-4">My Portfolio<span className="text-[#bb66e2]">.</span></h2>
              <p className="text-lg text-gray-200">A small gallery of recent projects chosen by me. I{"'"}ve done them all together with amazing people from companies around the globe. It{"'"}s only a drop in the ocean compared to the entire list. Interested to see some more? Visit my <a href="/contact" className="text-[#bb66e2] underline">work page</a>. A small gallery of recent projects chosen by me. I{"'"}ve done them all together with amazing people from companies around the World.</p>
              <div className="flex justify-between flex-wrap py-6">
                <div className="w-1/5 h-52 p-1">
                  <div className="h-full relative rounded-sm w-full bg-purple-400 overflow-hidden">
                    <div className="h-full w-full flex hover:opacity-100 absolute z-10 opacity-0 transition-all bg-[#0000008f] items-center justify-center">
                      <div className="absolute rounded-full bg-white shadow-lg h-32 w-32 flex items-center justify-center text-black font-semibold underline cursor-pointer">Show more</div>
                    </div>
                    <img className="h-full w-full object-cover relative" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhWkDnqh_2MPF4QdxptBp-y8q6cNg7l-SiFw&s" alt="" />
                  </div>
                </div>
                <div className="w-1/5 h-52 p-1">
                  <div className="h-full relative rounded-sm w-full bg-yellow-400 overflow-hidden">
                    <div className="h-full w-full flex hover:opacity-100 absolute z-10 opacity-0 transition-all bg-[#0000008f] items-center justify-center">
                      <div className="absolute rounded-full bg-white shadow-lg h-32 w-32 flex items-center justify-center text-black font-semibold underline cursor-pointer">Show more</div>
                    </div>
                    <img className="h-full w-full object-cover relative" src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg" alt="" />
                  </div>
                </div>
                <div className="w-1/5 h-52 p-1">
                  <div className="h-full relative rounded-sm w-full bg-blue-400 overflow-hidden">
                    <div className="h-full w-full flex hover:opacity-100 absolute z-10 opacity-0 transition-all bg-[#0000008f] items-center justify-center">
                      <div className="absolute rounded-full bg-white shadow-lg h-32 w-32 flex items-center justify-center text-black font-semibold underline cursor-pointer">Show more</div>
                    </div>
                    <img className="h-full w-full object-cover relative" src="https://dynamic.brandcrowd.com/asset/logo/04a89b15-23c5-4b75-9805-f61c6b0476a9/logo-search-grid-1x?logoTemplateVersion=4&v=638283091709770000" alt="" />
                  </div>
                </div>
                <div className="w-1/5 h-52 p-1">
                  <div className="h-full relative rounded-sm w-full bg-yellow-400 overflow-hidden">
                    <div className="h-full w-full flex hover:opacity-100 absolute z-10 opacity-0 transition-all bg-[#0000008f] items-center justify-center">
                      <div className="absolute rounded-full bg-white shadow-lg h-32 w-32 flex items-center justify-center text-black font-semibold underline cursor-pointer">Show more</div>
                    </div>
                    <img className="h-full w-full object-cover relative" src="https://media.istockphoto.com/id/1313644269/vector/gold-and-silver-circle-star-logo-template.jpg?s=612x612&w=0&k=20&c=hDqCI9qTkNqNcKa6XS7aBim7xKz8cZbnm80Z_xiU2DI=" alt="" />
                  </div>
                </div>
                <div className="w-1/5 h-52 p-1">
                  <div className="h-full relative rounded-sm w-full bg-purple-400 overflow-hidden">
                    <div className="h-full w-full flex hover:opacity-100 absolute z-10 opacity-0 transition-all bg-[#0000008f] items-center justify-center">
                      <div className="absolute rounded-full bg-white shadow-lg h-32 w-32 flex items-center justify-center text-black font-semibold underline cursor-pointer">Show more</div>
                    </div>
                    <img className="h-full w-full object-cover relative" src="https://img.freepik.com/free-vector/gradient-sa-logo-template_23-2150983142.jpg" alt="" />
                  </div>
                </div>
                <div className="w-1/5 h-52 p-1">
                  <div className="h-full relative rounded-sm w-full bg-yellow-400 overflow-hidden">
                    <div className="h-full w-full flex hover:opacity-100 absolute z-10 opacity-0 transition-all bg-[#0000008f] items-center justify-center">
                      <div className="absolute rounded-full bg-white shadow-lg h-32 w-32 flex items-center justify-center text-black font-semibold underline cursor-pointer">Show more</div>
                    </div>
                    <img className="h-full w-full object-cover relative" src="https://img.freepik.com/free-vector/as-monogram-logo-design-template_23-2151234993.jpg" alt="" />
                  </div>
                </div>
                <div className="w-1/5 h-52 p-1">
                  <div className="h-full relative rounded-sm w-full bg-purple-400 overflow-hidden">
                    <div className="h-full w-full flex hover:opacity-100 absolute z-10 opacity-0 transition-all bg-[#0000008f] items-center justify-center">
                      <div className="absolute rounded-full bg-white shadow-lg h-32 w-32 flex items-center justify-center text-black font-semibold underline cursor-pointer">Show more</div>
                    </div>
                    <img className="h-full w-full object-cover relative" src="https://dynamic.brandcrowd.com/asset/logo/937e0eec-eebf-4294-9029-41619d6c3786/logo-search-grid-1x?logoTemplateVersion=1&v=638562034064170000" alt="" />
                  </div>
                </div>
                <div className="w-1/5 h-52 p-1">
                  <div className="h-full relative rounded-sm w-full bg-yellow-400 overflow-hidden">
                    <div className="h-full w-full flex hover:opacity-100 absolute z-10 opacity-0 transition-all bg-[#0000008f] items-center justify-center">
                      <div className="absolute rounded-full bg-white shadow-lg h-32 w-32 flex items-center justify-center text-black font-semibold underline cursor-pointer">Show more</div>
                    </div>
                    <img className="h-full w-full object-cover relative" src="https://t4.ftcdn.net/jpg/07/01/49/79/360_F_701497951_VXEL1pvdddOzaVwX2GH39wNCDsXc0yxE.jpg" alt="" />
                  </div>
                </div>
                <div className="w-1/5 h-52 p-1">
                  <div className="h-full relative rounded-sm w-full bg-purple-400 overflow-hidden">
                    <div className="h-full w-full flex hover:opacity-100 absolute z-10 opacity-0 transition-all bg-[#0000008f] items-center justify-center">
                      <div className="absolute rounded-full bg-white shadow-lg h-32 w-32 flex items-center justify-center text-black font-semibold underline cursor-pointer">Show more</div>
                    </div>
                    <img className="h-full w-full object-cover relative" src="https://play-lh.googleusercontent.com/Fro4e_osoDhhrjgiZ_Y2C5FNXBMWvrb4rGpmkM1PDAcUPXeiAlPCq7NeaT4Q6NRUxRqo" alt="" />
                  </div>
                </div>
                <div className="w-1/5 h-52 p-1">
                  <div className="h-full relative rounded-sm w-full bg-yellow-400 overflow-hidden">
                    <div className="h-full w-full flex hover:opacity-100 absolute z-10 opacity-0 transition-all bg-[#0000008f] items-center justify-center">
                      <div className="absolute rounded-full bg-white shadow-lg h-32 w-32 flex items-center justify-center text-black font-semibold underline cursor-pointer">Show more</div>
                    </div>
                    <img className="h-full w-full object-cover relative" src="https://i.pinimg.com/originals/b3/90/97/b390979708adca53acaf6d14ed08b565.jpg" alt="" />
                  </div>
                </div>
              </div>
            </section>
            {/* Projects section */}
            <section className="pb-20" >
              <div className="text-center">
                <h2 className="text-7xl font-black mb-4">Latest Projects<span className="text-[#bb66e2]">.</span></h2>
                <p className="text-lg text-gray-200 pt-2 px-20">Here is the list of some amazing projects i have completed with many of the brillant people around the world 📎, and all of the coustumers are fully satisifed with my work, design and code. They love to work with me again and again on the different projects✨. Here is it:</p>
              </div>
              <div className="flex flex-wrap mt-8 projects-list">
                <div className="project_item w-1/3 my-10">
                  <div className="pe-4 project-item">
                    <div className="rounded-md h-[2px] bg-yellow-400 w-full"></div>
                    <div className="py-4">
                      <h3 className="text-2xl pb-1 font-semibold">Amazing Social Media Site</h3>
                      <p className="text-lg text-gray-200">Social/App site</p>
                    </div>
                    <div className="project-item-img h-[220px] rounded-xl shadow-2xl overflow-hidden hover:-translate-y-0.5 transition-all">
                      <img
                        className="object-cover h-full w-full"
                        src="https://cdn.dribbble.com/userupload/3715314/file/original-e8c872b39697e59b300a76fa3c287aed.jpg?resize=400x300&amp;vertical=center"
                        alt="project cover" />
                    </div>
                  </div>
                </div>
                <div className="project_item w-1/3 my-10">
                  <div className="px-3 project-item">
                    <div className="rounded-md h-[2px] bg-teal-300 w-full"></div>
                    <div className="py-4">
                      <h3 className="text-2xl pb-1 font-semibold">Amazing Social Media Site</h3>
                      <p className="text-lg text-gray-200">Social/App site</p>
                    </div>
                    <div className="project-item-img h-[220px] rounded-xl shadow-2xl overflow-hidden hover:-translate-y-0.5 transition-all">
                      <img
                        className="object-cover h-full w-full"
                        src="https://cdn.dribbble.com/userupload/3715314/file/original-e8c872b39697e59b300a76fa3c287aed.jpg?resize=400x300&amp;vertical=center"
                        alt="project cover" />
                    </div>
                  </div>
                </div>
                <div className="project_item w-1/3 my-10">
                  <div className="ps-4 project-item">
                    <div className="rounded-md h-[2px] bg-violet-400 w-full"></div>
                    <div className="py-4">
                      <h3 className="text-2xl pb-1 font-semibold">Amazing Social Media Site</h3>
                      <p className="text-lg text-gray-200">Social/App site</p>
                    </div>
                    <div className="project-item-img h-[220px] rounded-xl shadow-2xl overflow-hidden hover:-translate-y-0.5 transition-all">
                      <img
                        className="object-cover h-full w-full"
                        src="https://cdn.dribbble.com/userupload/3715314/file/original-e8c872b39697e59b300a76fa3c287aed.jpg?resize=400x300&amp;vertical=center"
                        alt="project cover" />
                    </div>
                  </div>
                </div>
                <div className="project_item w-1/3 my-10">
                  <div className="pe-4 project-item">
                    <div className="rounded-md h-[2px] bg-yellow-400 w-full"></div>
                    <div className="py-4">
                      <h3 className="text-2xl pb-1 font-semibold">Amazing Social Media Site</h3>
                      <p className="text-lg text-gray-200">Social/App site</p>
                    </div>
                    <div className="project-item-img h-[220px] rounded-xl shadow-2xl overflow-hidden hover:-translate-y-0.5 transition-all">
                      <img
                        className="object-cover h-full w-full"
                        src="https://cdn.dribbble.com/userupload/3715314/file/original-e8c872b39697e59b300a76fa3c287aed.jpg?resize=400x300&amp;vertical=center"
                        alt="project cover" />
                    </div>
                  </div>
                </div>
                <div className="project_item w-1/3 my-10">
                  <div className="px-3 project-item">
                    <div className="rounded-md h-[2px] bg-teal-300 w-full"></div>
                    <div className="py-4">
                      <h3 className="text-2xl pb-1 font-semibold">Amazing Social Media Site</h3>
                      <p className="text-lg text-gray-200">Social/App site</p>
                    </div>
                    <div className="project-item-img h-[220px] rounded-xl shadow-2xl overflow-hidden hover:-translate-y-0.5 transition-all">
                      <img
                        className="object-cover h-full w-full"
                        src="https://cdn.dribbble.com/userupload/3715314/file/original-e8c872b39697e59b300a76fa3c287aed.jpg?resize=400x300&amp;vertical=center"
                        alt="project cover" />
                    </div>
                  </div>
                </div>
                <div className="project_item w-1/3 my-10">
                  <div className="ps-4 project-item">
                    <div className="rounded-md h-[2px] bg-violet-400 w-full"></div>
                    <div className="py-4">
                      <h3 className="text-2xl pb-1 font-semibold">Amazing Social Media Site</h3>
                      <p className="text-lg text-gray-200">Social/App site</p>
                    </div>
                    <div className="project-item-img h-[220px] rounded-xl shadow-2xl overflow-hidden hover:-translate-y-0.5 transition-all">
                      <img
                        className="object-cover h-full w-full"
                        src="https://cdn.dribbble.com/userupload/3715314/file/original-e8c872b39697e59b300a76fa3c287aed.jpg?resize=400x300&amp;vertical=center"
                        alt="project cover" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Contact */}
          <div><Contact /></div>
        </div>
        <Footer />
      </div>}
    </>
  );
}
