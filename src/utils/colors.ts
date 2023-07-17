interface extractRGBValuesProps {
  rgb: number[];
  opacity: number;
}

export default function convertColorToRGBA(color: string): string | null {
  if (!color) {
    return null;
  }
  if (color.startsWith("#")) {
    const fullHex = color.length === 4 ? expandShortHex(color) : color;
    const hexValues = getHexValues(fullHex);
    if (hexValues) {
      return `rgba(${hexValues.join(", ")}, 1)`;
    } else {
      console.warn(`Invalid hex code format: ${color}`);
    }
  } else if (color.startsWith("rgb")) {
    const rgbValues = extractRGBValues(color);
    if (rgbValues) {
      return `rgba(${rgbValues.rgb.join(", ")}, ${rgbValues.opacity})`;
    } else {
      console.warn(`Invalid rgb format: ${color}`);
    }
  } else {
    console.warn(`Invalid color format: ${color}`);
  }
  return color;
}

function expandShortHex(hex: string): string {
  return hex
    .slice(1)
    .split("")
    .map((char) => char + char)
    .join("");
}

function getHexValues(hex: string): number[] | null {
  const hexValues = hex.match(/[A-Fa-f0-9]{2}/g);
  if (hexValues) {
    return hexValues.map((value) => parseInt(value, 16));
  }
  return null;
}
function extractRGBValues(color: string): extractRGBValuesProps | null {
  const startIndex = color.indexOf("(");
  const endIndex = color.indexOf(")");
  if (startIndex !== -1 && endIndex !== -1) {
    const rgbString = color.slice(startIndex + 1, endIndex);
    const rgbaValues = rgbString
      .split(",")
      .map((value) => parseFloat(value.trim()));
    if (rgbaValues.length >= 3 && rgbaValues.length <= 4) {
      const rgb = rgbaValues.slice(0, 3);
      const opacity = rgbaValues[3] || 1;
      return { rgb, opacity };
    }
  }
  return null;
}

export function convertHexToRGB(color: string | null): string {
  if (!color) return "";
  if (color.startsWith("rgb") || color.startsWith("rgba")) {
    const rgbValues = color.match(/\d+/g);
    if (rgbValues && rgbValues.length === 3) {
      return `${rgbValues.join(", ")}`;
    } else if (rgbValues && rgbValues.length === 4) {
      const rgba = rgbValues.join(", ");
      const lastCommaIndex = rgba.lastIndexOf(",");
      const rgb = rgba.slice(0, lastCommaIndex);
      return rgb;
    }
  }
  if (color.startsWith("#")) {
    color = color.slice(1);
  }

  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);

  return `${r}, ${g}, ${b}`;
}
