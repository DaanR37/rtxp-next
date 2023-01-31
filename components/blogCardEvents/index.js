
const BlogCardEvents = (props) => {

    const { blogPostEvents } = props;

    const { title, description } = blogPostEvents;

    return (
        <div>
            <h1 className="title events one" dangerouslySetInnerHTML={{ __html: blogPostEvents["title"] }}></h1>
            <div className="description events one">
                <span>{description}</span>
            </div>
        </div>
    )
}

export default BlogCardEvents;