import blogPostEventsTwo from "../posteventstwo.json";

const BlogCardEventsTwo = (props) => {

    const { blogPostEventsTwo } = props;

    const { title, description } = blogPostEventsTwo;

    return (
        <div>
            <div className="title events __two" dangerouslySetInnerHTML={{ __html: blogPostEventsTwo["title"] }}></div>
            {/* <div className="title">
                <h1>{title}</h1>
            </div> */}
            <div className="description monet two">
                <span>{description}</span>
            </div>
        </div>
    )
}

export default BlogCardEventsTwo;