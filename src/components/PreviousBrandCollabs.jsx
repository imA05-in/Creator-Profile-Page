import Box from "./Box";
import BoxOWO from "./BoxOWO";

export default function PreviousBrandCollabs({data}){
    return(<div>
        <BoxOWO  label={`Previous Brand Collabs`} data={{" ":data[0], "":data[1]}}/>
    </div>)
}