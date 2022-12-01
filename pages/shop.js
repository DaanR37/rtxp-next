import styles from '../styles/Shop.module.scss';

const Shop = () => {


    async function handleOnSubmit(e) {
        e.preventDefault();
        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field => {
            if ( !field.name ) return;
            formData[field.name] = field.value;
        });
        fetch('/api/mail', {
            method: 'post',
            body: JSON.stringify(formData)
        })
        console.log(formData);
    }



    return (
        <section className={styles.shopcontainer}>
            <div className={styles.backgroundimage} style={{
                backgroundImage: "url(/images/background-image-exp.jpg)"
            }}></div>
            <div className={styles.shopitemscontainer}>
                <div className={styles.textcontainer}>
                    <h1>shop</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.
                        Lorem Ipsum has been the industrys standard
                        dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also
                        the leap into electronic typesetting,
                        remaining essentially unchanged. It was
                        popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages.
                        It is a long established fact that a reader
                        will be distracted by the readable content of
                        a page when looking at its layout.
                        The point of using Lorem Ipsum is that it
                        has a more-or-less normal distribution
                        of letters, as opposed to using Content here,
                        content here, making it look like readable English.
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.
                    </p>
                </div>



                <div className={styles.formcontainer}>
                    <style jsx>{`
                        label {
                            display: block;
                            margin-bottom: .2em;
                            }

                        button {
                            color: white;
                            background-color: blueviolet;
                            padding: .8em 1em;
                            border: 0;
                            border-radius: .2em;
                        }
                    `}
                    </style>
                    
                    <form method='post' onSubmit={handleOnSubmit}>
                        <p>
                            <label htmlFor="name">Name</label>
                            <input type="text" name='name' />
                        </p>
                        <p>
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' />
                        </p>
                        <p>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" />
                        </p>
                        <p>
                            <button>Submit</button>
                        </p>
                    </form>
                </div>



            </div>
            <div className={styles.chaticon}>
                <picture>
                    <img
                        src="images/chat-icon.svg"
                        alt="chat icon"
                    />
                </picture>
            </div>

        </section>
    );
}

export default Shop;