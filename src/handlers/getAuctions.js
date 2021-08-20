
import { data } from '../Posts/metaData'
async function getAuctions(event, context) {
    const eventData = data;
    return {
        statusCode: 200,
        body: eventData
    }

}

export const handler = getAuctions