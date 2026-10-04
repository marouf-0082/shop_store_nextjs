"use client";
import Container from "@/components/Container";
import axios from "axios";
import { ChangeEvent, useState } from "react";

function Dashboard() {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
  });

  const handleChangeProduct = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target;

    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleCreateProduct = async () => {
    console.log(newProduct);

    await axios.post("http://localhost:3004/product", {
      title: newProduct.title,
      imageURL: newProduct.image,
      description: newProduct.description,
      price: newProduct.price,
    });
  };
  return (
    <div className="bg-slate-300 p-4">
      <Container>
        <div className="grid grid-cols-3 gap-4">
          <input
            onChange={handleChangeProduct}
            name="title"
            type="text"
            placeholder="Title"
          />
          <input
            onChange={handleChangeProduct}
            name="price"
            type="text"
            placeholder="Price"
          />
          <input
            onChange={handleChangeProduct}
            name="image"
            type="text"
            placeholder="Photo"
          />
        </div>
        <textarea
          onChange={handleChangeProduct}
          name="description"
          className="w-full mt-4"
          placeholder="Description"
        ></textarea>
        <button
          onClick={handleCreateProduct}
          className="bg-sky-500 text-white rounded px-4 py-1"
        >
          Create
        </button>
      </Container>
    </div>
  );
}

export default Dashboard;
