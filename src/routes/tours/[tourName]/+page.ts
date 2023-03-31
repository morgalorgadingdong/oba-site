export const csr = true;

export const load = ({ params }) => {
    console.log('page reload', params)
    return {
        tourName: params.tourName
    }
}

export const prerender = true;