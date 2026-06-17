const STRAPI_URL = 'http://localhost:1337';
const STRAPI_TOKEN = '73a1435798b2d3800f8afc13e48f69a6d7d9ea8bd9fbe73ffe5adea65dc61bb0c4508fd9e6ca08193f9b3326c954c45d87a80236b4f7ffb5cbfa336c77a79a351ff730b37118a07824cb0e298328f4f30f8fcbc5eed41240ec1eb35c5ada7fe361901c26687e900735e80fb472f3ab4d419cd62b621704d1ba50cb38d7dabbff';

const res = await fetch(`${STRAPI_URL}/api/apps?pagination[pageSize]=100`, {
    headers: { Authorization: `Bearer ${STRAPI_TOKEN}` }
});
const { data } = await res.json();

for (const entry of data) {
    console.log(`id: ${entry.id}, slug: ${entry.slug}, title: ${entry.title}`);
}