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
    return NextResponse.json( { error: "Failed to load blogs", details: error.message }, { status: 500 }  );
  }
}

export async function POST(req) {

  try {
    const { filename, content } = await req.json();

    if (!filename || !content || filename.trim() === "" || content.trim() === "") {
      return NextResponse.json( { success: false, error: "Filename and content cannot be empty." }, { status: 400 } );
    }

    const blogsDir = path.join(process.cwd(), "blogs");

    // Ensure directory exists (optional)
    if (!fs.existsSync(blogsDir)) {
      fs.mkdirSync(blogsDir);
    }

    const filePath = path.join(blogsDir, filename);

    fs.writeFileSync(filePath, content, "utf-8");

    return NextResponse.json(
      { success: true, message: "File created successfully." },
      { status: 201 }
    );

  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
