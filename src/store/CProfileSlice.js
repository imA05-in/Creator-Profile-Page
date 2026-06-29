import { createSlice } from "@reduxjs/toolkit";
import user from "../assets/user.png";
const CProfileSlice = createSlice({
  name: "CProfileSlice",
  initialState: {
    profiles: [
  {
    profileId: 1,
    name: "Lakshay Choudhary",
    image: user,
    age: 28,
    genre: ["Comedy", "Entertainment"],

    creatorIntroduction: {
      bio: "Comedy commentator known for satirical takes on internet culture, social issues, and entertainment.",
      location: "India",
      languages: ["Hindi", "English"],
      contentStyle: ["Commentary", "Roasts", "Comedy"],
      uploadsPerMonth: 8,
    },

    socialMediaOverview: {
      youtube: {
        followers: "3.46M",
        link: "https://youtube.com/@lakshaychaudhary?si=lGjKw5Zg_Z8951U3",
      },
      instagram: {
        followers: "1.4M",
        link: "https://www.instagram.com/lakshayonly",
      },
      twitter: {
        followers: "250K",
        link: "-",
      },
    },

    audienceInsights: {
      primaryAgeGroup: "18-34",
      genderSplit: { male: "76%", female: "24%" },
      topLocations: ["India", "UAE", "Canada"],
      interests: ["Comedy", "Internet Culture", "Technology"],
    },

    previousBrandCollaborations: [
      { id: 1, brand: "Skillshare", campaign: "Sponsored Integration", year: 2024 },
      { id: 2, brand: "NordVPN", campaign: "Dedicated Promotion", year: 2023 },
    ],

    performanceMetrics: {
      averageViews: "1.9M",
      averageLikes: "180K",
      engagementRate: "8.5%",
      averageWatchTime: "9m 10s",
    },

    contact: {
      email: "sendthosebucks@gmail.com",
      phone: "-",
      businessManager: "-",
    },

    collaborationCTA: {
      availableFor: [
        "Brand Sponsorships",
        "Product Reviews",
        "Long-term Partnerships",
      ],
      responseTime: "24-48 Hours",
    },
  },

  {
    profileId: 2,
    name: "Ananya Sharma",
    image: user,
    age: 26,
    genre: ["Lifestyle", "Fashion"],

    creatorIntroduction: {
      bio: "Lifestyle creator sharing fashion inspiration, travel vlogs, and daily routines.",
      location: "Delhi, India",
      languages: ["English", "Hindi"],
      contentStyle: ["Lifestyle", "Travel", "Fashion"],
      uploadsPerMonth: 12,
    },

    socialMediaOverview: {
      youtube: {
        followers: "1.8M",
        link: "-",
      },
      instagram: {
        followers: "3.2M",
        link: "-",
      },
      twitter: {
        followers: "150K",
        link: "-",
      },
    },

    audienceInsights: {
      primaryAgeGroup: "18-30",
      genderSplit: { male: "28%", female: "72%" },
      topLocations: ["India", "UK", "UAE"],
      interests: ["Fashion", "Travel", "Beauty"],
    },

    previousBrandCollaborations: [
      { id: 1, brand: "Nykaa", campaign: "Summer Collection", year: 2025 },
      { id: 2, brand: "H&M", campaign: "Festival Fashion", year: 2024 },
    ],

    performanceMetrics: {
      averageViews: "900K",
      averageLikes: "120K",
      engagementRate: "10.2%",
      averageWatchTime: "6m 15s",
    },

    contact: {
      email: "ananya.business@gmail.com",
      phone: "-",
      businessManager: "Glow Media",
    },

    collaborationCTA: {
      availableFor: [
        "Fashion Campaigns",
        "Travel Partnerships",
        "Sponsored Posts",
      ],
      responseTime: "48 Hours",
    },
  },

  {
    profileId: 3,
    name: "Rahul Verma",
    image: user,
    age: 30,
    genre: ["Technology", "Reviews"],

    creatorIntroduction: {
      bio: "Tech reviewer covering smartphones, laptops, AI, and gadgets.",
      location: "Bangalore, India",
      languages: ["English"],
      contentStyle: ["Reviews", "Comparisons", "Tutorials"],
      uploadsPerMonth: 10,
    },

    socialMediaOverview: {
      youtube: {
        followers: "4.7M",
        link: "-",
      },
      instagram: {
        followers: "950K",
        link: "-",
      },
      twitter: {
        followers: "480K",
        link: "-",
      },
    },

    audienceInsights: {
      primaryAgeGroup: "20-40",
      genderSplit: { male: "81%", female: "19%" },
      topLocations: ["India", "USA", "Singapore"],
      interests: ["Technology", "Gaming", "AI"],
    },

    previousBrandCollaborations: [
      { id: 1, brand: "Samsung", campaign: "Galaxy Launch", year: 2025 },
      { id: 2, brand: "OnePlus", campaign: "Product Review", year: 2024 },
    ],

    performanceMetrics: {
      averageViews: "2.2M",
      averageLikes: "170K",
      engagementRate: "7.8%",
      averageWatchTime: "11m",
    },

    contact: {
      email: "rahul@techreviews.com",
      phone: "-",
      businessManager: "CreatorX",
    },

    collaborationCTA: {
      availableFor: [
        "Tech Reviews",
        "Launch Events",
        "Sponsored Videos",
      ],
      responseTime: "24 Hours",
    },
  },

  {
    profileId: 4,
    name: "Priya Mehta",
    image: user,
    age: 27,
    genre: ["Fitness", "Health"],

    creatorIntroduction: {
      bio: "Fitness coach helping people build healthy habits through workouts and nutrition tips.",
      location: "Mumbai, India",
      languages: ["English", "Hindi"],
      contentStyle: ["Workout", "Nutrition", "Wellness"],
      uploadsPerMonth: 15,
    },

    socialMediaOverview: {
      youtube: {
        followers: "2.5M",
        link: "-",
      },
      instagram: {
        followers: "2.8M",
        link: "-",
      },
      twitter: {
        followers: "120K",
        link: "-",
      },
    },

    audienceInsights: {
      primaryAgeGroup: "18-35",
      genderSplit: { male: "44%", female: "56%" },
      topLocations: ["India", "Australia", "Canada"],
      interests: ["Fitness", "Nutrition", "Lifestyle"],
    },

    previousBrandCollaborations: [
      { id: 1, brand: "MyProtein", campaign: "Protein Series", year: 2025 },
      { id: 2, brand: "Cult.fit", campaign: "Workout Challenge", year: 2024 },
    ],

    performanceMetrics: {
      averageViews: "1.1M",
      averageLikes: "130K",
      engagementRate: "9.8%",
      averageWatchTime: "8m",
    },

    contact: {
      email: "collab@priyafit.com",
      phone: "-",
      businessManager: "Fit Media",
    },

    collaborationCTA: {
      availableFor: [
        "Fitness Campaigns",
        "Brand Partnerships",
        "Workshops",
      ],
      responseTime: "24-48 Hours",
    },
  },

  {
    profileId: 5,
    name: "Arjun Kapoor",
    image: user,
    age: 29,
    genre: ["Gaming", "Streaming"],

    creatorIntroduction: {
      bio: "Gaming creator streaming competitive games, walkthroughs, and esports content.",
      location: "Pune, India",
      languages: ["Hindi", "English"],
      contentStyle: ["Gaming", "Streaming", "Esports"],
      uploadsPerMonth: 20,
    },

    socialMediaOverview: {
      youtube: {
        followers: "5.1M",
        link: "-",
      },
      instagram: {
        followers: "1.2M",
        link: "-",
      },
      twitter: {
        followers: "650K",
        link: "-",
      },
    },

    audienceInsights: {
      primaryAgeGroup: "16-28",
      genderSplit: { male: "87%", female: "13%" },
      topLocations: ["India", "Indonesia", "Nepal"],
      interests: ["Gaming", "PC Hardware", "Esports"],
    },

    previousBrandCollaborations: [
      { id: 1, brand: "Intel", campaign: "Gaming Build", year: 2025 },
      { id: 2, brand: "Logitech G", campaign: "Gear Showcase", year: 2024 },
    ],

    performanceMetrics: {
      averageViews: "2.8M",
      averageLikes: "240K",
      engagementRate: "9.4%",
      averageWatchTime: "13m",
    },

    contact: {
      email: "gaming@arjunkapoor.com",
      phone: "-",
      businessManager: "GG Talent",
    },

    collaborationCTA: {
      availableFor: [
        "Game Promotions",
        "Livestream Sponsorships",
        "Hardware Reviews",
      ],
      responseTime: "24 Hours",
    },
  },

  {
    profileId: 6,
    name: "Sneha Patel",
    image: user,
    age: 25,
    genre: ["Food", "Travel"],

    creatorIntroduction: {
      bio: "Food and travel creator exploring hidden gems, restaurants, and destinations.",
      location: "Ahmedabad, India",
      languages: ["English", "Hindi", "Gujarati"],
      contentStyle: ["Food Reviews", "Travel Vlogs", "Shorts"],
      uploadsPerMonth: 14,
    },

    socialMediaOverview: {
      youtube: {
        followers: "2.1M",
        link: "-",
      },
      instagram: {
        followers: "3.8M",
        link: "-",
      },
      twitter: {
        followers: "90K",
        link: "-",
      },
    },

    audienceInsights: {
      primaryAgeGroup: "18-35",
      genderSplit: { male: "42%", female: "58%" },
      topLocations: ["India", "Singapore", "Malaysia"],
      interests: ["Food", "Travel", "Luxury"],
    },

    previousBrandCollaborations: [
      { id: 1, brand: "MakeMyTrip", campaign: "Travel Campaign", year: 2025 },
      { id: 2, brand: "Zomato", campaign: "Restaurant Series", year: 2024 },
    ],

    performanceMetrics: {
      averageViews: "1.4M",
      averageLikes: "155K",
      engagementRate: "10.8%",
      averageWatchTime: "7m 30s",
    },

    contact: {
      email: "hello@snehapatel.com",
      phone: "-",
      businessManager: "Travel Creators Agency",
    },

    collaborationCTA: {
      availableFor: [
        "Travel Campaigns",
        "Restaurant Reviews",
        "Destination Partnerships",
      ],
      responseTime: "24-48 Hours",
    },
  },
],

    list: [],
  },
  reducers: {
    addToList: function (state, action) {
      state.list = [...state.list, action.payload.newItem];
    },
    removeFromList: function (state, action) {
      state.list = state.list.filter(
        (item) => item.profileId !== action.payload.toRemove,
      );
    },
    clearList: function (state) {
      state.list = [];
    },
    getProfile: function (state, action) {
      const pf = state.profiles.filter(
        (profile) => profile.profileId == action.payload.id,
      );
      console.log(pf);

      return pf;
    },
  },
});

export const { addToList, removeFromList, clearList, getProfile } =
  CProfileSlice.actions;

export default CProfileSlice.reducer;
