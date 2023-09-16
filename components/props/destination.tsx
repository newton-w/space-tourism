import Image from "next/image"
import MiniNav from "../mini-nav"

interface DestinationProps {
    number : string
    image : string
    place : string
    description : string
    distance : string
    timetravel: string

}

const DestinationPage : React.FC<DestinationProps> = ({
    number,
    image,
    place,
    description,
    distance,
    timetravel
}) => {
    return ( 
        <div className="bg-destination bg-cover h-screen bg-bluish bg-center w-full">
        <div className=" text-white pt-[6.375rem] flex flex-col items-center justify-center">
            <h2 className="flex items-center justify-center gap-2"><span className="font-bold text-white/50">{number}</span> PICK YOUR DESTINATION</h2>
            <Image src={image} width={455} height={455} alt="moon" className=" w-[10.625rem] h-[10.625rem] mt-8" />
            <MiniNav />
            <h1 className="font-bellefair text-[3.5rem] pb-3 uppercase">{place}</h1>
            <p className=" text-[0.938rem] text-center text-cream px-6">{description}</p>
            <hr className="px-6 w-[20.438rem] bg-line my-8" />
            <div className="flex flex-col items-center gap-3 pb-8">
                <p className=" text-cream text-sm font-b_condenced">AVERAGE DISTANCE</p>
                <p className=" font-bellefair text-[1.75rem]">{distance}</p>
            </div>
            <div className="flex flex-col items-center gap-3 pb-8">
                <p className=" text-cream text-sm font-b_condenced">EST. TRAVEL TIME</p>
                <p className=" font-bellefair text-[1.75rem] uppercase">{timetravel} </p>
            </div>
        </div>
    </div>
     );
}
 
export default DestinationPage;