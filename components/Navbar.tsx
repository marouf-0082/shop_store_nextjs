"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

function Navbar() {
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
  ];
  return (
    <nav className="shadow p-4" >
      <Container>
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
      </Container>
    </nav>
  );
}

export default Navbar;
