import RootLayout from "@/components/layouts/RootLayout";
import { useRouter } from "next/router";

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      <h1>This category : {category}</h1>
    </div>
  );
}

CategoryPage.getLayout = function getLayout(page) {
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
