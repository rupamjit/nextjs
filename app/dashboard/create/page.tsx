"use client"
import { handleSubmission } from "@/app/actions/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import React from "react";

const CreateBlogRoute = () => {


  return (
    <div>
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>Create a new Post</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" action={handleSubmission}>
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input name="title" type="text" required placeholder="Enter Your Title"/>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Content</Label>
              <Textarea name="content" required placeholder="Enter Your Content"/>
            </div>
            <div className='flex flex-col gap-2'>
            <Label>Image Url</Label>
            <Input type="url" name="imageurl" required placeholder="Enter Your ImageUrl"/>
        </div>
        <Button>Create Post</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateBlogRoute;
