import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY); // Thay thế YOUR_API_KEY bằng API key thực tế của bạn

const Gemini = async (message) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = {
    contents: [{ parts: [{ text: message + "ngắn gọn nhiều nhất 3 dòng."}] }],
  };

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text); // Ghi lại phản hồi văn bản
    return text;
  } catch (error) {
    console.error("Lỗi trong hàm Gemini:", error);
    return { response: { text: () => "Đã xảy ra lỗi." } }; // Trả về đối tượng lỗi
  }
};

export default Gemini;