export const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dhanavel",
    "url": "https://www.dhanavel.com",
    "image": "https://www.dhanavel.com/images/dhanavel.jpg",
    "jobTitle": "Full Stack Developer",
    "sameAs": [
        "https://github.com/Dhanuvel163",
        "https://www.linkedin.com/in/dhanavel-ramachandran-721802193",
        "https://x.com/dhanavel19"
    ]
};

export const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What technologies do you use?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "I specialize in React, Next.js, Node.js, Angular, Ruby On Rails, Python, AI Agents, LLMs and performance optimization."
            }
        },
        {
            "@type": "Question",
            "name": "Do you take freelance projects?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, I am open to freelance and collaboration opportunities."
            }
        }
    ]
};

export const appsJsonLd = [{
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CoverAI – Cover Letter & Custom Question Answering Assistant",
    "url": "https://coverai.dhanavel.com/",
    "description": "AI-powered cover letters, tailored answers & auto-parsed job details—apply faster, smarter, and with personalization.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Windows, macOS, Linux",
    "softwareVersion": "1.1",
    "offers": {
        "@type": "Offer",
        "price": "00.00",
        "priceCurrency": "USD",
        "url": "https://coverai.dhanavel.com/",
        "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "ratingCount": "1"
    }
}]

export const productJsonLd = [{
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "CoverAI – Cover Letter & Custom Question Answering Assistant",
    "image": "https://www.dhanavel.com/images/products/cover_craft.png",
    "description": "AI-powered cover letters, tailored answers & auto-parsed job details—apply faster, smarter, and with personalization.",
    "sku": "12345",
    "mpn": "67890",
    "brand": {
        "@type": "Brand",
        "name": "CoverAI"
    },
    "offers": {
        "@type": "Offer",
        "url": "https://coverai.dhanavel.com/",
        "priceCurrency": "USD",
        "price": "00.00",
        "priceValidUntil": "2025-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "1"
    }
}]