import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Mock data based on the provided API response
    const mockData = {
      success: true,
      data: [
        {
          id: "6894547efa170112f7fa9676",
          name: "Mobile Development",
          type: "mobile-development",
          stacks: [
            {
              name: "Flutter",
              icon: "tech/flutter.png",
              proficiency: 0.9,
            },
            {
              name: "Android",
              icon: "tech/android.png",
              proficiency: 0.9,
            },
            {
              name: "IOS",
              icon: "tech/ios.png",
              proficiency: 0.9,
            },
            {
              name: "Dart",
              icon: "tech/dart.png",
              proficiency: 0.9,
            },
            {
              name: "Kotlin",
              icon: "tech/kotlin.png",
              proficiency: 0.9,
            },
            {
              name: "Swift",
              icon: "tech/swift.png",
              proficiency: 0.9,
            },
          ],
        },
        {
          id: "68945727b3c64c0301fc17dd",
          name: "CI/CD",
          type: "ci/cd",
          stacks: [
            {
              name: "Codemagic",
              icon: "tech/codmagic.png",
              proficiency: 0.9,
            },
            {
              name: "Fastlane",
              icon: "tech/fastlane.png",
              proficiency: 0.9,
            },
            {
              name: "Github Actions",
              icon: "tech/github.png",
              proficiency: 0.9,
            },
          ],
        },
        {
          id: "689457c34290637731427c82",
          name: "Database",
          type: "database",
          stacks: [
            {
              name: "Firebase",
              icon: "tech/firebase.png",
              proficiency: 0.9,
            },
            {
              name: "Amplify",
              icon: "tech/amplify.png",
              proficiency: 0.9,
            },
            {
              name: "MongoDB",
              icon: "tech/mongodb.png",
              proficiency: 0.9,
            },
            {
              name: "P - SQL",
              icon: "tech/postgres.png",
              proficiency: 0.9,
            },
            {
              name: "SQLite",
              icon: "tech/star.png",
              proficiency: 0.9,
            },
            {
              name: "Hive",
              icon: "tech/star.png",
              proficiency: 0.9,
            },
            {
              name: "Secure Storage",
              icon: "tech/star.png",
              proficiency: 0.9,
            },
          ],
        },
        {
          id: "6894595feca794c345592662",
          name: "Server Side",
          type: "server-side",
          stacks: [
            {
              name: "Nest JS",
              icon: "tech/star.png",
              proficiency: 0.9,
            },
            {
              name: "Java SB",
              icon: "tech/java.png",
              proficiency: 0.9,
            },
            {
              name: "Restful",
              icon: "tech/django.png",
              proficiency: 0.85,
            },
            {
              name: "Rest API",
              icon: "tech/rest_api.png",
              proficiency: 0.85,
            },
            {
              name: "Dart Frog",
              icon: "tech/dart_frog.png",
              proficiency: 0.85,
            },
            {
              name: "ServerPod",
              icon: "tech/dart_serverpod.png",
              proficiency: 0.85,
            },
            {
              name: "Pocketbase",
              icon: "tech/pocketbase.png",
              proficiency: 0.85,
            },
            {
              name: "Supabase (Baas)",
              icon: "tech/star.png",
              proficiency: 0.85,
            },
          ],
        },
        {
          id: "68945986eca794c345592663",
          name: "UI/UX Design",
          type: "ui/ux-design",
          stacks: [
            {
              name: "Figma",
              icon: "tech/figma.png",
              proficiency: 0.9,
            },
            {
              name: "Adobe XD",
              icon: "tech/adobe-xd.png",
              proficiency: 0.9,
            },
          ],
        },
        {
          id: "6894599deca794c345592664",
          name: "Version Controlling & Management",
          type: "version-controlling-&-management",
          stacks: [
            {
              name: "Github",
              icon: "social/github.png",
              proficiency: 0.9,
            },
            {
              name: "GitLab",
              icon: "tech/gitlab.png",
              proficiency: 0.85,
            },
            {
              name: "Bitbucket",
              icon: "tech/bitbucket.png",
              proficiency: 0.85,
            },
            {
              name: "Jira",
              icon: "tech/jira.png",
              proficiency: 0.85,
            },
            {
              name: "Linear",
              icon: "tech/linear.png",
              proficiency: 0.85,
            },
          ],
        },
        {
          id: "68945a32eca794c345592665",
          name: "Web Development",
          type: "web-development",
          stacks: [
            {
              name: "Flutter Web",
              icon: "tech/flutter.png",
              proficiency: 0.9,
            },
            {
              name: "Javascript",
              icon: "tech/javascript.png",
              proficiency: 0.9,
            },
            {
              name: "HTML",
              icon: "tech/html.png",
              proficiency: 0.9,
            },
            {
              name: "CSS",
              icon: "tech/css.png",
              proficiency: 0.9,
            },
            {
              name: "NextJS",
              icon: "tech/star.png",
              proficiency: 0.9,
            },
          ],
        },
      ],
    };

    return NextResponse.json(mockData);
  } catch (error) {
    console.error("Error fetching tech stack:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch tech stack" },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
