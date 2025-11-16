import { useState } from "react";

type CopyState = Record<string, boolean>;

export const useCopyToClipboardById = () => {
  const [copied, setCopied] = useState<CopyState>({});

  const copyToClipboard = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);

      // Set state untuk ID ini menjadi true
      setCopied((prev) => ({ ...prev, [id]: true }));

      // Reset setelah 2 detik
      setTimeout(() => {
        setCopied((prev) => ({ ...prev, [id]: false }));
      }, 1000);

      return true;
    } catch (err) {
      console.error("Copy failed", err);
      return false;
    }
  };

  return { copied, copyToClipboard };
};
