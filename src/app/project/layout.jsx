import "../globals.css";
import "../assets/css/materialdesignicons.min.css";
import "../assets/css/tailwind.css";
import { Urbanist } from "next/font/google";
import Head from "next/head";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-urbanist",
});

export const metadata = {
  title: "Ganapatih Akasa Solution",
  description: "Unleash your creatifity with artificial intelligence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="LTR">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="../../../public/images/l" />
      </Head>
      <body className={`${urbanist.variable}`}>{children}</body>
    </html>
  );
}
