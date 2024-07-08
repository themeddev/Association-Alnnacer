import FirstSection from "../../components/firstSection";
import Quote from "../../components/Quote";
import Abouts from "./abouts";
import Map from "./map";
import Team from "./ourTeam";
import { Helmet } from "react-helmet";
import SEO from '../../data/SEO'


export default function () {


    return (
        <>
            <Helmet>
                <title>{SEO[1].title}</title>
                <meta name="description" content={SEO[1].description} />
                <meta name="keywords" content={SEO[1].keywords.join(", ")} />
            </Helmet>
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