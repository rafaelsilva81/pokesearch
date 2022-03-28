import {
  Button,
  Container,
  Flex,
  FormControl,
  HStack,
  IconButton,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import "../styles/home.css";
import { FaSearch } from "react-icons/fa";
import {MdCatchingPokemon} from "react-icons/md";
import {RiSwordFill} from "react-icons/ri"


export default function Home() {
  return (
    <Flex
      alignItems="center"
      height="100vh"
      className="main-home"
      backgroundColor={"#3648C9"}
    >
      <Container>
        {/* Vstack central */}
        <VStack spacing="1.2em" align="left">
          {/* Texto Principal */}
          <Text align="left" fontSize="7xl" className="main-text">
            PokeSEARCH !
          </Text>

          {/* Formulario de pesquisa de Pokemon */}
          <FormControl>
            <HStack>
              <Input
                id="search"
                size='lg'
                backgroundColor={"#EDF2F7"}
                focusBorderColor={"#3648C9"}
                type="text"
                placeholder="Pesquise por nome ou número"
              />
              <IconButton
                mt={4}
                size='lg'
                colorScheme={"blue"}
                type="submit"
                icon={<FaSearch />}
              />
            </HStack>
          </FormControl>

          {/*  Botões adicionais Arena e Teambuilder */}
          <HStack spacing={2}>
            <Button leftIcon={<RiSwordFill />} colorScheme="blue" variant="solid"> Arena </Button>
            <Button leftIcon={<MdCatchingPokemon />} colorScheme="blue" variant="solid"> Teambuilder </Button>
          </HStack>
        </VStack>
      </Container>
    </Flex>
  );
}
