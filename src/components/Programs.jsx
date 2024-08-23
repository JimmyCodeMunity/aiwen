import React from "react";
import { women1, women2, women5 } from "../images";

const Programs = () => {
  return (
    <div class="relative overflow-hidden w-full bg-white text-black pt-16 pb-32 md:space-y-24">
      <h1 className="text-center md:text-[40px] text-[23px] font-bold">Programs</h1>
      <div class="relative">
        <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
          <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
            <div>
              <div>
                <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </span>
              </div>

              <div class="mt-6">
                <h2 class="text-3xl font-bold tracking-tight text-black">
                  AI Literacy WorkShops:
                </h2>
                <p class="mt-4 text-lg text-gray-500">
                  Providing hands-on Artificial Intelligence education for
                  women.
                </p>
                <div class="mt-6">
                  <a
                    class="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-black shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                    href="/login"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0">
            <div class="md:-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                loading="lazy"
                width="647"
                height="486"
                class="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 md:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={women5}
              />
            </div>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
          <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                    />
                  </svg>
                </span>
              </div>
              <div class="mt-6">
                <h2 class="text-3xl font-bold tracking-tight text-black">
                  Ethical AI Advocacy:
                </h2>
                <p class="mt-4 text-lg text-gray-500">
                  Advocating for policies that protect women's rights and
                  privacy.
                </p>
                <div class="mt-6">
                  <a
                    class="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-black shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                    href="/login"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0">
            <div class="md:-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                alt="Inbox user interface"
                loading="lazy"
                width="647"
                height="486"
                class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://images.unsplash.com/photo-1599134842279-fe807d23316e"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
          <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
            <div>
              <div>
                <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                class="h-8 w-8 text-black">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                                </path>
                            </svg> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
                    />
                  </svg>
                </span>
              </div>
              <div class="mt-6">
                <h2 class="text-3xl font-bold tracking-tight text-black">
                Community Building:
                </h2>
                <p class="mt-4 text-lg text-gray-500">
                Connecting women through forums and networking events.
                </p>
                <div class="mt-6">
                  <a
                    class="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-black shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                    href="/login"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0">
            <div class="md:-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                loading="lazy"
                width="646"
                height="485"
                class="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                // style="color:transparent"
                // src="https://img.freepik.com/free-photo/handheld-shot-african-american-streamer-talking-headset-while-online-playing-first-person-shooter-gaming-pc-setup-gamer-girl-streaming-while-sitting-gaming-chair-explaining-gameplay_482257-46568.jpg?semt=ais_hybrid"
                    src={women2}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div class="relative">
        <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
          <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>
                </span>
              </div>
              <div class="mt-6">
                <h2 class="text-3xl font-bold tracking-tight text-black">
                  Community Building:
                </h2>
                <p class="mt-4 text-lg text-gray-500">
                  Connecting women through forums and networking events.
                </p>
                <div class="mt-6">
                  <a
                    class="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-black shadow-sm ring-1 ring-yellow-600 hover:bg-pink-700 hover:ring-pink-700"
                    href="/login"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0">
            <div class="md:-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                alt="Inbox user interface"
                loading="lazy"
                width="647"
                height="486"
                class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={women2}
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Programs;
