function About({ image, about }) {
    return (
        <aside>
            <img alt="blog logo" src={image ? image : "https://via.placeholder.com/215"} />
            <p>{about}</p>
        </aside>
    )
}
export default About