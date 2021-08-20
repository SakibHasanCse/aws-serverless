
import { data } from '../Posts/metaData'
async function getAuction(event, context) {
    const eventData = data;
    const { id } = event.pathParameters;
    const getData = eventData.find(data => data.id === id);
    if (!getData) {
        return {
            statusCode: 400,
            body: JSON.stringify('Data Not found!')
        }
    }
    return {
        statusCode: 200,
        body: getData
    }

}

export const handler = getAuction