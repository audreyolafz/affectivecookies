const AirtablePlus = require("airtable-plus");

const airtable = new AirtablePlus({
  baseID: "appE2tkAhTZtrBVKx",
  apiKey: process.env.AIRTABLE_API_KEY,
  tableName: "user_form",
  transform: (res) => {
    return res.fields;
  },
});

export default async (req, res) => {
  const itemID = req.query.item;
  const readRes = await airtable.find(itemID);
  res.json(readRes);
};
