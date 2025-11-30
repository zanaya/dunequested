const fs = require("fs");
const posts = require("./src/Components/data/data-post.json");

const staticPages = [
  "",
  "about",
  "contact",
  "blog"
];

let urls = "";

// Static routes
staticPages.forEach(page => {
  urls += `
    <url>
      <loc>https://dunequested.com/${page}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `;
});

// Dynamic blog routes
posts.forEach(post => {
  urls += `
    <url>
      <loc>https://dunequested.com/blog/${post.slug}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.9</priority>
    </url>
  `;
});

const sitemap = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
</urlset>
`;

fs.writeFileSync("./public/sitemap.xml", sitemap.trim());
console.log("Sitemap generated!");
