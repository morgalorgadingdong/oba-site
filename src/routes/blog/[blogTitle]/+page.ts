export const load = ({ params }) => {
    console.log('page reload', params)
    return {
        blogTitle: params.blogTitle
    }
}

export const prerender = true;