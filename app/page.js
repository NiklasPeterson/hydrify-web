import Image from 'next/image'

export default function Home() {
  return (
    <div style={{
      paddingLeft: "env(safe-area-inset-left)",
      paddingRight: "env(safe-area-inset-right)"
    }}>
      <main className="flex min-h-screen flex-col items-center px-4 lg:px-0 relative">


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

          <div className='flex flex-row gap-6'>
            <a
              className="flex place-items-center py-2 hover:opacity-80"
              href="https://x.com/niklas_peterson"
              rel="noopener noreferrer"
              target='_blank'
            >
              <Image
                src="/x.svg"
                alt="Follow Hydrify creator on X"
                width={24}
                height={24}
                priority
              />
            </a>

            <a
              className="flex place-items-center py-2 hover:opacity-80"
              href="https://www.producthunt.com/products/hydrify"
              rel="noopener noreferrer"
              target='_blank'
            >
              <Image
                src="/ph.svg"
                alt="Follow Hydrify on Product Hunt"
                width={24}
                height={24}
                priority
              />
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
              />
              <span className={`ml-2 hidden lg:flex`}>Sponsor Hydrify</span>
            </a>

          </div>
        </nav>

        <div className="flex flex-1 flex-col items-center justify-center text-black py-24 gap-10">
          <h1 className={`text-center font-medium text-4xl lg:text-6xl lg:leading-tight`}>
            Stay hydrated, stay healthy <br />
            with <span className={`text-white`}>Hydrify.</span>
          </h1>
          <p className={`text-center font-normal text-xl max-w-[640px] lg:max-w-[800px] lg:text-2xl`}>
            Hydrify is your go-to assistant for staying hydration, designed to guide you on your journey to optimal health and wellness.
          </p>

          <div className='flex flex-row gap-4'>

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

        <footer className='w-full max-w-[1440px] lg:px-28 items-center justify-center flex h-20'>
          <span>© {new Date().getFullYear()} Hydrify | Created by <a target='_blank' href='https://x.com/Niklas_Peterson' className='underline hover:opacity-80'>Niklas Peterson</a>.</span>
        </footer>
      </main>
    </div>
  )
}
