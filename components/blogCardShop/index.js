
const BlogCardShop = (props) => {

    const { blogPostShop } = props;

    const { title, description } = blogPostShop;

    return (
        <div>
            <div className="title shop">
                <h1>{title}</h1>
            </div>
            <div className="description shop">
                <span>{description}</span>
            </div>
        </div>
    )
}

export default BlogCardShop;