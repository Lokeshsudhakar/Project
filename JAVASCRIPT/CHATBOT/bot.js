const apikey = "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";

const inputBox = document.querySelector("#userInput");
const fileBox = document.querySelector("#fileInput"); 
const searchBtn = document.querySelector("#sendBtn");
const chatBox = document.querySelector("#chatBox");

searchBtn.onclick = async () => {
    const userText = inputBox.value.trim();
    const file = fileBox.files[0]; 

    if (!userText && !file) {
        alert("Please enter a message or select a file.");
        return;
    }

    let combinedPrompt = userText;

    if (file) {
        const reader = new FileReader();
        
        const readFileContent = new Promise((resolve) => {
            reader.onload = (event) => resolve(event.target.result);
        });
        
        reader.readAsText(file);
        const fileContent = await readFileContent;
        
        combinedPrompt = `User attached file (${file.name}):\n"${fileContent}"\n\nUser Question: ${userText}`;
    }

    const userMsg = document.createElement("p");
    userMsg.className = "user-message";
    userMsg.innerText = file ? `📁 Sent File: ${file.name}\n${userText}` : userText;
    chatBox.appendChild(userMsg);
    
    inputBox.value = "";
    fileBox.value = ""; 

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
                "messages": [{ "role": "user", "content": combinedPrompt }]
            })
        });

        const data = await res.json();

        if (!res.ok) {
            botMsg.innerText = "Unable to fetch AI response.";
            return;
        }

        botMsg.innerText = data.choices[0].message.content;
        chatBox.scrollTop = chatBox.scrollHeight;
        
    } catch (error) {
        botMsg.innerText = "An error occurred while fetching data.";
    }
};