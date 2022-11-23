import { Heading, Flex, Text, Link } from "@chakra-ui/react";
import { useRef } from "react";
import { Link as RRLink } from "react-router-dom";
import { getAllBeefs } from "../util/getAllBeefs";
import memoize from "lodash/memoize";

import { colord, Colord, extend } from "colord";
import labPlugin from "colord/plugins/lab";
extend([labPlugin]);

const allBeefs = getAllBeefs();
const getBeefedColor = memoize((match: Colord): Colord => {
  let bestDelta = 1;
  let bestMatch = colord(allBeefs[0]);
  allBeefs.forEach((beefHex) => {
    const beef = colord(`#${beefHex}`);
    const delta = match.delta(beef);
    if (delta < bestDelta) {
      bestDelta = delta;
      bestMatch = beef;
    }
  });
  return bestMatch;
});

export const BeefifyPage = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const handleInputChange = () => {
    const filesEl = fileRef.current;
    const canvasEl = canvasRef.current;

    if (filesEl && canvasEl) {
      const files = fileRef.current.files;
      const ctx = canvasEl.getContext("2d");

      if (ctx === null) {
        return;
      }

      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

      if (files !== null && files.length > 0) {
        const [file] = files;
        const objectUrl = URL.createObjectURL(file);
        const img = new Image();
        img.src = objectUrl;
        img.onload = () => {
          var ratio = img.naturalWidth / img.naturalHeight;
          var width = canvasEl.width;
          var height = width / ratio;
          canvasEl.height = height;
          ctx.drawImage(img, 0, 0, width, height);

          const imageData = ctx.getImageData(
            0,
            0,
            canvasEl.width,
            canvasEl.height
          );
          const data = imageData.data;
          for (let i = 0; i < data.length; i += 4) {
            const originalColor = colord({
              r: data[i],
              g: data[i + 1],
              b: data[i + 2],
            });
            const beefedColor = getBeefedColor(originalColor);
            data[i] = beefedColor.toRgb().r;
            data[i + 1] = beefedColor.toRgb().g;
            data[i + 2] = beefedColor.toRgb().b;
          }
          ctx.putImageData(imageData, 0, 0);
        };
      }
    }
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);

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
      <Text fontSize="12px">
        It will automatically start beefifying as soon as you select an image.
        It won't look like it's doing anything, but it is. Give it a few
        minutes. Beefifying is hard work and no one is getting paid for this.
      </Text>
      <input
        type="file"
        accept="image/*"
        ref={fileRef}
        onChange={handleInputChange}
      ></input>
      <canvas ref={canvasRef} />
    </Flex>
  );
};
