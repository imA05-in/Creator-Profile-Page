import { NavLink } from "react-router";
import {
  AudienceInsights,
  Contact,
  CreatorIntro,
  PerformanceMetics,
  PreviousBrandCollabs,
  SocialMediaOverview,
} from "../index";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import CollabCTA from "../CollabCTA";

export default function CreatorCard({ label }) {
     

    const {slug} = useParams()
    const data = useSelector((state)=>state?.profiles.filter((profile)=>profile.profileId == slug))
    const profile = data[0]
    return (
    <div className=" backdrop-blur bg-neutral-800/50 justify-start md:px-10 md:p-6 md:gap-6 flex flex-col  rounded-lg p-2 w-full h-full max-w-6xl text-neutral-50 gap-4 md:flex-row flex-wrap ">
      <div className="w-full h-full px-2">
        <CreatorIntro data={profile}/>
      </div>
      <div className=" justify-start lg:justify-around md:flex-start flex flex-col md:flex-row flex-wrap w-full h-full gap-5 border-neutral-500 bg-neutral-600/50 backdrop-blur-2xl border py-2 rounded-xl">
      <div>
        <AudienceInsights data={profile.audienceInsights}/>
      </div>
      <div className="hidden md:flex lg:hidden">
<SocialMediaOverview data={profile.socialMediaOverview}/>
      </div>
      <div>
        <Contact data={profile.contact} />
      </div>
      <div>
        <PreviousBrandCollabs data={profile.previousBrandCollaborations}/>
      </div>
      <div>
        <CollabCTA data={profile.collaborationCTA}/>
      </div>
      <div className="md:hidden lg:flex">
        <SocialMediaOverview data={profile.socialMediaOverview}/>
      </div>
      
      <div>
        <PerformanceMetics data={profile.performanceMetrics}/>
      </div>
      
      </div>
    </div>
  );
}
