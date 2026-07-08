const apikey = "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";

const inputBox = document.querySelector("#userInput");
const searchBtn = document.querySelector("#sendBtn");
const chatBox = document.querySelector("#chatBox");

searchBtn.onclick = async () => {
    const userText = inputBox.value.trim();
    if (!userText) {
        alert("Please enter a message.");
        return;
    }

    // 1. Show the user message and clean the input box
    const userMsg = document.createElement("p");
    userMsg.className = "user-message";
    userMsg.innerText = userText;
    chatBox.appendChild(userMsg);
    inputBox.value = "";

    // 2. Add a temporary loading message
    const botMsg = document.createElement("p");
    botMsg.className = "bot-message";
    botMsg.innerText = "Thinking...";
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            },
            body: JSON.stringify({
                "model": "openrouter/free", 
                "messages": [{ "role": "user", "content": userText }]
            })
        });

        const data = await res.json();

        if (!res.ok) {
            botMsg.innerText = "Unable to fetch AI response.";
            return;
        }

        // 3. Put the AI answer directly inside the chat bubble
        botMsg.innerText = data.choices[0].message.content;
        chatBox.scrollTop = chatBox.scrollHeight;
        
    } catch (error) {
        botMsg.innerText = "An error occurred while fetching data.";
    }
};