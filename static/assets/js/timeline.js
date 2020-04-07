const button2015 = document.getElementById("2015");
const button2016 = document.getElementById("2016");
const button2017 = document.getElementById("2017");
const button2018 = document.getElementById("2018");
const button2019 = document.getElementById("2019");

const content2015 = document.getElementById("content-2015");
const content2016 = document.getElementById("content-2016");
const content2017 = document.getElementById("content-2017");
const content2018 = document.getElementById("content-2018");
const content2019 = document.getElementById("content-2019");

content2015.style.display = "block";
content2016.style.display = "none";
content2017.style.display = "none";
content2018.style.display = "none";
content2019.style.display = "none";

button2015.onclick = () => {
  content2015.style.display = "block";
  content2016.style.display = "none";
  content2017.style.display = "none";
  content2018.style.display = "none";
  content2019.style.display = "none";
};

button2016.onclick = () => {
  content2015.style.display = "none";
  content2016.style.display = "block";
  content2017.style.display = "none";
  content2018.style.display = "none";
  content2019.style.display = "none";
};

button2017.onclick = () => {
  content2015.style.display = "none";
  content2016.style.display = "none";
  content2017.style.display = "block";
  content2018.style.display = "none";
  content2019.style.display = "none";
};

button2018.onclick = () => {
  content2015.style.display = "none";
  content2016.style.display = "none";
  content2017.style.display = "none";
  content2018.style.display = "block";
  content2019.style.display = "none";
};

button2019.onclick = () => {
  content2015.style.display = "none";
  content2016.style.display = "none";
  content2017.style.display = "none";
  content2018.style.display = "none";
  content2019.style.display = "block";
};
