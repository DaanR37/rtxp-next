import blogPostEventsThree from "../posteventsthree.json";

const BlogCardEventsThree = (props) => {

    const { blogPostEventsThree } = props;

    const { title, description } = blogPostEventsThree;

    return (
        <div>
            <div className="title events __three" dangerouslySetInnerHTML={{ __html: blogPostEventsThree["title"] }}></div>
            <div className="description events three">
                <span>{description}</span>
            </div>
        </div>
    )
}

export default BlogCardEventsThree;