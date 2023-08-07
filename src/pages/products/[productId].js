import RootLayout from "@/components/layouts/RootLayout";
import Image from "next/image";
import { useRouter } from "next/router";

const ProductDetailPage = ({ product }) => {
  const router = useRouter();
  const { productId } = router.query;

  // Handle cases where data is still being fetched
  if (!product || !product._id) {
    return <div>Loading...</div>;
  }

  // Handle the case where the product with the given productId is not found
  if (product._id !== productId) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-container">
      <Image
        className="product-image"
        src={product.image}
        alt="Product Image"
        width={300} // Set the desired width of the image
        height={200} // Set the desired height of the image
      />
      <h1 className="product-name">{product.name}</h1>
      <p className="product-category">{product.category}</p>
      <p className="product-status">{product.status}</p>
      <p className="product-price">{product.price}</p>
      <p className="product-description">{product.description}</p>
      <p className="individual-rating">
        Individual Rating: {product.individualRating} Stars
      </p>
      <p>features:{product.features}</p>
      <p className="average-rating">
        Average Rating: {product.averageRating} Stars
      </p>
      <p>Reviews: {product.reviews}</p>
    </div>
  );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/data");
  const data = await res.json();
  // Filter the products based on the 'category' parameter from the route
  const paths = data?.data.map((product) => ({
    params: { productId: product._id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:3000/api/product/${params.productId}`
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      product: data.data,
    },
  };
};
