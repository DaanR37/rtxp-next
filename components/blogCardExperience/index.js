
const BlogCardExperience = (props) => {

    const { blogPostExperience } = props;

    const { title, description } = blogPostExperience;

    return (
        <div>
            <div className="title experience">
                <h1>{title}</h1>
            </div>
            <div className="description experience">
                <span>{description}</span>
            </div>
        </div>
    )
}

export default BlogCardExperience;