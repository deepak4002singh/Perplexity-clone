/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'encrypted-tbn0.gstatic.com',  // Google search thumbnails
            'i.ytimg.com',                 // YouTube thumbnails
            'lookaside.instagram.com',     // Instagram images
            'lookaside.fbsbx.com',         // Facebook images
            'media.licdn.com',             // LinkedIn images
            'i.scdn.co',                   // Spotify images
            'static1.squarespace.com',     // Squarespace images
            'www.google.com',              // Google favicon service
        ]
    }
};

export default nextConfig;
