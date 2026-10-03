export interface IProductItemProps {
  id: string;
  title: string;
  imageURL: string;
  description: string;
  price: number;
}

export interface IProductList {
  first: number | null;
  items: number | null;
  last: number | null;
  next: number | null;
  pages: number;
  prev: number | null;
  data: IProductItemProps[];
}

function ProductItem({ title, imageURL, price }: IProductItemProps) {
  return (
    <div className="shadow-md">
      <div className="h-80 overflow-hidden">
        <img alt={title} src={imageURL} className="w-full h-full object-cover" />
      </div>
      <div className="p-2">
        <h3 className="font-bold">{title}</h3>
        <p>
          Price: <span>{price}$</span>
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
