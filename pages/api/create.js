const AirtablePlus = require("airtable-plus");

const airtable = new AirtablePlus({
  baseID: "appE2tkAhTZtrBVKx",
  apiKey: process.env.AIRTABLE_API_KEY,
  tableName: "user_todo",
});

export default async (req, res) => {
  if (req.query.todo && req.query.people) {
    const record = await airtable.create({
      item: req.query.todo,
      people: req.query.people,
    });
    res.status(200).send(`Created record ${record.id}`);
  } else {
    res.status(400).send(`Couldn't create record.`);
  }
};
