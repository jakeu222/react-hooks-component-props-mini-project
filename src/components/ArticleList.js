import Article from "./Article"

function ArticleList({ posts }) {
    const porstComp = posts.map((post) => {
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
    })

    return (
        <main>
            {porstComp}

        </main>

    )
}
export default ArticleList