"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Always show the modal after short delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleAgree = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className="max-w-2xl max-h-[80vh] overflow-y-auto"
        hideCloseButton
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-playfair text-primary-brown">
            Disclaimer
          </DialogTitle>
          <DialogDescription className="text-base text-gray-700 font-source-sans">
            By clicking on &apos;I AGREE&apos;, the user acknowledges the
            following:
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 text-sm text-gray-700 font-source-sans leading-relaxed">
          <p>
            <strong>1.</strong> That this website is not to be construed as an
            advertisement, inducement or solicitation for any kind of Legal
            Services.
          </p>

          <p>
            <strong>2.</strong> That the user intends to gain the information
            available through this website about{" "}
            <strong>Shubh Legal Offices</strong>, its area of practice and its
            advocates, for his/her own information and use.
          </p>

          <p>
            <strong>3.</strong> That this information has been made
            available/provided to the user only on his/her specific request and
            any information obtained from this website is completely at the
            user&apos;s volition and any dissemination, transmission, or use of
            this website is not, in any manner whatsoever, intended to create
            any lawyer-client relationship.
          </p>

          <p>
            <strong>4.</strong> That no liability can be affixed upon{" "}
            <strong>Shubh Legal Offices</strong> for any reliance placed on any
            information provided by this website.
          </p>
        </div>

        <DialogFooter>
          <Button
            onClick={handleAgree}
            className="bg-primary-orange hover:bg-primary-orange/90 text-white font-semibold px-8 py-3"
          >
            I AGREE
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
