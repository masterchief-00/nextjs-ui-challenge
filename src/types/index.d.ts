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
};

declare type MessageFullProps = {
  photo: string;
  timestamp: string;
  message: string;
  tag: string;
  names: string;
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

declare type SortedMessage = { category: string | null; message: Message };
