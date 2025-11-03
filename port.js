
// Interactive, works when clicked, thus linked to the event bubbling
const cardData = {
    experience: {
        icon: '💼',
        title: 'Experience',
        items: [
            {
                title: 'Internship at JolyAI',
                period: 'June 2025 - August 2025',
                role: 'Data Annotation Role',
                description: [
                    'Engineered and classified large-scale photographic datasets to enhance training accuracy for core machine learning pipelines.',
                    'Gained hands-on exposure to AI tools and workflows in a real-world, high-impact startup environment using Pytorch libraries and Multilabel Classification.'
                ]
            }
        ]
    },
    education: {
        icon: '🎓',
        title: 'Education',
        items: [
            {
                title: 'Visvesvaraya National Institute of Technology',
                period: 'Third Year Student',
                role: 'Bachelor of Technology',
                description: [
                    'Computer Science and Engineering',
                    'Passionate about Web-App Development, Deep Learning, and Organizational Communication'
                ]
            }
        ]
    },
    projects: {
        icon: '🚀',
        title: 'Projects',
        items: [
            {
                title: 'Automated DL-Integrated Photograph Segregator',
                tools: 'Python, Pytorch, Multilabel Classification, CLIP (OpenAI API)',
                description: [
                    'Executed precise data annotation on thousands of images using Pytorch libraries, improving model performance in recognizing complex visual context and emotional tones.',
                    'Sorts through given dataset to segregate photos based on object of photo, and selects the best poses.',
                    'Dataset can handle thousands of photos, delivering neatly organized and best photos.'
                ]
            },
            {
                title: 'Text-Based Dungeon Crawler',
                tools: 'C++, MySQL (Basic)',
                description: [
                    'An interactive text-based in-terminal dungeon crawler game with fully randomized levels and enemies.',
                    'Character progression compatibility with ability to use previous save files.',
                    'User-login interface allowing multiple users from anywhere.',
                    'Infinitely expandable roguelike gameplay.'
                ]
            },
            {
                title: 'Pharmacy Medication Inventory Handler',
                tools: 'C, File Handling',
                description: [
                    'Designed and implemented a high-performance inventory management system leveraging AVL and B-Tree data structures.',
                    'Efficient real-time tracking of medication stock, sales, and expiration dates.',
                    'Check supplier information, sales information, calculate turnovers, and identify highest selling medicines.',
                    'Real-time tracking of medicine expiration dates with filtering capabilities.'
                ]
            }
        ]
    },
    skills: {
        icon: '⚡',
        title: 'Skills',
        categories: [
            {
                name: 'Programming Languages',
                items: ['C/C++', 'Python', 'HTML & CSS', 'JavaScript']
            },
            {
                name: 'Frameworks & Tools',
                items: ['PyQt5 (Python)', 'Pytorch (Basics)', 'Local File Handling', 'MySQL (Basic)']
            },
            {
                name: 'Technical Skills',
                items: ['Machine Learning', 'Data Annotation', 'Web Development', 'Data Structures & Algorithms']
            }
        ]
    }
};

let isAnimating = false;        // initally set, so that website automatically doesn't show cards content

function init() {
    const cards = document.querySelectorAll('.card');           // one for the card itself
    const backbutton = document.getElementById('back-button');        // one for back button in each card

    cards.forEach(card => {
        card.addEventListener('click', function() {
            if (isAnimating) return;
            const cardType = this.getAttribute('data-card');
            showContent(cardType);
        });
    });

    backbutton.addEventListener('click', function() {
        if (isAnimating) return;
        hideContent();
    });
}

function showContent(cardType) {
    isAnimating = true;
    const cardView = document.getElementById('card-view');
    const contentView = document.getElementById('content-view');
    const contentContainer = document.getElementById('content-container');

    const data = cardData[cardType];
    
    if (cardType === 'skills') {
        contentContainer.innerHTML = generateSkillsContent(data);
    } else {
        contentContainer.innerHTML = generateRegularContent(data);
    }

    cardView.classList.add('hidden');                                   // sort of a reset, so that overlapping cards don't activate by accident
    contentView.classList.remove('hidden');

    setTimeout(() => {
        isAnimating = false;
    }, 600);
}

function hideContent() {                                                // in Hand form
    isAnimating = true;
    const cardView = document.getElementById('card-view');
    const contentView = document.getElementById('content-view');

    setTimeout(() => {
        contentView.classList.add('hidden');
        cardView.classList.remove('hidden');
        isAnimating = false;
    }, 300);
}

// issue with Skills and NonSkills cards, so solved by making two functions for each

function generateRegularContent(data) {
    let html = `
        <div class="content-header">
            <span class="content-icon">${data.icon}</span>
            <h2 class="content-title">${data.title}</h2>
        </div>
        <div class="content-items">
    `;

    data.items.forEach(item => {
        html += `
            <div class="content-item">
                <div class="item-header">
                    <h3 class="item-title">${item.title}</h3>
                    ${item.period ? `<span class="item-period">${item.period}</span>` : ''}
                </div>
                ${item.role ? `<p class="item-role">${item.role}</p>` : ''}
                ${item.tools ? `
                    <div class="item-tools">
                        <span>Tools: </span>
                        <span>${item.tools}</span>
                    </div>
                ` : ''}
                <ul class="item-description">
                    ${item.description.map(desc => `<li>${desc}</li>`).join('')}
                </ul>
            </div>
        `;
    });

    html += `</div>`;
    return html;
}

function generateSkillsContent(data) {
    let html = `
        <div class="content-header">
            <span class="content-icon">${data.icon}</span>
            <h2 class="content-title">${data.title}</h2>
        </div>
        <div class="skills-grid">
    `;

    data.categories.forEach(category => {
        html += `
            <div class="skill-category">
                <h3>${category.name}</h3>
                <ul>
                    ${category.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    });

    html += `</div>`;
    return html;
}

document.addEventListener('DOMContentLoaded', init);