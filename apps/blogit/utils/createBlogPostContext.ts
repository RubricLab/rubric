import BlogPost from '../types/BlogPost'
const createBlogPostContext = (blogPost: BlogPost) => {
	return JSON.stringify({...blogPost})
}

export default createBlogPostContext
