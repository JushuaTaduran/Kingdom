const video = document.getElementById("video--background");
const poster = document.getElementById("video--poster");

video.addEventListener("ended", () => {
  video.style.display = "none";
  poster.style.display = "block";
});

const lores = [
  {
    title: "The Monarchs",
    story:
      "Monarchs were the rulers of the Kingdom of Classic, and they bore the heavy responsibility of safeguarding their subjects from the Greed. They were chosen by an ancient and mystical crown, which bestowed upon them unique powers and the authority to lead.",
    img: "https://images.squarespace-cdn.com/content/v1/56b328fff699bbab113ee671/1558953198462-4UWINGV1GMQME4LPH3GH/STICKER_stag-cropped.gif",
    alt: "Figure0",
  },
  {
    title: "The Ghost",
    story:
      "The Ghostly guides were ethereal beings bound to the kingdom, existing to aid and advise the Monarchs. They were the spiritual guardians of the realm, offering their wisdom and guidance to the Monarchs in times of uncertainty and peril.",
    img: "https://static.wikia.nocookie.net/kingdomthegame/images/f/f6/Ghosts.gif",
    alt: "Figure0",
  },
  {
    title: "The Greeds",
    story:
      "An enigmatic and insatiable force, remained a persistent threat to the Kingdom. Drawn to the kingdom's wealth, they launched relentless assaults, testing the Monarchs' resolve and the wisdom of their Ghostly guides",
    img: "https://static.wikia.nocookie.net/kingdomthegame/images/8/87/Crusher-idle.gif",
    alt: "Figure0",
  },
];

function LoreCollection() {
  const lore = document.querySelector(".lores--collection");

  lore.innerHTML = lores
    .map(
      (lore) =>
        `
        <div class="lore reveal">
        <img src="${lore.img}" alt="${lore.alt}" draggable="false" />
        <div class="lore--text">
          <h3>${lore.title}</h3>
          <p>${lore.story}</p>
        </div>
      </div>
     `
    )
    .join("");
}

const seriesCollection = [
  {
    title: "Kingdom: Classic",
    img: "https://thumbnails.pcgamingwiki.com/f/f0/Kingdom_Cover.jpg/300px-Kingdom_Cover.jpg",
    alt: "Figure0",
  },
  {
    title: "Kingdom: Two Crowns",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Kingdom_Two_Crowns_cover_art.jpg/220px-Kingdom_Two_Crowns_cover_art.jpg",
    alt: "Figure1",
  },
  {
    title: "Kingdom: Norse Land",
    img: "https://cdn.cdkeys.com/700x700/media/catalog/product/g/a/game-steam-lawn-mowing-simulator-cover_6_.jpg",
    alt: "Figure2",
  },
  {
    title: "Kingdom: New Lands",
    img: "https://howlongtobeat.com/games/39080_Kingdom_New_Lands.jpg",
    alt: "Figure3",
  },
  {
    title: "Kingdom: Eighties",
    img: "https://thumbnails.pcgamingwiki.com/4/4b/Kingdom_Eighties_Cover_Image_2.png/300px-Kingdom_Eighties_Cover_Image_2.png",
    alt: "Figure4",
  },
];

function SeriesCollection() {
  const series = document.querySelector(".series--collection");

  series.innerHTML = seriesCollection
    .map(
      (pack) =>
        `
        <figure class="pack--container">
          <img src="${pack.img}" alt="${pack.alt}" draggable="false" />
          <figcaption>${pack.title}</figcaption>
        </figure>
     `
    )
    .join("");
}

const platforms = [
  {
    img: "./assets/platforms/Playstation.png",
    alt: "Figure0",
  },
  {
    img: "./assets/platforms/Nintendo+Switch.png",
    alt: "Figure1",
  },
  {
    img: "./assets/platforms/Xbox.png",
    alt: "Figure2",
  },
  {
    img: "./assets/platforms/Google+Play.png",
    alt: "Figure3",
  },
  {
    img: "./assets/platforms/Apple.png",
    alt: "Figure4",
  },
];

function PlatformCollection() {
  const platform = document.querySelector(".platform--container");

  platform.innerHTML = platforms
    .map(
      (plat) =>
        `
        <img src="${plat.img}" alt="${plat.alt}" />
     `
    )
    .join("");
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

document.addEventListener("DOMContentLoaded", function () {
  // Get all the navigation links
  const navLinks = document.querySelectorAll("nav a");

  // Add click event listeners to each link
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Get the target section's ID from the link's href
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      // Calculate the target position with the offset
      const targetPosition =
        targetSection.offsetTop - 0.05 * window.innerHeight; // 5vh offset

      // Scroll to the target section with a smooth behavior
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });
});

LoreCollection();
SeriesCollection();
PlatformCollection();
