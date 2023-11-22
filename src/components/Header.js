import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faStackOverflow,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faInstagram,
    url: "https://www.instagram.com/drivepro.moped.almaty/",
  },
  {
    icon: faWhatsapp,
    url: "https://wa.me/+77770889998",
  },
  {
    icon: faTelegram,
    url: "https://telegram.me/gigxkcjfb",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
            {"https://google.com"}
              {socials.map(({icon, url})=>(
                <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={icon} size="2x" key={url} />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {"https://stackoverflow.com/questions/69709276/formik-yup-not-working-unable-to-resolve-module"}
              <a href="#projects" onClick={handleClick("projects")}>
                О НАС
              </a>
              <a href="#contact-me" onClick={handleClick("contactme")}>
                СВЯЗАТЬСЯ
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
