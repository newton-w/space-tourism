
import Explore from '@/components/explore'


export default function Home() {
  return (
    <div className='bg-earth bg-cover bg-bluish bg-center h-screen w-full md:bg-md_earth lg:bg-lg_earth  lg:overflow-y-hidden'>

      <div className='pt-28 md:pt-[12.625rem] lg:grid lg:grid-cols-2 lg:items-end '>
        <div className='flex items-center justify-center w-full '>
          <div className='flex flex-col text-white text-center item-center justify-center px-6 gap-4 md:gap-6 md:w-[28.125rem]'>
            <h2 className=' text-base text-cream font-b_condenced md:text-xl xl:text-[1.75rem]'>SO YOU WANT TO TRAVEL</h2>
            <h1 className=' text-[5rem] font-bellefair md:text-[9.375rem]'>SPACE</h1>
            <p className=' text-[0.938rem] text-cream font-barlow xl:text-lg'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
        </div>
        <div className='w-full py-12 flex items-center justify-center lg:py-0'>
          <Explore />
        </div>
      </div>
    </div>
  )
}
