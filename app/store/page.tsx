import Container from "@/components/Container";
import Pagination from "@/components/Pagination";
import ProductItem, { IProductList } from "@/components/ProductItem";
import Search from "@/components/Search";
import Link from "next/link";

interface IStoreProps {
  params: Promise<{}>;
  searchParams: Promise<{ page: string; per_page: string, title_like: string }>;
}

async function Store({ searchParams }: IStoreProps) {
  const page = (await searchParams).page ?? "1";
  const per_page = (await searchParams).per_page ?? "2";
  const title_like = (await searchParams).title_like ?? "";

  const result = await fetch(
    `http://localhost:3004/product?_page=${page}&_per_page=${per_page}&title:contains=${title_like}`,
  );
  const data = (await result.json()) as IProductList;
 
  return (
    <Container>
      <Search/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 my-6">
        {data.data.map((item) => (
          <Link href={`store/${item.id}`} key={item.id}>
            <ProductItem {...item} />
          </Link>
        ))}
      </div>
        <Pagination pageCount={data.pages}/>
    </Container>
  );
}

export default Store;
