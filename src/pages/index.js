import RootLayout from "@/components/layouts/RootLayout";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <div>
      <h1 className="pl-10 text-6xl">this is new pc builder</h1>
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
