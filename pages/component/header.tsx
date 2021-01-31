import React,{useEffect,useState} from "react";
import { 
  Box, 
  Flex, 
  Button,  
  Image,
  Menu,
  MenuButton,
  MenuList,
  Text,
  MenuItem,
  Portal
} from "@chakra-ui/core";
import Link from "next/link";

const MenuItemses = ({ children }) => (
  <Button
    mt={[
      "5", // base
      "5", // 480px upwards
      "5", // 768px upwards
      "0", // 992px upwards
    ]}
    mx="5px"
    height="30px"
    padding={["10px","10px","10px","30px 0"]}
    _hover={{ 
      transform: "scale(1.03)" ,
      borderBottom:"1px solid black"
    }}
    textDecoration="none"
    backgroundColor="none"
    borderRadius="0"
    display="flex"
    width={["100%","100%","100%","fit-content"]}
  >
    {children}
  </Button>
);

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Header = () => {
  const [show, setShow] = useState(false);
  const [scrollNav, setScrollnav] = useState(false);
  const handleToggle = () => setShow(!show);
  const changeNav = () => {
    if (window.scrollY > 3) {
      setScrollnav(true);
    } else {
      setScrollnav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
    {show || scrollNav ?
    <Flex
    w="100%"
    align="center"
    justify="center"
    top="0"
    left="0"
    zIndex={4}
    shadow=""
    pos="fixed"
    as="nav"
    color = "#060049"
    
    backgroundColor={[
      show || scrollNav ? "white":"transparent",
      show || scrollNav ? "white":"transparent",
      show || scrollNav ? "white":"transparent",
      scrollNav ? "white":"transparent",
    ]}
    boxShadow = {[
      show || scrollNav ? "0px 4px 20px rgba(0, 0, 0, 0.15);":"transparent",
      show || scrollNav ? "0px 4px 20px rgba(0, 0, 0, 0.15);":"transparent",
      show || scrollNav ? "0px 4px 20px rgba(0, 0, 0, 0.15);":"transparent",
      scrollNav ? "0px 4px 20px rgba(0, 0, 0, 0.15);":"transparent",
    ]}
    transition="0.5s all linear"
  >
    <Flex
      width={["100%","100%","100%","90%"]}
      justify="space-between"
      wrap="wrap"
      padding="2rem"
    >
      {scrollNav || show ? 
      <Flex align="center" mr={5} justifyContent="center">
        <Image width={["30px","30px","30px","50px"]} src="piptek.png"/>
        <Box
            fontSize={["16px","16px","16px","20px"]}
            fontFamily="heading"
            fontWeight="bold"
            mt="0"
            paddingX={["15px","15px","15px","30px"]}
          >
            PIPTEK IME FTUI 2021
          </Box>
      </Flex>
      :
      <Flex align="center" mr={2} justifyContent="center"></Flex>
    }

      <Flex
        display={[
          "block", // base
          "block", // 480px upwards
          "block", // 768px upwards
          "none", // 992px upwards
        ]}
        onClick={handleToggle}
        cursor="pointer"
        alignItems="center"
        padding={["10px","10px","10px","30px 0"]}
        backgroundColor="rgba(255,255,255,0.5)"
      >
        <svg
          fill="black"
          width="20px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menus</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Flex>

      <Flex
          display={[
            show ? "block" : "none", // base
            show ? "block" : "none", // 480px upwards
            show ? "block" : "none", // 768px upwards
            "flex", // 992px upwards
          ]}
          width={[
            "full", // base
            "full", // 480px upwards
            "full", // 768px upwards
            "auto", // 992px upwards
          ]}
          textAlign="center"
          align="right"
          alignSelf="center"
          alignItems="center"
        >
          <MenuItemses>
          <Menu>
          <Link href="/">
              <MenuButton
              as={Button}
              padding="30px 20px"
                transition="all 0.2s linear"
                border="none"
                backgroundColor="transparent"
                _hover={{ outline:"none"}}
                _focus={{ outline:"none" }}
                _active={{ outline:"none" }}
              >
              HOME</MenuButton></Link>
            </Menu>
          </MenuItemses>
          <MenuItemses>
          <Menu>
          <Link href="/pkm">
              <MenuButton
              as={Button}
              padding="30px 20px"
                transition="all 0.2s linear"
                border="none"
                backgroundColor="transparent"
                _hover={{ outline:"none"}}
                _focus={{ outline:"none" }}
                _active={{ outline:"none" }}
              >
              PKM</MenuButton></Link>
            </Menu>
          </MenuItemses>
          <MenuItemses>
          <Menu>
              <MenuButton
              as={Button}
              padding="30px 20px"
                transition="all 0.2s linear"
                border="none"
                backgroundColor="transparent"
                _hover={{ outline:"none"}}
                _focus={{ outline:"none" }}
                _active={{ outline:"none" }}
              >PROGRAM KERJA</MenuButton>
              <MenuList 
              backgroundColor="white"
              position={["static","static","static","absolute"]}
              color="#060049"
              zIndex={5}
              overflow="auto"
              width={["100%","100%","100%","fit-content"]}
              >
                <Link href="/pkmservice">
                <MenuItem as="h1">PKM SERVICE</MenuItem>
                </Link>
                <Link href="/rotom">
                <MenuItem as="h1">ROTOM</MenuItem>
                </Link>
                <Link href="/technoskill">
                <MenuItem as="h1">TECHNOSKILL</MenuItem>
                </Link>
                <Link href="/echa">
                <MenuItem as="h1">ECHA</MenuItem>
                </Link>
                <Link href="/mki">
                <MenuItem as="h1">MKI</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </MenuItemses>
          <MenuItemses>
            <Menu>
              <MenuButton
                as={Button}
                padding="30px 20px"
                transition="all 0.2s linear"
                border="none"
                backgroundColor="transparent"
                _hover={{ outline:"none"}}
                _focus={{ outline:"none"}}
                _active={{ outline:"none"}}
              >KLUB ILMIAH</MenuButton>
              <MenuList 
              backgroundColor="white"
              position={["static","static","static","absolute"]}
              color="#060049"
              zIndex={5}
              overflow="auto"
              width={["100%","100%","100%","fit-content"]}
              >
                <Link href="/exercise">
                <MenuItem as="h1">EXERCISE</MenuItem>
                </Link>
                <Link href="/ieee">
                <MenuItem as="h1">IEEE</MenuItem>
                </Link>
                <Link href="/asbe">
                <MenuItem as="h1">ASBE</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </MenuItemses>
          <MenuItemses>
          <Menu>
          <Link href="/aboutus">
              <MenuButton
                as={Button}
                padding="30px 20px"
                transition="all 0.2s linear"
                border="none"
                backgroundColor="transparent"
                _hover={{ outline:"none"}}
                _focus={{ outline:"none" }}
                _active={{ outline:"none" }}
              >
            ABOUT US
            </MenuButton></Link>
            </Menu>
          </MenuItemses>
        </Flex>
    </Flex>
  </Flex>
    :
    <Flex
      w="100%"
      align="center"
      justify="center"
      top="0"
      left="0"
      zIndex={4}
      shadow=""
      pos="fixed"
      as="nav"
      color = "#fff"
      
      backgroundColor={[
        show || scrollNav ? "white":"transparent",
        show || scrollNav ? "white":"transparent",
        show || scrollNav ? "white":"transparent",
        scrollNav ? "white":"transparent",
      ]}
      boxShadow = {[
        show || scrollNav ? "0px 4px 20px rgba(0, 0, 0, 0.15);":"transparent",
        show || scrollNav ? "0px 4px 20px rgba(0, 0, 0, 0.15);":"transparent",
        show || scrollNav ? "0px 4px 20px rgba(0, 0, 0, 0.15);":"transparent",
        scrollNav ? "0px 4px 20px rgba(0, 0, 0, 0.15);":"transparent",
      ]}
      transition="0.5s all linear"
    >
      <Flex
        width={["100%","100%","100%","90%"]}
        justify="space-between"
        wrap="wrap"
        padding="2rem"
      >
        {scrollNav || show ? 
        <Flex align="center" mr={5} justifyContent="center">
          <Image width={["30px","30px","30px","50px"]} src="piptek.png"/>
          <Box
              fontSize={["16px","16px","16px","20px"]}
              fontFamily="heading"
              fontWeight="bold"
              mt="0"
              paddingX={["15px","15px","15px","30px"]}
            >
              PIPTEK IME FTUI 2021
            </Box>
        </Flex>
        :
        <Flex align="center" mr={2} justifyContent="center"></Flex>
      }

        <Flex
          display={[
            "block", // base
            "block", // 480px upwards
            "block", // 768px upwards
            "none", // 992px upwards
          ]}
          onClick={handleToggle}
          cursor="pointer"
          alignItems="center"
          padding={["10px","10px","10px","30px 0"]}
          backgroundColor="rgba(255,255,255,0.5)"
        >
          <svg
            fill="black"
            width="20px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menus</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Flex>

        <Flex
          display={[
            show ? "block" : "none", // base
            show ? "block" : "none", // 480px upwards
            show ? "block" : "none", // 768px upwards
            "flex", // 992px upwards
          ]}
          width={[
            "full", // base
            "full", // 480px upwards
            "full", // 768px upwards
            "auto", // 992px upwards
          ]}
          textAlign="center"
          align="right"
          alignSelf="center"
          alignItems="center"
        >
          <MenuItemses>
          <Menu>
          <Link href="/">
              <MenuButton
              as={Button}
              padding="30px 20px"
                transition="all 0.2s linear"
                border="none"
                backgroundColor="transparent"
                _hover={{ outline:"none"}}
                _focus={{ outline:"none" }}
                _active={{ outline:"none" }}
              >
              HOME</MenuButton></Link>
            </Menu>
          </MenuItemses>
          <MenuItemses>
          <Menu>
          <Link href="/pkm">
              <MenuButton
              as={Button}
              padding="30px 20px"
                transition="all 0.2s linear"
                border="none"
                backgroundColor="transparent"
                _hover={{ outline:"none"}}
                _focus={{ outline:"none" }}
                _active={{ outline:"none" }}
              >
              PKM</MenuButton></Link>
            </Menu>
          </MenuItemses>
          <MenuItemses>
          <Menu>
              <MenuButton
              as={Button}
              padding="30px 20px"
                transition="all 0.2s linear"
                border="none"
                backgroundColor="transparent"
                _hover={{ outline:"none"}}
                _focus={{ outline:"none" }}
                _active={{ outline:"none" }}
              >PROGRAM KERJA</MenuButton>
              <MenuList 
              backgroundColor="white"
              position={["static","static","static","absolute"]}
              color="#060049"
              zIndex={5}
              overflow="auto"
              width={["100%","100%","100%","fit-content"]}
              >
                <Link href="/pkmservice">
                <MenuItem as="h1">PKM SERVICE</MenuItem>
                </Link>
                <Link href="/rotom">
                <MenuItem as="h1">ROTOM</MenuItem>
                </Link>
                <Link href="/technoskill">
                <MenuItem as="h1">TECHNOSKILL</MenuItem>
                </Link>
                <Link href="/echa">
                <MenuItem as="h1">ECHA</MenuItem>
                </Link>
                <Link href="/mki">
                <MenuItem as="h1">MKI</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </MenuItemses>
          <MenuItemses>
            <Menu>
              <MenuButton
                as={Button}
                padding="30px 20px"
                transition="all 0.2s linear"
                border="none"
                backgroundColor="transparent"
                _hover={{ outline:"none"}}
                _focus={{ outline:"none"}}
                _active={{ outline:"none"}}
              >KLUB ILMIAH</MenuButton>
              <MenuList 
              backgroundColor="white"
              position={["static","static","static","absolute"]}
              color="#060049"
              zIndex={5}
              overflow="auto"
              width={["100%","100%","100%","fit-content"]}
              >
                <Link href="/exercise">
                <MenuItem as="h1">EXERCISE</MenuItem>
                </Link>
                <Link href="/ieee">
                <MenuItem as="h1">IEEE</MenuItem>
                </Link>
                <Link href="/asbe">
                <MenuItem as="h1">ASBE</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </MenuItemses>
          <MenuItemses>
          <Menu>
          <Link href="/aboutus">
              <MenuButton
                as={Button}
                padding="30px 20px"
                transition="all 0.2s linear"
                border="none"
                backgroundColor="transparent"
                _hover={{ outline:"none"}}
                _focus={{ outline:"none" }}
                _active={{ outline:"none" }}
              >
            ABOUT US
            </MenuButton></Link>
            </Menu>
          </MenuItemses>
        </Flex>
      </Flex>
    </Flex>
    }
    </>
  );
};

export default Header;
