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
    <div className="border w-full h-full">
      <div>{profile.name}</div>
    </div>
  );
}
