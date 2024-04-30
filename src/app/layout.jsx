
import { Orbitron } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./globals.css";
import { ReactQueryClientProvider } from "./(components)/ReactQueryClientProvider/ReactQueryClientProvider";

const orbitron = Orbitron({ subsets: ["latin"], weight: '900' });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({ children }) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={orbitron.className}>

          {children}

        </body>
      </html>
    </ReactQueryClientProvider>

  );
}
