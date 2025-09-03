// Gallery Images Data
const galleryImages = [
  {
    src: "./images/about-me/anh1.jpg",
    alt: "Le Cong Hung Photo 1",
    title: "Photo 1",
  },
  {
    src: "./images/about-me/anh2.jpg",
    alt: "Le Cong Hung Photo 2",
    title: "Photo 2",
  },
  {
    src: "./images/about-me/anh3.jpg",
    alt: "Le Cong Hung Photo 3",
    title: "Photo 3",
  },
  {
    src: "./images/about-me/anh4.jpg",
    alt: "Le Cong Hung Photo 4",
    title: "Photo 4",
  },
  {
    src: "./images/about-me/anh5.jpg",
    alt: "Le Cong Hung Photo 5",
    title: "Photo 5",
  },
  {
    src: "./images/about-me/anh6.jpg",
    alt: "Le Cong Hung Photo 6",
    title: "Photo 6",
  },
  {
    src: "./images/about-me/anh7.jpg",
    alt: "Le Cong Hung Photo 7",
    title: "Photo 7",
  },
  {
    src: "./images/about-me/anh8.jpg",
    alt: "Le Cong Hung Photo 8",
    title: "Photo 8",
  },
];

// Projects Data
const projectsData = [
  {
    id: 1,
    title: "Jewelry E-commerce Website",
    description:
      "A modern and elegant jewelry e-commerce website offering a wide range of high-quality products—rings, necklaces, bracelets, earrings—perfect for birthdays, weddings, and meaningful gifts.",
    image: "./images/projects/project-jewelry.jpg",
    technologies: ["React", "Spring Boot", "MySQL", "Figma"],
    github: "https://github.com/XHuongG11/shiny-website-ui.git",
    liveDemo: " https://shinyjewelry.shop",
    status: "Completed",
  },
  {
    id: 2,
    title: "Clothes Store App",
    description:
      "An intuitive Android clothing store app that allows users to browse, search, and filter products by category, view detailed information, add items to cart or wishlist, place orders, and track their purchase history. Integrated with Firebase for user authentication and real-time data handling.",
    image: "./images/projects/project-clothes-store.jpg",
    technologies: ["Android native", "Firebase", "Figma"],
    github: "https://github.com/hugn2k4/StoreClothes.git",
    liveDemo: "https://github.com/hugn2k4/StoreClothes.git",
    status: "Completed",
  },
  {
    id: 3,
    title: "Wordzy App",
    description:
      "An Android app designed to support English learners through structured lessons covering vocabulary, grammar, listening, and speaking skills. It offers interactive exercises, audio support for pronunciation, daily learning streaks, and performance tracking. With a clean and intuitive interface, the app helps users improve their English skills anytime, anywhere.",
    image: "./images/projects/project-wordzy.jpg",
    technologies: ["Android native", "Firebase", "Figma", "WebSocket"],
    github: "https://github.com/vanphatit/wordzy.git",
    liveDemo: "https://github.com/vanphatit/wordzy.git",
    status: "Completed",
  },
];

// Gallery Management Functions
function addImage(src, alt, title, index = -1) {
  const newImage = { src, alt, title };
  if (index === -1) {
    galleryImages.push(newImage);
  } else {
    galleryImages.splice(index, 0, newImage);
  }
  renderGalleryImages();
}

function removeImage(index) {
  if (index >= 0 && index < galleryImages.length) {
    galleryImages.splice(index, 1);
    renderGalleryImages();
  }
}

function updateImage(index, src, alt, title) {
  if (index >= 0 && index < galleryImages.length) {
    galleryImages[index] = { src, alt, title };
    renderGalleryImages();
  }
}

// Render Projects
function renderProjects() {
  const projectsContainer = document.querySelector(".projects-grid");
  if (!projectsContainer) return;

  projectsContainer.innerHTML = "";

  projectsData.forEach((project, index) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.setAttribute("data-index", index);

    projectCard.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
        <div class="project-overlay">
          <div class="project-links">
            <a href="${
              project.github
            }" target="_blank" rel="noopener noreferrer" class="project-link" title="View on GitHub">
              <i class="bx bxl-github"></i>
            </a>
            <a href="${
              project.liveDemo
            }" target="_blank" rel="noopener noreferrer" class="project-link" title="Live Demo">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div class="project-status ${project.status
          .toLowerCase()
          .replace(" ", "-")}">
          ${project.status}
        </div>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-technologies">
          ${project.technologies
            .map((tech) => `<span class="tech-tag">${tech}</span>`)
            .join("")}
        </div>
      </div>
    `;

    // Add click event to open project demo
    projectCard.addEventListener("click", (e) => {
      // Don't trigger if clicking on links
      if (e.target.tagName === "A" || e.target.tagName === "I") {
        return;
      }
      window.open(project.liveDemo, "_blank");
    });

    projectsContainer.appendChild(projectCard);
  });
}

// Project Management Functions
function addProject(project) {
  projectsData.push(project);
  renderProjects();
}

function updateProject(id, updatedProject) {
  const index = projectsData.findIndex((project) => project.id === id);
  if (index !== -1) {
    projectsData[index] = { ...projectsData[index], ...updatedProject };
    renderProjects();
  }
}

function removeProject(id) {
  const index = projectsData.findIndex((project) => project.id === id);
  if (index !== -1) {
    projectsData.splice(index, 1);
    renderProjects();
  }
}

// Render Gallery Images
function renderGalleryImages() {
  // Set main image
  const mainImage = document.getElementById("mainImage");
  if (mainImage && galleryImages.length > 0) {
    mainImage.src = galleryImages[0].src;
    mainImage.alt = galleryImages[0].alt;
  }

  // Render gallery grid
  const galleryGrid = document.querySelector(".gallery-grid");
  if (galleryGrid) {
    galleryGrid.innerHTML = ""; // Clear existing images

    galleryImages.slice(0).forEach((image, index) => {
      const imgElement = document.createElement("img");
      imgElement.src = image.src;
      imgElement.alt = image.alt;
      imgElement.setAttribute("data-index", index + 1);
      imgElement.title = image.title;

      galleryGrid.appendChild(imgElement);
    });
  }

  // Render indicators
  const indicatorsContainer = document.querySelector(".indicators");
  if (indicatorsContainer) {
    indicatorsContainer.innerHTML = ""; // Clear existing indicators

    galleryImages.forEach((_, index) => {
      const indicator = document.createElement("div");
      indicator.className = "indicator";
      if (index === 0) indicator.classList.add("active");
      indicator.setAttribute("data-index", index);

      indicatorsContainer.appendChild(indicator);
    });
  }
}

// Calculate age automatically
function calculateAge() {
  const birthDate = new Date("2004-10-10");
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // If birthday hasn't occurred this year yet, subtract 1
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

// Update age on page load
document.addEventListener("DOMContentLoaded", function () {
  // Render gallery images first
  renderGalleryImages();

  // Render projects
  renderProjects();

  const ageElement = document.getElementById("age");
  if (ageElement) {
    const currentAge = calculateAge();
    ageElement.textContent = `${currentAge} years old`;
  }
});

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.navbar a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // Calculate offset for fixed header
        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});

// Add active class to current navigation item
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('.navbar a[href^="#"]');

  function highlightNav() {
    const scrollPosition = window.scrollY + 150;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNav);
  highlightNav(); // Call once on load
});

// Image gallery functionality with auto-slideshow and modal
document.addEventListener("DOMContentLoaded", function () {
  const mainImage = document.querySelector("#mainImage");
  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");
  const autoPlayBtn = document.querySelector("#autoPlayBtn");
  const indicatorsContainer = document.querySelector(".indicators");

  // Modal elements
  const modal = document.querySelector("#imageModal");
  const modalImage = document.querySelector("#modalImage");
  const modalClose = document.querySelector("#modalClose");
  const modalPrev = document.querySelector("#modalPrev");
  const modalNext = document.querySelector("#modalNext");
  const modalIndicators = document.querySelector("#modalIndicators");

  let currentIndex = 0;
  let autoPlay = true;
  let autoPlayInterval;

  // Use the galleryImages array instead of creating from DOM
  const images = galleryImages;

  // Create indicators
  function createIndicators() {
    indicatorsContainer.innerHTML = "";
    images.forEach((_, index) => {
      const indicator = document.createElement("div");
      indicator.className = `indicator ${index === 0 ? "active" : ""}`;
      indicator.addEventListener("click", () => goToSlide(index));
      indicatorsContainer.appendChild(indicator);
    });
  }

  // Create modal indicators
  function createModalIndicators() {
    modalIndicators.innerHTML = "";
    images.forEach((_, index) => {
      const indicator = document.createElement("div");
      indicator.className = `modal-indicator ${
        index === currentIndex ? "active" : ""
      }`;
      indicator.addEventListener("click", () => {
        currentIndex = index;
        updateModalImage();
        updateModalIndicators();
      });
      modalIndicators.appendChild(indicator);
    });
  }

  // Update main image
  function updateMainImage() {
    if (mainImage && images[currentIndex]) {
      mainImage.style.opacity = "0.5";
      setTimeout(() => {
        mainImage.src = images[currentIndex].src;
        mainImage.alt = images[currentIndex].alt;
        mainImage.style.opacity = "1";
      }, 200);
    }
  }

  // Update modal image
  function updateModalImage() {
    if (modalImage && images[currentIndex]) {
      modalImage.src = images[currentIndex].src;
      modalImage.alt = images[currentIndex].alt;
    }
  }

  // Update indicators
  // Update indicators
  function updateIndicators() {
    const indicators = document.querySelectorAll(".indicator");
    const galleryImgs = document.querySelectorAll(".gallery-grid img");

    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentIndex);
    });

    galleryImgs.forEach((img, index) => {
      img.classList.toggle("active", index === currentIndex);
    });
  }

  // Update modal indicators
  function updateModalIndicators() {
    const indicators = document.querySelectorAll(".modal-indicator");
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentIndex);
    });
  }

  // Go to specific slide
  function goToSlide(index) {
    currentIndex = index - 1;
    updateMainImage();
    updateIndicators();
  }

  // Next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateMainImage();
    updateIndicators();
  }

  // Previous slide
  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateMainImage();
    updateIndicators();
  }

  // Auto play functionality
  function startAutoPlay() {
    if (autoPlay) {
      autoPlayInterval = setInterval(nextSlide, 4000); // Change every 4 seconds
    }
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  function toggleAutoPlay() {
    autoPlay = !autoPlay;
    const icon = autoPlayBtn.querySelector("i");

    if (autoPlay) {
      icon.className = "bx bx-pause";
      startAutoPlay();
    } else {
      icon.className = "bx bx-play";
      stopAutoPlay();
    }
  }

  // Event listeners
  if (prevBtn)
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      prevSlide();
    });

  if (nextBtn)
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      nextSlide();
    });

  if (autoPlayBtn)
    autoPlayBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleAutoPlay();
    });

  // Gallery thumbnail clicks using event delegation
  const galleryGrid = document.querySelector(".gallery-grid");
  if (galleryGrid) {
    galleryGrid.addEventListener("click", (e) => {
      if (e.target.tagName === "IMG") {
        const index = parseInt(e.target.getAttribute("data-index"));
        goToSlide(index);
      }
    });
  }

  // Main image click to open modal
  if (mainImage) {
    mainImage.addEventListener("click", () => {
      modal.style.display = "block";
      updateModalImage();
      createModalIndicators();
      updateModalIndicators();
      document.body.style.overflow = "hidden";
    });
  }

  // Modal controls
  if (modalClose) {
    modalClose.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    });
  }

  if (modalPrev) {
    modalPrev.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateModalImage();
      updateModalIndicators();
      updateIndicators();
      updateMainImage();
    });
  }

  if (modalNext) {
    modalNext.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateModalImage();
      updateModalIndicators();
      updateIndicators();
      updateMainImage();
    });
  }

  // Close modal on outside click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (modal.style.display === "block") {
      switch (e.key) {
        case "ArrowLeft":
          modalPrev.click();
          break;
        case "ArrowRight":
          modalNext.click();
          break;
        case "Escape":
          modalClose.click();
          break;
      }
    }
  });

  // Initialize gallery
  if (images.length > 0) {
    updateMainImage(); // Initialize main image first
    createIndicators();
    updateIndicators();
    startAutoPlay();

    // Pause auto-play on hover
    const gallery = document.querySelector(".about-image-gallery");
    if (gallery) {
      gallery.addEventListener("mouseenter", stopAutoPlay);
      gallery.addEventListener("mouseleave", () => {
        if (autoPlay) startAutoPlay();
      });
    }
  }
});

// Contact form handling
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const name = formData.get("name");
      const email = formData.get("email");
      const subject = formData.get("subject");
      const message = formData.get("message");

      // Create mailto link
      const mailtoLink = `mailto:hungcl.dev@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;

      // Open email client
      window.location.href = mailtoLink;

      // Show success message (you can customize this)
      alert(
        "Thank you for your message! Your email client should now open with the pre-filled message."
      );

      // Reset form
      this.reset();
    });
  }
});

// Skills progress bar animation
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress");

  if (skillBars.length === 0) return;

  skillBars.forEach((bar, index) => {
    const width = bar.getAttribute("data-width");

    setTimeout(() => {
      bar.style.width = width;
    }, index * 100 + 300);
  });
}

// Simple scroll-based trigger
function checkSkillsInView() {
  const skillsSection = document.querySelector("#skills");
  if (!skillsSection) return;

  const rect = skillsSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Check if skills section is in view
  if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
    const firstSkillBar = document.querySelector(".skill-progress");
    if (
      firstSkillBar &&
      (!firstSkillBar.style.width || firstSkillBar.style.width === "0%")
    ) {
      animateSkillBars();
    }
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  // Try to animate immediately if skills section is visible
  setTimeout(() => {
    checkSkillsInView();
  }, 500);

  // Also set up scroll listener
  window.addEventListener("scroll", checkSkillsInView);
});

// Scroll Reveal Animation
function revealOnScroll() {
  const reveals = document.querySelectorAll(
    ".skill-item, .contact-card, .interest-item, .project-card"
  );

  reveals.forEach((element, index) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      setTimeout(() => {
        element.classList.add("reveal");
      }, index * 50); // Faster stagger animation
    }
  });
}

// Magnetic Button Effect

/*
function initMagneticButtons() {
  const magneticButtons = document.querySelectorAll(
    ".btn-download-cv, .btn-send"
  );

  magneticButtons.forEach((button) => {
    button.addEventListener("mousemove", function (e) {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      button.style.transform = `translate(${x * 0.3}px, ${
        y * 0.3
      }px) scale(1.05)`;
    });

    button.addEventListener("mouseleave", function () {
      button.style.transform = "translate(0px, 0px) scale(1)";
    });
  });
}
*/

// Parallax Effect on Scroll
function parallaxScroll() {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(".home::before");

  parallaxElements.forEach((element) => {
    const speed = 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
}

// Smooth section transitions
function smoothSectionTransitions() {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.8) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
}

// Initialize all animations
document.addEventListener("DOMContentLoaded", function () {
  // Initialize magnetic buttons
  initMagneticButtons();

  // Set initial state for sections
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.6s ease-out";
  });

  // Show home section immediately
  const homeSection = document.querySelector("#home");
  if (homeSection) {
    homeSection.style.opacity = "1";
    homeSection.style.transform = "translateY(0)";
  }
});

// Add scroll listeners
window.addEventListener("scroll", function () {
  revealOnScroll();
  smoothSectionTransitions();
});

// Add typing animation restart on page focus
document.addEventListener("visibilitychange", function () {
  if (!document.hidden) {
    const typingText = document.querySelector(".typing-text");
    if (typingText) {
      typingText.style.animation = "none";
      typingText.offsetHeight; // Trigger reflow
      typingText.style.animation =
        "typing 1.5s steps(15, end) 0.3s both, blink-caret 0.5s step-end infinite 0.3s";
    }
  }
});
