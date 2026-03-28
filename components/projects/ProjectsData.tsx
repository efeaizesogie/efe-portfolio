export const projects = [
    {
        title: "PayFlow Analyzer",
        imgSrc: "/payflow-analyzer.png",
        code: "https://github.com/efeaizesogie/payflow-analyzer",
        projectLink: "https://payflow-analyzer.vercel.app/",
        tech: ["React", "TypeScript", "Recharts", "Vite"],
        description:
            "Transaction analytics dashboard that classifies spend by category using a custom token-scoring engine, detects anomalous transactions via standard deviation analysis, and projects end-of-month burn rate using linear regression.",
        modalContent: (
            <>
                <p>
                    PayFlow Analyzer ingests a transaction feed and automatically classifies each transaction into categories (food, transport, utilities, entertainment, salary, transfer) using a weighted keyword-scoring engine — no external ML library needed.
                </p>
                <p>
                    The anomaly detection engine computes mean and standard deviation per category, then flags any transaction that sits more than 2 standard deviations from the category mean — surfaced in a dedicated alert panel.
                </p>
                <p>
                    A linear regression model runs over the last 30 days of spend to project the next 7 days as a dashed forecast line on a Recharts ComposedChart. Category filters are stored in URL state so every filtered view is shareable.
                </p>
            </>
        ),
    },
    {
        title: "Simple Payroll",
        imgSrc: "/simple-payroll.png",
        code: "https://github.com/efeaizesogie/simple-payroll",
        projectLink: "https://simple-payroll.vercel.app/",
        tech: ["React", "TailwindCSS", "Javascript"],
        description:
            "Worked as a front-end developer and created a comprehensive payroll service using reactjs, tailwind and js.",
        modalContent: (
            <>
                <p>
                    Worked as a front-end developer and created a comprehensive payroll service using reactjs, tailwind and js.
                </p>
                <p>
                    Designed to meet all your business needs, ensuring that employees are paid accurately and on time, every time.
                </p>
            </>
        ),
    },
    {
        title: "Propelll",
        imgSrc: "/propelll.png",
        code: "https://github.com/efeaizesogie/Propell",
        projectLink: "https://propell-ten.vercel.app/",
        tech: ["Angular", "Tailwind", "JS"],
        description:
            "Propell is a comprehensive content management and marketing (CMM) platform designed to streamline the creation, management, and distribution of digital content. ",
        modalContent: (
            <>
                <p>
                    Propell is a comprehensive content management and marketing (CMM) platform designed to streamline the creation, management, and distribution of digital content. 
                </p>
                <p>
                    Propell enables businesses to efficiently manage their online presence, engage with their audience, and drive marketing efforts through powerful tools and analytics. 
                </p>
                <p>
                    Worked on this project during an internship, contributing to the frontend development using Angular to implement the UI/UX designs.
                </p>
            </>
        ),
    },
    {
        title: "Chillspot",
        imgSrc: "/chillspot.png",
        code: "https://github.com/efeaizesogie/efeosa_cocktails",
        projectLink: "https://efeosa-cocktails.vercel.app/",
        tech: ["React", "Tailwind", "JS"],
        description:
            "A Landing page for a bar selling cocktails and mocktails. Created using tailwind and Reactjs.",
        modalContent: (
            <>
                <p>
                    A Landing page for a bar selling cocktails and mocktails. Created using tailwind and Reactjs.
                    
                </p>
                <p>
                    Worked as a front-end developer for this web application. Built the landing page using dynamic and reusable components.
                </p>
            </>
        ),
    },
    {
        title: "Review Nest",
        imgSrc: "/review-nest.png",
        code: "https://github.com/efeaizesogie/Review-Nest",
        projectLink: "https://review-nest-7w4m-git-master-efeaizesogie.vercel.app/",
        tech: ["Angular", "Tailwind", "JS"],
        description:
            "Contributed as an Angular Frontend Developer for Reviewnest, an empowering platform built for small businesses to gather customer insights and reviews.",
        modalContent: (
            <>
                <p>
                    Contributed as an Angular Frontend Developer for Reviewnest, an empowering platform built for small businesses to gather customer insights and reviews. 
                </p>
                <p>
                    Leveraging UI/UX designs, I helped bring the platform to life and enhance user experience. 
                </p>
                <p>
                    Our team&apos;s efforts aimed at driving business growth and enabling data-driven decisions while empowering small businesses without websites or applications.
                </p>
            </>
        ),
    },
    {
        title: "TaskFlow",
        imgSrc: "/taskflow.png",
        code: "https://github.com/efeaizesogie/taskflow",
        projectLink: "https://taskflow-flax-six.vercel.app/",
        tech: ["React", "Tailwind"],
        description:
            "Landing page for a task management app, that helps teams and individuals manage tasks, track progress, and stay productive.",
        modalContent: (
            <>
                <p>
                    Landing page for a task management app, that helps teams and individuals manage tasks, track progress, and stay productive. 
                </p>
                <p>Cutting through the noise and focusing on what matters. Built using Reactjs and tailwindcss</p>
            </>
        ),
    },
    {
        title: "ShippersWise",
        imgSrc: "/shipperswise.png",
        code: "https://github.com/efeaizesogie/web",
        projectLink: "https://shipperswise.com/",
        tech: ["React", "Bootstrap", "Javascript"],
        description: "Your one-stop international freight comparison e-market. ",
        modalContent: (
            <>
                <p>
                   Your one-stop international freight comparison e-market. 
                </p>
                <p>Get instant quotes, simple bookings and easy tracking of your shipments.</p>
            </>
        ),
    },
];
