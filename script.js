if (document.querySelector(".swiper")) {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "vertical",
    loop: false,
    spaceBetween: 30,
    speed: 1000,

    // Pagination Bullets
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    on: {
      slideChange: function () {
        const pagination = document.querySelector(".swiper-pagination");
        if (this.activeIndex === 0) {
          pagination.style.display = "none"; // Hide on first slide
        } else {
          pagination.style.display = "block"; // Show on other slides
        }
      },
    },

    mousewheel: true,
    keyboard: true,
  });

  // Optional: Initially hide pagination if starting on first slide
  if (swiper.activeIndex === 0) {
    document.querySelector(".swiper-pagination").style.display = "none";
  }
  function scrollToSection() {
    swiper.slideTo(1);
  }
  const video = document.querySelector(".auto-play-video");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.5 }
  ); // Adjust threshold if needed

  observer.observe(video);
  // Add an event listener to the "Resume" link
  document
    .getElementById("resumeLink")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior

      const resumeUrl = "assets/resume.pdf"; // Path to the resume file

      // Open the resume in a new tab
      window.open(resumeUrl, "assets/resume.pdf");

      // Trigger the download
      const downloadLink = document.createElement("a");
      downloadLink.href = resumeUrl;
      downloadLink.download = "AbbyHarris_resume.pdf"; // Custom file name for download
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
}

const jsondata = {
  leftColumn: [
    {
      image: "assets/Figma.png",
      text: {
        bold: "Figma",
        regular: " for wireframing and prototyping",
      },
    },
    {
      image: "assets/PS.png",
      text: {
        bold: "Photoshop",
        regular:
          " for picture tweaks. i.e. I removed polka dots and red bows from my sweater on the home screen",
      },
    },
    {
      image: "assets/Dovetail.png",
      text: {
        bold: "Dovetail",
        regular: " for analyzing user interviews and usability test data",
      },
    },
    {
      image: "assets/Jira.png",
      text: {
        bold: "Jira",
        regular: " for Sprint planning and assigning coding tasks to devs",
      },
    },
    {
      image: "assets/MS.png",
      text: {
        bold: "MS Word",
        regular:
          " for writing usability test plans and keeping track of research",
      },
    },
    {
      image: "assets/Calendly.png",
      text: {
        bold: "Figma",
        regular: " to schedule user interviews and usability tests",
      },
    },
    // You can add more items like this if needed
  ],
  rightColumn: [
    {
      image: "assets/Github.png",
      text: {
        bold: "GitHub",
        regular: " for storing coding projects.",
      },
    },
    {
      image: "assets/Vercel.png",
      text: {
        bold: "Vercel",
        regular: " for hosting this portfolio.",
      },
    },
    {
      image: "assets/VS.png",
      text: {
        bold: "VS Code",
        regular: " for...coding lol",
      },
    },
    {
      image: "assets/Postman.png",
      text: {
        bold: "Postman",
        regular: " to test API calls and make sure they work",
      },
    },
    {
      image: "assets/Zoom.png",
      text: {
        bold: "Zoom",
        regular: " to record user-interviews and usabilityt tests",
      },
    },
    {
      image: "assets/Slack.png",
      text: {
        bold: "Slack",
        regular: " to communicate with the people I collaborate with",
      },
    },
    {
      image: "assets/Teams.png",
      text: {
        bold: "MS Teams",
        regular:
          " used this at Fidelity Investments for meetings and co-worker chats.",
      },
    },
  ],
};
// Only run this if the special container exists
let container = document.getElementById("left");

if (container) {
  jsondata.leftColumn.forEach((item) => {
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.marginBottom = "10px";

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = "Icon";
    img.style.width = "50px";
    img.style.height = "50px";
    img.style.marginRight = "24px";

    const p = document.createElement("p");
    p.innerHTML = `<strong>${item.text.bold}</strong>${item.text.regular}`;

    div.appendChild(img);
    div.appendChild(p);
    container.appendChild(div);
  });
}
container = document.getElementById("right");
jsondata.rightColumn.forEach((item) => {
  const div = document.createElement("div");
  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.marginBottom = "10px";

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = "Icon";
  img.style.width = "50px";
  img.style.height = "50px";
  img.style.marginRight = "24px";

  const p = document.createElement("p");
  p.innerHTML = `<strong>${item.text.bold}</strong>${item.text.regular}`;
  div.appendChild(img);
  div.appendChild(p);
  container.appendChild(div);
});
