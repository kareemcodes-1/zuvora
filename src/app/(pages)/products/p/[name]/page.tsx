import { getProduct } from "@/app/actions/getProducts";
import ProductPageClient from "./productpage-client";

export default async function ProductPage({ params }: { params: { name: string } }) {
  const decodedName = decodeURIComponent(params.name.replace(/-/g, " "));
  const product = await getProduct(decodedName);

  return <ProductPageClient product={product} />;
}
