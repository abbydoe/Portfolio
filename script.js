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
