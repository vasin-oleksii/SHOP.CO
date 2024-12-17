import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CrumbLink = ({ pathname }: { pathname: string }) => {
  const arrPatname = pathname.split("/");
  const arrWithWordsToUpperCase = arrPatname.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return (
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
      {arrWithWordsToUpperCase.map((linkName, i) => {
        if (linkName.length > 20) return null;

        let link;
        switch (linkName.toLowerCase()) {
          case "product":
            link = "/category";
            break;
          case "category":
            link = "?page=1";
            break;
          case "cart":
            link = "/cart";
            break;
          case "":
            link = "/";
            break;
          default:
            link = `/${linkName.toLowerCase()}`;
        }

        const isHome = linkName === "";
        return (
          <BreadcrumbItem key={i}>
            <Link to={link}>{isHome ? "Home" : linkName}</Link>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

export default CrumbLink;
