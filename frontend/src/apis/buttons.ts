export type ButtonSound = {
  url: string;
  originalUrl: string;
  startMS: number;
  durationMS: number;
  text: string;
  tags: string[];
  createdAt: string;
};

export function fetchButtonSounds(): Promise<ButtonSound[]> {
  return fetch("/api/buttons")
    .then((res) => res.json())
    .then((body) => body.items as ButtonSound[]);
}
