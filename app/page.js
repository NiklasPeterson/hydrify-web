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
            href="https://twitter.com/AppHydrify"
            rel="noopener noreferrer"
            target='_blank'
          >
            <Image
              src="/twitter.svg"
              alt="Follow Hydrify on twitter"
              width={24}
              height={24}
              priority
              className="mr-2"
            />
            Twitter
            </a>
            </li>
      <li>
        <a
            className="flex place-items-center py-2"
            href="https://www.buymeacoffee.com/niklaspeterson/e/146387"
            rel="noopener noreferrer"
            target='_blank'
          >
            <Image
              src="/bmc.svg"
              alt="Support Hydrify on BuyMeCoffee"
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
            href="https://twitter.com/AppHydrify"
            rel="noopener noreferrer"
            target='_blank'
          >
            <Image
              src="/x.svg"
              alt="Follow Hydrify on twitter"
              width={24}
              height={24}
              priority
              className={`mr-2`}
            />
            Follow
            </a>

            <a
            className="flex place-items-center py-2 hover:opacity-80"
            href="https://www.buymeacoffee.com/niklaspeterson/e/146387"
            rel="noopener noreferrer"
            target='_blank'
          >
            <Image
              src="/bmc.svg"
              alt="Support Hydrify on BuyMeCoffee"
              width={24}
              height={24}
              priority
              className={`mr-2`}
            />
            Support
            </a>
        </div>
      </nav>

      <div className="flex flex-1 flex-col items-center justify-center text-black">
          <h1 className={`mb-3 text-center font-medium text-4xl lg:text-6xl lg:leading-tight`}>
          Stay hydrated, stay healthy <br/>
          with <span className={`text-white`}>Hydrify.</span>
          </h1>
          <p className={`mt-4 text-center font-normal text-xl max-w-[480px] lg:max-w-[800px] lg:text-2xl`}>
          Hydrify is the ultimate hydration companion app designed to guide you on your journey to optimal health and wellness.
          </p>
          <a
          a 
          href='https://testflight.apple.com/join/1IA5b7dK'
          target='_blank'
          className={`bg-white border border-white text-[#52CCC1] hover:opacity-80 font-semibold py-4 px-8 rounded-full mt-8`}>
            {/* className={`bg-white border border-white text-[#52CCC1] hover:bg-[#52CCC1] hover:text-white hover:opacity-80 font-semibold py-4 px-8 rounded-full mt-8`}> */}
            Get the TestFlight
          </a>
      </div>
    </main>
    </div>
  )
}