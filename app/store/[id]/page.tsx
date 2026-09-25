import Container from "@/components/Container";
import { IProductItemProps } from "@/components/ProductItem";

interface IProductProps{
    params: Promise<{id: string}>,
    searchParams: Promise<{}>
}

async function Product({params}: IProductProps) {
  const result = await fetch(`http://localhost:8000/product/${(await params).id}`);
  const product = (await result.json()) as IProductItemProps;
  return (
    <Container>
      <div className="grid grid-cols-12 mt-8 shadow-md rounded">
        <div className="col-span-3">
          <img src={product.imageURL} alt={product.title} />
        </div>
        <div className="col-span-9 p-4">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-slate-700">
            {product.description}
          </p>
          <p className="text-xl">
            Price: <span>{product.price}$</span>
          </p>

          <div className="mt-4">
            <button className="py-1 px-2 rounded-2xl bg-slate-200">+</button>
            <span className="mx-4">3</span>
            <button className="py-1 px-2 rounded-2xl bg-slate-200">-</button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Product;
