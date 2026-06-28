import { createSlice } from "@reduxjs/toolkit";

const CProfileSlice = createSlice({
    name:"CProfileSlice",
    initialState:{
        profiles : [
            {
                profileId: 1,
                name: "Lakshay Choudhary",
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
        }
    }
})

export const {addToList,removeFromList,clearList} = CProfileSlice.actions

export default CProfileSlice.reducer