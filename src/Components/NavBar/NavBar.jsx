import React, { useEffect, useState } from "react";
import Link from "next/link";
const NavBar = () => {
  const navLinks = [
    { id: 1, link: "Home", url: "/" },
    { id: 2, link: "About Us", url: "/about-us" },
    { id: 3, link: "Contact Us", url: "/contact-us" },
    { id: 4, link: "Blogs", url: "/blogs" },
  ];
  const [stickyNav, setStickyNav] = useState(false);
  const navHandler = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", navHandler);
  }, []);
  return (
    <>
      <div
        className={`${
          stickyNav
            ? "flex gap-4 justify-center items-center h-16 mb-5 bg-gray-900 sticky top-0"
            : "flex gap-4 justify-center items-center h-16 mb-5 bg-gray-900"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.id}
            className="text-base md:text-xl font-medium text-gray-200 hover:text-gray-300 duration-200 ease-in-out"
            href={link.url}
          >
            {link.link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default NavBar;
