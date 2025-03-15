       "use server"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { prisma } from "../utils/db"
import { redirect } from "next/navigation";


export async function handleSubmission (formData:FormData) {

    const {getUser} = getKindeServerSession();
    const user = await getUser()

    const title = formData.get("title")
    const content = formData.get("content")
    const imageurl = formData.get("imageurl")

   await prisma.blogPost.create({
    data:{
       title:title as string,
       content:content as string,
       imageUrl:imageurl as string,
       authorId:user.id ,
       authorName:user.given_name as string,
       authorImage:user.picture as string
    }
   })

   return redirect("/dashboard")

}
