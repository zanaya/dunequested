import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Posts from '../data/data-post.json';

function BlogDetailsMain() {
    const { slug } = useParams();
    const blogPost = Posts.find(post => post.slug === slug);

    if (!blogPost) {
        return (
            <div className="container">
                <p>Post not found!</p>
            </div>
        );
    }

    // Fallback values
    const author = blogPost.author || 'David Smith';
    const date = blogPost.date || '05 May, 2025';
    const location = blogPost.location || 'Tour Guide';
    const tags = blogPost.tags || ['Apartment', 'Buyer', 'Modern', 'Luxury'];
    const content = blogPost.content || [
        `Welcome to "${blogPost.title}". In this post we explore insights and highlights related to the topic.`,
        'Uniquely pursue emerging experiences before liemerging content. Efficiently underwhelm customer directed total linkage after B2C synergy.',
        'Dynamically simplify superior human capital whereas efficient infrastructures generate business web-readiness after wireless outsourcing.'
    ];

    // ==== SHARE URL SETUP ====
    const currentURL = window.location.href;

    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentURL)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentURL)}&text=${encodeURIComponent(blogPost.title)}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentURL)}&title=${encodeURIComponent(blogPost.title)}`,
        instagram: "https://www.instagram.com/" // Instagram does not allow direct URL share
    };
    // =========================

    return (
        <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
            <div className="container shape-mockup-wrap">
                <div className="row">
                    <div className="col-xxl-8 col-lg-7">
                        <div className="th-blog blog-single">
                            <div className="blog-img">
                                <img src={`/assets/img/blog/${blogPost.bannerImg}`} alt={blogPost.title || 'Blog banner'} />
                            </div>

                            <div className="blog-content">
                                <div className="blog-meta">
                                    <Link className="author" to="/blog">
                                        <i className="fa-light fa-user" /> by {author}
                                    </Link>
                                    <Link to="/blog">
                                        <i className="fa-regular fa-calendar" /> {date}
                                    </Link>
                                    <Link to="#">
                                        <img src="/assets/img/icon/map.svg" alt="" /> {location}
                                    </Link>
                                </div>

                                <h2 className="blog-title">{blogPost.title}</h2>

                                {content.map((p, i) => (
                                    <p key={i} className={`blog-text ${i === content.length - 1 ? 'mb-0' : 'mb-30'}`}>
                                        {p}
                                    </p>
                                ))}

                                <blockquote>
                                    <p>{blogPost.quote || 'Join your neighbors for an eco-friendly social gathering and share ideas about sustainable living.'}</p>
                                    <cite>{blogPost.quoteAuthor || 'Michel Clarck'}</cite>
                                </blockquote>

                                <h3 className="mt-4">{blogPost.subtitle || 'More about this topic'}</h3>

                                <p>{blogPost.extra || 'Whether you work from home or commute to a nearby office, smart design and sustainable choices make a difference.'}</p>

                                <div className="row gy-4">
                                    <div className="col-12">
                                        <div className="blog-img">
                                            <img
                                                className="w-100"
                                                src={blogPost.innerImg ? `/assets/img/blog/${blogPost.innerImg}` : "/assets/img/blog/blog_inner_1.webp"}
                                                alt="Interior shot of the blog topic"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* ============ FIXED SOCIAL SHARE ============ */}
                                <div className="share-links clearfix">
                                    <div className="row justify-content-between">

                                        <div className="col-md-auto">
                                            <span className="share-links-title">Tags:</span>
                                            <div className="tagcloud">
                                                {tags.map((tag, idx) => (
                                                    <Link key={idx} to="/blog">{tag}</Link>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="col-md-auto text-xl-end">
                                            <div className="share-links_wrapp">
                                                <span className="share-links-title">Share:</span>
                                                <div className="social-links">

                                                    <a
                                                        href={shareLinks.facebook}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i className="fab fa-facebook-f" />
                                                    </a>

                                                    <a
                                                        href={shareLinks.twitter}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i className="fab fa-twitter" />
                                                    </a>

                                                    <a
                                                        href={shareLinks.instagram}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i className="fab fa-instagram" />
                                                    </a>

                                                    <a
                                                        href={shareLinks.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i className="fab fa-linkedin-in" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/* ============================================ */}

                            </div>
                        </div>

                        {/* Comment Form — unchanged */}
                        <div className="th-comment-form ">
                            <div className="row">
                                <h3 className="blog-inner-title h4 mb-2">Leave a Reply</h3>
                                <p className="mb-25">Your email address will not be published. Required fields are marked</p>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" placeholder="Full Name*" className="form-control" required />
                                            <i className="far fa-user" />
                                        </div>

                                        <div className="col-md-6 form-group">
                                            <input type="text" placeholder="Your Email*" className="form-control" required />
                                            <i className="far fa-envelope" />
                                        </div>

                                        <div className="col-12 form-group">
                                            <input type="text" placeholder="Website" className="form-control" required />
                                            <i className="far fa-globe" />
                                        </div>

                                        <div className="col-12 form-group">
                                            <textarea placeholder="Comment*" className="form-control"></textarea>
                                            <i className="far fa-pencil" />
                                        </div>

                                        <div className="col-12 form-group">
                                            <input type="checkbox" id="html" />
                                            <label htmlFor="html">Save my name, email, and website for next time.</label>
                                        </div>

                                        <div className="col-12 form-group mb-0">
                                            <button className="th-btn" type="submit">
                                                Send Message <img src="/assets/img/icon/plane2.svg" alt="" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                    {/* SIDEBAR (unchanged) */}
                    <div className="col-xxl-4 col-lg-5">
                        <aside className="sidebar-area">
                            {/* Sidebar kept unchanged to avoid unintended side-effects */}
                            <div className="widget widget_search  ">
                                <form className="search-form">
                                    <input type="text" placeholder="Search" required />
                                    <button type="submit">
                                        <i className="far fa-search" />
                                    </button>
                                </form>
                            </div>
                            <div className="widget widget_categories  ">
                                <h3 className="widget_title">Categories</h3>
                                <ul>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            City Tour
                                        </Link>
                                        <span>(8)</span>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Beach Tours
                                        </Link>
                                        <span>(6)</span>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Wildlife Tours
                                        </Link>
                                        <span>(2)</span>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            News &amp; Tips
                                        </Link>
                                        <span>(7)</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Recent posts and other widgets left as-is */}
                            <div className="widget  ">
                                <h3 className="widget_title">Recent Posts</h3>
                                <div className="recent-post-wrap">
                                    <div className="recent-post">
                                        <div className="media-img">
                                            <Link to="#"><img src="/assets/img/blog/recent-post-1-1.webp" alt="Recent post thumbnail" /></Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title"><Link className="text-inherit" to="#">Exploring The Green Spaces Of the island maldives</Link></h4>
                                            <div className="recent-post-meta">
                                                <Link to="/blog"><i className="fa-regular fa-calendar" />22/6/ 2025</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="widget widget_tag_cloud  ">
                                <h3 className="widget_title">Popular Tags</h3>
                                <div className="tagcloud">
                                    <Link to="/blog">Tour</Link>
                                    <Link to="/blog">Adventure</Link>
                                    <Link to="/blog">Rent</Link>
                                    <Link to="/blog">Innovate</Link>
                                </div>
                            </div>
                            <div className="widget widget_offer" style={{ background: "url(/assets/img/bg/widget_bg_1.webp)" }}>
                                <div className="offer-banner">
                                    <div className="offer">
                                        <h6 className="box-title">Need Help? We Are Here To Help You</h6>
                                        <div className="banner-logo">
                                            <img src="/assets/img/logo2.svg" alt="DuneQuested" />
                                        </div>
                                        <div className="offer">
                                            <h6 className="offer-title">You Get Online support</h6>
                                            <a className="offter-num" href="tel:+256214203215">+256 214 203 215</a>
                                        </div>
                                        <Link to="/contact" className="th-btn style2 th-icon">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>

                </div>

                {/* Shapes */}
                <div className="shape-mockup shape1 d-none d-xxl-block" style={{ bottom: "5%", right: "-8%" }}>
                    <img src="/assets/img/shape/shape_1.webp" alt="shape" />
                </div>
                <div className="shape-mockup shape2 d-none d-xl-block" style={{ bottom: "1%", right: "-7%" }}>
                    <img src="/assets/img/shape/shape_2.webp" alt="shape" />
                </div>
                <div className="shape-mockup shape3 d-none d-xxl-block" style={{ bottom: "2%", right: "0%" }}>
                    <img src="/assets/img/shape/shape_3.webp" alt="shape" />
                </div>

            </div>
        </section>
    )
}

export default BlogDetailsMain;
