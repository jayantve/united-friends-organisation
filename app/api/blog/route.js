import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const blogsDir = path.join(process.cwd(), "blogs");
    const files = fs.readdirSync(blogsDir);

    const blogs = files.map((file) => {
      const filePath = path.join(blogsDir, file);
      const content = fs.readFileSync(filePath, "utf-8");

      return {
        slug: file.replace(".html", ""),
        content,
      };
    });

    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to load blogs", details: error.message },
      { status: 500 }
    );
  }
}