import React, { useEffect, useRef, useState } from 'react'
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Gemini from '../services/Gemini';
import MessageIcon from '@mui/icons-material/Message';
import CloseIcon from '@mui/icons-material/Close';
const ChatBot = () => {
    const [message, setMessage] = useState(""); // Lưu nội dung nhập vào
    const [data, setData] = useState([
        { id: 1, text: "Hey there✌️ How can I help you today?", sender: "bot" },
      ]);
    const [open, setOpen] = useState(false);
    const [loading, setloading]= useState(false);
    // Hàm xử lý khi nhập vào textarea
    const handleInputChange = (e) => {
      setMessage(e.target.value);
    };
    const chatEndRef = useRef(null); 
    // Hàm xử lý khi gửi form
    async function GeminiPromt(mes) {
        try {
          const result = await Gemini(mes);
          // Xử lý kết quả nếu cần
          return result;
        } catch (error) {
          console.error("Lỗi trong exampleUsage:", error);
        }
      }
    const handleSubmit = (e) => {
      e.preventDefault(); // Ngăn chặn tải lại trang

        const userMessage = { id: Date.now(), text: message, sender: "user" };
        setData((prev) => [...prev, userMessage]);
        const mes = message;
        setMessage(""); // Xóa tin nhắn sau khi gửi
        // Tạo phản hồi của chatbot (giả lập API)
        setloading(true);
        setTimeout(() => {
          const botReply = {
            id: Date.now() + 1,
            text: GeminiPromt(mes),
            sender: "bot",
          };
          setData((prev) => [...prev, botReply]);
          setloading(false);
        }, 3000);
      };
    
    //   // Tạo phản hồi đơn giản từ chatbot
    //   const getBotReply = (msg) => {
    //     if (msg.toLowerCase().includes("chào")) return "Xin chào! Bạn cần hỗ trợ gì?";
    //     if (msg.toLowerCase().includes("tên")) return "Tôi là ChatBot AI!";
    //     return "Tôi chưa hiểu lắm, bạn có thể nói rõ hơn không?";
    //   };
      useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, [data]);

  return (
    <div className='absolute text-black right-25 bottom-15'>
        <div onClick={()=>setOpen(!open)} className='fixed bottom-8  right-8 rounded-full flex items-center justify-center border-none h-[50px] w-[50px] cursor-pointer bg-[#948475] opacity-75'>
            {!open ? <MessageIcon></MessageIcon>
            :<CloseIcon></CloseIcon>}
        </div>
        <div className={`w-[420px] ${!open?"opacity-0":"opacity-100"} transition-opacity duration-300 chatbot bg-white overflow-hidden rounded-2xl shadow-2xl`}>
            <div className='flex flex-row p-3 bg-[#c3b4a3] justify-between px-5'>
                <div className='flex text-xl items-center gap-2'>
                    <div className='w-10 h-10 flex items-center justify-center bg-white rounded-full'>
                        <SmartToyIcon></SmartToyIcon>
                    </div>
                    <span>Chatbot</span>
                </div>
                <button className='w-10 h-10 rounded-full hover:bg-[#56493e]'><ArrowDropDownIcon></ArrowDropDownIcon></button>
            </div>
            <div className=''>
                <div className='flex flex-col h-[450px] overflow-auto pt-5 gap-2'>
                    {/* <div className='flex flex-row items-center gap-3 mx-2'>
                        <div className='px-2 w-10 h-10 flex jutify-center items-center rounded-full bg-amber-200'>
                            <SmartToyIcon/>
                        </div>
                        <h2 className='bg-gray-200 p-2 rounded-r-xl rounded-tl-xl'>Hey there✌️ <br/> How can i help you tody?</h2>
                    </div> */}
                    {data.map((msg) => (
                        <div key={msg.id} className={`flex gap-3 mx-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                            {msg.sender === "bot" && (
                            <div className="px-2 w-10 h-10 flex jutify-center items-center rounded-full bg-[#c3b4a3]">
                                <SmartToyIcon />
                            </div>
                            )}
                            <h2
                            className={`p-2 ${
                                msg.sender === "user"
                                ? `bg-[#eee1d1] rounded-l-xl  rounded-tr-xl ${msg?.text ? "":"animate-pulse"}`
                                : "bg-gray-200  rounded-r-xl rounded-tl-xl"
                            }`}
                            >
                            {msg?.text ? msg.text:
                            <div>
                                <div className='w-2 h-2 bg-black rounded-full animate-bounce '></div>
                                <div className='w-2 h-2 bg-black rounded-full animate-bounce'></div>
                                <div className='w-2 h-2 bg-black rounded-full animate-bounce'></div>
                            </div>}
                            </h2>
                        </div>
                        ))}
                    {/* <div className='flex justify-end px-2'>
                        <h2 className='bg-amber-200 p-2 rounded-l-xl rounded-tr-xl'>Lorem ipsum dolor sit amet consect.</h2>
                    </div>
                    <div className='flex flex-row items-center gap-3 mx-2'>
                        <div className='px-2 w-10 h-10 flex jutify-center items-center rounded-full bg-amber-200'>
                            <SmartToyIcon/>
                        </div>
                        <h2 className='bg-gray-200 gap-2 p-5 flex flex-row rounded-r-xl rounded-tl-xl animate-pulse '>
                            <div className='w-2 h-2 bg-black rounded-full animate-bounce '></div>
                            <div className='w-2 h-2 bg-black rounded-full animate-bounce'></div>
                            <div className='w-2 h-2 bg-black rounded-full animate-bounce'></div>
                        </h2>
                    </div> */}
                    {loading && <div className='flex flex-row items-center gap-3 mx-2'>
                        <div className='px-2 w-10 h-10 flex jutify-center items-center rounded-full bg-[#c3b4a3]'>
                            <SmartToyIcon/>
                        </div>
                        <h2 className='bg-gray-200 gap-2 p-4 flex flex-row rounded-r-xl rounded-tl-xl animate-pulse '>
                            <div className='w-2 h-2 bg-black rounded-full animate-bounce '></div>
                            <div className='w-2 h-2 bg-black rounded-full animate-bounce'></div>
                            <div className='w-2 h-2 bg-black rounded-full animate-bounce'></div>
                        </h2>
                    </div>}
                    <div ref={chatEndRef}></div>
                </div>
                <div className=' aboslute bottom-0 w-[100%] p-[15px_22px_20px]'>
                    <form onSubmit={handleSubmit} className=' chat-form flex items-center justify-center bg-white rounded-3xl outline-2 outline-[#c3b4a3] focus-within:outline-[#948475]'>
                        <textarea value={message}        onKeyDown={(e) => {
                            if (e.key === "Enter" && message.trim()) {
                                e.preventDefault(); // Ngăn xuống dòng khi nhấn Enter
                                handleSubmit(e);
                            }
                            }} 
                            onChange={handleInputChange} placeholder='Message...' required className='peer message-input resize-none rounded-3xl outline-none border-none overflow-hidden h-[47px] w-full text-[0.95rem] p-[14px_0_13px_18px] pt-[12px]' name="messege" id="messege"></textarea>
                        <button id="send-message" className='peer-valid:inline-flex cursor-pointer hidden transition-all duration-200 ease-linear border-none bg-[#c3b4a3] p-2 rounded-full mx-1 hover:bg-[#948475] ' type='submit'><ArrowUpwardIcon></ArrowUpwardIcon></button>
                    </form>  
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatBot
