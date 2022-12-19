import Accordion from "../Accordion";
import blogPostInfoLeft from "../postinfoleft.json";

const BlogCardInfo = (props) => {

    const { blogPostInfoLeft } = props;

    const { title, content } = blogPostInfoLeft;

    return (
        <div>
            {/* <div className="accordion__title"> */}
                <p>{title}</p>
            {/* </div> */}
            <div className="accordion__text">
                <span>{content}</span>
            </div>
        </div>
    )
}

export default BlogCardInfo;