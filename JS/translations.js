// translations.js
window.translations = {
  es: {
    nav: {
      about: "Acerca de mí",
      skills: "Habilidades",
      projects: "Proyectos",
      cv: "Resumen",
      blog: "Blog",
    },

    theme: {
      dark: "Modo oscuro",
      light: "Modo claro",
    },

    hero: {
      kicker: "Portafolio · Full Stack Development (React/TypeScript/JavaScript/APIs)",
      title: 'Hola, soy <span class="text-accent">Angie Torres</span>',
      description:
        "Soy Full Stack Developer con experiencia construyendo aplicaciones web responsivas con React, TypeScript, JavaScript y APIs REST. Trabajo de punta a punta en frontend, backend, datos, autenticación, pruebas, CI/CD e infraestructura.",
      bullets: {
        ui: "Frontend con React, TypeScript, JavaScript y diseño responsive",
        components: "Componentes reutilizables e integración con APIs REST",
        js: "Backend con Python/FastAPI y Java/Spring Boot",
        git: "Git, Docker, CI/CD y despliegues en la nube",
      },
      buttons: {
        projects: "Ver proyectos",
        cv: "Ver CV",
        blog: "Blog / Reflexiones",
      },
      contactLabel: "Contacto:",
    },

    about: {
      title: "Acerca de mí",
      p1:
        "Soy Full Stack Developer con experiencia práctica construyendo aplicaciones web y flujos de negocio. Trabajo con React, TypeScript y JavaScript en frontend, y con Python/FastAPI y Java/Spring Boot para servicios e integraciones backend.",
      p2:
        "También trabajo con PostgreSQL, autenticación, APIs REST, Git, Docker y CI/CD. Me interesa desarrollar productos mantenibles de punta a punta, cuidando tanto la experiencia de usuario como la integración entre frontend, backend, datos e infraestructura.",
      cards: {
        role: { label: "Rol principal", value: "Full Stack Developer" },
        focus: { label: "Enfoques", value: "React, TypeScript, JavaScript, REST APIs" },
        interests: { label: "Intereses", value: "eCommerce, APIs, automation" },
        fun: { label: "Fun fact", value: "Dog-mom de mi perrito Chewbacca" },
      },
    },

    skills: {
      title: "Habilidades",
      subtitle: "Tecnologías y habilidades que utilizo en mis proyectos.",
      cards: {
        frontend: { title: "Frontend", desc: "React | TypeScript | JavaScript | HTML | CSS", badge: "Responsive Web" },
        design: { title: "APIs & Backend", desc: "REST | FastAPI | Spring Boot | OpenAPI", badge: "Integraciones" },
        backend: { title: "Data & Auth", desc: "PostgreSQL | MySQL | Firebase | Keycloak", badge: "OAuth2 / OIDC / JWT" },
        tools: { title: "DevOps & Cloud", desc: "Git | GitHub | Docker | CI/CD", badge: "Despliegues cloud" },
      },
    },

    labels: {
      role: "Rol:",
      tech: "Tecnologías:",
      challenges: "Desafíos:",
      learn: "Aprendizajes clave:",
    },

    buttons: {
      more: "Ver más",
      less: "Ver menos",
      github: "Código en GitHub",
      demo: "Ver demo",
      staging: "Ver staging",
      admin: "Ver módulo admin",
    },

    projects: {
      title: "Proyectos",
      subtitle: "Proyectos recientes de desarrollo Full Stack, frontend, APIs y productos web.",
      maizEcommerce: {
        title: "Maíz Fundido – Plataforma eCommerce Full Stack", badge: "Producto actual · En desarrollo",
        p1: "Plataforma eCommerce end-to-end con catálogo, variantes, inventario, autenticación, carrito, promociones y flujos administrativos.",
        role: "Desarrollo Full Stack de frontend, backend, datos, autenticación, CI/CD e infraestructura.",
        tech: "React, TypeScript, JavaScript, REST APIs, PostgreSQL, Firebase Auth, Docker, GitHub Actions, Railway, Cloudflare y R2 Object Storage.",
        challenges: "alinear contratos frontend/backend, mantener flujos de inventario y autenticación consistentes y desplegar cambios de forma incremental.",
        learn: "administración de catálogo, importación estructurada, seguridad y endurecimiento de UX.",
      },
      territorios: {
        title: "Territorios de Paz e Igualdad", badge: "ADIP · Plataforma institucional",
        p1: "Plataforma para captura, seguimiento y visualización de información de actividades realizadas en territorios estratégicos de la Ciudad de México.",
        role: "Desarrollo de formularios, flujos de captura y apoyo a métricas y reportes institucionales.",
        tech: "formularios complejos, datos estructurados, métricas, evidencia y seguimiento institucional.",
      },
      donalap: {
        title: "DónaLap – Dashboard y administración", badge: "ADIP · Proyecto institucional",
        p1: "Plataforma para gestión de donación y rehabilitación de equipos de cómputo, con flujos para distintos perfiles de usuario.",
        role: "Participación en dashboard, métricas, tarjetas, flujos administrativos e integración con APIs.",
        tech: "dashboards, administración, roles, seguimiento de donaciones e integración frontend-backend.",
      },
      rescate: {
        title: "Rescate Canino CDMX", badge: "Prototipo institucional",
        p1: "Prototipo para centralizar información de albergues y perros rescatados en la Ciudad de México mediante un portal de consulta y administración.",
        role: "Diseño de estructura de datos, vistas de consulta y flujos administrativos para gestión de albergues.",
        tech: "base de datos, catálogo de perros, administración de refugios y control centralizado de información.",
      },
      maizLanding: {
        title: "Maíz Fundido – Sitio comercial & catálogo", badge: "Sitio independiente · Producción",
        p1: "Landing responsiva para una marca de impresión 3D, con presentación de productos, contacto y catálogo visual embebido.",
        role: "Diseño, maquetado, implementación responsive y despliegue.",
        tech: "HTML, CSS, JavaScript, Bootstrap, Cloudflare Pages.",
      },
      ayuda: {
        title: "Ayuda ADIP – Portal de autoservicio", badge: "ADIP · Plataforma institucional",
        p1: "Interfaz para consulta y categorización de solicitudes de soporte institucional, diseñada para orientar a las personas hacia el trámite o servicio correcto.",
        role: "Participación en interfaz, navegación, búsqueda, filtros y organización de categorías de servicio.",
        tech: "experiencia de usuario, búsqueda, filtrado, cards de servicios y navegación institucional.",
      },
      other: {
        title: "Otros proyectos",
        subtitle: "Proyectos complementarios de frontend y trabajo colaborativo.",
      },
      template: {
        title: "Template para Emprendimientos – QR/NFC", badge: "Template · Frontend",
        p1: "Template reutilizable para micrositios de emprendimientos, invitaciones y presentaciones digitales accesibles mediante QR o NFC.",
        role: "Diseño de arquitectura frontend configurable, responsive e internacionalizable.",
        tech: "HTML, CSS, JavaScript, i18n ES/EN, dark mode, configuración por JS.",
      },
      funontrip: {
        title: "FunOnTrip – E-commerce de viajes", badge: "Equipo · Web",
        p1: "Plataforma para explorar paquetes de viaje, con UI responsive y componentes reutilizables.",
        role: "UI frontend, responsive, documentación e integración en equipo.",
        tech: "HTML, CSS, Bootstrap, JavaScript, Git/GitHub.",
      },
    },
    cv: {
      title: "Resumen",
      subtitle: "Formación y habilidades para desarrollo Full Stack y productos web.",

      education: {
        title: "Formación",
        items: {
          intensiveCourse: {
            title: "Curso intensivo Full Stack Java",
            meta: "Generation México · 2025",
            desc: "Full Stack con Java + desarrollo web (HTML, CSS, JS). Git/GitHub y trabajo en equipo.",
          },
          webcourse: {
            title: "Curso de Desarrollo Web (Junior)",
            meta: "Mujer Digital · 2024",
            desc: "Frontend (HTML, CSS, Bootstrap, JavaScript) con proyectos web funcionales.",
          },
          python: { title: "Curso de Python · 2022", meta: "Conectadas by IYF" },
          masters: { title: "Maestría · UNAM", meta: "Formación académica previa (UNAM)" },
          bio: { title: "Biología · UNAM", meta: "Formación académica previa (UNAM)" },
        },
      },

      skills: {
        title: "Habilidades destacadas",
        blocks: {
          frontend: { title: "Frontend", mobile: "Mobile-first" },
          tools: { title: "Web & Tools" },
          power: {
            title: "Power skills",
            comm: "Comunicación empática",
            agile: "Colaboración ágil",
            docs: "Documentación técnica",
          },
        },
      },

      download: "Descargar CV en PDF",
    },

    blog: {
      title: "Blog",
      post1: {
        title: "De frontend a full stack: desarrollar software pensando en la experiencia",
        meta: "Reflexión profesional · 2025",
        p1:
          "Mi desarrollo profesional en tecnología ha sido un proceso de profundización y enfoque. Inicié como desarrolladora frontend, y al avanzar hacia una formación Full Stack comprendí el ciclo completo de una aplicación web, desde la lógica hasta la interfaz.",
        p2:
          "Durante este crecimiento técnico, identifiqué que mi mayor fortaleza y aportación se encontraba en el frontend y el diseño web, donde el desarrollo, la estructura y la experiencia del usuario convergen. Trabajé con HTML, CSS, Bootstrap y JavaScript en proyectos desplegados en GitHub Pages, aplicando principios de jerarquía visual, consistencia y diseño responsive.",
        p3:
          "Actualmente me posiciono como desarrolladora Full Stack con enfoque en frontend y web design, interesada en participar en equipos donde el desarrollo técnico y la experiencia del usuario se integran para construir productos claros, mantenibles y centrados en las personas.",
      },
    },


    footer: {
      title: "Contacto",
      p1: "¿Te gustaría colaborar o tienes alguna vacante que encaje con mi perfil?",
      emailLabel: "Escríbeme a:",
      cvBtn: "Ver CV",
      copyright: "© 2026 Angie Torres. Todos los derechos reservados. México",
    },
  },

  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      cv: "Summary",
      blog: "Blog",
    },

    theme: {
      dark: "Dark mode",
      light: "Light mode",
    },

    hero: {
      kicker: "PORTFOLIO · FULL STACK DEVELOPMENT (REACT/TYPESCRIPT/JAVASCRIPT/APIS)",
      title: `Hi, I'm <span class="text-accent">Angie Torres</span>`,
      description:
        "I am a Full Stack Developer building responsive web applications with React, TypeScript, JavaScript, and REST APIs. I work across frontend, backend, data, authentication, testing, CI/CD, and infrastructure.",
      bullets: {
        ui: "Frontend with React, TypeScript, JavaScript, and responsive design",
        components: "Reusable components and REST API integration",
        js: "Backend with Python/FastAPI and Java/Spring Boot",
        git: "Git, Docker, CI/CD, and cloud deployments",
      },
      buttons: {
        projects: "View projects",
        cv: "View CV",
        blog: "Blog / Notes",
      },
      contactLabel: "Contact:",
    },

    about: {
      title: "About me",
      p1:
        "I am a Full Stack Developer with hands-on experience building web applications and business workflows. I use React, TypeScript, and JavaScript on the frontend, and Python/FastAPI and Java/Spring Boot for backend services and integrations.",
      p2:
        "I’ve worked with HTML, CSS, Bootstrap, JavaScript, and React, as well as Git/GitHub. I’m looking to keep growing as a APIs & Backender and Frontend Developer, strengthening UI/UX, accessibility, and implementation best practices, with a well-rounded view of web development.",
      cards: {
        role: { label: "Main role", value: "Full Stack Developer" },
        focus: { label: "Focus", value: "React, TypeScript, JavaScript, REST APIs" },
        interests: { label: "Interests", value: "eCommerce, APIs, automation" },
        fun: { label: "Fun fact", value: "Dog mom to my pup Chewbacca" },
      },
    },

    skills: {
      title: "Skills",
      subtitle: "Technologies and skills I use in my projects.",
      cards: {
        frontend: { title: "Frontend", desc: "React | TypeScript | JavaScript | HTML | CSS", badge: "Responsive Web" },
        design: { title: "APIs & Backend", desc: "REST | FastAPI | Spring Boot | OpenAPI", badge: "Integrations" },
        backend: { title: "Data & Auth", desc: "PostgreSQL | MySQL | Firebase | Keycloak", badge: "OAuth2 / OIDC / JWT" },
        tools: { title: "DevOps & Cloud", desc: "Git | GitHub | Docker | CI/CD", badge: "Cloud deployments" },
      },
    },

    labels: {
      role: "Role:",
      tech: "Tech:",
      challenges: "Challenges:",
      learn: "Key learnings:",
    },

    buttons: {
      more: "Show more",
      less: "Show less",
      github: "View code",
      demo: "Live demo",
      staging: "View staging",
      admin: "View admin module",
    },

    projects: {
      title: "Projects",
      subtitle: "Recent Full Stack, frontend, API, and web product projects.",
      maizEcommerce: {
        title: "Maíz Fundido – Full Stack eCommerce Platform", badge: "Current product · In development",
        p1: "End-to-end eCommerce platform with catalog, variants, inventory, authentication, cart, promotions, and administrative workflows.",
        role: "Full Stack development across frontend, backend, data, authentication, CI/CD, and infrastructure.",
        tech: "React, TypeScript, JavaScript, REST APIs, PostgreSQL, Firebase Auth, Docker, GitHub Actions, Railway, Cloudflare and R2 Object Storage.",
        challenges: "aligning frontend/backend contracts, keeping inventory and authentication flows consistent, and deploying changes incrementally.",
        learn: "catalog administration, structured imports, security, and UX hardening.",
      },
      territorios: {
        title: "Territorios de Paz e Igualdad", badge: "ADIP · Institutional platform",
        p1: "Platform for capturing, tracking, and visualizing activity information across strategic areas of Mexico City.",
        role: "Development of forms, data-capture workflows, and support for institutional metrics and reporting.",
        tech: "complex forms, structured data, metrics, evidence, and institutional tracking.",
      },
      donalap: {
        title: "DónaLap – Dashboard & administration", badge: "ADIP · Institutional project",
        p1: "Platform for managing computer donation and refurbishment workflows across different user profiles.",
        role: "Contributions to dashboards, metrics, cards, administrative workflows, and API integrations.",
        tech: "dashboards, administration, roles, donation tracking, and frontend-backend integration.",
      },
      rescate: {
        title: "Rescate Canino CDMX", badge: "Institutional prototype",
        p1: "Prototype designed to centralize information about shelters and rescued dogs in Mexico City through a public-facing and administrative portal.",
        role: "Design of data structure, consultation views, and administrative workflows for shelter management.",
        tech: "database, dog catalog, shelter administration, and centralized information management.",
      },
      maizLanding: {
        title: "Maíz Fundido – Commercial Site & Catalog", badge: "Independent site · Production",
        p1: "Responsive landing page for a 3D-printing brand with product presentation, contact information, and an embedded visual catalog.",
        role: "Design, layout, responsive implementation, and deployment.",
        tech: "HTML, CSS, JavaScript, Bootstrap, Cloudflare Pages.",
      },
      ayuda: {
        title: "Ayuda ADIP – Self-service portal", badge: "ADIP · Institutional platform",
        p1: "Interface for browsing and categorizing institutional support requests, designed to guide users toward the correct service or request type.",
        role: "Contributions to interface, navigation, search, filters, and service-category organization.",
        tech: "user experience, search, filtering, service cards, and institutional navigation.",
      },
      other: {
        title: "Other projects",
        subtitle: "Complementary frontend and collaborative projects.",
      },
      template: {
        title: "Small Business Template – QR/NFC", badge: "Template · Frontend",
        p1: "Reusable template for small-business microsites, digital invitations, and presentations accessible through QR or NFC.",
        role: "Configurable, responsive, and internationalized frontend architecture.",
        tech: "HTML, CSS, JavaScript, ES/EN i18n, dark mode, JS-based configuration.",
      },
      funontrip: {
        title: "FunOnTrip – Travel e-commerce", badge: "Team · Web",
        p1: "Platform to explore travel packages, with responsive UI and reusable components.",
        role: "Frontend UI, responsive implementation, documentation, and team integration.",
        tech: "HTML, CSS, Bootstrap, JavaScript, Git/GitHub.",
      },
    },
    cv: {
      title: "Summary",
      subtitle: "Training and skills for Full Stack development and web products.",

      education: {
        title: "Education",
        items: {
          intensiveCourse: {
            title: "Intensive Full Stack Java Course",
            meta: "Generation Mexico · 2025",
            desc: "Full Stack with Java + web development (HTML, CSS, JS). Git/GitHub and teamwork.",
          },
          webcourse: {
            title: "Web Development Course (Junior)",
            meta: "Mujer Digital · 2024",
            desc: "Frontend (HTML, CSS, Bootstrap, JavaScript) with functional web projects.",
          },
          python: { title: "Python Course · 2022", meta: "Conectadas by IYF" },
          masters: { title: "Master’s · UNAM", meta: "Previous academic background (UNAM)" },
          bio: { title: "Biology · UNAM", meta: "Previous academic background (UNAM)" },
        },
      },

      skills: {
        title: "Key skills",
        blocks: {
          frontend: { title: "Frontend", mobile: "Mobile-first" },
          tools: { title: "Web & Tools" },
          power: {
            title: "Power skills",
            comm: "Empathetic communication",
            agile: "Agile collaboration",
            docs: "Technical documentation",
          },
        },
      },

      download: "Download CV (PDF)",
    },
    blog: {
      title: "Blog",
      post1: {
        title: "From Frontend to Full Stack: Building Software with User Experience in Mind",
        meta: "Professional reflection · 2025",
        p1:
          "My professional growth in technology has been a process of specialization and depth. I started as a frontend developer, and through Full Stack training I gained a comprehensive understanding of the entire web application lifecycle, from logic and structure to the user interface.",
        p2:
          "As my technical skills expanded, I identified that my strongest impact lies in frontend development and web design, where code, structure, and user experience converge. I have worked with HTML, CSS, Bootstrap, and JavaScript on projects deployed on GitHub Pages, applying principles of visual hierarchy, consistency, and responsive design.",
        p3:
          "Today, I position myself as a Full Stack Developer with a strong focus on frontend and web design, interested in collaborating on teams where technical development and user experience are integrated to build clear, maintainable, and people-centered digital products.",
      },
    },


    footer: {
      title: "Contact",
      p1: "Would you like to collaborate, or do you have a role that fits my profile?",
      emailLabel: "Email me at:",
      cvBtn: "View CV",
      copyright: "© 2026 Angie Torres. All rights reserved. Mexico",
    },
  },
};
