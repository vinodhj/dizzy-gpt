// src/global.d.ts
export {};

declare global {
  interface Window {
    turnstile: {
      reset(arg0: string): void;
      render: (id: string, options: { sitekey: string; theme: string; callback?: (token: string) => void }) => void;
    };
  }
}
