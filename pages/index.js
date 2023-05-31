import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="font-nunito">
        {/* section  */}
        <div class="h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
          {/* navbar  */}
          <nav class="w-full fixed top-0 bg-white z-10 dark:bg-slate-900">
            <div class="container mx-auto py-5 flex items-center justify-between">
              <div class="flex items-center gap-1">
                <img class="w-10" src="" alt="" />
                <span class="text-2xl font-bold text-indigo-900 dark:text-white">
                  Duk
                </span>
                <span class="text-2xl font-bold text-indigo-900">e.</span>
              </div>
              <ul class="hidden md:flex space-x-10 text-gray-600 dark:text-gray-100 font-bold text-sm uppercase">
                <li class="transition-all duration-500 delay-300 hover:text-gray-500">
                  <a href="#">Нүүр</a>
                </li>
                <li class="hover:text-gray-500">
                  <a href="#about">Танилцуулга</a>
                </li>
                <li class="hover:text-gray-500">
                  <a href="#services">Үйлчилгээ</a>
                </li>
                <li class="hover:text-gray-500">
                  <a href="#works">Төсөл</a>
                </li>
                <li class="hover:text-gray-500">
                  <a href="#contact">Холбогдох</a>
                </li>
              </ul>

              <div
                id="hamburger"
                class="space-y-1 md:hidden cursor-pointer z-20"
              >
                <div class="w-6 h-0.5 bg-white"></div>
                <div class="w-6 h-0.5 bg-white"></div>
                <div class="w-6 h-0.5 bg-white"></div>
              </div>
              <ul
                id="menu"
                class="hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center"
              >
                <li>
                  <a id="hLink" href="#">
                    Нүүр
                  </a>
                </li>
                <li>
                  <a id="hLink" href="#about">
                    Танилцуулга
                  </a>
                </li>
                <li>
                  <a id="hLink" href="#services">
                    Үйлчилгээ
                  </a>
                </li>
                <li>
                  <a id="hLink" href="#works">
                    Төсөл
                  </a>
                </li>
                <li>
                  <a id="hLink" href="#contact">
                    Холбогдох
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          {/* intro content  */}
          {/* image  */}
          <img
            class="absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover"
            src="./img/man.png"
            alt=""
          />
          {/* circle  */}
          <div class="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-indigo-900 rounded-full -z-10"></div>

          <div class="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl lg:left-5 xl:left-48 xl:text-7xl font-bold">
            <div class="relative w-40 h-32">
              <div className="grid-element">
                <span className="font-serif font-medium text-gray-600">
                  Developing
                </span>
                {/* <Image
                  src="/Hello.jpg"
                  fill
                  sizes="(max-width: 768px) 500px,
              (max-width: 1200px) 400px,
              33vw"
                /> */}
              </div>
            </div>
            <p id="text" class="text-red-500"></p>
          </div>
          {/* text  */}
          <div class="hidden lg:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 m-auto right-10 bg-white dark:bg-slate-900 dark:shadow-slate-800 p-6 h-fit w-1/3">
            <h1 class="text-4xl font-bold text-indigo-900">
              Сайн уу, Би Duke байна.
            </h1>
            <p class="text-gray-400">
              Би fullstack хөгжүүлэгч болохоор сурч байгаа оюутан. 
            </p>
            <a
              class="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit"
              href="#contact"
            >
              Hire me
            </a>
          </div>
        </div>
        {/* about  */}
        <div id="about" class="px-10 dark:bg-slate-900">
          <div class="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20">
            {/* left  */}
            <div class="relative">
              <img
                class="h-1/4 absolute top-0 left-0 -z-10"
                src="./img/dots.png"
                alt=""
              />
              <div class="h-full rounded-full overflow-hidden">
                <img src="./img/portrait.png" alt="" />
              </div>
            </div>
            {/*  right  */}
            <div class="my-auto flex flex-col gap-3">
              <h1 class="text-indigo-600 font-bold">Танилцуулга</h1>
              <h1 class="text-3xl font-medium dark:text-white">
                Сайн Боловсрол
              </h1>
              <h1 class="text-3xl font-medium dark:text-white">
                Сайхан Ирээдүй
              </h1>
              <p class="text-gray-400">
                Би өөрийгөө олон талт байдлаар хөгжүүлэх сонирхолтой нэгэн.
                Мэдээж илүү баттайгаар алхам алхмаар
              </p>
              <h2 class="text-gray-400 font-medium">HTML,CSS</h2>
              <div class="w-full bg-gray-200 h-1.5 rounded-md">
                <div class="w-full bg-indigo-600 h-1.5 rounded-md"></div>
              </div>
              <h2 class="text-gray-400 font-medium">UI,UX</h2>
              <div class="w-full bg-gray-200 h-1.5 rounded-md">
                <div class="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
              </div>
              <h2 class="text-gray-400 font-medium">Javascript</h2>
              <div class="w-full bg-gray-200 h-1.5 rounded-md">
                <div class="w-4/6 bg-indigo-600 h-1.5 rounded-md"></div>
              </div>
              <h2 class="text-gray-400 font-medium">TailwindCss</h2>
              <div class="w-full bg-gray-200 h-1.5 rounded-md">
                <div class="w-2/4 bg-indigo-600 h-1.5 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
        {/* services  */}
        <div id="services" class="dark:bg-slate-900">
          <div class="container mx-auto">
            {/* top  */}
            <div class="flex flex-col gap-3 items-center">
              <h1 class="text-indigo-600 font-bold">Үйлчилгээ</h1>
              <h1 class="text-3xl dark:text-white">
                Би таньд юу санал болгож чадах?
              </h1>
              <p class="w-1/2 text-center text-gray-400">
                Сурсан мэдснээ шавхаж өөрийгөө дайчлан таньд хэрэгцээтэй
                үйлчилгээг үзүүлнэ.
              </p>
            </div>
            {/* bottom  */}
            <div class="p-5 sm:p-0 flex flex-wrap justify-between">
              {/* card  */}
              <div class="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
                <img class="w-10" src="./img/icon.png" alt="" />
                <h1 class="font-medium text-lg dark:text-white">
                  UX / UI Design
                </h1>
                <p class="text-gray-400">
                  Nothing to write found Lorem ipsum dolor sit amet consectetur.
                </p>
                <a class="text-indigo-600 font-semibold text-sm" href="">
                  Read More
                </a>
              </div>
              {/* card  */}
              <div class="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
                <img class="w-10" src="./img/icon.png" alt="" />
                <h1 class="font-medium text-lg dark:text-white">REACT</h1>
                <p class="text-gray-400">
                  Nothing to write found Lorem ipsum dolor sit amet consectetur.
                </p>
                <a class="text-indigo-600 font-semibold text-sm" href="">
                  Read More
                </a>
              </div>
              {/* card  */}
              <div class="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
                <img class="w-10" src="./img/icon.png" alt="" />
                <h1 class="font-medium text-lg dark:text-white">C++</h1>
                <p class="text-gray-400">
                  Nothing to write found Lorem ipsum dolor sit amet consectetur.
                </p>
                <a class="text-indigo-600 font-semibold text-sm" href="">
                  Read More
                </a>
              </div>
              {/* card  */}
              <div class="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
                <img class="w-10" src="./img/icon.png" alt="" />
                <h1 class="font-medium text-lg dark:text-white">
                  TAILWIND CSS framework
                </h1>
                <p class="text-gray-400">
                  Nothing to write found Lorem ipsum dolor sit amet consectetur.
                </p>
                <a class="text-indigo-600 font-semibold text-sm" href="">
                  Read More
                </a>
              </div>
              {/* card  */}
              <div class="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
                <img class="w-10" src="./img/icon.png" alt="" />
                <h1 class="font-medium text-lg dark:text-white">JAVASCRIPT</h1>
                <p class="text-gray-400">
                  Nothing to write found Lorem ipsum dolor sit amet consectetur.
                </p>
                <a class="text-indigo-600 font-semibold text-sm" href="">
                  Read More
                </a>
              </div>
              {/* card  */}
              <div class="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
                <img class="w-10" src="./img/icon.png" alt="" />
                <h1 class="font-medium text-lg dark:text-white">HTML, CSS</h1>
                <p class="text-gray-400">
                  Nothing to write found Lorem ipsum dolor sit amet consectetur.
                </p>
                <a class="text-indigo-600 font-semibold text-sm" href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* works  */}
        <div id="works" class="py-40 dark:bg-slate-900">
          <div class="container mx-auto">
            {/* top  */}
            <div class="flex flex-col gap-3 items-center">
              <h1 class="text-indigo-600 font-bold">PORTFOLIO</h1>
              <h1 class="text-3xl dark:text-white">Төсөл</h1>
              <p class="w-1/2 text-center text-gray-400">
                Html/Css, Javascript, UI/UX , C++ хичээлийн үеэр хийсэн
                бүтээлүүд
              </p>
            </div>
            {/* bottom  */}
            <div class="p-5 sm:p-0 flex flex-wrap justify-between">
              {/* card  */}
              <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
                <Image
                  layout="fixed"
                  src="/Hello.jpg"
                  width={500}
                  height={500}
                />
              </div>
              {/* card  */}
              <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
                <Image
                  layout="fixed"
                  src="/Hello.jpg"
                  width={500}
                  height={500}
                />
              </div>
              {/* card  */}
              <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
                <Image
                  layout="fixed"
                  src="/Hello.jpg"
                  width={500}
                  height={500}
                />
              </div>
              {/* card  */}
              <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
                <Image
                  layout="fixed"
                  src="/Hello.jpg"
                  width={500}
                  height={500}
                />
              </div>
              {/* card  */}
              <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
                <Image
                  layout="fixed"
                  src="/Hello.jpg"
                  width={500}
                  height={500}
                />
              </div>
              {/* card  */}
              <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
                <Image
                  layout="fixed"
                  src="/Hello.jpg"
                  width={500}
                  height={500}
                />
              </div>
              {/* card  */}
              <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
                <Image
                  layout="fixed"
                  src="/Hello.jpg"
                  width={500}
                  height={500}
                />
              </div>
              {/* card  */}
              <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
                <Image
                  layout="fixed"
                  src="/Hello.jpg"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>

        {/* contact  */}
        <div id="contact" class="dark:bg-slate-900">
          <div class="container mx-auto">
            {/* top  */}
            <div class="flex flex-col gap-3 items-center">
              <h1 class="text-indigo-600 font-bold">Холбогдох</h1>
              <h1 class="text-3xl dark:text-white">
                Таньд мэдэхийг хүссэн асуулт байна уу?
              </h1>
              <p class="w-1/2 text-center text-gray-400">
                Би таны санааг хэлэлцэж шийдэлд хүргэнэ.
              </p>
            </div>
            {/* bottom  */}
            <form class="mt-5 p-8 flex flex-col gap-5 items-center">
              <input
                class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
                type="text"
                placeholder="Name "
              />
              <input
                class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
                type="email"
                placeholder="Email"
              />
              <textarea
                class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
                cols="30"
                rows="10"
                placeholder="Message..."
              ></textarea>
              <button class="w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 rounded-md cursor-pointer">
                Илгээх
              </button>
            </form>
          </div>
        </div>
        {/* footer  */}
        <div class="w-full bg-gray-800">
          <div class="container mx-auto py-5 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <img class="w-8" src="./img/logo.png" alt="" />
              <span class="text-2xl font-bold text-white">Duke.</span>
            </div>
            <span class="hidden md:block font-medium text-white">
              © 2023 Duke.
            </span>
            <div class="flex gap-2">
              <img class="w-4 cursor-pointer" src="./img/facebook.png" alt="" />
              <img
                class="w-4 cursor-pointer"
                src="./img/instagram.png"
                alt=""
              />
              <img class="w-4 cursor-pointer" src="./img/twitter.png" alt="" />
              <img class="w-4 cursor-pointer" src="./img/linkedin.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
