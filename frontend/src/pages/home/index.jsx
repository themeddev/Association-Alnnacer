
import HeroSection from "./HeroSection";
import OurMisstion from "./OurMission";
import RecentActivities from "./RecentActivities";
import Donation from "./Donation";
import FAQ from "./FAQ ";
import { Helmet } from "react-helmet";
import SEO from "../../data/SEO";


export default function () {
    return (
        <>
            <Helmet>
                <title>{SEO[0].title}</title>
                <meta name="description" content={SEO[0].description} />
                <meta name="keywords" content={SEO[0].keywords.join(", ")} />
            </Helmet>
            
            <HeroSection />
            <OurMisstion />
            <RecentActivities />
            <Donation/>
            <FAQ />
        </>
    )
}