document.addEventListener('DOMContentLoaded', function() {
    // Set document title
    document.title = 'Stitch Design';

    // Create main container
    const mainContainer = document.createElement('div');
    mainContainer.className = 'relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden';
    mainContainer.style.fontFamily = 'Lexend, "Noto Sans", sans-serif';

    // Create layout container
    const layoutContainer = document.createElement('div');
    layoutContainer.className = 'layout-container flex h-full grow flex-col';
    mainContainer.appendChild(layoutContainer);

    // Create header
    const header = document.createElement('header');
    header.className = 'flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f4f0] px-10 py-3';
    layoutContainer.appendChild(header);

    // Header logo and title
    const headerLeft = document.createElement('div');
    headerLeft.className = 'flex items-center gap-4 text-[#111811]';
    header.appendChild(headerLeft);

    const logoDiv = document.createElement('div');
    logoDiv.className = 'size-4';
    const logoSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    logoSvg.setAttribute('viewBox', '0 0 48 48');
    logoSvg.setAttribute('fill', 'none');
    const logoPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    logoPath.setAttribute('fill-rule', 'evenodd');
    logoPath.setAttribute('clip-rule', 'evenodd');
    logoPath.setAttribute('d', 'M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z');
    logoPath.setAttribute('fill', 'currentColor');
    logoSvg.appendChild(logoPath);
    logoDiv.appendChild(logoSvg);
    headerLeft.appendChild(logoDiv);

    const headerTitle = document.createElement('h2');
    headerTitle.className = 'text-[#111811] text-lg font-bold leading-tight tracking-[-0.015em]';
    headerTitle.textContent = 'EcoCart';
    headerLeft.appendChild(headerTitle);

    // Header navigation and button
    const headerRight = document.createElement('div');
    headerRight.className = 'flex flex-1 justify-end gap-8';
    header.appendChild(headerRight);

    const navDiv = document.createElement('div');
    navDiv.className = 'flex items-center gap-9';
    const navLinks = [
        { text: 'Home', href: '#' },
        { text: 'Products', href: '#' },
        { text: 'About', href: '#' }
    ];
    navLinks.forEach(link => {
        const navLink = document.createElement('a');
        navLink.className = 'text-[#111811] text-sm font-medium leading-normal';
        navLink.href = link.href;
        navLink.textContent = link.text;
        navDiv.appendChild(navLink);
    });
    headerRight.appendChild(navDiv);

    const headerButton = document.createElement('button');
    headerButton.className = 'flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#f0f4f0] text-[#111811] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5';
    const buttonIconDiv = document.createElement('div');
    buttonIconDiv.className = 'text-[#111811]';
    buttonIconDiv.setAttribute('data-icon', 'ShoppingCart');
    buttonIconDiv.setAttribute('data-size', '20px');
    buttonIconDiv.setAttribute('data-weight', 'regular');
    const buttonSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    buttonSvg.setAttribute('width', '20px');
    buttonSvg.setAttribute('height', '20px');
    buttonSvg.setAttribute('fill', 'currentColor');
    buttonSvg.setAttribute('viewBox', '0 0 256 256');
    const buttonPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    buttonPath.setAttribute('d', 'M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z');
    buttonSvg.appendChild(buttonPath);
    buttonIconDiv.appendChild(buttonSvg);
    headerButton.appendChild(buttonIconDiv);
    headerRight.appendChild(headerButton);

    // Main content
    const contentDiv = document.createElement('div');
    contentDiv.className = 'px-40 flex flex-1 justify-center py-5';
    layoutContainer.appendChild(contentDiv);

    const contentContainer = document.createElement('div');
    contentContainer.className = 'layout-content-container flex flex-col max-w-[960px] flex-1';
    contentDiv.appendChild(contentContainer);

    // Title section
    const titleDiv = document.createElement('div');
    titleDiv.className = 'flex flex-wrap justify-between gap-3 p-4';
    contentContainer.appendChild(titleDiv);

    const mainTitle = document.createElement('p');
    mainTitle.className = 'text-[#111811] tracking-light text-[32px] font-bold leading-tight min-w-72';
    mainTitle.textContent = 'Your Eco-Friendly Shopping List';
    titleDiv.appendChild(mainTitle);

    // Products section
    const productsTitle = document.createElement('h3');
    productsTitle.className = 'text-[#111811] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4';
    productsTitle.textContent = 'Products';
    contentContainer.appendChild(productsTitle);

    // Product list
    const products = [
        {
            name: 'Organic Cotton T-Shirt',
            details: 'Carbon Footprint: 2.5 kg CO₂ | EcoScore: 85 | Packaging: Good | Certifications: GOTS | Material Impact: Low',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSAKSufjJoEvoDh1V4Yot6j9Iq_m0-1uabYevBR-Fba0egkkwp5Ug5_bGGIflU2KkhLxTnJOPeOi5UOKnTZ6-O_ci5cZo5sb_3aOHVkJnlfcHTcQmCHAkNAZedUS6v_1SBr495Ci9X4dNLqv9aO6PrrBfl9MJFX-1Lo8Z6rWcJHaAgAj4_qfXFOa9hrKvwGNzeh4vKyA53uTyjm0iBvJ7CrYC1yVrkstBSFnJVenpVROu85prCircZaOQsVtNx__eh0rbGVLPuaf0'
        },
        {
            name: 'Bamboo T-Shirt',
            details: 'Carbon Footprint: 1.8 kg CO₂ | EcoScore: 92 | Packaging: Excellent | Certifications: FSC | Material Impact: Very Low',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQb7By7lA7Pxe8OabbWaczqvqSh74CzK6cwVNZ4pNkYJ3nM68xK3lBuiSrbjQJLS2Tj1h0Ytsrj2YKGv9G5hzgznFDJffm5WKo1EtLYabjB_9LKoQu1vzD0pmAR3P-oamF_NzfOw5TbcV2MHGl3Fk3X1Hewkr1Kv5aJTMLWF5WrbK5Gftq8kimx46cW46Qn13wHr5OIukCa6NGyR4K0S9N2FUJR7E_a-E-cy7lP_DhWObe40mGVCRTJy_XvwkaGh7qkZpgTepi42E'
        },
        {
            name: 'Recycled Cotton T-Shirt',
            details: 'Carbon Footprint: 2.0 kg CO₂ | EcoScore: 88 | Packaging: Good | Certifications: RCS | Material Impact: Low',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_44GHQMigjGUjCDNGcG7jjwcatXPqOk6CLlKZKBLGD_20wvnVBHN5aTvg4gW1uK9MKeyBiRcMetLpOpqkheiXBOwzqb-hnSoxu6YHjDZsX_JajXud9UJCQcRR4kB5HQhjYap4jUXaIU2Zd5zFLxONJvFntvM9v7oSuJU4cnoBXYDxtr8fxY1d7okVa_Gy1Iyrl5yEfI70GOoQ2pGP0Z89E0vaADwT4SC0MEs-_fczITmibuejGX2vxwGqWcTXCg9sy9PMo3pEBZM'
        },
        {
            name: 'Hemp T-Shirt',
            details: 'Carbon Footprint: 1.5 kg CO₂ | EcoScore: 95 | Packaging: Excellent | Certifications: OCS | Material Impact: Very Low',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCp-s0AmEQCO3MshP9kIqwjVzzy4ky-i0ziLZlgyUMVyw2dqEf9LFF-hqgElUMpINOYrEddQ1puwUUuLtWEpR-dn3XxSzIQ6NdiDdrowynuGEivQ0WfTqcLqXkRPsc-n2vFJoxkEd-amzE3twS-JAqxWjsZcONOoGoria__r8hE7I4mbt-N-mZnZc-UeeuImhNx2EWPcYE2kFMDSO5Di3ItyPVV8kMXpXxgyFY06lEFWwnA3xLNZ1IkVcpKUlEmEuYR-COV_wQlipE'
        }
    ];

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'p-4';
        const productInner = document.createElement('div');
        productInner.className = 'flex items-stretch justify-between gap-4 rounded-xl';
        productDiv.appendChild(productInner);

        const textDiv = document.createElement('div');
        textDiv.className = 'flex flex-col gap-1 flex-[2_2_0px]';
        const productName = document.createElement('p');
        productName.className = 'text-[#111811] text-base font-bold leading-tight';
        productName.textContent = product.name;
        const productDetails = document.createElement('p');
        productDetails.className = 'text-[#638863] text-sm font-normal leading-normal';
        productDetails.textContent = product.details;
        textDiv.appendChild(productName);
        textDiv.appendChild(productDetails);
        productInner.appendChild(textDiv);

        const imageDiv = document.createElement('div');
        imageDiv.className = 'w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1';
        imageDiv.style.backgroundImage = `url("${product.image}")`;
        productInner.appendChild(imageDiv);

        contentContainer.appendChild(productDiv);
    });

    // Append main container to body
    document.body.appendChild(mainContainer);
});