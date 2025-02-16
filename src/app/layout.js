import Header from "@/components/Header";
import AbaUtilities from "@/components/AbaUtilities";
import localFont from "next/font/local";
import styles from "@/components/Header/Header.module.css";
import "./globals.css"
import { AuthProvider } from "@/context/AuthContext";
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
      <body>
        <AuthProvider>
          <Header />
          <AbaUtilities />
          <div className={styles.escuro}></div>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}