import Image from "next/image";
import Bento from "./components/Bento";

export default function Home() {
  return (
    <div className="overflow-hidden">

      <div className="relative">
        <div className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[hsl(159,88%,66%)] from-[28%] via-[hsl(175,54%,56%)] via-[70%] to-[hsl(196,53%,40%)] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]"></div>
        {/* <div className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5"
        style={{
        backgroundImage: `url(background.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top center"
      }}></div> */}
        
        <div className="relative px-6 lg:px-8 mx-auto max-w-2xl lg:max-w-7xl">
          <header className="pt-12 sm:pt-16">
            <div className="relative flex justify-between group/row isolate pt-[calc(theme(spacing.2)+1px)] last:pb-[calc(theme(spacing.2)+1px)]">
              <div className="relative flex gap-6">
                <div className="py-3 group/item relative">
                  <a
                    className="flex place-items-center"
                    href="https://hydrify.app"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/hydrify-logotype.svg"
                      alt="Hydrify Logotype"
                      width={120}
                      height={40}
                      priority
                      className={`lg:w-[120px] ], w-24`}
                    />
                  </a>
                </div>
              </div>
              <nav className="relative hidden lg:flex">

                <div className="relative flex group/item">
                  <a className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply  hover:opacity-80"
                    href="https://x.com/HydrifyApp"
                    rel="noopener noreferrer"
                    target='_blank'
                  >
                    <Image
                      src="/x.svg"
                      alt="Follow Hydrify on X"
                      width={24}
                      height={24}
                      priority
                    />
                  </a>
                </div>
                <div className="relative flex group/item">
                  <a className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply hover:opacity-80"
                    href="https://www.producthunt.com/products/hydrify"
                    rel="noopener noreferrer"
                    target='_blank'>
                    <Image
                      src="/ph.svg"
                      alt="Follow Hydrify on Product Hunt"
                      width={24}
                      height={24}
                      priority
                    />
                  </a>
                </div>
                <div className="relative flex group/item">
                  <a className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply hover:opacity-80"
                    href="https://www.buymeacoffee.com/niklaspeterson/e/146387"
                    rel="noopener noreferrer"
                    target='_blank'>
                    <Image
                      src="/bmc.svg"
                      alt="Sponsor Hydrify on BuyMeCoffee"
                      width={24}
                      height={24}
                      priority
                    />
                  </a>
                </div>
              </nav>
              <button className="flex size-12 items-center justify-center self-center rounded-lg hover:bg-black/5 lg:hidden" aria-label="Open main menu" id="headlessui-disclosure-button-:Rsm6fkq:" type="button" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="size-6">
                  <path fill-rule="evenodd" d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"></path>
                </svg>
              </button>

            </div>
          </header>
          <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
            <h1 className="font-display text-balance text-5xl font-medium text-gray-950 sm:text-7xl md:text-8xl">
            Stay hydrated, stay healthy <br />
            with <span className={`text-white`}>Hydrify.</span>
            </h1>
            <p className="mt-8 max-w-xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
              Hydrify is your go-to assistant for staying hydration, designed to guide you on your journey to optimal health and wellness.
            </p>
            <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
              <a href="https://apps.apple.com/us/app/hydrify/id6450311759" rel='noreferrer' target='_blank' className='hover:opacity-80'>
                <Image
                  src='/App_store-black.svg'
                  alt='Download on App Store'
                  width={145}
                  height={48}
                  priority
                  className='pointer-events-none select-none cursor-pointer'
                />
              </a>
            </div>
          </div>
        </div>
        <div className='flex flex-col pb-6 pt-12 px-6 bg-white rounded-3xl text-center mt-6 lg:w-96 lg:absolute lg:bottom-4 lg:right-4 lg:mt-0'>
          <h4 className='text-2xl text-black mb-2 font-semibold'>Support & Feedback</h4>

          <p className='text-base text-[#85858B]'>If you have any questions or suggestions please do not hesitate to reach out.</p>

          <a
            className='bg-[#52CCC1] text-white text-base rounded-full flex items-center justify-center h-12 mt-6 font-medium hover:opacity-80'
            href="mailto:help@hydrify.app"
            rel="noopener noreferrer"
            target='_blank'
          >
            Contact
          </a>
        </div>
      </div>
      

      <Bento />

      <footer className='w-full max-w-[1440px] lg:px-28 items-center justify-center flex h-20'>
        <span>© {new Date().getFullYear()} Hydrify | Created by <a target='_blank' href='https://x.com/Niklas_Peterson' className='underline hover:opacity-80'>Niklas Peterson</a>.</span>
      </footer>

    </div>
  );
}
