const { Configuration, OpenAIApi } = require("openai");

//Setup OpenAI
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      await getInclusion(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

const getInclusion = async (req, res) => {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `Rewrite the following sentence to be more inclusive ${req.query.prompt}`,
      max_tokens: 200,
    });
    res.status(200).json({ text: completion.data.choices[0].text });
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).send(error.response.data);
    } else {
      res.status(500).send(error.message);
    }
  }
};

export default handler;
