import axios from "axios";

async function generateThreadId() {
  try {
    const response = await axios.get(
      "https://normally-thorough-hound.ngrok-free.app/thread"
    );
    return response.data.threadId;
  } catch (error) {
    console.error("Error fetching thread ID:", error);
  }
}

async function generateRecipe(threadId, prompt) {
  try {
    const response = await axios.post(
      "https://normally-thorough-hound.ngrok-free.app/message",
      {
        threadId,
        message: prompt,
      }
    );

    return response.data.recipe;
  } catch (error) {
    console.error("Error sending message:", error);
  }
}

async function generateImage(name) {
  try {
    const response = await axios.post(
      `https://normally-thorough-hound.ngrok-free.app/image`,
      {
        imagePrompt: name,
      }
    );

    return response.data.data.data[0].url;
  } catch (error) {
    console.error("Error fetching image:", error);
  }
}

export { generateThreadId, generateRecipe, generateImage };
