"use client"

import { useState, useEffect } from "react";

import CrewPage from "@/components/ui-props/crew";
import CrewData from "./data.json"
import useStore from "@/zustand/index-store";

const Crew = () => {

    const data = CrewData
    const crew = useStore((state) => state.crew)

    const [member, setMember] = useState(data[crew])



    useEffect(() => {
        setMember(data[crew])
        
    }, [crew, data])

    
    return (

        <CrewPage name={member.name} title={member.title} image={member.image} description={member.description} />
    );
}

export default Crew;