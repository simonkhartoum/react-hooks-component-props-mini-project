import React from 'react'
import Article from './article'

function ArticleList(blogData) {
    const posts = blogData.posts
    return (
        <main>
            {posts.map(post => <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />)}
        </main>
    )
};

export default ArticleList