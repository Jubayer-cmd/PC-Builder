import ProductCard from "@/components/UI/ProductCard";
import RootLayout from "@/components/layouts/RootLayout";
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
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

CategoryPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.apiUrl}/api/data`);
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
    "Others",
  ];
  const paths = categories.map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: false, // Change this to 'true' if you want to enable fallback behavior.
  };
}
