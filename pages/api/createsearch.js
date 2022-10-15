const AirtablePlus = require("airtable-plus");

const airtable = new AirtablePlus({
  baseID: "appE2tkAhTZtrBVKx",
  apiKey: process.env.AIRTABLE_API_KEY,
  tableName: "user_search",
});

export default async (req, res) => {
  if (req.query.search) {
    const record = await airtable.create({
      search: req.query.search,
    });
    res.status(200).send(`Created record ${record.id}`);
  } else {
    res.status(400).send(`Couldn't create record.`);
  }
};
