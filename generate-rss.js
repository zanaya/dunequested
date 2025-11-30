const fs = require("fs");
const posts = require("./src/Components/data/data-post.json");

function buildRSSItem(post) {
    return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>https://dunequested.com/blog/${post.slug}</link>
      <description><![CDATA[${post.metaDescription}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid>https://dunequested.com/blog/${post.slug}</guid>
    </item>
  `;
}

const items = posts.map(buildRSSItem).join("");

const rss = `
<rss version="2.0">
  <channel>
    <title>DuneQuested Blog</title>
    <link>https://dunequested.com/blog</link>
    <description>Latest blog posts from DuneQuested</description>
    ${items}
  </channel>
</rss>
`;

fs.writeFileSync("./public/rss.xml", rss.trim());
console.log("RSS feed generated!");
