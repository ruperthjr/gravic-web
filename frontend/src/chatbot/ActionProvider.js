class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleJobs() {
      const message = this.createChatBotMessage("We offer job placements in Cleaning, Security, Hospitality, and more!");
      this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
    }
  
    handleUnknown() {
      const message = this.createChatBotMessage("I'm not sure, but I can help! Try asking about jobs or visa assistance.");
      this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
    }
  }
  
  export default ActionProvider;
  