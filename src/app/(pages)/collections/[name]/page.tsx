
import { getCollection } from "@/app/actions/getCollections";
import { getProductByCollection } from "@/app/actions/getProductByCollection";
import CollectionProducts from "./collection-products";

export default async function CollectionPage({
  params,
}: {
  params: { name: string };
}) {
  const normalizedName = params.name.replace("M", "m");
  const capitalizedName = normalizedName.charAt(0).toUpperCase() + normalizedName.slice(1);

  const collection = await getCollection(capitalizedName);

  // Now fetch products belonging to this collection
  const products = await getProductByCollection(collection._id.toString());

  return <CollectionProducts collection={collection} products={products} />;
}