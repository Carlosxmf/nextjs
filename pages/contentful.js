import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getContentById(id) {
  try {
    const response = await client.getEntry(id);
    return {
      id: response.sys.id,
      title: response.fields.title,
      content: response.fields.content,
      author: response.fields.author,
      date: response.fields.date,
      image: {
        url: response.fields.image.fields.file.url,
        title: response.fields.image.fields.title,
        description: response.fields.image.fields.description,
      },
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}
