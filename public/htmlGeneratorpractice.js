const pageHeader = document.getElementById("home-page-header");

export const htmlGenerator = (string, htmlElement) => {
//   if (htmlElement.children) {
//       Array.from(htmlElement.children).forEach(child => htmlElement.removeChild(child));
//   };
  const pTag = document.createElement("p");
  pTag.innerHTML = string;
//   console.log(pTag);
//   console.log(string);
//   console.log(htmlElement);
  htmlElement.appendChild(pTag);
};

htmlGenerator(
  "Welcome to trendGET! Find out who is searching what!",
  pageHeader
);
