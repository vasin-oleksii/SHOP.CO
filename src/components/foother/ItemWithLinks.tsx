import { GridItem, Flex, Heading, VStack, Link } from "@chakra-ui/react";

interface ItemWithLinksProps {
  title: string;
  links: string[];
}

const ItemWithLinks = ({ title, links }: ItemWithLinksProps) => {
  return (
    <GridItem>
      <Flex align="start" flexDirection="column" justify="left">
        <Heading
          mt={{ base: "", lg: "10px" }}
          textTransform="uppercase"
          fontSize={{ base: "sm", xl: "md" }}
        >
          {title}
        </Heading>
        <VStack
          mt={{ base: "16px", lg: "26px" }}
          spacing="15px"
          alignItems="start"
        >
          {links.map((el, i) => (
            <Link key={i} fontSize={{ base: "sm", xl: "md" }} color="greyText">
              {el}
            </Link>
          ))}
        </VStack>
      </Flex>
    </GridItem>
  );
};

export default ItemWithLinks;
