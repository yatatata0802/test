export interface NavItem {
  path: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  features: string[];
}

export interface StorySection {
  title: string;
  content: string[];
  isHighlighted?: boolean;
}

export interface ContactInfo {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  text: string;
}