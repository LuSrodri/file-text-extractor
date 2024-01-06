const { OpenAI } = require("openai");
const openai = new OpenAI(process.env.OPENAI_API_KEY);

const structedJSONOutput = async (text, structuredForm) => {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: text }],
        model: "gpt-4",
        tool_choice: {
            type: "function",
            function: {
                name: structuredForm.name,
            },
        },
        tools: [
            {
                type: "function",
                function: structuredForm
            },
        ],
    });

    return JSON.parse(completion.choices[0].message.tool_calls[0].function.arguments);
};

module.exports = structedJSONOutput;