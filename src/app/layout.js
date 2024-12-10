import Header from "@/components/Header";
import localFont from "next/font/local";

export const metadata = {
  title: "Titulo do site e tals",
  description: "Desdrição do site e tals",
  charset: 'UTF-8',
  author: 'José Sbaraini',
  keywords: 'Coisas e coisa e co'


};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <Header />

        {children}
      </body>
    </html>
  );
}
