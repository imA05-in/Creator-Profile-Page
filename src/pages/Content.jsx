import { NavLink, Outlet } from "react-router";
import { CreatorCard } from "../components";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
export default function Content() {
  const navigate = useNavigate();
  const data = useSelector((state) => state?.profiles);
  return (
    <div className="h-full py-4 flex flex-col md:flex-row gap-2 md:gap-10 justify-evenly flex-wrap ">
      {data.map((profile) => (
        <NavLink
          className={`bg-neutral-400 border-2 border-neutral-300 rounded-xl px-2 flex items-center justify-center h-full md:w-100 bg-linear-to-t from-black/60 to-black/10 active:outline`}
          key={profile.profileId}
          onClick={() => navigate(`/content/${profile.profileId}`)}
        >
          <div className="w-full h-full py-4 flex flex-col justify-center items-center ">
            <div className="">
              <img  src={profile.image} alt="" className="w-full h-full rounded-t-2xl rounded-b min-w-95 max-w-100"  />
            </div>
            <div className="text-3xl relative bottom-10 font-extrabold text-white font-display w-full pl-2 flex text-center  bg-black/20 rounded-xl backdrop-blur justify-center border border-neutral-300">
              {profile.name.toUpperCase()}
            </div>
            <div className="flex border-2 rounded-2xl border-[#2A2F3A]  w-full justify-evenly  bg-white/5 backdrop-blur-md items-center">
              {profile.genre.map((genre) => (
                <div
                  key={nanoid()}
                  className=" cursor-pointer
                  rounded-xl
                  px-4 py-2
                  text-white
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:bg-white/10
                  hover:border
                  hover:border-white/20
                  hover:shadow-lg"
                >
                  {genre}
                </div>
              ))}
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
