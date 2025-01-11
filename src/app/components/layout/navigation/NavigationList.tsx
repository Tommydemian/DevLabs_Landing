import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
// Components
// Lib
import { isActiveLink } from "@/app/lib/utils/isActiveLink";
// Types & Data
import { navLinks } from "@/data/navLinks";

// type NavigationListProps = {
//   navItems: SettingsDocumentData["navigation_link"];
//   pathname: string;
//   toggleState: () => void;
//   handleStateClose: () => void;
//   handleStateOPen: () => void;
//   isOpen: boolean;
//   isDesktop: boolean;
// };

export const NavigationList: React.FC = (
  {
    //   navItems,
    //   pathname,
    //   handleStateClose,
    //   handleStateOPen,
    //   isDesktop,
    //   isOpen,
    //   toggleState,
  },
) => {
  //   const pathname = usePathname();
  return (
    <ul
      role="list"
      className="relative hidden items-start gap-8 text-[20px] text-nav-link max-md:mb-[7.5rem] md:ml-9 md:flex md:flex-row md:items-center md:justify-center"
    >
      {navLinks?.map((link) => {
        // const isActive = isActiveLink(link, pathname);
        return (
          //   <NavLinkItem
          //     index={index}
          //     isActive={isActive}
          //     link={link}
          //     key={link.key}
          //     isOpen={isOpen}
          //     handleStateClose={handleStateClose}
          //     handleStateOPen={handleStateOPen}
          //     toggleState={toggleState}
          //     isDesktop={isDesktop}
          //   />
          <li key={link.label}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};
