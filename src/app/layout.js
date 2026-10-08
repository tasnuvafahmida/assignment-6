import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WorkoutsProvider from "../context/WorkoutContext";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fit Log",
  description: "Workout library",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <WorkoutsProvider>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </WorkoutsProvider>
        <ToastContainer></ToastContainer>
      </body>
    </html>
  );
}
