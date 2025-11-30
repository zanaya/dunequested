import React from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function BlogPost(props) {
    const { slug, blogImage, blogTitle, author, date, location, metaDescription, } = props;
    return (
        <>
            {/* Single Blog Post */}
            <div className="th-blog blog-single has-post-thumbnail">
                <div className="blog-img">
                    <Link to={`/blog/${slug}`}>
                        <img src={`/assets/img/blog/${blogImage}`} alt={blogTitle || "Blog"} />
                    </Link>
                </div>
                <div className="blog-content">
                    <div className="blog-meta">
                        <Link className="author" to={`/blog/${slug}`}>
                            <i className="fa-light fa-user" />
                            by {author || "David Smith"}
                        </Link>
                        <Link to={`/blog/${slug}`}>
                            <i className="fa-solid fa-calendar-days" />
                            {date || "05 May, 2025"}
                        </Link>
                        <Link to={`/blog/${slug}`}>
                            <img src="/assets/img/icon/map.svg" alt="" />
                            {location || "Tour Guide"}
                        </Link>
                    </div>
                    <h2 className="blog-title">
                        <Link to={`/blog/${slug}`}>
                            {blogTitle ? blogTitle : "Living sustainability: A day in the life at Realar Residence"}
                        </Link>
                    </h2>
                    <p className="blog-text">
                        {metaDescription || "05 May, 2025"}
                    </p>
                </div>
            </div>
        </>
    )
}

export default BlogPost