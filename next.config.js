/**@type {import('next').NextConfig}*/
const nextConfig = {
    env: {       
        MYSQL_HOST: 'thsv75.hostatom.com',
        MYSQL_PORT: '3306',
        MYSQL_NAME: 'destiny_loveDB',
        MYSQL_USER: 'crazydev_dsLove',
        MYSQL_PASSWD: 'fwI$2735e',
        NEXT_API_URL: 'https://2gsw7frf-3090.asse.devtunnels.ms/api',
        NEXT_IMG_LOADER: 'https://2gsw7frf-3090.asse.devtunnels.ms/assets/images',
        NEXTAUTH_SECRET: 'CrazyDev_NextJS_DestinyLove',
      },

      experimental: {
        serverActions: {
          allowedOrigins: [
            "2gsw7frf-3090.asse.devtunnels.ms", "localhost:3090",
            "2gsw7frf-3010.asse.devtunnels.ms", "localhost:3010"
        ]
        }
      }
  
}
 
module.exports = nextConfig