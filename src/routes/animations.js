const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal')
      } 
    })
  })
  const animateElements = document.querySelectorAll('.animate')
  // animateElements.append(document.querySelectorAll('animate-top'))
  console.log(animateElements)
  animateElements.forEach((el) => observer.observe(el));

  