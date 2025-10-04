import { NextResponse } from "next/server";

// This is the data you provided from the API response
const projectsData = {
  success: true,
  data: [
    {
      id: "689467a10d6f1bbe9ae1265e",
      companyName: "Eyewa",
      projectName: "Eyewa",
      projectType: "product",
      projectTypeDisplayName: "Product",
      description:
        "Eyewa is a platform that allows you to buy and sell glasses online.",
      imageUrl: "https://i.postimg.cc/bNNQFdbx/eyewacover.png",
      appLinks: [
        {
          type: "mobile_app_app_store",
          url: "https://apps.apple.com/us/app/eyewa-eyewear-shopping-app/id1463605579",
        },
        {
          type: "mobile_app_play_store",
          url: "https://play.google.com/store/apps/details?id=com.eyewa.app&hl=en",
        },
        {
          type: "web_app",
          url: "https://eyewa.com",
        },
      ],
    },
    {
      id: "6894682b0d6f1bbe9ae1265f",
      companyName: "Optical Club - Eyewa",
      projectName: "Optical Club",
      projectType: "product",
      projectTypeDisplayName: "Product",
      description:
        "The Optical Club is a multi-brand eyewear destination in the Gulf region.",
      imageUrl: "https://i.postimg.cc/6qQjffjj/Untitled-design-1.png",
      appLinks: [
        {
          type: "mobile_app_play_store",
          url: "https://apps.apple.com/de/app/optical-club/id6740026550",
        },
        {
          type: "mobile_app_play_store",
          url: "https://play.google.com/store/apps/details?id=com.eyewa.app&hl=en",
        },
        {
          type: "web_app",
          url: "https://theopticalclub.com/saopcl-ar",
        },
      ],
    },
    {
      id: "689468780d6f1bbe9ae12660",
      companyName: "Supertal",
      projectName: "Persib",
      projectType: "product",
      projectTypeDisplayName: "Product",
      description:
        "A variety of the latest information about Persib, match schedules, live broadcasts, profiles, statistics from the Blue Princes and others. Also get the convenience and privileges of PERSIB Membership just by completing your data in the Profile menu.",
      imageUrl: "https://i.postimg.cc/zfZvV2MS/persib.png",
      appLinks: [
        {
          type: "mobile_app_app_store",
          url: "https://apps.apple.com/us/app/persib/id1240095475?platform=iphone",
        },
        {
          type: "mobile_app_play_store",
          url: "https://play.google.com/store/apps/details?id=com.persib.persibpass&hl=en",
        },
        {
          type: "web_app",
          url: "https://persib.co.id/",
        },
      ],
    },
    {
      id: "689468a80d6f1bbe9ae12661",
      companyName: "Supertal",
      projectName: "Reku - Beli Kripto & Saham AS",
      projectType: "product",
      projectTypeDisplayName: "Product",
      description:
        "Trading Bitcoin (BTC), crypto coins, and investing in American stocks is made easier in just one app",
      imageUrl: "https://i.postimg.cc/HsXDzK5c/Untitled-design.png",
      appLinks: [
        {
          type: "mobile_app_play_store",
          url: "https://play.google.com/store/apps/details?id=com.rekeningku&hl=en",
        },
        {
          type: "web_app",
          url: "https://reku.id/en",
        },
      ],
    },
    {
      id: "689468e20d6f1bbe9ae12662",
      companyName: "Walturn",
      projectName: "Lightbridge Life: Communities",
      projectType: "product",
      projectTypeDisplayName: "Product",
      description:
        "Lightbridge is facilitators of connection and champions of community!",
      imageUrl: "https://i.postimg.cc/FHh07RLH/lightbridge.png",
      appLinks: [
        {
          type: "mobile_app_play_store",
          url: "https://play.google.com/store/apps/details?id=ventures.verygood.flutter.light_bridge&hl=en",
        },
      ],
    },
    {
      id: "689469320d6f1bbe9ae12663",
      companyName: "Client",
      projectName: "Spawn Camp",
      projectType: "product",
      projectTypeDisplayName: "Product",
      description:
        "Spawn Camp is a platform that allows Private, 1-on-1 lessons with the expert instructor of your choice. it connect you with top gamers who will help you improve your game while having fun at the same time",
      imageUrl: "https://i.postimg.cc/TPK8vTQt/spawncamp.png",
      appLinks: [
        {
          type: "mobile_app_app_store",
          url: "https://spawncamp.org/dashboard",
        },
        {
          type: "mobile_app_play_store",
          url: "https://spawncamp.org/dashboard",
        },
        {
          type: "web_app",
          url: "https://spawncamp.org/dashboard",
        },
      ],
    },
    {
      id: "68946983349fd09fd57214dd",
      companyName: "Woltrap (Self)",
      projectName: "Mujtaba.dev (Portfolio app)",
      projectType: "open_source",
      projectTypeDisplayName: "Open Source",
      description:
        "This is my portfolio app, it is a app that allows you to view my projects and contact me",
      imageUrl: "https://i.postimg.cc/3NhVMt5r/portfolio.png",
      appLinks: [
        {
          type: "mobile_app_app_store",
          url: "https://mujtaba-portfolio.web.app/#/desktop",
        },
        {
          type: "mobile_app_play_store",
          url: "https://mujtaba-portfolio.web.app/#/desktop",
        },
        {
          type: "web_app",
          url: "https://mujtaba-portfolio.web.app/#/desktop",
        },
        {
          type: "github",
          url: "https://github.com/iammujtaba44/portfolio_app",
        },
      ],
    },
    {
      id: "68946b1d243f3a6640ff2e0a",
      companyName: "Woltrap (Self)",
      projectName: "Soomro Foods",
      projectType: "product",
      projectTypeDisplayName: "Product",
      description:
        "This is the official app of Soomro Foods, offering a wide range of premium homemade pickles and food products. Explore our collection, place orders, and stay connected with authentic flavors",
      imageUrl: "https://i.postimg.cc/3NhVMt5r/portfolio.png",
      appLinks: [
        {
          type: "mobile_app_app_store",
          url: "https://soomrofoods.com/",
        },
        {
          type: "mobile_app_play_store",
          url: "https://soomrofoods.com",
        },
        {
          type: "web_app",
          url: "https://soomrofoods.com",
        },
      ],
    },
    {
      id: "68946b9b243f3a6640ff2e0b",
      companyName: "Woltrap (Self)",
      projectName: "Online Quran Academy",
      projectType: "product",
      projectTypeDisplayName: "Product",
      description:
        "Recite the Quran in the measured, slow, and thoughtful manner.",
      imageUrl: "https://i.postimg.cc/3NhVMt5r/portfolio.png",
      appLinks: [
        {
          type: "web_app",
          url: "https://aminquran.com",
        },
      ],
    },
  ],
};

export async function GET() {
  try {
    return NextResponse.json(projectsData);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
