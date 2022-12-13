import styles from "./BlogCardExperience.module.scss";

const BlogCardExperience = (props) => {

    const { blogPostExperience } = props;

    const { title, description } = blogPostExperience;

    return (
        <div className={styles.textcontainer}>
            <div className={styles.title}>
                <h1>{title}</h1>
            </div>
            <div className={styles.description}>
                <span>{description}</span>
            </div>
        </div>
    )
}

export default BlogCardExperience;