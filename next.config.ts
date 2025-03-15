import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        hostname:"lh3.googleusercontent.com",
        protocol:"https",
        port:""
      },{
         hostname:"lh5.googleusercontent.com",
        protocol:"https",
        port:""
      },
      {
         hostname:"i.insider.com",
        protocol:"https",
        port:""
      },
      {
         hostname:"images.pexels.com",
        protocol:"https",
        port:""
      }
    ]
  }
};

export default nextConfig;
