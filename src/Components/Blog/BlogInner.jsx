import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogPost from './BlogPost';
import posts from '../data/data-post.json';

function BlogInner() {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 4;
    const totalPages = Math.ceil(posts.length / postsPerPage);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <section className="th-blog-wrapper space-top space-extra-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 col-lg-7">
                        {currentPosts.map((data) => (
                            <BlogPost
                                key={data.id}
                                slug={data.slug}
                                blogImage={data.image}
                                blogTitle={data.title}
                                author={data.author}
                                date={data.date}
                                metaDescription={data.metaDescription}
                                location={data.location}
                            />
                        ))}
                        <div className="th-pagination">
                            <ul>
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <li key={i}>
                                        <Link
                                            className={currentPage === i + 1 ? 'active' : ''}
                                            to="#"
                                            onClick={() => handlePageChange(i + 1)}
                                        >
                                            {i + 1}
                                        </Link>
                                    </li>
                                ))}
                                {currentPage < totalPages && (
                                    <li>
                                        <Link className="next-page" to="#" onClick={() => handlePageChange(currentPage + 1)}>
                                            Next <img src="/assets/img/icon/arrow-right4.svg" alt="" />
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-5">
                        <aside className="sidebar-area">
                            <div className="widget widget_search  ">
                                <form className="search-form">
                                    <input type="text" placeholder="Search" />
                                    <button type="submit">
                                        <i className="far fa-search" />
                                    </button>
                                </form>
                            </div>
                            <div className="widget widget_categories  ">
                                <h3 className="widget_title">Activity Type</h3>
                                <ul>
                                    <li>
                                        <Link to="/buggy-1000cc">
                                            <i className="fa-light fa-square-check" />
                                            Buggy 1000cc
                                        </Link>

                                    </li>
                                    <li>
                                        <Link to="/quad-bike-450cc">
                                            <i className="fa-light fa-square-check" />
                                            Quad Bike
                                        </Link>

                                    </li>
                                    <li>
                                        <Link to="/can-am-1500cc">
                                            <i className="fa-light fa-square-check" />
                                            CAN AM 1500cc
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/raptor-750cc">
                                            <i className="fa-light fa-square-check" />
                                            Raptor 750cc
                                        </Link>

                                    </li>
                                    <li>
                                        <Link to="/ktm-bike">
                                            <i className="fa-light fa-square-check" />
                                            KTM Bike
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/vip-desert-safari">
                                            <i className="fa-light fa-square-check" />
                                            Safari Night
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget  ">
                                <h3 className="widget_title">Recent Posts</h3>
                                <div className="recent-post-wrap">
                                    <div className="recent-post">
                                        <div className="media-img">
                                            <Link to="/blog/1">
                                                <img
                                                    src="assets/img/blog/recent-post-1-1.webp"
                                                    alt="Recent post thumbnail"
                                                />
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="/blog/1">
                                                    Exploring The Green Spaces Of the island maldives
                                                </Link>
                                            </h4>
                                            <div className="recent-post-meta">
                                                <Link to="/blog">
                                                    <i className="fa-regular fa-calendar" />
                                                    22/6/ 2025
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <div className="media-img">
                                            <Link to="/blog/1">
                                                <img
                                                    src="assets/img/blog/recent-post-1-2.webp"
                                                    alt="Recent post thumbnail"
                                                />
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="/blog/1">
                                                    Harmony With Nature Of Belgium Tour and travle
                                                </Link>
                                            </h4>
                                            <div className="recent-post-meta">
                                                <Link to="/blog">
                                                    <i className="fa-regular fa-calendar" />
                                                    25/6/ 2025
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <div className="media-img">
                                            <Link to="/blog/1">
                                                <img
                                                    src="assets/img/blog/recent-post-1-3.webp"
                                                    alt="Recent post thumbnail"
                                                />
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="/blog/1">
                                                    Exploring The Green Spaces Of Realar Residence
                                                </Link>
                                            </h4>
                                            <div className="recent-post-meta">
                                                <Link to="/blog">
                                                    <i className="fa-regular fa-calendar" />
                                                    27/6/ 2025
                                                </Link>
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
                                    <Link to="/blog">Hotel</Link>
                                    <Link to="/blog">Modern</Link>
                                    <Link to="/blog">Luxury</Link>
                                    <Link to="/blog">Travel</Link>
                                    <Link to="/blog">Hotel</Link>
                                    <Link to="/blog">Modern</Link>
                                    <Link to="/blog">Luxury</Link>
                                    <Link to="/blog">Travel</Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogInner;
