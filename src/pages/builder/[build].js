import RootLayout from "@/components/layouts/RootLayout";
import { handlePcBuild } from "@/redux/api/featured/builderSlice";
import Image from "next/image";

import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

function BuildPage({ products }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { build } = router.query; // Get the current category from the URL parameter

  const handleAddToBuilder = (product) => {
    const { category, ...productData } = product;
    dispatch(handlePcBuild({ category, ...productData }));
    router.push("/builder");
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 text-center">
      {products?.map((product) => (
        <div
          key={product._id}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="relative">
            <Image
              className="mt-4"
              src={product?.image}
              alt="Product Image"
              width={200}
              height={200}
            />
            <div className="absolute top-0 left-0 bg-black bg-opacity-40 p-2">
              <span className="text-white text-xs uppercase font-semibold">
                {product?.status}
              </span>
            </div>
          </div>
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-2">{product?.name}</h1>
            <p className="text-gray-600 mb-2">{product?.category}</p>
            <p className="text-gray-800 text-lg font-semibold mb-2">
              ${product?.price}
            </p>
            <div className="flex items-center justify-center mb-2">
              <span className="text-yellow-500 mr-1 text-center">⭐</span>
              <p className="text-gray-600 text-center">
                {product?.avgRating} / {product?.rating}
              </p>
            </div>
            <button
              onClick={() => handleAddToBuilder(product)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-3 rounded-full border-none"
            >
              Add to Builder
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BuildPage;

BuildPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `${process.env.apiUrl}/api/category?build=${params.build}`
  );
  const product = await res.json();
  let products = product?.data;
  console.log(products);
  return {
    props: {
      products,
    },
  };
};
