import { v4 as uuid } from 'uuid';

async function createAuction(event, context) {
  const { title, description } = JSON.parse(event.body);

  const date = new Date().toISOString();
  const auction = {
    id: uuid(),
    title, description, date
  }
  return {
    statusCode: 201,
    body: JSON.stringify(auction)
  };
}

export const handler = createAuction;


