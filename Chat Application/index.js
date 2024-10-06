$(".userMessageForm").on("submit", function(e) {
  e.preventDefault();
  
  // Asked chatgpt for idea on how to get the current time
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let formattedTime = hours + ':' + minutes + ' ' + ampm;
  let day = currentTime.getDate();
  let month = currentTime.getMonth() + 1;
  let year = currentTime.getFullYear();
  let dateTime = month + '/' + day + '/' + year + ' ' + formattedTime;
  let timestamp = $("<span>").text(dateTime).addClass("timestamp");

  // User message
  let userMessage = $(".userInputnputMessage").val(); 
  let bigDiv = $("<div>").addClass("bigDiv"); 
  let userIcon = $("<img>").addClass("userIcon");
  userIcon.attr("src", "Imgs/User.png");
  let mainMessageDiv = $("<div>").addClass("mainMessageDiv");
  let userMessageP = $("<p>").text(userMessage).addClass("userMessageP");

  timestamp.clone().appendTo(mainMessageDiv); 
  userMessageP.appendTo(mainMessageDiv); 
  userIcon.appendTo(mainMessageDiv);
  mainMessageDiv.appendTo(bigDiv);
  bigDiv.appendTo(".mainChatMessage");

  $(".userInputnputMessage").val(""); 

  let chatBox = $(".mainChatMessage");
  chatBox.scrollTop(chatBox[0].scrollHeight);

  //Bot message
  let botConversation = ["Hi! How are you doing?", "Hey, how's it going?", "Hello! How can I assist you today?", "Let me know if you have any questions!", "I'm always learning new things! What would you like to know?", "I'll be here if you need anything else.", "I'm excited to see where this is going!", "I'm always ready to help. What's next on the list?"];
  let randomIndex = Math.floor(Math.random() * botConversation.length);
  let randomBotConversation = botConversation[randomIndex];

  let botBigDiv = $("<div>").addClass("botBigDiv").hide();
  let botIcon = $("<img>").addClass("botIcon");
  botIcon.attr("src", "Imgs/Bot.png");
  let botMainMessageDiv = $("<div>").addClass("botMainMessageDiv");
  let botMessageP = $("<p>").text(randomBotConversation).addClass("botMessageP");
  let botTimestamp = $("<span>").text(dateTime).addClass("timestamp");

  botIcon.appendTo(botMainMessageDiv);
  botMessageP.appendTo(botMainMessageDiv);
  botMainMessageDiv.appendTo(botBigDiv);
  botBigDiv.appendTo(".mainChatMessage");
  botTimestamp.appendTo(botMainMessageDiv);

  //effects
  botBigDiv.delay(1000).fadeIn(500, function(){
    chatBox.scrollTop(chatBox[0].scrollHeight);
  });

});

