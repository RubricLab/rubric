import BlogPost from '../types/BlogPost'
export default (blogPost: BlogPost) => {
	return JSON.stringify({...blogPost})
}
