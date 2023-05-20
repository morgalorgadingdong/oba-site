export const load = ({ params }) => {
    console.log('page reload', params)
    return {
        itemName: params.itemName
    }
}

export const prerender = false;