const URL = "https://api.npoint.io/7bbd3a59c401f616bb89";
let factpara1 = document.querySelector("#facts1");
let factpara2 = document.querySelector("#facts2");
let image = document.querySelector("#image");
let btn1 = document.querySelector("#btn");

const fetchData = async () => {
  try {
    let response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    let data = await response.json();
    return data.places;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

let cityData = [];
fetchData().then((data) => {
  cityData = data;
  displayCityData();
});

const displayCityData = () => {
  let i = Math.floor(Math.random() * cityData.length);
  factpara1.innerText = cityData[i].info;
  factpara2.innerText = cityData[i].name;
  factpara2.style.color = "white";
  factpara2.style.fontWeight = "bold";
  image.src = cityData[i].image;
};

btn1.addEventListener("click", displayCityData);

// const URL = "https://api.npoint.io/7bbd3a59c401f616bb89";
// let factpara1 = document.querySelector("#facts1");
// let factpara2 = document.querySelector("#facts2");
// let image = document.querySelector("#image");
// let btn1 = document.querySelector("#btn");
// var i = 0;
// const getData = async () => {
//   let response = await fetch(URL);
//   console.log(response);
//   let data = await response.json();
//   var i = Math.floor(Math.random() * 9);
//   factpara1.innerText = data.places[i].info;
//   factpara2.innerText = data.places[i].name;
//   factpara2.style.color = "cornflowerblue"
//   factpara2.style.fontWeight = "bold"
//   image.src = data.places[i].image;
// };
// btn1.addEventLis