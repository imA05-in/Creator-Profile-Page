import { NavLink, Outlet } from "react-router";
import { CreatorCard } from "../components";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
export default function Content() {
  const navigate = useNavigate();
  const data = useSelector((state) => state?.profiles);


  return (
    <div className="h-full flex flex-col md:flex-row gap-2 ">
      {data.map((profile) => (
        <NavLink
          key={profile.profileId}
          onClick={() => navigate(`/content/${profile.profileId}`)}
        >
          {profile.name}
        </NavLink>
      ))}
    </div>
  );
}
