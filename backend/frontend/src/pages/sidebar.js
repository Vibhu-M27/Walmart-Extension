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

// Build Body Content
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

// Main Heading
const heading = document.createElement('h1');
heading.textContent = 'EcoScore: 85';
heading.className =
  'text-[#111714] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5';
content.appendChild(heading);

// Info Paragraphs
const product = document.createElement('p');
product.textContent = 'Product: Organic Cotton T-Shirt';
product.className =
  'text-[#111714] text-base font-normal leading-normal pb-3 pt-1 px-4';
content.appendChild(product);

const carbon = document.createElement('p');
carbon.textContent = 'Carbon Footprint: 2.5 kg CO₂';
carbon.className =
  'text-[#111714] text-base font-normal leading-normal pb-3 pt-1 px-4';
content.appendChild(carbon);

// Alternatives Heading
const altHeading = document.createElement('h3');
altHeading.textContent = 'Greener Alternatives';
altHeading.className =
  'text-[#111714] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4';
content.appendChild(altHeading);

// Reusable Card Function
function createAlternative(title, subtitle, bgImageUrl) {
  const card = document.createElement('div');
  card.className =
    'flex items-center gap-4 bg-white px-4 min-h-[72px] py-2';

  const imgDiv = document.createElement('div');
  imgDiv.className =
    'bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14';
  imgDiv.style.backgroundImage = `url("${bgImageUrl}")`;
  card.appendChild(imgDiv);

  const textContainer = document.createElement('div');
  textContainer.className = 'flex flex-col justify-center';

  const titleP = document.createElement('p');
  titleP.textContent = title;
  titleP.className =
    'text-[#111714] text-base font-medium leading-normal line-clamp-1';

  const subtitleP = document.createElement('p');
  subtitleP.textContent = subtitle;
  subtitleP.className =
    'text-[#648772] text-sm font-normal leading-normal line-clamp-2';

  textContainer.appendChild(titleP);
  textContainer.appendChild(subtitleP);
  card.appendChild(textContainer);

  return card;
}

// Cards
content.appendChild(
  createAlternative(
    'Bamboo T-Shirt',
    'Sustainable Brand',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAQb7By7lA7Pxe8OabbWaczqvqSh74CzK6cwVNZ4pNkYJ3nM68xK3lBuiSrbjQJLS2Tj1h0Ytsrj2YKGv9G5hzgznFDJffm5WKo1EtLYabjB_9LKoQu1vzD0pmAR3P-oamF_NzfOw5TbcV2MHGl3Fk3X1Hewkr1Kv5aJTMLWF5WrbK5Gftq8kimx46cW46Qn13wHr5OIukCa6NGyR4K0S9N2FUJR7E_a-E-cy7lP_DhWObe40mGVCRTJy_XvwkaGh7qkZpgTepi42E'
  )
);

content.appendChild(
  createAlternative(
    'Recycled Cotton T-Shirt',
    'Recycled Materials',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD_44GHQMigjGUjCDNGcG7jjwcatXPqOk6CLlKZKBLGD_20wvnVBHN5aTvg4gW1uK9MKeyBiRcMetLpOpqkheiXBOwzqb-hnSoxu6YHjDZsX_JajXud9UJCQcRR4kB5HQhjYap4jUXaIU2Zd5zFLxONJvFntvM9v7oSuJU4cnoBXYDxtr8fxY1d7okVa_Gy1Iyrl5yEfI70GOoQ2pGP0Z89E0vaADwT4SC0MEs-_fczITmibuejGX2vxwGqWcTXCg9sy9PMo3pEBZM'
  )
);

content.appendChild(
  createAlternative(
    'Hemp T-Shirt',
    'Ethically Sourced',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCp-s0AmEQCO3MshP9kIqwjVzzy4ky-i0ziLZlgyUMVyw2dqEf9LFF-hqgElUMpINOYrEddQ1puwUUuLtWEpR-dn3XxSzIQ6NdiDdrowynuGEivQ0WfTqcLqXkRPsc-n2vFJoxkEd-amzE3twS-JAqxWjsZcONOoGoria__r8hE7I4mbt-N-mZnZc-UeeuImhNx2EWPcYE2kFMDSO5Di3ItyPVV8kMXpXxgyFY06lEFWwnA3xLNZ1IkVcpKUlEmEuYR-COV_wQlipE'
  )
);

innerContainer.appendChild(content);
layoutContainer.appendChild(innerContainer);
container.appendChild(layoutContainer);
document.body.appendChild(container);
