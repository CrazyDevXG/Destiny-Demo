
import Script from 'next/script'
import './globals.css'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Destiny Love</title>
      <body>
            {children}


            <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" strategy="lazyOnload" />
            <Script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" strategy="lazyOnload" />
            <Script src="/assets/js/uikit.min.js" strategy="lazyOnload" />
            <Script src="/assets/js/script.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
