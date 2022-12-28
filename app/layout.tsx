import "../styles/global.css"

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html>
      <head />
      <body > <div className=" flex-row lg:px-[16.6%]" > <div className="" > {children} </div ></div></body>
    </html>
  )
}
