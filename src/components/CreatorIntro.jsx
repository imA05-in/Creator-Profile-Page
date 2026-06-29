export default function CreatorIntro({ data }) {

  return (
    <div className="rounded-2xl w-full flex flex-col gap-2 md:flex-row justify-between items-start h-full md:gap-10">
      <div className=" p-2 bg-linear-to-t from-black/70 to-black/10 rounded-2xl md:max-w-100 md:flex-row items-center w-full bg-neutral-400 border border-neutral-300">
      <div className="flex justify-center">
        <img src={data.image} alt="img" className="md:min-w-95 min-w-75 rounded-2xl"/>
      </div>
        <div className="text-xl font-medium text-center relative bottom-5 bg-black/30 py-1 rounded-2xl backdrop-blur border-2 border-neutral-300">
          {data.name.toUpperCase()}
        </div>
      </div>
      <div className=" border border-neutral-300 rounded-xl p-4 md:pl-7 flex gap-4 flex-col h-full bg-neutral-500 justen">
      <div className="intro md:text-lg flex flex-col gap-1">
        <div className="underline decoration-neutral-50/50">
      Creator Intro
        </div>
        {data.creatorIntroduction.bio}
      </div>

      <div className="h-full ">
      <div className="border-b-gray-100/50 border-b">Location:{"  "}{data.creatorIntroduction.location}</div>
      <div className="flex gap-2 border-b-gray-100/50 border-b"> Languages:
        {data.creatorIntroduction.languages.map((lang) => (
          <div key={lang}>{lang}</div>
        ))}
      </div>
      <div className="flex gap-2 flex-wrap border-b-gray-100/50 border-b">Content Style: 
        {data.creatorIntroduction.contentStyle.map((contentStyle) => (
          <div key={contentStyle}>{contentStyle}</div>
        ))}
      </div>
      <div className="border-b-gray-100/50 border-b"> Uploads: {data.creatorIntroduction.uploadsPerMonth}</div>
      </div>
      </div>
      
    </div>
  );
}
