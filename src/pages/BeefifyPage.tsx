import {
  Heading,
  Flex,
  Text,
  Link,
  Button,
  Image as ChakraImage,
  ButtonGroup,
  textDecoration,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Link as RRLink } from "react-router-dom";
import { getAllBeefs } from "../util/getAllBeefs";
import memoize from "lodash/memoize";

import markUrl from "../img/beefify_mark.png";

import { colord, Colord, extend } from "colord";
import labPlugin from "colord/plugins/lab";
extend([labPlugin]);

/**
 * we reduce the number of beefs in our palette by quite a
 * bit cause honestly it all looks like the same.
 * don't tell the beef police
 * */
const mostBeefs = getAllBeefs().filter((_, idx) => idx % 20 === 0);

const getBeefedColor = memoize((match: Colord): Colord => {
  let bestDelta = 1;
  let bestMatch = colord(mostBeefs[0]);
  mostBeefs.forEach((beefHex) => {
    const beef = colord(`#${beefHex}`);
    const delta = match.delta(beef);
    if (delta < bestDelta) {
      bestDelta = delta;
      bestMatch = beef;
    }
  });
  return bestMatch;
});

const MAX_WIDTH = 300;

function getOutputSrc(
  inputSrc: string,
  setOutputSrc: (str: string) => void
): void {
  const canvasEl = document.createElement("canvas");
  const ctx = canvasEl.getContext("2d", { willReadFrequently: true })!;
  let outputSrc: string = "";

  const img = new Image();
  img.src = inputSrc;
  img.onload = () => {
    canvasEl.width = Math.min(MAX_WIDTH, img.naturalWidth);

    var ratio = img.naturalWidth / img.naturalHeight;
    var width = canvasEl.width;
    var height = width / ratio;
    canvasEl.height = height;
    ctx.drawImage(img, 0, 0, width, height);

    const imageData = ctx.getImageData(0, 0, canvasEl.width, canvasEl.height);
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

    const markImg = new Image();
    markImg.src = markUrl;
    markImg.onload = () => {
      ctx.drawImage(markImg, 0, 0);

      outputSrc = canvasEl.toDataURL();
      canvasEl.remove();
      setOutputSrc(outputSrc);
    };
  };
}

interface BeefifyState {
  inputSrc: string | null;
  outputSrc: string | null;
  mode: "init" | "loading" | "done";
}
export const BeefifyPage = () => {
  const fileRef = useRef<HTMLInputElement>(null);

  const [state, setState] = useState<BeefifyState>({
    inputSrc: null,
    outputSrc: null,
    mode: "init",
  });

  const handleInputChange = () => {
    const filesEl = fileRef.current;
    if (filesEl) {
      const files = fileRef.current.files;
      if (files === null || files.length < 1) {
        setState({
          inputSrc: null,
          outputSrc: null,
          mode: "init",
        });
      } else {
        const [file] = files;
        setState({
          inputSrc: URL.createObjectURL(file),
          outputSrc: null,
          mode: "init",
        });
      }
    }
  };

  const handleBeefifyClick = async () => {
    setState((s) => ({
      ...s,
      mode: "loading",
    }));
    setTimeout(() => {
      if (state.inputSrc) {
        getOutputSrc(state.inputSrc, (outputSrc) =>
          setState((s) => ({
            ...s,
            outputSrc,
            mode: "done",
          }))
        );
      }
    }, 25);
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
      <input
        type="file"
        accept="image/*"
        ref={fileRef}
        onChange={handleInputChange}
      ></input>
      {state.inputSrc && (
        <ChakraImage
          maxW={`${MAX_WIDTH}px`}
          src={state.outputSrc || state.inputSrc}
        />
      )}
      <ButtonGroup>
        <Button
          bgColor={"#69beef"}
          onClick={handleBeefifyClick}
          isLoading={state.mode === "loading"}
          isDisabled={state.mode === "done" || state.inputSrc === null}
        >
          {state.mode === "done" ? "🥲 Beautiful..." : "🥩 Beefify it."}
        </Button>
        {state.outputSrc && (
          <Button
            as={Link}
            bgColor={"#6beef9"}
            _hover={{ textDecoration: "none" }}
            href={state.outputSrc}
            download="beefified.png"
          >
            💾 Download Your Beef
          </Button>
        )}
      </ButtonGroup>
    </Flex>
  );
};
