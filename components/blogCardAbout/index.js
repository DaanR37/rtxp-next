
const BlogCardAbout = (props) => {

    const { blogPostAbout } = props;

    const { title, titlesecundair, description } = blogPostAbout;

    return (
        <div>
            <div className="title about">
                <h1>{title}</h1>
            </div>
            <div className="title-secundair">
                <h2>{titlesecundair}</h2>
            </div>
            <div className="description about">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default BlogCardAbout;