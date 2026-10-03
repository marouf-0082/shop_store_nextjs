"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { useShoppingCartContext } from "@/context/ShopingCartContext";

function Navbar() {
  const {cartTotalQty} = useShoppingCartContext();
  const pathName = usePathname();
  const navLinks = [
    {
      id: "1",
      title: "Home",
      href: "/",
    },
    {
      id: "2",
      title: "Store",
      href: "/store",
    },
    {
      id: "3",
      title: "Dashboard",
      href: "/dashboard",
    },
  ];


  return (
    <nav className="shadow p-4">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <ul className="flex items-center space-x-2">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`${pathName === item.href ? "text-blue-500" : "text-slate-700"}`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <span className="p-1 bg-red-600 text-white rounded-full">{cartTotalQty}</span>
            <Link href={"/cart"}>Cart</Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
