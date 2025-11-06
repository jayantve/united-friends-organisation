import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function DELETE(req, { params }) {
  try {
    const { slug } = params;

    const filePath = path.join(process.cwd(), "blogs", `${slug}.html`);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { success: false, error: "File not found" },
        { status: 404 }
      );
    }

    fs.unlinkSync(filePath);

    return NextResponse.json({ success: true, message: "Blog deleted" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET(req, { params }) {

  const { slug } = params;

  const filePath = path.join(process.cwd(), "blogs", `${slug}.html`);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });
  }

  const content = fs.readFileSync(filePath, "utf-8");

  return NextResponse.json({ slug, content });
}

export async function PUT(req, { params }) {

  const { slug } = params;

  const { content } = await req.json();

  const filePath = path.join(process.cwd(), "blogs", `${slug}.html`);

  fs.writeFileSync(filePath, content, "utf-8");

  return NextResponse.json({ success: true, message: "Blog updated" });
}
