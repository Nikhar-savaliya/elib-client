"use client";
import React from "react";
import { Button } from "./ui/button";
import { LucideFileDown } from "lucide-react";

const DownloadButton = ({ bookUrl }: { bookUrl: string }) => {
  const handleBookOpen = () => window.open(bookUrl, "_blank");
  return (
    <Button
      variant={"default"}
      className="flex items-center gap-2"
      onClick={handleBookOpen}
    >
      <LucideFileDown width={18} />
      download book
    </Button>
  );
};

export default DownloadButton;
