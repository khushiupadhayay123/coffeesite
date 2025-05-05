window.addEventListener("DOMContentLoaded", () => {
  // Register GSAP and ScrollTrigger if needed
  gsap.registerPlugin(ScrollTrigger);

  // Rotate and fade in hero image on load
  gsap.fromTo(".hero-image", 
    {
      rotation: 360,  // Start rotated
      opacity: 0,
      scale: 0.8,
    }, 
    {
      rotation: -2,     // Rotate to normal
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power3.out",
    }
  );
});
