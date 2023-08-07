import RootLayout from "@/components/layouts/RootLayout";
import Image from "next/image";
import { useRouter } from "next/router";

export default function CategoryPage({ products }) {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-10 text-blue-950">
        Components Category: {category}
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div
            className="bg-white p-4 shadow rounded hover:shadow-lg"
            key={index}
          >
            <Image
              className="w-full mb-4"
              src={product.image}
              alt="Product Image"
              width={150}
              height={150}
              quality={80}
            />
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">Category: {product.category}</p>
            <p className="text-gray-600 mb-2">Status: {product.status}</p>
            <p className="text-green-500 font-bold mb-2">
              Price: {product.price}
            </p>
            <p className="text-gray-600 mb-2">Rating: {product.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

CategoryPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticProps({ params }) {
  const res = await fetch("http://localhost:3000/api/data");
  const data = await res.json();

  // Filter the products based on the 'category' parameter from the route
  const category = params.category;
  const filteredProducts = data?.data.filter(
    (product) => product.category === category
  );

  return {
    props: {
      products: filteredProducts,
    },
    // revalidate: 10,
  };
}

export async function getStaticPaths() {
  // Replace this with your actual logic to fetch the list of categories.
  // For example, you might fetch the categories from your API/database.
  const categories = [
    "RAM",
    "CPU",
    "Motherboard",
    "Power Supply",
    "Storage Device",
    "Monitor",
  ];
  const paths = categories.map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: false, // Change this to 'true' if you want to enable fallback behavior.
  };
}
