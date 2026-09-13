// Interactive, works when clicked, thus linked to the event bubbling
const cardData = {
    experience: {
        icon: '💼',
        title: 'Experience',
        items: [
            {
                title: 'Tech Mahindra',
                period: 'July 2026 - Present',
                role: 'Software Engineering Intern (Hybrid)',
                description: [
                    'Developed a production-oriented Java Spring Boot microservice using layered architecture and REST APIs for enterprise backend workflows.',
                    'Built an interactive React interface integrated with Spring Data JPA and PostgreSQL for persistent backend operations.',
                    'Implemented JWT authentication, role-based authorization, and batch processing following secure backend development practices.'
                ]
            },
            {
                title: 'Visvesvaraya National Institute of Technology',
                period: 'Jan 2026 - Sep 2026',
                role: 'AI Evaluation Engineer, Nagpur, India',
                description: [
                    'Architected a Python-based LLM evaluation pipeline using Generative AI, improving evaluation accuracy from a global standard of 15% to 50%.',
                    'Engineered a two-pass JSON-based evaluation workflow to reduce anchoring bias and isolate mathematical reasoning errors.',
                    'Integrated LLM APIs into scalable backend workflows to automatically evaluate responses and store structured grading metrics across large datasets.',
                    'Research work is being prepared for journal publication based on the developed LLM evaluation methodology.'
                ]
            },
            {
                title: 'JolyAI - AI-Powered Photo Management Platform',
                period: 'June 2025 - August 2025',
                role: 'Data Annotation Intern (Remote)',
                description: [
                    'Developed automated Python pipelines using PyTorch and OpenCV to classify and process a dataset of over 50,000 images.',
                    'Implemented multi-label image classification techniques to extract complex visual contexts and improve training data quality.',
                    'Optimized large-scale annotation workflows, accelerating model training in a fast-paced startup environment.'
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
                period: 'Final Year Student · Graduating May 2026',
                role: 'Bachelor of Technology',
                description: [
                    'Computer Science and Engineering',
                    'Passionate about Backend Engineering, AI/ML, and Full-Stack Development'
                ]
            },
            {
                title: 'Sri Chaitanya Pratibha Junior College',
                period: '2021-2023',
                role: 'Higher Secondary Education',
                description: [
                    'Specialized in Mathematics, Physics, and Chemistry',
                    'Graduated with Distinction, score of 98.2% in Board Exams'
                ]
            },
            {
                title: 'Silver Oaks International School',
                period: 'Up to 2021',
                role: 'Secondary Education',
                description: [
                    'Completed CBSE curriculum with a focus on Various Subjects',
                    'Graduated with Distinction, score of 95% in Board Exams'
                ]
            }
        ]
    },
    projects: {
        icon: '🚀',
        title: 'Projects',
        items: [
            {
                title: 'Warp - The Perfected P2P File Sharing Service',
                period: 'Mar 2026 - Apr 2026',
                tools: 'React, WebRTC, Socket.IO, REST APIs',
                description: [
                    'Built a peer-to-peer file sharing application using React and WebRTC, enabling secure browser-to-browser file transfer with ICE connectivity and hash verification.',
                    'Enabled direct peer-to-peer communication without server-side file storage, improving privacy and transfer efficiency.',
                    'Implemented multi-room, low-latency sharing using WebRTC-based chunked transfer protocols.'
                ]
            },
            {
                title: 'Sentinel - Cyber Threat Intelligence & Security Dashboard',
                tools: 'Python, FastAPI, React, PostgreSQL, Redis, Background Workers, Local LLMs',
                description: [
                    'Periodically ingests and normalizes security data from multiple public sources using background workers, storing structured threat intelligence records in PostgreSQL.',
                    'Uses Redis to cache frequently requested results, with a FastAPI backend exposing processed intelligence through APIs consumed by a React dashboard.',
                    'Integrates a local LLM to generate smarter reports and summaries from collected intelligence, combining ingestion, processing, caching, and AI-assisted analysis in one system.'
                ]
            },
            {
                title: 'Anon-Note - The Anonymous Confession Page',
                period: 'Oct 2025 - Nov 2025',
                tools: 'HTML, CSS, JS, MongoDB, Express, React (MERN)',
                description: [
                    'Designed and deployed a high-performance anonymous confession page using the MERN stack, deployed live via Netlify and Render.',
                    'Engineered a system enabling users to anonymously post, react, and comment on text and image notes.',
                    'Implemented active moderation workflows and real-time tracking with dedicated Admin and Login functionalities.'
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
                items: ['Python', 'Java', 'C/C++', 'JavaScript', 'HTML/CSS', 'SQL']
            },
            {
                name: 'Web & Backend',
                items: ['React', 'FastAPI', 'Spring Boot', 'Spring Data JPA', 'REST APIs']
            },
            {
                name: 'Databases & DevOps',
                items: ['PostgreSQL', 'MySQL', 'Docker', 'Docker Compose', 'Git/GitHub', 'GitHub Actions']
            },
            {
                name: 'AI/ML',
                items: ['LLMs', 'Generative AI', 'RAG', 'Agentic AI', 'NLP Pipelines', 'Semantic Embeddings', 'BERTScore', 'SBERT', 'PyTorch', 'OpenCV']
            },
            {
                name: 'Engineering',
                items: ['Data/ML Pipelines', 'JWT Authentication', 'Batch Processing', 'Selenium', 'Oracle21c']
            },
            {
                name: 'Core Coursework',
                items: ['Data Structures & Algorithms', 'Operating Systems', 'Database Management Systems', 'Computer Networks', 'Cryptography', 'Object Oriented Programming']
            }
        ]
    }
};

let isAnimating = false;        // initally set, so that website automatically doesn't show cards content

function init() {
    const cards = document.querySelectorAll('.card');           // one for the card itself
    const backbutton = document.getElementById('back-button');        // one for back button in each card
    const handImage = document.querySelector('.hand-image');
    const photoModal = document.getElementById('photo-modal');
    const closeModal = document.getElementById('close-modal');


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

    // Hand image click to show photo modal
    handImage.addEventListener('click', function() {
        photoModal.classList.add('active');
    });

    // Close modal when clicking the close button
    closeModal.addEventListener('click', function() {
        photoModal.classList.remove('active');
    });

    // Close modal when clicking outside the content
    photoModal.addEventListener('click', function(e) {
        if (e.target === photoModal) {
            photoModal.classList.remove('active');
        }
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