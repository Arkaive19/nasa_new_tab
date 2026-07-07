const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const appElement = document.querySelector("#app");
const datepicker = document.querySelector("#datepicker");

const today = new Date().toISOString().slice(0, 10);
datepicker.max = today;
datepicker.value = today;

function setLoading(message) {
  appElement.className = "loading";
  appElement.innerHTML = `<p>${message}</p>`;
}

function setError(message) {
  appElement.className = "";
  appElement.innerHTML = `
    <article class="card error">
      <p>${message}</p>
    </article>
  `;
}

function renderApod(data) {
  appElement.className = "";
  const media =
    data.media_type === "image"
      ? `<img src="${data.url}" alt="${data.title}" loading="lazy" />`
      : `<video controls src="${data.url}" preload="metadata"></video>`;

  appElement.innerHTML = `
    <article class="card">
      <header>
        <div class="meta-row">
          <span class="meta-pill">${data.media_type.toUpperCase()}</span>
          <span>${data.date}</span>
        </div>
        <h1>${data.title}</h1>
      </header>
      <figure>${media}</figure>
      <p>${data.explanation}</p>
    </article>
  `;
}

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

fetchApod(today);
