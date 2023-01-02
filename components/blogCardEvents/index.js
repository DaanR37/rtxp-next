
const BlogCardEvents = (props) => {

    const { blogPostEvents } = props;

    const { title, description } = blogPostEvents;

    return (
        <div>
            <div className="title events __one" dangerouslySetInnerHTML={{ __html: blogPostEvents["title"] }}></div>
            <div className="description monet one">
                <span>{description}</span>
            </div>
        </div>
    )
}

export default BlogCardEvents;