// Load Tailwind
const script = document.createElement('script');
script.src = 'https://cdn.tailwindcss.com?plugins=forms,container-queries';
document.head.appendChild(script);

// Set Fonts
const fontLink1 = document.createElement('link');
fontLink1.rel = 'preconnect';
fontLink1.href = 'https://fonts.gstatic.com/';
fontLink1.crossOrigin = '';
document.head.appendChild(fontLink1);

const fontLink2 = document.createElement('link');
fontLink2.rel = 'stylesheet';
fontLink2.href =
  'https://fonts.googleapis.com/css2?display=swap&family=Lexend:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900';
document.head.appendChild(fontLink2);

document.title = 'Stitch Design';

const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/x-icon';
favicon.href = 'data:image/x-icon;base64,';
document.head.appendChild(favicon);

// Body Content
const container = document.createElement('div');
container.className =
  'relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden';
container.style.fontFamily = 'Lexend, "Noto Sans", sans-serif';

const layoutContainer = document.createElement('div');
layoutContainer.className = 'layout-container flex h-full grow flex-col';

const innerContainer = document.createElement('div');
innerContainer.className = 'px-40 flex flex-1 justify-center py-5';

const content = document.createElement('div');
content.className =
  'layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1';

// Heading
const heading = document.createElement('h2');
heading.textContent = 'EcoCart';
heading.className =
  'text-[#111714] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5';
content.appendChild(heading);

// Function for Cards
function createCard(title, subtitle, bgImageUrl) {
  const wrapper = document.createElement('div');
  wrapper.className = 'p-4';

  const card = document.createElement('div');
  card.className =
    'bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl pt-[132px]';
  card.style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("${bgImageUrl}")`;

  const inner = document.createElement('div');
  inner.className = 'flex w-full items-end justify-between gap-4 p-4';

  const textContainer = document.createElement('div');
  textContainer.className = 'flex max-w-[440px] flex-1 flex-col gap-1';

  const titleP = document.createElement('p');
  titleP.textContent = title;
  titleP.className =
    'text-white tracking-light text-2xl font-bold leading-tight max-w-[440px]';

  const subtitleP = document.createElement('p');
  subtitleP.textContent = subtitle;
  subtitleP.className =
    'text-white text-base font-medium leading-normal';

  textContainer.appendChild(titleP);
  textContainer.appendChild(subtitleP);
  inner.appendChild(textContainer);
  card.appendChild(inner);
  wrapper.appendChild(card);
  return wrapper;
}

// Cards
content.appendChild(
  createCard(
    'Total CO₂ Saved',
    '120 kg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCv9eMHN0gtnyUpld0h4ADXFL2TO8ea6aNUUppCeJHUqXv_MJGNS3zIdFLB56gp3Mtqi-hMcO1oJahSDkOVt-4OCO8AZejy8D_rQYV66Iqa_TEk1AS6LIyr3-bT_7Jma6pdVVsGUBtKVreE1JqQiwOJp4k6oKM7zbtXuFW19uTszRN0Ba4N_NHNyGMOquAU5XLHO2_L9lB6OGEHk9f5CLv89hX57PI_0xzSWEjMWuF64UNGYlIUzJ9MTND5KAG4YRzRzneMVVv6PW0'
  )
);

content.appendChild(
  createCard(
    'Green Choices Made',
    '35',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDwd-aGLp-qaIT5JtY4loGJw7L8L74fI4xxTRk9zjPkr9cdOYm1tpHTkFp-14a16vvnbZL-F8bt2k2IPnGRke-iHXu8UmdknJr3eAE0VZZd98puRWZOOOyi9f6C4TE7fMOIvjtd_FfiXhfpOeK9ijflVY4j4LXwsJnkwqLS54WwgrCdMeV4HPgHkJq18_kF5dGYoVa9sOxBcfImZG1wE9egZWdTlWwtzJZC6S-uvPbtV2qwKQNe7Whfid5AGyz9zM9fXHPLg5Z3KOY'
  )
);

content.appendChild(
  createCard(
    'Eco-Score',
    '85/100',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCgz-dwQD6Aya0kXaNjyMxtujzh6BGtrCSNNGr1WPeddTrhao-R5ksuLFXPXzfbwpi99phxsZSzlNd2yHtoqwzEHLCZ9z85Jz2HahHKnjYOs-wwZHPoiT1KnVvdJo2xWf_tBSwAkmIfT2Fp0r4pIh6gK0Jf5Uz9TRuuI4-EgKdSqIgmHqFIitycQbETIs1hgzyKZfiVBhQAHhkQWy7OxWa3EkhA032cg8jdZgZFU88H3IC8_e61OG_gFl08RA_X8EdFnu06R5NTROU'
  )
);

// Buttons
const buttonContainerWrapper = document.createElement('div');
buttonContainerWrapper.className = 'flex justify-center';

const buttonContainer = document.createElement('div');
buttonContainer.className =
  'flex flex-1 gap-3 max-w-[480px] flex-col items-stretch px-4 py-3';

const button1 = document.createElement('button');
button1.className =
  'flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#38e07b] text-[#111714] text-sm font-bold leading-normal tracking-[0.015em] w-full';
button1.innerHTML = '<span class="truncate">Full Dashboard</span>';
button1.onclick = function() {
  window.location.href = 'dashboard.html';
};

const button2 = document.createElement('button');
button2.className =
  'flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f4f2] text-[#111714] text-sm font-bold leading-normal tracking-[0.015em] w-full';
button2.innerHTML = '<span class="truncate">About Us</span>';
button2.onclick = function() {
  window.location.href = 'about.html';
};

buttonContainer.appendChild(button1);
buttonContainer.appendChild(button2);
buttonContainerWrapper.appendChild(buttonContainer);
content.appendChild(buttonContainerWrapper);

innerContainer.appendChild(content);
layoutContainer.appendChild(innerContainer);
container.appendChild(layoutContainer);
document.body.appendChild(container);
