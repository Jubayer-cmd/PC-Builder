import RootLayout from "@/components/layouts/RootLayout";
import { useRouter } from "next/router";

function BuildPage({ products }) {
  const router = useRouter();
  const { build } = router.query;

  return (
    <div>
      <h1>BuildPage: {build}</h1>
      {/* Display the list of products */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default BuildPage;

BuildPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticProps({ params }) {
  const res = await fetch("http://localhost:3000/api/data");
  const data = await res.json();

  // Filter the products based on the 'category' parameter from the route
  const build = params.build;
  const filteredProducts = data?.data.filter(
    (product) => product.category === build
  );

  return {
    props: {
      products: filteredProducts || [], // Handle the case where no products are found for the category.
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
  const paths = categories.map((build) => ({
    params: { build },
  }));

  return {
    paths,
    fallback: false, // Change this to 'true' if you want to enable fallback behavior.
  };
}
