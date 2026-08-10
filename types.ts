
export interface WorkItem {
  id: string;
  title: string;
  category: 'Photo' | 'Film';
  imageUrl: string;
  videoUrl?: string;
  client: string;
  year: string;
  aspectRatio?: string;
  description?: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
  metadata?: {
    camera?: string;
    lens?: string;
    settings?: string;
    location?: string;
  };
}

export interface HeroImage {
  imageUrl: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
}

export type ViewState = 
  | { name: 'home' }
  | { name: 'photos' }
  | { name: 'films' }
  | { name: 'meet' }
  | { name: 'about' }
  | { name: 'contact' }
  | { name: 'accessibility' }
  | { name: 'privacy' }
  | { name: 'terms' }
  | { name: 'faq' }
  | { name: 'photo-detail', params: { id: string } };

// Added AiMessage interface for the AI Creative Assistant state management
export interface AiMessage {
  role: 'user' | 'assistant';
  content: string;
}