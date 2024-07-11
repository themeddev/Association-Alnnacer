import { Helmet } from "react-helmet";
import SEO from "../../data/SEO";
import ActivityDetails from "./activityDetails";
import SuggestedActivities from "./suggestedActivities";

  
  export default function () {


    return (
        <>
            <Helmet>
                <title>{SEO[3].title}</title>
                <meta name="description" content={SEO[3].description} />
                <meta name="keywords" content={SEO[3].keywords.join(", ")} />
            </Helmet>
            <div className="w-[95%] md:w-[90%] lg:w-[85%] mx-auto flex flex-col-reverse md:flex-row justify-around gap-4 my-10">
                
                <SuggestedActivities />
                <ActivityDetails />
            
            </div>

        </>
    )
}