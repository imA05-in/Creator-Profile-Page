import { createSlice } from "@reduxjs/toolkit";
import user from "../assets/user.png"
const CProfileSlice = createSlice({
    name:"CProfileSlice",
    initialState:{
        profiles : [
            {
                profileId: 1,
                name: "Lakshay Choudhary",
                image:user,
                age: 28,
                genre: ["comedy", "critic", "entertainment"],
                youtubeFollowers: "3.46M",
                youtubeLink: "https://youtube.com/@lakshaychaudhary?si=lGjKw5Zg_Z8951U3",
                instaFollowers: "1.4M",
                instaLink:"https://www.instagram.com/lakshayonly",
                contact:[
                    {
                        mail:" sendthosebucks@gmail.com"
                    },
                    {
                        "ph.": "-"
                    }
                ]
            },
            {
                profileId: 2,
                name: "creator 2",
                 image:user,
                age: 28,
                genre: ["comedy","review",],
                youtubeFollowers: "6M",
                youtubeLink: "-",
                instaFollowers: "4M",
                instaLink:"-",
                contact:[
                    {
                        mail:" example@gmail.com"
                    },
                    {
                        "ph.": "-"
                    }
                ]
            }
        ],
        list : []
    },
    reducers:{
        addToList:function(state, action){
           state.list = [...state.list, action.payload.newItem ]
        },
        removeFromList:function(state,action){
            state.list = state.list.filter((item)=>item.profileId !== action.payload.toRemove)
        },
        clearList: function(state){
            state.list = []
        },
        getProfile:function(state,action){
            const pf = state.profiles.filter((profile)=>profile.profileId == action.payload.id)
            console.log(pf);
            
            return pf
        }
    }
})

export const {addToList,removeFromList,clearList,getProfile} = CProfileSlice.actions

export default CProfileSlice.reducer