const { OpenAI } = require("openai");
const openai = new OpenAI(process.env.OPENAI_API_KEY);

const structuredJSONOutput = async (text, structuredForm) => {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: text }],
        model: process.env.MODEL,
        tool_choice: {
            type: "function",
            function: {
                name: structuredForm.name
            },
        },
        tools: [
            {
                type: "function",
                function: structuredForm
            },
        ],
        seed: 42,
        temperature: 0.1
    });

    return JSON.parse(completion.choices[0].message.tool_calls[0].function.arguments);
};

module.exports = structuredJSONOutput;