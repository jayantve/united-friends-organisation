import { NextResponse } from "next/server";

const OWNER = "jayantve";   // << CHANGE THIS
const REPO = "united-friends-organisation-data";        // << CHANGE THIS
const DIRECTORY = "blogs";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

async function githubRequest(path, options = {}) {
  return fetch(`https://api.github.com/repos/${OWNER}/${REPO}/${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
    cache: "no-store",
  }).then((res) => res.json());
}

// GET (all blogs)
export async function GET() {
  try {
    const files = await githubRequest(`contents/${DIRECTORY}`);
    if (!Array.isArray(files)) return NextResponse.json([]);

    const blogs = await Promise.all(
      files
        .filter(f => f.name.endsWith(".html") || f.name.endsWith(".md"))
        .map(async (file) => {
          const res = await githubRequest(`contents/${DIRECTORY}/${file.name}`);
          const decoded = Buffer.from(res.content, "base64").toString("utf8");
          return {
            filename: file.name,
            slug: file.name.replace(/\.(html|md)$/, ""),
            content: decoded,
          };
        })
    );

    return NextResponse.json(blogs);

  } catch (error) {
    return NextResponse.json({ error: "Failed to load blogs", details: error.message }, { status: 500 });
  }
}


