import FirstSection from "../../components/firstSection";
import Quote from "../../components/Quote";
import Abouts from "./abouts";
import Map from "./map";
import Team from "./ourTeam";

export default function () {


    return (
        <>
            <FirstSection />
            <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
                <Quote />
                <Abouts />
                <Team />
                <Map />
            </div>
        </>
    )
}