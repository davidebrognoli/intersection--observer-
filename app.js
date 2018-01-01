function fetchImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.onload = resolve;
    image.onerror = reject;
  });
}

function applyBg(el, src){
  el.classList.add('loaded');
  el.style.backgroundImage = `url('${src}')`;
}

const options = {
  threshold: [0, 0.5, 1]
}

const callback = entries => {
  entries.forEach(entry => {
      const ratio = entry.intersectionRatio;
      const element = entry.target;
      if(ratio > 0){
        observer.unobserve(element);
        const src = element.dataset.src
        fetchImage(src).then(() => { 
          applyBg(element, src); 
        });
      }
  });
}

const observer = new IntersectionObserver(callback, options);

const targets = document.querySelectorAll('.carousel-item');
targets.forEach(target => observer.observe(target));