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
import {getProfile} from "../../store/CProfileSlice";
import { useEffect } from "react";

export default function CreatorCard({ label }) {
     

    const {slug} = useParams()
    const data = useSelector((state)=>state?.profiles.filter((profile)=>profile.profileId == slug))
    const profile = data[0]
    return (
    <div className="border border-[#1f1f1f] rounded-lg p-2 w-full h-full max-w-7xl">
      <div className="w-full">
        <CreatorIntro data={profile}/>
      </div>
      <div>
        
      </div>
    </div>
  );
}
