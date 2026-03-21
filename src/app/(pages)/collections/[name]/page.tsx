import { getCollection } from "@/app/actions/getCollections";
import { getProductByCollection } from "@/app/actions/getProductByCollection";
import { getCategories } from "@/app/actions/getCategories";
import CollectionProducts from "./collection-products";

export default async function CollectionPage({
  params,
}: {
  params: { name: string };
}) {
  const normalizedName = params.name.replace("M", "m");
  const capitalizedName = normalizedName.charAt(0).toUpperCase() + normalizedName.slice(1);

  const collection = await getCollection(capitalizedName);
  const products = await getProductByCollection(collection._id.toString());
  const categories = await getCategories();

  return (
    <CollectionProducts
      collection={collection}
      products={products}
      categories={categories}
    />
  );
}