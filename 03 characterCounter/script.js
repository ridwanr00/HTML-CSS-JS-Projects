let totalCharacter = 0;

const counter = () => {
  const words = document.getElementById("paragraph").value;
  const total = words.split("");
  console.log(total.length);
  totalCharacter = total.length;
  document.getElementById(
    "count"
  ).innerHTML = `character count: ${totalCharacter}`;
  document.getElementById("remaining").innerHTML = `character remaining: ${
    1000 - totalCharacter
  }`;
};

const darkMode = () => {
  var element = document.body
  element.classList.toggle("dark-mode")
  document.getElementById('dark-mode').innerText = 'Light Mode'
}