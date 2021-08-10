import { callApi } from '../../functions/functions'
import Movies from '../../components/Movies'
import {apiUrl} from '../../utils'


function index({ data, error }) {
    return <Movies data={data} error={error} />
}

export default index


export async function getStaticProps() {
    const [data, error] = await callApi(apiUrl+"/movies")
    const revalidate = parseInt(86400 * 2)
    return {
        props: { data, error },
        revalidate
    }
}
