import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// interface NavItemProps {
//   children: React.ReactNode;
//   href?: string;
// }
// function NavItem({ children, href }: NavItemProps) {
//   return (
//     <li>
//       <Typography
//         as="a"
//         href={href || "#"}
//         target={href ? "_blank" : "_self"}
//         variant="small"
//         className="font-medium"
//       >
//         {children}
//       </Typography>
//     </li>
//   );
// }

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

function NavItem({ children, href, onClick }: NavItemProps) {
  const isAnchor = !!href;

  if (isAnchor) {
    return (
      <li>
        <Typography
          as="a"
          href={href || "#"}
          target={href ? "_blank" : "_self"}
          variant="small"
          className="font-medium"
        >
          {children}
        </Typography>
      </li>
    );
  } else {
    return (
      <li>
        <Typography
          as="div"
          onClick={onClick}
          variant="small"
          className="font-medium"
          style={{ cursor: "pointer" }}
        >
          {children}
        </Typography>
      </li>
    );
  }
}


export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* <Typography
          as="a"
          href="https://www.material-tailwind.com"
          target="_blank"
          variant="h6"
          color={isScrolling ? "gray" : "white"}
        >
          Material Tailwind
        </Typography> */}
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <NavItem onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}>
            Home
          </NavItem>
          
          <NavItem onClick={() => {
            window.scrollTo({
              top: document.getElementById('about-us')?.offsetTop ?? 0,
              behavior: 'smooth'
            });
          }}>
            About Us
          </NavItem>

          <NavItem onClick={() => {
            window.scrollTo({
              top: document.getElementById('contacts')?.offsetTop ?? 0,
              behavior: 'smooth'
            });
          }}>
            Contacts
          </NavItem>
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-center">
          <a href="https://www.facebook.com/TheSmartFeeder" target="_blank">
            <IconButton
              variant="text"
              color={isScrolling ? "gray" : "white"}
              size="sm"
            >
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
          </a>
          <a href="https://www.instagram.com/301horses/" target="_blank">
            <IconButton
              variant="text"
              color={isScrolling ? "gray" : "white"}
              size="sm"
            >
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
          </a>
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem href="https://www.material-tailwind.com/docs/react/installation">
              Home
            </NavItem>
            <NavItem href="https://www.material-tailwind.com/docs/react/installation">
              About Us
            </NavItem>
            <NavItem href="https://www.material-tailwind.com/docs/react/installation">
              Contact Us
            </NavItem>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <a href="https://www.facebook.com/TheSmartFeeder" target="_blank">
              <IconButton variant="text" color="gray" size="sm">
                <i className="fa-brands fa-facebook text-base" />
              </IconButton>
            </a>
            <a href="https://www.instagram.com/301horses/" target="_blank">
              <IconButton variant="text" color="gray" size="sm">
                <i className="fa-brands fa-instagram text-base" />
              </IconButton>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
