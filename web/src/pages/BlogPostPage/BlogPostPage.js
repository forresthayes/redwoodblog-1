// web/src/pages/BlogPostPage/BlogPostPage.js

import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostCell from 'src/components/BlogPostsCell'

const BlogPostPage = ({ id }) => {
  return (
    <BlogLayout>
      <BlogPostCell id={id} />
    </BlogLayout>
  )
}

export default BlogPostPage
