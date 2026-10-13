// app/sitemap.js
export default function sitemap() {
    return [
        {
            url: 'https://bijlibaaz.com',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://bijlibaaz.com/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://bijlibaaz.com/contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        // ... baaki pages
    ];
}