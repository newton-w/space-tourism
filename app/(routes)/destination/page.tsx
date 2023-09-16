import Image from "next/image";

import moon from "@/public/images/moon.png"
import MiniNav from "@/components/mini-nav";
import DestinationPage from "@/components/props/destination";


const Destination = () => {
    return (
        // <div className="bg-destination bg-cover h-screen bg-bluish bg-center w-full">
        //     <div className=" text-white pt-[6.375rem] flex flex-col items-center justify-center">
        //         <h2 className="flex items-center justify-center gap-2"><span className="font-bold text-white/50">01</span> PICK YOUR DESTINATION</h2>
        //         <Image src={moon} width={455} height={455} alt="moon" className=" w-[10.625rem] h-[10.625rem] mt-8" />
        //         <MiniNav />
        //         <h1 className="font-bellefair text-[3.5rem] pb-3">MOON</h1>
        //         <p className=" text-[0.938rem] text-center text-cream px-6">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
        //         <hr className="px-6 w-[20.438rem] bg-line my-8" />
        //         <div className="flex flex-col items-center gap-3 pb-8">
        //             <p className=" text-cream text-sm font-b_condenced">AVERAGE DISTANCE</p>
        //             <p className=" font-bellefair text-[1.75rem]">384,400KM</p>
        //         </div>
        //         <div className="flex flex-col items-center gap-3 pb-8">
        //             <p className=" text-cream text-sm font-b_condenced">EST. TRAVEL TIME</p>
        //             <p className=" font-bellefair text-[1.75rem]">3 DAYS</p>
        //         </div>
        //     </div>
        // </div>
        <DestinationPage number="01" image={`/images/moon.png`} place="MOON" description="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites." distance="384,000 km" timetravel="3 DAYS" />
    );
}

export default Destination;