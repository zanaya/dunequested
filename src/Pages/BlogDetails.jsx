import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb';
import BlogDetailsMain from '../Components/Blog/BlogDetailsMain';
import FooterTwo from '../Components/Footer/FooterTwo';
import ScrollToTop from '../Components/ScrollToTop';
import HeaderTwo from '../Components/Header/HeaderTwo';
import Posts from '../Components/data/data-post.json';



function BlogDetails() {
    const { slug } = useParams();

    const blogPost = Posts.find(post => post.slug === slug);

    // Auto-scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    // If post not found  render 404 page
    if (!blogPost) {
        return (
            <>
                <Helmet>
                    <title>404 - Blog Not Found</title>
                    <meta name="robots" content="noindex" />
                </Helmet>

                <HeaderTwo />
                <Breadcrumb title="404 Not Found" />
                <div className="container py-5">
                    <h2>Oops! Blog post not found.</h2>
                    <p>The link you followed may be broken or the post was removed.</p>
                </div>
                <FooterTwo />
            </>
        );
    }

    return (
        <>
            <Helmet>
                {/* Title + Meta */}
                <title>{blogPost.title}</title>
                <meta name="description" content={blogPost.metaDescription} />

                {/* Canonical */}
                <link
                    rel="canonical"
                    href={`https://dunequested.com/blog/${blogPost.slug}`}
                />

                {/* OpenGraph */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={blogPost.title} />
                <meta property="og:description" content={blogPost.metaDescription} />
                <meta property="og:image" content={`https://dunequested.com/assets/img/blog/${blogPost.bannerImg}`} />
                <meta property="og:url" content={`https://dunequested.com/blog/${blogPost.slug}`} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={blogPost.title} />
                <meta name="twitter:description" content={blogPost.metaDescription} />
                <meta name="twitter:image" content={`https://dunequested.com/assets/img/blog/${blogPost.bannerImg}`} />

                {/* JSON-LD (Google Rich Article) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "headline": blogPost.title,
                            "description": blogPost.metaDescription,
                            "image": `https://dunequested.com/assets/img/blog/${blogPost.bannerImg}`,
                            "datePublished": blogPost.date,
                            "author": {
                                "@type": "Person",
                                "name": blogPost.author
                            },
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": `https://dunequested.com/blog/${blogPost.slug}`
                            }
                        })
                    }}
                />
            </Helmet>

            <HeaderTwo />
            <Breadcrumb title={blogPost.title} />
            <BlogDetailsMain />
            <FooterTwo />
            <ScrollToTop />
        </>
    );
}

export default BlogDetails;
