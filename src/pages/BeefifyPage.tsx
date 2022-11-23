import { Heading, Flex, Text, Link, Button, Image } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Link as RRLink } from "react-router-dom";

export const BeefifyPage = () => {
  const fileRef = useRef<HTMLInputElement>(null);

  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const handleInputChange = () => {
    if (fileRef.current) {
      const files = fileRef.current.files;
      if (files === null || files.length < 1) {
        setImgSrc(null);
      } else {
        const [file] = files;
        setImgSrc(URL.createObjectURL(file));
      }
    }
  };

  return (
    <Flex
      padding={4}
      justifyContent="center"
      alignItems="start"
      flexDirection="column"
      gap={4}
    >
      <Link as={RRLink} to="/" css={{ color: "#22beef" }}>
        {`< `}Back 2 Beefs
      </Link>
      <Heading>Let's get down to beefing.</Heading>
      <Text>Submit an image and we will beefify it so you don't have to.</Text>
      <input type="file" ref={fileRef} onChange={handleInputChange}></input>

      {imgSrc && (
        <>
          <Image src={imgSrc} alt="your beef" />
          <Button bgColor="#beef69" disabled>
            Beefify It
          </Button>
        </>
      )}
    </Flex>
  );
};
