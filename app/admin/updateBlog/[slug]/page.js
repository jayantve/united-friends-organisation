"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

export default function EditBlog({ params }) {
  const { slug } = params;
  const [html, setHtml] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const loadBlog = async () => {
      const res = await fetch(`/api/blog/${slug}`);
      const data = await res.json();
      setHtml(data.content || "");
    };
    loadBlog();
  }, [slug]);

  const handleSave = async () => {
    setSaving(true);
    try {
      const response = await fetch(`/api/blog/${slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: html }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Blog updated successfully.");
      } else {
        alert(result.error || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Network or server error.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="h-screen p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Editing: {slug}</h1>
        <Button onClick={handleSave} disabled={saving}>
          {saving ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full w-full">
        <Card className="flex flex-col shadow-md border border-gray-200">
          <CardContent className="p-0 flex-1">
            <textarea
              className="w-full h-full p-4 outline-none font-mono text-sm resize-none"
              value={html}
              onChange={(e) => setHtml(e.target.value)}
            />
          </CardContent>
        </Card>

        <Card className="shadow-md border border-gray-200 bg-secondary overflow-hidden">
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
