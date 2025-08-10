const menu1 = document.getElementById('mobile-menu1');
const menu2 = document.getElementById('mobile-menu2');
const navbar2 = document.getElementById('nav-wrapper2');

let prevScrollPos = window.scrollY;

window.addEventListener('scroll', () => {
  let currentpos = window.scrollY;

  if (currentpos >= 100) {
    if (currentpos > prevScrollPos) {
      navbar2.classList.remove('visible');
      menu2.classList.remove('show');
      menu1.classList.remove('show');
    } else {
      navbar2.classList.add('visible');
      menu2.classList.remove('show');
      

    }
  } else {
    navbar2.classList.remove('visible');
  }

  prevScrollPos = currentpos;
});

function toggleMobileMenu() {
  menu1.classList.toggle('show');
}

function toggleMobileMenu2() {
  menu2.classList.toggle('show');
}



/* === Slideshow === */
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach(slide => slide.style.display = "none");
  slides[index].style.display = "block";
}

function changeSlide(step) {
  slideIndex = (slideIndex + step + slides.length) % slides.length;
  showSlide(slideIndex);
}

function autoSlide() {
  changeSlide(1);
  setTimeout(autoSlide, 3000);
}

showSlide(slideIndex);
setTimeout(autoSlide, 3000);

/* === People Cards === */
const people = [
  {pName: 'Kamal Ahluwalia', position: 'President, Ikigai Labs, Member USIBC', superpower:'Building high growth global business', expertise: 'Expert in launching market-ready products...', image:'https://cdn.prod.website-files.com/6731a3a4a8fd79133c60cc13/6794b013b66396536151ddb8_Frame%201707479050%20(4).png'},
  {pName: 'Lynda Kate Smith', position: 'SVP Marketing/CMO; Strategic Advisor for Developer Advocacy', superpower: 'Revolutionizing marketing strategies', expertise: 'Marketing leader with 25+ years in tech...', image: 'https://cdn.prod.website-files.com/6731a3a4a8fd79133c60cc13/6794af99b2b67e995cfd3254_Frame%201707479050%20(5).png'},
  {pName: 'Dr. Fei-Fei Li', position: 'Professor, Stanford University', superpower: 'AI for social good', expertise: 'Renowned AI researcher...', image: 'https://cdn.prod.website-files.com/6731a3a4a8fd79133c60cc13/6794af61043fd3f23522d86e_Frame%201707479050%20(18).png'},
  {pName: 'Reid Hoffman', position: 'Co-founder of LinkedIn', superpower: 'Scaling transformative companies', expertise: 'Expert in entrepreneurship...', image: 'https://cdn.prod.website-files.com/6731a3a4a8fd79133c60cc13/6794b03402bb4936fb840ebf_Frame%201707479050%20(21).png'},
  {pName: 'Ginni Rometty', position: 'Former CEO of IBM', superpower: 'Leading digital transformation', expertise: 'Transformed IBM’s business model...', image: 'https://cdn.prod.website-files.com/6731a3a4a8fd79133c60cc13/6794af8bc49de0acae3468df_Frame%201707479050%20(13).png'},
  {pName: 'Jeff Weiner', position: 'Executive Chairman, LinkedIn', superpower: 'Empathetic leadership', expertise: 'Known for creating a purpose-driven culture...', image: 'https://cdn.prod.website-files.com/6731a3a4a8fd79133c60cc13/6752bb49ce680c245f8bd41d_Frame%201707479050%20(16).webp'},
  {pName: 'Sheryl Sandberg', position: 'Former COO, Meta (Facebook)', superpower: 'Operational excellence', expertise: 'Scaled Meta’s operations globally...', image: 'https://cdn.prod.website-files.com/6731a3a4a8fd79133c60cc13/6794af7cbaea2c8ddc383b8b_Frame%201707479050%20(15).png'},
  {pName: 'Andrew Ng', position: 'Founder, DeepLearning.AI', superpower: 'Democratising AI education', expertise: 'AI pioneer with deep expertise...', image: 'https://cdn.prod.website-files.com/6731a3a4a8fd79133c60cc13/6794aee084309048ad928aef_Frame%201707479050%20(8).png'},
];

// Duplicate cards for seamless loop
const allPeople = [...people, ...people];

const peopleContainer = document.getElementById('people-container');

allPeople.forEach(person => {
  const card = document.createElement('div');
  card.classList.add('person-card');

  card.innerHTML = `
    <div class="image-container">
      <img src="${person.image}" alt="${person.pName}">
      <div id="overlay">
        <div>
          <p><strong>${person.pName}</strong></p>
          <p>${person.position}</p>
        </div>

        <div>
        <p class='superpower'>SUPERPOWER</p>
        <p>${person.superpower}</p>
        <p>${person.expertise}</p>
        </div>
      </div>
    </div>
    <div class="person-info">
      <p>${person.pName}</p>
      <div id='line' style="background-color: var(--emerald); width: 100px; height: 2px"></div>
      <p>${person.position}</p>
    </div>
    <button class="see-more-btn">See More</button> 
  `;

  const seeMoreBtn = card.querySelector('.see-more-btn');
  const overlay = card.querySelector('#overlay');

  // Toggle overlay with smooth fade and ensure only one open at a time
  seeMoreBtn.addEventListener('click', () => {
    document.querySelectorAll('#overlay.show').forEach(openOverlay => {
      if (openOverlay !== overlay) {
        openOverlay.classList.remove('show');
      }
    });
    overlay.classList.toggle('show');
  });

  peopleContainer.appendChild(card);
});

/* === Scroll Buttons === */
const sect4Grid = document.getElementById('sect4-grid');
const scrollContainers = [sect4Grid, peopleContainer]; 
let count = 0;

const scrollButtonsCollection = document.getElementsByClassName('scroll-buttons')
const scrollButtons = Array.from(scrollButtonsCollection);

scrollButtons.map(item => {
  let targetBox = scrollContainers[count];
  count++;

  item.addEventListener('click', (event) => {
    let target = event.target.id;

    switch(target) {
      case 'left':
        targetBox.scrollLeft += -300;
        break;
      case 'right':
        targetBox.scrollLeft += 300;
        break;
    }
  });
});

/* === FAQ Accordion === */
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const isOpen = answer.classList.contains('open');

    document.querySelectorAll('.faq-answer').forEach(ans => {
      ans.classList.remove('open');
      ans.style.maxHeight = null;
      ans.previousElementSibling.classList.remove('active');
    });

    if (!isOpen) {
      answer.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      button.classList.add('active');
    }
  });
});

/* === Manual Slider Scroll === */
function scrollSlider(direction) {
  const slider = document.getElementById('slider-wrapper');
  const scrollAmount = 250;
  slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}



function setupMobileAccordion() {
  const mobileDropdowns = document.querySelectorAll('.mobile-has-dropdown');

  mobileDropdowns.forEach(parent => {
    const link = parent.querySelector('a');

    link.addEventListener('click', (e) => {
      const isOpen = parent.classList.contains('open');

      // Close all other dropdowns
      document.querySelectorAll('.mobile-has-dropdown').forEach(p => p.classList.remove('open'));

      // Toggle current one
      if (!isOpen) parent.classList.add('open');

      e.preventDefault(); // Prevent default link behavior
    });
  });
}

setupMobileAccordion();



  // Sections to animate on scroll (edit or extend freely)
  const SECTION_SELECTORS = [
    '#sect5-wrapper',
    '#sect2-wrapper',
    '#under-sect2',
    '#transitions-engine',
    '#co-builder-model-section',
    '#meet-the-co-builders',
    '#operational-model-section',
    '#engine-room-wrapper',
    '#sect4-grid',
    '#faq-section',
    'footer'
  ];

  // Which children inside each section should animate
  // (broad but safe: headlines, paragraphs, lists, cards, CTAs, etc.)
  const CHILD_TARGETS = [
    'h1','h2','h3','p','ul','ol','li','a','img','blockquote',
    '.pillar','.person-card','.black-transparent-bg',
    '.sect4-grid','.sect4-grid-overlay-text-wrapper',
    '#secretariat-text','#engine-room-banner'].join(',');

  // Build observer
  const sectionObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const section = entry.target;
      section.classList.add('in-view');

      // Stagger child elements
      const kids = section.querySelectorAll('[data-animate]');
      kids.forEach((el, i) => el.style.setProperty('--d', i));

      // Start any existing keyframe animations only now
      section.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.style.animationPlayState = 'running';
      });

      obs.unobserve(section); // reveal once; remove if you want repeat
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });

  // Prepare each section
  SECTION_SELECTORS.forEach(sel => {
    document.querySelectorAll(sel).forEach(section => {
      // Tag children to animate (once)
      const children = section.querySelectorAll(CHILD_TARGETS);
      children.forEach(el => el.setAttribute('data-animate', ''));

      // If element already has CSS keyframes applied, pause until visible
      section.querySelectorAll('*').forEach(el => {
        const cs = getComputedStyle(el);
        if (cs.animationName && cs.animationName !== 'none') {
          el.classList.add('animate-on-scroll');
          el.style.animationPlayState = 'paused';
        }
      });

      sectionObserver.observe(section);
    });
  });
