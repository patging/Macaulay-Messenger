import "../styles/global.css"
import Header from "../components/Header"
import Footer from '../components/footer'

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html>
      <head />
      <body >
        
        <Header/>

        <div className="flex-row lg:px-[10%]">
          {children} 
        </div>

        <Footer/>
        </body>
    </html>
  )
}
