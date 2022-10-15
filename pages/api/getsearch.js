const AirtablePlus = require("airtable-plus");

const airtable = new AirtablePlus({
  baseID: "appE2tkAhTZtrBVKx",
  apiKey: process.env.AIRTABLE_API_KEY,
  tableName: "user_search",
  transform: (res) => {
    return res.fields;
  },
});

export default async (req, res) => {
  const data = await airtable.read();
  res.status(200).json(data);
};
