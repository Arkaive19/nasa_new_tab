const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const appElement = document.querySelector("#content");
const datepicker = document.querySelector("#datepicker");
const header = document.querySelector(".header");
const popup = document.getElementById("popup");
const popupContent = document.querySelector(".popup>p");
const popupCloser = document.querySelector(".close");
let popupState = document.querySelector(".asset") ? true : false;

const today = new Date().toISOString().slice(0, 10);
datepicker.max = today;
datepicker.value = today;
function setLoading(message) {
  appElement.className = "loading grid-item grid-item-3";
  appElement.innerHTML = `<p>${message}</p>`;
}

function setError(message) {
  appElement.className = "grid-item grid-item-3";
  appElement.innerHTML = `
    <span class="card error">
      <p>${message}</p>
    </span>
  `;
}

function renderApod(data) {
  appElement.className = "grid-item grid-item-3";
  const media =
    data.media_type === "image"
      ? `<img src="${data.url}" alt="${data.title}" loading="lazy" class="asset" />`
      : `<video controls src="${data.url}" preload="metadata" class="asset"></video>`;

  header.innerHTML = `${data.title}`;
  appElement.innerHTML = `

      ${media}
  
  `;
  popupContent.innerHTML = `${data.explanation}`;

  document.querySelector(".asset").addEventListener("click", () => {
    togglePopup();
  });
}
popupCloser.addEventListener("click", () => {
  togglePopup();
});
async function fetchApod(date) {
  setLoading(`Loading Astronomy Picture for ${date}…`);

  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`,
    );
    if (!response.ok) {
      throw new Error("Unable to fetch Astronomy Picture of the Day.");
    }
    const data = await response.json();
    renderApod(data);
  } catch (err) {
    setError(err.message || "Unable to load APOD. Please try again later.");
    2;
  }
}

datepicker.addEventListener("change", () => {
  if (datepicker.value) {
    console.log(datepicker.value);
    fetchApod(datepicker.value);
  }
});

function randomizer() {
  const minDate = new Date("1995-06-16T00:00:00");
  const maxDate = new Date();

  const randomTime =
    minDate.getTime() + Math.random() * (maxDate.getTime() - minDate.getTime());
  fetchApod(new Date(randomTime).toISOString().split("T")[0]);
}

document.querySelector(".randomize").addEventListener("click", randomizer);

function togglePopup() {
  popupState ? (popup.style.display = "none") : (popup.style.display = "block");
  popupState = !popupState;
}
fetchApod(today);
