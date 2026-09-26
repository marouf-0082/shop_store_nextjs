import AddToCart from "@/components/AddToCart";
import Container from "@/components/Container";
import { IProductItemProps } from "@/components/ProductItem";

interface IProductProps{
    params: Promise<{id: string}>,
    searchParams: Promise<{}>
}

async function Product({params}: IProductProps) {
  const {id} = await params;
  const result = await fetch(`http://localhost:8000/product/${id}`);
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

         <AddToCart id={id}/>
        </div>
      </div>
    </Container>
  );
}

export default Product;
