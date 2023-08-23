import Image from 'next/image'

export default function Home() {
  return (
    <div style={{
      paddingLeft: "env(safe-area-inset-left)",
      paddingRight: "env(safe-area-inset-right)"
    }}>
      <main className="flex min-h-screen flex-col items-center px-4 lg:px-0 relative" style={{
        // backgroundImage: `url(background.png)`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // backgroundPosition: "top center"
      }}>

        <input type="checkbox" id="overlay-input" className="lg:hidden" />
        <label for="overlay-input" id="overlay-button" className="flex lg:hidden"><span></span></label>
        <div id="overlay">
          <ul>
            <li>
              <a
                className="flex place-items-center py-2"
                href="https://x.com/AppHydrify"
                rel="noopener noreferrer"
                target='_blank'
              >
                <Image
                  src="/x.svg"
                  alt="Follow Hydrify on X"
                  width={24}
                  height={24}
                  priority
                  className="mr-2"
                />
                Follow
              </a>
            </li>
            {/* <li>
        <a
            className="flex place-items-center py-2"
            href="https://www.producthunt.com/products/hydrify"
            rel="noopener noreferrer"
            target='_blank'
          >
            <Image
              src="/ph.svg"
              alt="Follow on Product Hunt"
              width={24}
              height={24}
              priority
              className={`mr-2`}
            />
            Follow on Product Hunt
          </a>
        </li> */}
            <li>
              <a
                className="flex place-items-center py-2"
                href="https://www.buymeacoffee.com/niklaspeterson/e/146387"
                rel="noopener noreferrer"
                target='_blank'
              >
                <Image
                  src="/bmc.svg"
                  alt="Support Hydrify on Buy Me Coffee"
                  width={24}
                  height={24}
                  priority
                  className={`mr-2`}
                />
                Support Hydrify
              </a>
            </li>
          </ul>
        </div>


        <nav className="z-10 w-full max-w-[1440px] lg:px-28 items-center justify-between flex h-20 gap-4">
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

          <div className='hidden lg:flex lg:flex-row lg:gap-8'>
            <a
              className="flex place-items-center py-2 hover:opacity-80"
              href="https://x.com/AppHydrify"
              rel="noopener noreferrer"
              target='_blank'
            >
              <Image
                src="/x.svg"
                alt="Follow Hydrify on x"
                width={24}
                height={24}
                priority
                className={`mr-2`}
              />
              Follow
            </a>

            <a
              className="flex place-items-center py-2 hover:opacity-80"
              href="https://www.producthunt.com/products/hydrify"
              rel="noopener noreferrer"
              target='_blank'
            >
              <Image
                src="/ph.svg"
                alt="Upvote Hydrify on Product Hunt"
                width={24}
                height={24}
                priority
                className={`mr-2`}
              />
              Upvote
            </a>

            <a
              className="flex place-items-center py-2 hover:opacity-80"
              href="https://www.buymeacoffee.com/niklaspeterson/e/146387"
              rel="noopener noreferrer"
              target='_blank'
            >
              <Image
                src="/bmc.svg"
                alt="Sponsor Hydrify on BuyMeCoffee"
                width={24}
                height={24}
                priority
                className={`mr-2`}
              />
              Sponsor Hydrify
            </a>
          </div>
        </nav>

        <div className="flex flex-1 flex-col items-center justify-center text-black">
          <h1 className={`mb-3 text-center font-medium text-4xl lg:text-6xl lg:leading-tight`}>
            Stay hydrated, stay healthy <br />
            with <span className={`text-white`}>Hydrify.</span>
          </h1>
          <p className={`mt-4 text-center font-normal text-xl max-w-[480px] lg:max-w-[800px] lg:text-2xl`}>
            Hydrify is the ultimate hydration companion app designed to guide you on your journey to optimal health and wellness.
          </p>

          <div className='mt-8 flex flex-row gap-4'>

            <a
              href='https://www.producthunt.com/products/hydrify'
              target='_blank'
              className={`bg-white border border-white text-[#52CCC1] font-medium text-base h-12 px-8 flex items-center justify-center rounded-full hover:opacity-80`}>
              Get notified!
            </a>

            {/* <a href="https://apple.com" rel='noreferrer' target='_blank' className='hover:opacity-80'>
              <Image
                src='/App_store-black.svg'
                alt='Follow Hydrify on X'
                width={145}
                height={48}
                priority
                className='pointer-events-none select-none cursor-pointer'
              />
            </a> */}

          </div>
        </div>

        <div className='flex flex-col pb-6 pt-12 px-6 bg-white rounded-3xl text-center lg:w-80 lg:absolute lg:bottom-4 lg:right-4'>
          <h4 className='text-2xl text-black mb-2 font-semibold'>Support & Feedback</h4>

          <p className='text-base text-[#85858B]'>If you have any questions or suggestions reach out to Hydrify on Twitter/X.</p>

          <a
            className='bg-[#52CCC1] text-white text-base rounded-full flex items-center justify-center h-12 mt-6 font-medium hover:opacity-80'
            href="https://x.com/AppHydrify"
            rel="noopener noreferrer"
            target='_blank'
          >
            Contact
          </a>
        </div>

        <footer className='w-full max-w-[1440px] lg:px-28 items-center justify-center flex h-20'>
          <span>© 2023 Hydrify | Created by <a target='_blank' href='https://x.com/Niklas_Peterson' className='underline hover:opacity-80'>Niklas Peterson</a>.</span>
          {/* <a href="https://www.producthunt.com/posts/hydrify?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-hydrify" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=406695&theme=light" alt="Hydrify - Track&#0044;&#0032;get&#0032;reminded&#0044;&#0032;and&#0032;conquer&#0032;your&#0032;daily&#0032;water&#0032;intakes&#0033; | Product Hunt" style={{width: 250, height: 54}} width="250" height="54" /></a> */}
        </footer>
      </main>
    </div>
  )
}