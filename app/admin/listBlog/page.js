"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BlogsPage() {
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        const res = await fetch("/api/blog");
        const data = await res.json();
        setBlogs(data);
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleDelete = async (slug) => {
        const res = await fetch(`/api/blog/${slug}`, {
            method: "DELETE",
        });

        const result = await res.json();
        if (res.ok) {
            alert("Blog deleted.");
            fetchBlogs();
        } else {
            alert(result.error || "Delete failed.");
        }
    };

    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>

            {blogs.length === 0 && (
                <p className="text-gray-500">No blogs found.</p>
            )}

            <div className="grid gap-6 grid-cols-1">
                {blogs.map((blog) => (
                    <Card key={blog.slug} className="flex flex-col justify-between">
                        <CardHeader className='flex justify-between items-center'>
                                <h2 className="text-lg font-semibold capitalize w-3/5">
                                    {blog.slug}
                                </h2>
                                <div className="w-2/5">
                                    <Link href={`/admin/updateBlog/${blog.slug}`} className="flex-1 my-2">
                                        <Button className="w-1/2" variant="secondary">Update</Button>
                                    </Link>

                                    <Button
                                        className="flex-1 w-1/2 my-2"
                                        variant="destructive"
                                        onClick={() => handleDelete(blog.slug)}
                                    >
                                        Delete
                                    </Button>
                                </div>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
}
