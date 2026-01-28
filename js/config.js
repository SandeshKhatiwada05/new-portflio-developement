/* ============================
   CONFIGURATION DATA
   Easy to edit and extend!
   ============================ */

const CONFIG = {
    // Games Data: Add new games here easily
    games: [
        {
            id: 'royal-battletown',
            title: 'Royal Battletown: GTA Game',
            description: 'Open-world action chaos, GTA style',
            embedUrl: 'https://www.madkidgames.com/full/royal-battletown-gta-game',
            icon: '🚗'
        },
        {
            id: 'granny',
            title: 'Granny',
            description: 'Survival horror puzzle adventure',
            embedUrl: 'https://www.madkidgames.com/full/granny',
            icon: '👵'
        },
        {
            id: 'motorcycle-simulator',
            title: 'Ultimate Motorcycle Simulator',
            description: 'Realistic bike riding experience',
            embedUrl: 'https://www.madkidgames.com/full/ultimate-motorcycle-simulator',
            icon: '🏍️'
        },
        {
            id: 'bike-race',
            title: 'Bike Race: Racing Game',
            description: 'Fast-paced competitive racing',
            embedUrl: 'https://www.madkidgames.com/full/bike-race-racing-game',
            icon: '🚴'
        },
        {
            id: 'ninja-samurai',
            title: 'Ninja Samurai: Action RPG Survival',
            description: 'Combat-driven action adventure',
            embedUrl: 'https://www.madkidgames.com/full/ninja-samurai-action-rpg-survival',
            icon: '🗡️'
        },
        {
            id: 'temple-rider',
            title: 'Temple Rider: BMX Racing 3D',
            description: 'Extreme BMX stunts and racing',
            embedUrl: 'https://www.madkidgames.com/full/temple-rider-bmx-racing-3d',
            icon: '🚲'
        },
        {
            id: 'tower-crush',
            title: 'Tower Crush – Defense TD',
            description: 'Strategic tower defense gameplay',
            embedUrl: 'https://www.madkidgames.com/full/tower-crush-defense-td',
            icon: '🏰'
        }
    ],

    // Skills: Organized by category
    skills: {
        'Languages': ['Java', 'Python', 'C++', 'C#', 'JavaScript', 'PHP'],
        'Backend & Frameworks': ['Spring Boot', 'Django', 'Flask', '.NET', 'React'],
        'Databases': ['MySQL', 'PostgreSQL', 'MongoDB', 'CockroachDB'],
        'Cloud & DevOps': ['Microsoft Azure', 'Git', 'Maven', 'Docker'],
        'Big Data & ML': ['Apache Hadoop', 'Jupyter Notebook', 'n8n', 'Python'],
        'Tools & Testing': ['JUnit', 'SonarLint', 'SonarQube', 'Linux']
    },

    // Projects: Add more projects here
    projects: [
        {
            title: 'Spring Boot Microservices',
            description: 'Scalable backend system using Spring Boot with JPA, Security, and PostgreSQL',
            tags: ['Spring Boot', 'Java', 'PostgreSQL', 'Microservices'],
            github: 'https://github.com/SandeshKhatiwada05'
        },
        {
            title: 'ML Data Pipeline',
            description: 'Automated ETL pipeline using Python, Jupyter Notebook, and Apache Hadoop',
            tags: ['Python', 'ML', 'Hadoop', 'Data Science'],
            github: 'https://github.com/SandeshKhatiwada05'
        },
        {
            title: 'Full-Stack Web App',
            description: 'React frontend with .NET backend, responsive design, modern UX',
            tags: ['React', '.NET', 'JavaScript', 'Full-Stack'],
            github: 'https://github.com/SandeshKhatiwada05'
        },
        {
            title: 'Cloud Infrastructure',
            description: 'Azure VMs, App Services, and networking setup with infrastructure as code',
            tags: ['Azure', 'Cloud', 'DevOps', 'Infrastructure'],
            github: 'https://github.com/SandeshKhatiwada05'
        }
    ],

    // Learning Journey Timeline
    timeline: [
        {
            year: '2022',
            title: 'Foundation Year',
            items: [
                'Started learning Java and OOP principles',
                'Explored Data Structures and Algorithms',
                'Basic web development with HTML, CSS, JavaScript'
            ]
        },
        {
            year: '2023',
            title: 'Backend Development Focus',
            items: [
                'Mastered Spring Boot and Spring Security',
                'Learned JPA, Hibernate, and database design',
                'Built RESTful APIs and microservices'
            ]
        },
        {
            year: '2024',
            title: 'Expansion & Cloud',
            items: [
                'Explored ML and Data Science with Python',
                'Learned Microsoft Azure cloud platform',
                'Apache Hadoop and distributed systems'
            ]
        },
        {
            year: '2025-2026',
            title: 'Full-Stack & Specialization',
            items: [
                'Advanced Java concepts and design patterns',
                'ML/AI automation with n8n',
                'Full-stack development with React and .NET'
            ]
        }
    ],

    // Services/Specializations
    services: [
        {
            name: 'Backend Development',
            icon: '⚙️',
            description: 'Spring Boot, microservices, RESTful APIs, database design'
        },
        {
            name: 'Data Science & ML',
            icon: '📊',
            description: 'Python, ML models, data pipelines, automation'
        },
        {
            name: 'Full-Stack Development',
            icon: '💻',
            description: 'Frontend with React, backend with Spring/.NET'
        },
        {
            name: 'Cloud & DevOps',
            icon: '☁️',
            description: 'Azure, Docker, CI/CD, infrastructure automation'
        }
    ]
};
