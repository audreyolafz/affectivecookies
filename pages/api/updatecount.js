const AirtablePlus = require("airtable-plus");

const airtable = new AirtablePlus({
  baseID: "appE2tkAhTZtrBVKx",
  apiKey: process.env.AIRTABLE_API_KEY,
  tableName: "cookie_count",
});

export default async (req, res) => {
  if (req.query.count) {
    const record = await airtable.update("count", { num: req.query.count });
    res.status(200).send(`Increased count`);
  } else {
    res.status(400).send(`Couldn't increase count.`);
  }
};
