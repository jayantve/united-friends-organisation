"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input"


export default function Page() {
    const [html, setHtml] = useState("<h1 class='text-2xl font-bold'>Hello 👋</h1>");
    const [filename, setFilename] = useState('')

    const handleClick = async () => {
        if (!filename.trim()) {
            alert("Please enter a filename.");
            return;
        }

        try {
            const response = await fetch('/api/blog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    filename: filename.endsWith('.html') ? filename : filename + '.html',
                    content: html,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                alert("Blog saved successfully.");
            } else {
                alert(result.error || "Something went wrong.");
            }

        } catch (error) {
            console.error(error);
            alert("Network or server error.");
        }
    };

    return (
        <div className="h-screen p-6 w-full">
            <div className='flex my-2'>
                <Input value={filename} onChange={(e) => setFilename(e.target.value)} type="text" placeholder="Enter File Name" className='mx-2 w-4/5' />
                <button onClick={(e) => handleClick(e)} className='bg-primary-foreground rounded w-1/5 mx-2' >Submit</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full w-full">
                <Card className="flex flex-col shadow-md border border-gray-200">
                    <CardContent className="p-0 flex-1">
                        <textarea
                            className="w-full h-full p-4 outline-none  font-mono text-sm resize-none"
                            value={html}
                            onChange={(e) => setHtml(e.target.value)}
                        />
                    </CardContent>
                </Card>
                <Card className="shadow-md border border-gray-200 bg-white overflow-hidden">
                    <CardContent className="p-4 h-full">
                        <ScrollArea className="h-full w-full">
                            <div
                                className="prose max-w-none"
                                dangerouslySetInnerHTML={{ __html: html }}
                            />
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}