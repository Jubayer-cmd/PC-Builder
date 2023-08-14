import ProductCard from "@/components/UI/ProductCard";
import RootLayout from "@/components/layouts/RootLayout";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { BiSolidMemoryCard } from "react-icons/bi";
import { BsMotherboardFill } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { GiProcessor } from "react-icons/gi";
import { MdPower } from "react-icons/md";
import { PiComputerTowerDuotone, PiMonitorFill } from "react-icons/pi";
const inter = Inter({ subsets: ["latin"] });

export default function HomePage({ products }) {
  return (
    <div>
      <h1 className=" mb-14 text-5xl font-medium text-center">
        Welcome to PCB -Bangladesh!
      </h1>
      <Image
        src="https://i.pcmag.com/imagery/articles/05s2MQHvz6jLJNvysACdmq5-9.fit_lim.size_1600x900.v1656014887.jpg"
        alt="banner"
        width={1000}
        height={400}
        className="w-full text-center object-cover mb-10"
      />
      <div className="grid grid-cols-4 gap-5">
        {products.slice(0, 12).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div>
        <h1 className="text-center text-4xl mt-14">Featured Products</h1>
        <div className={styles.centerContainer}>
          <div className={styles.line} style={{ width: "400px" }}></div>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <Link
          href={`/category/Motherboard`}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded border-none"
        >
          <BsMotherboardFill /> MotherBoard
        </Link>

        <Link
          href={`/category/RAM`}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded border-none"
        >
          <CgSmartphoneRam /> RAM
        </Link>

        <Link
          href={`/category/CPU`}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded border-none"
        >
          <GiProcessor /> CPU
        </Link>

        <Link
          href={`/category/Power Supply`}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded border-none"
        >
          <MdPower /> Power Supply
        </Link>

        <Link
          href={`/category/Storage Device`}
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded border-none"
        >
          <BiSolidMemoryCard /> Storage Device
        </Link>

        <Link
          href={`/category/Monitor`}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded border-none"
        >
          <PiMonitorFill /> Monitor
        </Link>

        <Link
          href={`/category/Others`}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded border-none"
        >
          <PiComputerTowerDuotone /> Others
        </Link>
      </div>
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.apiUrl}/api/data`);
  const data = await res.json();
  return {
    props: {
      products: data?.data,
    },
    //revalidate: 10,
  };
};
