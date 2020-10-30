// web/src/pages/BlogPostPage/BlogPostPage.js

import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostCell from 'src/components/BlogPostsCell'

const BlogPostPage = ({ id }) => {
  return (
    <BlogLayout>
      <BlogPostCell />
    </BlogLayout>
  )
}

export default BlogPostPage
