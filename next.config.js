/**@type {import('next').NextConfig}*/
const nextConfig = {
    env: {       
        MYSQL_HOST: 'thsv75.hostatom.com',
        MYSQL_PORT: '3306',
        MYSQL_NAME: 'destiny_loveDB',
        MYSQL_USER: 'crazydev_dsLove',
        MYSQL_PASSWD: 'fwI$2735e',
        NEXT_API_URL: 'http://localhost:3090/api',
        NEXT_IMG_LOADER: 'http://localhost:3090/assets/images',
        NEXTAUTH_SECRET: 'CrazyDev_NextJS_DestinyLove',
      },
  
}
 
module.exports = nextConfig