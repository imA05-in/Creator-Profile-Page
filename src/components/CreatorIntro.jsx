export default function CreatorIntro({ data }) {
  console.log(data);

  return (
    <div className="rounded-2xl w-full p-2  text-white flex flex-col gap-2 md:flex-row items-start">
      <div className=" p-2 bg-linear-to-t from-black/70 to-black/10 rounded-2xl md:max-w-100 md:flex-row items-center w-full bg-white">
        <img src={data.image} alt="img" />
        <div className="text-xl font-medium text-center relative bottom-5 bg-black/5 rounded-full backdrop-blur py-1">
          {data.name.toUpperCase()}
        </div>
      </div>
      <div className="intro pt-4 md:pl-7 md:text-lg">{data.creatorIntroduction.bio}</div>
    </div>
  );
}
