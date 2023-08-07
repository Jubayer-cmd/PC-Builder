import ProductCard from "@/components/UI/ProductCard";
import RootLayout from "@/components/layouts/RootLayout";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function HomePage({ products }) {
  return (
    <div>
      <h1 className=" mb-14 text-5xl font-medium text-center">
        Welcome to PCB -Bangladesh!
      </h1>
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
          MotherBoard
        </Link>

        <Link
          href={`/category/RAM`}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded border-none"
        >
          RAM
        </Link>

        <Link
          href={`/category/CPU`}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded border-none"
        >
          CPU
        </Link>

        <Link
          href={`/category/Power Supply`}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded border-none"
        >
          Power Supply
        </Link>

        <Link
          href={`/category/Storage Device`}
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded border-none"
        >
          Storage Device
        </Link>

        <Link
          href={`/category/Monitor`}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded border-none"
        >
          Monitor
        </Link>

        <Link
          href={`/category/Others`}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded border-none"
        >
          Others
        </Link>
      </div>
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/data");
  const data = await res.json();
  return {
    props: {
      products: data?.data,
    },
    //revalidate: 10,
  };
};
