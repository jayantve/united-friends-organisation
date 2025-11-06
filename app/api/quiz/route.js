import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req) {

    try {
        const { slug, title, questions } = await req.json();

        const quizDir = path.join(process.cwd(), "quizs");
        if (!fs.existsSync(quizDir)) fs.mkdirSync(quizDir);

        const filePath = path.join(quizDir, `${slug}.json`);

        fs.writeFileSync(filePath, JSON.stringify({ slug, title, questions }, null, 2));

        return NextResponse.json({ success: true, message: "Quiz saved" });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}



export async function GET() {
    try {
        const quizDir = path.join(process.cwd(), "quizs");
        const files = fs.readdirSync(quizDir);

        const quizzes = files.map((file) => {
            const filePath = path.join(quizDir, file);
            const content = JSON.parse(fs.readFileSync(filePath, "utf-8"));

            // Convert numeric keys to array
            const questions = Object.keys(content)
                .filter((key) => !isNaN(key)) // keep numeric keys
                .map((key) => content[key]);   // convert values to array items

            const filename = file.replace('.json', '')


            return {
                slug: filename,
                title: filename,
                questions,
            };
        });

        return NextResponse.json(quizzes);
    } catch (error) {
        return NextResponse.json( { error: "Failed to load quizzes", details: error.message }, { status: 500 } );
    }
}
