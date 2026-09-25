import Container from "@/components/Container";
import ProductItem, { IProductItemProps } from "@/components/ProductItem";
import Link from "next/link";

async function Store() {
  const result = await fetch('http://localhost:8000/product');
  const data = await result.json() as IProductItemProps[];
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 my-6">
        {data.map((item) => (
          <Link href={`store/${item.id}`} key={item.id}>
            <ProductItem {...item} />
          </Link>
        ))}
      </div>
    </Container>
  );
}``

export default Store;
