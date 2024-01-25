/**@type {import('next').NextConfig}*/
const nextConfig = {
    env: {       
        MYSQL_HOST: 'thsv75.hostatom.com',
        MYSQL_PORT: '3306',
        MYSQL_NAME: 'destiny_loveDB',
        MYSQL_USER: 'crazydev_dsLove',
        MYSQL_PASSWD: 'fwI$2735e',
        NEXT_API_URL: 'https://destiny-demo.vercel.app/api',
        NEXTAUTH_SECRET: 'CrazyDev_NextJS_DestinyLove',
      },
  
}
 
module.exports = nextConfig