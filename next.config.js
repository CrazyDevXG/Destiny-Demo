/**@type {import('next').NextConfig}*/
const nextConfig = {
    reactStrictMode: false,
    env: {       
        MYSQL_HOST: 'thsv75.hostatom.com',
        MYSQL_PORT: '3306',
        MYSQL_NAME: 'destiny_loveDB',
        MYSQL_USER: 'crazydev_dsLove',
        MYSQL_PASSWD: 'fwI$2735e',
        NEXT_API_URL: 'http://destinylove.online/api',
        NEXT_IMG_LOADER: 'http://destinylove.online/assets/images',
        NEXTAUTH_SECRET: 'CrazyDev_NextJS_DestinyLove',
      },

      experimental: {
        serverActions: {
          allowedOrigins: [
            "destinylove.online:3090", "localhost:3090",
            "destinylove.online:5010", "localhost:5010"
        ]
        }
      }
  
}
 
module.exports = nextConfig