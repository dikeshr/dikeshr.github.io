// Basic interaction example
console.log("Welcome to Dikesh's Data Analyst Portfolio!");
<script>
  // Simple fade-in animation on scroll
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  cards.forEach(card => {
    card.classList.add("hidden");
    observer.observe(card);
  });
</script>

<style>
  .hidden {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease-out;
  }

  .show {
    opacity: 1;
    transform: translateY(0);
  }
</style>