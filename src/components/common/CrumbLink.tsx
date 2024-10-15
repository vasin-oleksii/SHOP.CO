import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CrumbLink = ({ pathname }: { pathname: string }) => {
  const arrPatname = pathname.split("/");

  return (
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
      {arrPatname.map((link, i) => {
        switch (link) {
          case "product":
            link = "Category";
            break;
        }

        if (link.length > 10) {
          return;
        }

        return (
          <BreadcrumbItem key={i}>
            <Link to={"/" + link}>{link === "" ? "Home" : link}</Link>
          </BreadcrumbItem>
        );
      })}

      {/* isCurrentPage */}
    </Breadcrumb>
  );
};

export default CrumbLink;
