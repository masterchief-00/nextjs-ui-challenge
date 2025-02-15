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
