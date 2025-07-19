import { getProduct } from "@/app/actions/getProducts";
import CollectionPageClient from "./collectionpage-client";
import { getCollection, getCollections } from "@/app/actions/getCollections";

export default async function CollectionPage({ params }: { params: { name: string } }) {
    const normalizedName = params.name.replace("M", "m");

  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

      const capitalizedName = capitalize(normalizedName);

  const collection = await getCollection(capitalizedName);

  return <CollectionPageClient collection={collection} />;
}
