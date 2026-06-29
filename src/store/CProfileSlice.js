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
          },
          instagram: {
            followers: "1.4M",
          },
          twitter: {
            followers: "250K",
          },
        },

        audienceInsights: {
          "Primary Age Group": "18-34",
          "Gender Split": ["male: 76%", "female: 24%"],
          "Top Locations": ["India", "UAE", "Canada"],
          "Interests": ["Comedy", "Internet Culture", "Technology"],
        },

        previousBrandCollaborations: [
          { brand: "Skillshare", campaign: "Sponsored Integration", year: 2024 },
          { brand: "NordVPN", campaign: "Dedicated Promotion", year: 2023 },
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
          "business Manager": "-",
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
          },
          instagram: {
            followers: "3.2M",
          },
          twitter: {
            followers: "150K",
          },
        },

        audienceInsights: {
          "Primary Age Group": "18-30",
          "Gender Split": ["male: 28%", "female: 72%"],
          "Top Locations": ["India", "UK", "UAE"],
          "Interests": ["Fashion", "Travel", "Beauty"],
        },

        previousBrandCollaborations: [
          { brand: "Nykaa", campaign: "Summer Collection", year: 2025 },
          { brand: "H&M", campaign: "Festival Fashion", year: 2024 },
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
          "business Manager": "Glow Media",
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
          },
          instagram: {
            followers: "950K",
          },
          twitter: {
            followers: "480K",
          },
        },

        audienceInsights: {
          "Primary Age Group": "20-40",
          "Gender Split": ["male: 81%", "female: 19%"],
          "Top Locations": ["India", "USA", "Singapore"],
          "Interests": ["Technology", "Gaming", "AI"],
        },

        previousBrandCollaborations: [
          { brand: "Samsung", campaign: "Galaxy Launch", year: 2025 },
          { brand: "OnePlus", campaign: "Product Review", year: 2024 },
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
          "business Manager": "CreatorX",
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
          },
          instagram: {
            followers: "2.8M",
          },
          twitter: {
            followers: "120K",
          },
        },

        audienceInsights: {
          "Primary Age Group": "18-35",
          "Gender Split": ["male: 44%", "female: 56%"],
          "Top Locations": ["India", "Australia", "Canada"],
          "Interests": ["Fitness", "Nutrition", "Lifestyle"],
        },

        previousBrandCollaborations: [
          { brand: "MyProtein", campaign: "Protein Series", year: 2025 },
          { brand: "Cult.fit", campaign: "Workout Challenge", year: 2024 },
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
          "business Manager": "Fit Media",
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
          },
          instagram: {
            followers: "1.2M",
          },
          twitter: {
            followers: "650K",
          },
        },

        audienceInsights: {
          "Primary Age Group": "16-28",
          "Gender Split": ["male: 87%", "female: 13%"],
          "Top Locations": ["India", "Indonesia", "Nepal"],
          "Interests": ["Gaming", "PC Hardware", "Esports"],
        },

        previousBrandCollaborations: [
          { brand: "Intel", campaign: "Gaming Build", year: 2025 },
          { brand: "Logitech G", campaign: "Gear Showcase", year: 2024 },
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
          "business Manager": "GG Talent",
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
          },
          instagram: {
            followers: "3.8M",
          },
          twitter: {
            followers: "90K",
          },
        },

        audienceInsights: {
          "Primary Age Group": "18-35",
          "Gender Split": ["male: 42%", "female: 58%"],
          "Top Locations": ["India", "Singapore", "Malaysia"],
          "Interests": ["Food", "Travel", "Luxury"],
        },

        previousBrandCollaborations: [
          { brand: "MakeMyTrip", campaign: "Travel Campaign", year: 2025 },
          { brand: "Zomato", campaign: "Restaurant Series", year: 2024 },
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
          "business Manager": "Travel Creators Agency",
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

    
  },
  reducers: {
    
  },
});

// export const { } = CProfileSlice.actions;

export default CProfileSlice.reducer;