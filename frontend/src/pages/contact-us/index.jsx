import FirstSection from "../../components/firstSection";
import Quote from "../../components/Quote";
import Contact from "./contact";
import Inquiries from "./inquiries";
import SEO from '../../data/SEO'
import { Helmet } from "react-helmet";



export default function () {
    return (
        <>
            <Helmet>
                <title>{SEO[2].title}</title>
                <meta name="description" content={SEO[2].description} />
                <meta name="keywords" content={SEO[2].keywords.join(", ")} />
            </Helmet>

            <FirstSection />
            <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
                <Quote />
                <Inquiries />
                <Contact />
            </div>
        </>
    )
}