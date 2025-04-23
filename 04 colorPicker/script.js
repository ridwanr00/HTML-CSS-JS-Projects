const getColor = () => {
  const color = document.getElementById("color").value;
  console.log(color)
  document.getElementById(
    "result"
  ).innerHTML = `HEX: ${color} | RGB: ${hexToRgb(color)}`;
  document.getElementsByTagName("html")[0].style["background-color"] = color;
  document.getElementById("container").style["background-color"] =
    complementaryColor(color);
};

const inputHex = () => {
  const value = document.getElementById("hex").value;
  console.log(value)
  document.getElementById(
    "result"
  ).innerHTML = `HEX: ${value} | RGB: ${hexToRgb(value)}`;
  document.getElementsByTagName("html")[0].style["background-color"] = `${value}`;
  document.getElementById("container").style["background-color"] =
    complementaryColor(value);
  document.getElementById("color").value = value
};

function hexToRgb(hex) {
  // Remove the '#' if it exists
  hex = hex.replace(/^#/, "");

  // Parse the hex value into its red, green, and blue components
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Return the RGB string
  return `rgb(${r}, ${g}, ${b})`;
}

function complementaryColor(hex) {
  // Remove the '#' if it exists
  hex = hex.replace(/^#/, "");

  // Parse the hex value into its red, green, and blue components
  const bigint = parseInt(hex, 16);
  const x = (bigint >> 16) & 255;
  const y = (bigint >> 8) & 255;
  const z = bigint & 255;

  const r = 255 - x;
  const g = 255 - y;
  const b = 255 - z;

  // Return the RGB string
  return `rgb(${r}, ${g}, ${b})`;
}
