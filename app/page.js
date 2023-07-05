import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 lg:px-0" style={{
      backgroundImage: `url(background-min.png)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
    backgroundPosition: "top center"
    }}>
      <nav className="z-10 w-full max-w-[1440px] lg:px-16 items-center justify-between flex h-20">
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
            />
          </a>

        <div className='flex flex-row gap-8'>
        <a
            className="flex place-items-center py-2"
            href="https://hydrify.substack.com/p/coming-soon"
            rel="noopener noreferrer"
            target='_blank'
          >
            Join the Waitlist
            </a>

            <a
            className="flex place-items-center py-2"
            href="https://twitter.com/AppHydrify"
            rel="noopener noreferrer"
            target='_blank'
          >
            Twitter
            </a>
        </div>
      </nav>

      <div className="flex flex-1 flex-col items-center justify-center text-black">
          <h1 className={`mb-3 text-center font-medium text-4xl lg:text-7xl lg:leading-tight`}>
          Stay hydrated, stay healthy <br/>
          with <span className={`text-white`}>Hydrify.</span>
          </h1>
          <p className={`mt-4 text-center font-normal text-xl max-w-[480px] lg:max-w-[800px] lg:text-2xl`}>
          Hydrify is the ultimate hydration companion app designed to guide you on your journey to optimal health and wellness. Coming soon...
          </p>
          <a
          href="https://hydrify.substack.com/p/coming-soon"
          rel="noopener noreferrer"
          target='_blank'
          className={`bg-white border border-white text-[#52CCC1] hover:bg-[#52CCC1] hover:text-white font-semibold py-4 px-8 rounded-full mt-8`}>
            Join the waitlist
          </a>
      </div>
    </main>
  )
}