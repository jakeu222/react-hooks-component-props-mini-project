function Article({ title, date }) {


    return (
        <div>
            <h3>Title</h3>
            <small>{date ? date : "January 1, 1970"}</small>
            <p>Preview</p>
        </div>

    )
}
export default Article