import { NextResponse } from "next/server";

const OWNER = "jayantve";
const REPO = "united-friends-organisation-data";
const DIRECTORY = "quizs";
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

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const slug = searchParams.get("slug");

        if (slug) {
            const data = await githubRequest(`contents/${DIRECTORY}/${slug}.json`);

            if (data?.content) {
                const decoded = JSON.parse(Buffer.from(data.content, "base64").toString("utf8"));
                return NextResponse.json(decoded);
            }
            return NextResponse.json({ error: "Quiz not found" }, { status: 404 });
        }

        // Get all files
        const files = await githubRequest(`contents/${DIRECTORY}`);
        if (!Array.isArray(files)) return NextResponse.json([]);

        const quizzes = await Promise.all(
            files
                .filter(f => f.name.endsWith(".json"))
                .map(async (file) => {
                    const contentRes = await githubRequest(`contents/${DIRECTORY}/${file.name}`);
                    const decoded = JSON.parse(Buffer.from(contentRes.content, "base64").toString("utf8"));
                    return decoded;
                })
        );

        return NextResponse.json(quizzes);
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}
