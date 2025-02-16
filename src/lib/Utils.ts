export const trimMessage = (str: string | null, limit: number) => {
  if (!str) return;
  return `${str.substring(0, limit)}${str.length > limit ? "..." : ""}`;
};

export const formatTime = (timestamp: string): string => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

export const formatDate = (timestamp: string) => {
  const date = new Date(timestamp);

  const optionsDate: Intl.DateTimeFormatOptions = { weekday: "long" };
  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const formattedDate = date.toLocaleDateString("en-US", optionsDate);
  const formattedTime = date.toLocaleTimeString("en-US", optionsTime);

  return `${formattedDate} ${formattedTime.toLowerCase()}`;
};

export const retrieveMessagesByCategory = (
  category: string,
  allMessages: SortedMessage[]
) => {
  let messagesFound = [];

  for (const message of allMessages) {
    if (message.category === category) messagesFound.push(message);
  }

  return messagesFound;
};
