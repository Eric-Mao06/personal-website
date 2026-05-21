"use client";

import Link from "next/link";
import { useState } from "react";

export function Footer() {
  const email = "eric@freesolo.co";
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable; do nothing
    }
  };

  return (
    <footer className="layout-md mt-8 mb-10 text-lg flex flex-col">
      <div className="flex justify-between items-center py-1 border-t border-neutral-200">
        <span>Twitter</span>
        <Link
          href="https://x.com/ericmao"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          @ericmao
        </Link>
      </div>
      <div className="flex justify-between items-center py-1 border-t border-neutral-200">
        <span>LinkedIn</span>
        <Link
          href="https://www.linkedin.com/in/eric-mao/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          @Eric-Mao
        </Link>
      </div>
      <div className="flex justify-between items-center py-1 border-t border-neutral-200">
        <span>GitHub</span>
        <Link
          href="https://github.com/Eric-Mao06"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          @Eric-Mao06
        </Link>
      </div>
      <div className="flex justify-between items-center py-1 border-t border-neutral-200">
        <span>Email</span>
        <button type="button" onClick={handleCopyEmail} className="link">
          {copied ? "copied!" : email}
        </button>
      </div>
    </footer>
  );
}
