const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const Groq = require("groq-sdk");
const products = require("../src/data/products.json"); // Load products JSON

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Format the product data into a readable string
const formatProductData = (productList) => {
  return productList
    .map((product) => {
      return `- **${product.name}** - ${product.category}
      - Price: ~$${product.discounted_price}~ (was $${product.original_price})
      - Description: ${product.description}
      - ![Product Image](${product.image})`;
    })
    .join("\n\n");
};

// Generate system prompt with product data
const SYSTEM_PROMPT = {
  role: "system",
  content: `You are an AI assistant for Groupon, trained to help users with questions about products and services. Here’s the current list of products you can offer assistance with, including an image for each product. If a user asks for a product image, include the image URL directly in your response as a Markdown-formatted image. When listing multiple products, please format each product as a bullet point, clearly separated from other products.

  ${formatProductData(products)}

  Respond to user queries by referencing this list when relevant. But please don't even show the path to the images as part of your response to customer`,
};

// Helper function to find a product by keyword
const findProduct = (query) => {
  return products.find((product) =>
    query.toLowerCase().includes(product.name.toLowerCase())
  );
};

// API route to handle chatbot requests
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  // Check if the message matches a product in the dummy data
  const product = findProduct(message);
  if (product) {
    // If a product is found, respond with its details
    const productResponse = `**${product.name}**\nPrice: ~$${product.discounted_price}~ (was $${product.original_price})\nDescription: ${product.description}\n![Product Image](${product.image})`;
    return res.json({ response: productResponse });
  }

  // If no matching product is found, proceed to call the LLM for a general response
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [SYSTEM_PROMPT, { role: "user", content: message }],
      model: "llama3-8b-8192",
    });

    const assistantResponse =
      chatCompletion.choices[0]?.message?.content || "No response available.";
    res.json({ response: assistantResponse });
  } catch (error) {
    console.error("Error fetching response from Groq API:", error);
    res.status(500).json({ error: "Failed to fetch response from Groq API" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
