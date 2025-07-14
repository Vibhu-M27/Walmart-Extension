document.addEventListener('DOMContentLoaded', async function() {
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
    header.className = 'flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f4f2] px-10 py-3';
    layoutContainer.appendChild(header);

    // Header logo and title
    const headerLeft = document.createElement('div');
    headerLeft.className = 'flex items-center gap-4 text-[#111714]';
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
    headerTitle.className = 'text-[#111714] text-lg font-bold leading-tight tracking-[-0.015em]';
    headerTitle.textContent = 'EcoCart';
    headerLeft.appendChild(headerTitle);

    // Header button
    const headerButton = document.createElement('button');
    headerButton.className = 'flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f0f4f2] text-[#111714] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5';
    const buttonIconDiv = document.createElement('div');
    buttonIconDiv.className = 'text-[#111714]';
    buttonIconDiv.setAttribute('data-icon', 'X');
    buttonIconDiv.setAttribute('data-size', '20px');
    buttonIconDiv.setAttribute('data-weight', 'regular');
    const buttonSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    buttonSvg.setAttribute('width', '20px');
    buttonSvg.setAttribute('height', '20px');
    buttonSvg.setAttribute('fill', 'currentColor');
    buttonSvg.setAttribute('viewBox', '0 0 256 256');
    const buttonPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    buttonPath.setAttribute('d', 'M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z');
    buttonSvg.appendChild(buttonPath);
    buttonIconDiv.appendChild(buttonSvg);
    headerButton.appendChild(buttonIconDiv);
    header.appendChild(headerButton);

    // Main content
    const contentDiv = document.createElement('div');
    contentDiv.className = 'px-40 flex flex-1 justify-center py-5';
    layoutContainer.appendChild(contentDiv);

    const contentContainer = document.createElement('div');
    contentContainer.className = 'layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1';
    contentDiv.appendChild(contentContainer);

    // Your EcoCart Impact section
    const impactTitle = document.createElement('h2');
    impactTitle.className = 'text-[#111714] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5';
    impactTitle.textContent = 'Your EcoCart Impact';
    contentContainer.appendChild(impactTitle);

    const impactStats = document.createElement('div');
    impactStats.className = 'flex flex-wrap gap-4 p-4';
    contentContainer.appendChild(impactStats);

    const co2Stat = document.createElement('div');
    co2Stat.className = 'flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#f0f4f2]';
    const co2Label = document.createElement('p');
    co2Label.className = 'text-[#111714] text-base font-medium leading-normal';
    co2Label.textContent = 'Total CO₂ Saved';
    const co2Value = document.createElement('p');
    co2Value.className = 'text-[#111714] tracking-light text-2xl font-bold leading-tight';
    co2Value.textContent = '125 kg';
    co2Stat.appendChild(co2Label);
    co2Stat.appendChild(co2Value);
    impactStats.appendChild(co2Stat);

    const productsStat = document.createElement('div');
    productsStat.className = 'flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#f0f4f2]';
    const productsLabel = document.createElement('p');
    productsLabel.className = 'text-[#111714] text-base font-medium leading-normal';
    productsLabel.textContent = 'Green Products Chosen';
    const productsValue = document.createElement('p');
    productsValue.className = 'text-[#111714] tracking-light text-2xl font-bold leading-tight';
    productsValue.textContent = '45';
    productsStat.appendChild(productsLabel);
    productsStat.appendChild(productsValue);
    impactStats.appendChild(productsStat);

    // Progress Over Time section
    const progressTitle = document.createElement('h2');
    progressTitle.className = 'text-[#111714] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5';
    progressTitle.textContent = 'Progress Over Time';
    contentContainer.appendChild(progressTitle);

    const progressContent = document.createElement('div');
    progressContent.className = 'flex flex-wrap gap-4 px-4 py-6';
    contentContainer.appendChild(progressContent);

    const co2Savings = document.createElement('div');
    co2Savings.className = 'flex min-w-72 flex-1 flex-col gap-2';
    progressContent.appendChild(co2Savings);

    const savingsLabel = document.createElement('p');
    savingsLabel.className = 'text-[#111714] text-base font-medium leading-normal';
    savingsLabel.textContent = 'CO₂ Savings';
    co2Savings.appendChild(savingsLabel);

    const savingsValue = document.createElement('p');
    savingsValue.className = 'text-[#111714] tracking-light text-[32px] font-bold leading-tight truncate';
    savingsValue.textContent = '125 kg';
    co2Savings.appendChild(savingsValue);

    const savingsTrend = document.createElement('div');
    savingsTrend.className = 'flex gap-1';
    co2Savings.appendChild(savingsTrend);

    const periodText = document.createElement('p');
    periodText.className = 'text-[#648772] text-base font-normal leading-normal';
    periodText.textContent = 'Last 30 Days';
    savingsTrend.appendChild(periodText);

    const trendText = document.createElement('p');
    trendText.className = 'text-[#078829] text-base font-medium leading-normal';
    trendText.textContent = '+15%';
    savingsTrend.appendChild(trendText);

    const graphContainer = document.createElement('div');
    graphContainer.className = 'flex min-h-[180px] flex-1 flex-col gap-8 py-4';
    co2Savings.appendChild(graphContainer);

    const graphSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    graphSvg.setAttribute('width', '100%');
    graphSvg.setAttribute('height', '148');
    graphSvg.setAttribute('viewBox', '-3 0 478 150');
    graphSvg.setAttribute('fill', 'none');
    graphSvg.setAttribute('preserveAspectRatio', 'none');

    const fillPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    fillPath.setAttribute('d', 'M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z');
    fillPath.setAttribute('fill', 'url(#paint0_linear_1131_5935)');

    const strokePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    strokePath.setAttribute('d', 'M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25');
    strokePath.setAttribute('stroke', '#648772');
    strokePath.setAttribute('stroke-width', '3');
    strokePath.setAttribute('stroke-linecap', 'round');

    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const linearGradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    linearGradient.setAttribute('id', 'paint0_linear_1131_5935');
    linearGradient.setAttribute('x1', '236');
    linearGradient.setAttribute('y1', '1');
    linearGradient.setAttribute('x2', '236');
    linearGradient.setAttribute('y2', '149');
    linearGradient.setAttribute('gradientUnits', 'userSpaceOnUse');
    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('stop-color', '#f0f4f2');
    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '1');
    stop2.setAttribute('stop-color', '#f0f4f2');
    stop2.setAttribute('stop-opacity', '0');
    linearGradient.appendChild(stop1);
    linearGradient.appendChild(stop2);
    defs.appendChild(linearGradient);
    graphSvg.appendChild(fillPath);
    graphSvg.appendChild(strokePath);
    graphSvg.appendChild(defs);
    graphContainer.appendChild(graphSvg);

    const weeksDiv = document.createElement('div');
    weeksDiv.className = 'flex justify-around';
    const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    weeks.forEach(week => {
        const weekText = document.createElement('p');
        weekText.className = 'text-[#648772] text-[13px] font-bold leading-normal tracking-[0.015em]';
        weekText.textContent = week;
        weeksDiv.appendChild(weekText);
    });
    graphContainer.appendChild(weeksDiv);

    // Gamification Badges section
    const badgesTitle = document.createElement('h2');
    badgesTitle.className = 'text-[#111714] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5';
    badgesTitle.textContent = 'Gamification Badges';
    contentContainer.appendChild(badgesTitle);

    const badgesGrid = document.createElement('div');
    badgesGrid.className = 'grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4';
    contentContainer.appendChild(badgesGrid);

    const badgeUrls = [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAbqg01xMz9us97v2T0DxLAiPJ6TP7sqOiaPiPYsjitw95nlMCzwHbAj4UUm8IkM0VccrsLXmIGynnW7lwUammHCOMEBpNWUXHkGdr6oZ5uBeJ5q1Sub2pXzSjRUCF_Pru064VBNRykj4FPr2pZZu5Ufs638k0vpzwev2BHJyo_G2By5hJk3v-IANtHwlAOz_uPhvdBV1sz6cOwWgYWKUAh41dH4fW_mAjf8toa9SscjmrYRG_pIJqp06U3I9Sd9kZxnct-VRofL9c',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDIJnj7-i1w_Zp0ZBozBCfuh0FJ8bxUI_UV6iJ3PWNQLYMXhSiCxpCTWgO-1L9v3RgHo4N1vhLdtEXCfqAWtMKWaynFsF2FV6FjWwfrWUA8oQ4L-7EtW6k-mcaeoNaiq5WA863hg5wiQobasGcqfoIpBwFwvITTbCkjwoF88X2b2fMheXvqfM7EKZpAjdHX5_s2Iuq6Px5HVlMJeLkQDdlBKcjZUjM3US4UQLLEUdtSVzyLB4lIvsl8e4-vuSwqRO_kIGim7ko1kyQ',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC6OFGuh6KCsQ5wAwY9Surhu2TgnSrG2nnxH7SDGYGwJseamHu407mXuC23-OWol5dz3Ur6dZCCSz5AS_lEwW3JuBofmPWR5zPGtHdycBed3PJRW517w4wqzqeCNocJuSi8yAbRLAsDIohRehCwq6usPTX_3bFfe7L_a2fgybDna-rNWig0hu6MKuVam7lvl7tjCDOgikr1UeZL_nDmwi5SMrLIozRP8OAN2HzoNz9lKtR_GZi7skTGvsA_FFSp1eiNZTiyRg1G0LA'
    ];

    badgeUrls.forEach(url => {
        const badgeDiv = document.createElement('div');
        badgeDiv.className = 'flex flex-col gap-3';
        const badgeImage = document.createElement('div');
        badgeImage.className = 'w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl';
        badgeImage.style.backgroundImage = `url("${url}")`;
        badgeDiv.appendChild(badgeImage);
        badgesGrid.appendChild(badgeDiv);
    });

    // Eco-Friendly Shopping Tips section
    const tipsTitle = document.createElement('h2');
    tipsTitle.className = 'text-[#111714] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5';
    tipsTitle.textContent = 'Eco-Friendly Shopping Tips';
    contentContainer.appendChild(tipsTitle);

    const tips = [
        {
            icon: 'Leaf',
            title: 'Choose Certified Products',
            description: 'Look for products with eco-labels and certifications.',
            path: 'M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94a87.09,87.09,0,0,0-12.76,49c.57,15.92,5.21,32,13.79,47.85l-19.51,19.5a8,8,0,0,0,11.32,11.32l19.5-19.51C81,210.73,97.09,215.37,113,215.94q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C205,177.18,227.93,116.21,223.45,40.07ZM153.75,189.5c-22.75,13.78-49.68,14-76.71.77l88.63-88.62a8,8,0,0,0-11.32-11.32L65.73,179c-13.19-27-13-54,.77-76.71,22.09-36.47,74.6-56.44,141.31-54.06C210.2,114.89,190.22,167.41,153.75,189.5Z'
        },
        {
            icon: 'Recycle',
            title: 'Select Sustainable Materials',
            description: 'Opt for items made from recycled or sustainable materials.',
            path: 'M96,208a8,8,0,0,1-8,8H40a24,24,0,0,1-20.77-36l34.29-59.25L39.47,124.5A8,8,0,1,1,35.33,109l32.77-8.77a8,8,0,0,1,9.8,5.66l8.79,32.77A8,8,0,0,1,81,148.5a8.37,8.37,0,0,1-2.08.27,8,8,0,0,1-7.72-5.93l-3.8-14.15L33.11,188A8,8,0,0,0,40,200H88A8,8,0,0,1,96,208Zm140.73-28-23.14-40a8,8,0,0,0-13.84,8l23.14,40A8,8,0,0,1,216,200H147.31l10.34-10.34a8,8,0,0,0-11.31-11.32l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.31-11.32L147.31,216H216a24,24,0,0,0,20.77-36ZM128,32a7.85,7.85,0,0,1,6.92,4l34.29,59.25-14.08-3.78A8,8,0,0,0,151,106.92l32.78,8.79a8.23,8.23,0,0,0,2.07.27,8,8,0,0,0,7.72-5.93l8.79-32.79a8,8,0,1,0-15.45-4.14l-3.8,14.17L148.77,28a24,24,0,0,0-41.54,0L84.07,68a8,8,0,0,0,13.85,8l23.16-40A7.85,7.85,0,0,1,128,32Z'
        },
        {
            icon: 'Globe',
            title: 'Support Eco-Conscious Brands',
            description: 'Support brands committed to environmental responsibility.',
            path: 'M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z'
        }
    ];

    tips.forEach(tip => {
        const tipDiv = document.createElement('div');
        tipDiv.className = 'flex items-center gap-4 bg-white px-4 min-h-[72px] py-2';
        const iconDiv = document.createElement('div');
        iconDiv.className = 'text-[#111714] flex items-center justify-center rounded-lg bg-[#f0f4f2] shrink-0 size-12';
        iconDiv.setAttribute('data-icon', tip.icon);
        iconDiv.setAttribute('data-size', '24px');
        iconDiv.setAttribute('data-weight', 'regular');
        const tipSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        tipSvg.setAttribute('width', '24px');
        tipSvg.setAttribute('height', '24px');
        tipSvg.setAttribute('fill', 'currentColor');
        tipSvg.setAttribute('viewBox', '0 0 256 256');
        const tipPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        tipPath.setAttribute('d', tip.path);
        tipSvg.appendChild(tipPath);
        iconDiv.appendChild(tipSvg);
        tipDiv.appendChild(iconDiv);
        const textDiv = document.createElement('div');
        textDiv.className = 'flex flex-col justify-center';
        const tipTitle = document.createElement('p');
        tipTitle.className = 'text-[#111714] text-base font-medium leading-normal line-clamp-1';
        tipTitle.textContent = tip.title;
        const tipDescription = document.createElement('p');
        tipDescription.className = 'text-[#648772] text-sm font-normal leading-normal line-clamp-2';
        tipDescription.textContent = tip.description;
        textDiv.appendChild(tipTitle);
        textDiv.appendChild(tipDescription);
        tipDiv.appendChild(textDiv);
        contentContainer.appendChild(tipDiv);
    });

    // Fetch latest score from backend
    let latestScore = null;
    try {
        const response = await fetch('/api/scores');
        if (response.ok) {
            const scores = await response.json();
            if (scores.length > 0) {
                // Sort by timestamp descending
                latestScore = scores.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0];
            }
        }
    } catch (err) {
        console.error('Failed to fetch scores from backend:', err);
    }
    const scoreValue = latestScore && latestScore.score !== undefined ? latestScore.score : '--';
    const carbonValue = latestScore && latestScore.carbonFootprint !== undefined ? `${latestScore.carbonFootprint} kg CO₂` : '--';
    const scoreElem = document.getElementById('sustainability-score-value');
    const carbonElem = document.getElementById('carbon-footprint-value');
    if (scoreElem) scoreElem.textContent = scoreValue;
    if (carbonElem) carbonElem.textContent = carbonValue;

    // Load Chart.js dynamically if not present
    function loadChartJs(callback) {
      if (window.Chart) return callback();
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
      script.onload = callback;
      document.head.appendChild(script);
    }

    async function renderCo2BarChart() {
      // Fetch user progress data
      const response = await fetch('/api/user-progress');
      const data = await response.json();
      // Aggregate by week (assume each entry is a week for now)
      const labels = data.map((entry, i) => `Week ${i + 1}`);
      const values = data.map(entry => entry.carbonSaved);
      // Render chart
      loadChartJs(() => {
        const ctx = document.getElementById('co2BarChart').getContext('2d');
        if (window.co2BarChartInstance) window.co2BarChartInstance.destroy();
        window.co2BarChartInstance = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'CO₂ Saved (kg)',
              data: values,
              backgroundColor: '#38e07b',
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: { display: false },
              title: { display: false }
            },
            scales: {
              y: { beginAtZero: true, title: { display: true, text: 'CO₂ Saved (kg)' } },
              x: { title: { display: true, text: 'Week' } }
            }
          }
        });
      });
    }

    renderCo2BarChart();

    // Append main container to body
    document.body.appendChild(mainContainer);
});