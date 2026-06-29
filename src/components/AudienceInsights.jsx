import Box from "./Box";

export default function AudienceInsights({ data }) {

  return (
    <div className="w-full">
    <Box label={"Audience Insights"} data={data}/>
    </div>
  );
}
