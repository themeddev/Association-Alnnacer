import { Helmet } from "react-helmet";
import FirstSection from "../../components/firstSection";
import Quote from "../../components/Quote";
import SEO from "../../data/SEO";
import ShowActivities from "./showActivities";

export default function () {
    return (
        <>
            <Helmet>
                <title>{SEO[3].title}</title>
                <meta name="description" content={SEO[3].description} />
                <meta name="keywords" content={SEO[3].keywords.join(", ")} />
            </Helmet>
            <FirstSection />
            <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
                <Quote />
                <ShowActivities />

            </div>

        </>
    )
}