
const BlogCardExperience = (props) => {

    const { blogPostExperience } = props;

    const { title, description } = blogPostExperience;

    return (
        <div className="textcontainer">
            <div className="title">
                <h1>{title}</h1>
            </div>
            <div className="description">
                <span>{description}</span>
            </div>
        </div>
    )
}

export default BlogCardExperience;