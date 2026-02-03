import { customProvider, gateway } from 'ai';

// Stub AI provider - add your own model configurations
export const scira = customProvider({
  languageModels: {
    // Add your models here, for example:
    // 'scira-default': gateway('openai/gpt-4o-mini'),
  },
});

// Model configuration types
interface ModelParameters {
  temperature?: number;
  topP?: number;
  topK?: number;
  minP?: number;
  frequencyPenalty?: number;
  presencePenalty?: number;
  maxOutputTokens?: number;
}

interface Model {
  value: string;
  label: string;
  description: string;
  vision: boolean;
  reasoning: boolean;
  experimental: boolean;
  category: string;
  pdf: boolean;
  pro: boolean;
  requiresAuth: boolean;
  freeUnlimited: boolean;
  maxOutputTokens: number;
  extreme?: boolean;
  fast?: boolean;
  isNew?: boolean;
  parameters?: ModelParameters;
}

// Add your models here
export const models: Model[] = [];

// Helper functions - stub implementations
export function requiresAuthentication(_model: string): boolean {
  return false;
}

export function requiresProSubscription(_model: string): boolean {
  return false;
}

export function shouldBypassRateLimits(_model: string, _user: any): boolean {
  return false;
}

export function getModelParameters(_model: string): ModelParameters {
  return {};
}

export function getMaxOutputTokens(_model: string): number {
  return 16000;
}
