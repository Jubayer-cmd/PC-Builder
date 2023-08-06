import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 shadow rounded hover:shadow-lg">
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
      <p className="text-green-500 font-bold mb-2">Price: {product.price}</p>
      <p className="text-gray-600 mb-2">Rating: {product.rating}</p>
    </div>
  );
};

export default ProductCard;
