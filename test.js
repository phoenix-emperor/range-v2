document.addEventListener('DOMContentLoaded', function() {
  const truncateText = document.querySelector('.truncate-text');
  const fullText = document.querySelector('.full-text');
  const learnMoreBtn = document.querySelector('.learn-more-btn');
  const collapseBtn = document.querySelector('.collapse-btn');

  if (truncateText.scrollWidth > truncateText.clientWidth) {
      learnMoreBtn.style.display = 'block';
  }

  learnMoreBtn.addEventListener('click', function() {
      fullText.style.display = 'inline';
      learnMoreBtn.style.display = 'none';
  });

  collapseBtn.addEventListener('click', function() {
      fullText.style.display = 'none';
      learnMoreBtn.style.display = 'block';
  });
});
