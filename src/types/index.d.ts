declare type BigButtonProps = {
  label: string;
  icon: React.ReactNode;
  action?: () => void;
};

declare type MenuButtonProps = {
  label: string;
  icon: React.ReactNode;
  action?: () => void;
};

declare type CurrentUserProps = {
  names: string;
  photo: string;
};

declare type MessageBriefProps = {
  names: string;
  message: string;
  timestamp: string;
  photo: string;
  isActive: boolean;
  handleChatLoad: () => void;
};

declare type MessageFullProps = {
  photo: string;
  timestamp: string;
  message: string;
  tag: string;
  names: string;
  isReply: boolean;
};

declare type Message = {
  id: string;
  user_id: string;
  content: string;
  timestamp: string;
  tag: string;
  user: {
    names: string;
    user_name: string;
    photo: string;
  };
};

declare interface CurrentChat {
  currentChat: {
    id: string | null;
    photo: string | null;
    names: string | null;
    handle: string | null;
    tag: string | null;
    content: string | null;
    timestamp: string | null;
  };
}

declare interface ChatReply {
  id: string | null;
  photo: string | null;
  names: string | null;
  handle: string | null;
  tag: string | null;
  content: string | null;
  timestamp: string | null;
  parent_message_id: string | null;
}

declare interface Replies {
  replies: ChatReply[];
}

declare type SortedMessage = { category: string | null; message: Message };
