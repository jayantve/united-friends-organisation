import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req, { params }) {

    const { slug } = await params

    const filePath = path.join(process.cwd(), "quizs", `${slug}.json`);

    if (!fs.existsSync(filePath)) return NextResponse.json({ error: "Not found" }, { status: 404 });

    const quiz = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    return NextResponse.json(quiz);
}

export async function PUT(req, { params }) {

    const { slug } = await params

    const { title, questions } = await req.json();

    const filePath = path.join(process.cwd(), "quizs", `${slug}.json`);

    fs.writeFileSync(filePath, JSON.stringify({ slug, title, questions }, null, 2));

    return NextResponse.json({ success: true, message: "Quiz updated" });
}

export async function DELETE(req, { params }) {

    const { slug } = await params

    const filePath = path.join(process.cwd(), "quizs", `${slug}.json`);

    if (!fs.existsSync(filePath)) return NextResponse.json({ error: "Not found" }, { status: 404 });

    fs.unlinkSync(filePath);

    return NextResponse.json({ success: true, message: "Quiz deleted" });
}
