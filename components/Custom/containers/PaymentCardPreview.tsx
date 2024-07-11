'use client';

import React from 'react';
import { Eye, EyeOff, Heart, Copy } from '@/icons';

interface PaymentCardPreview {
  title: string;
  cardNumber: string;
}

export default function PaymentCardPreview(props: PaymentCardPreview) {
  const [cardNumber, setCardNumber] = React.useState<PaymentCardPreview['cardNumber'] | null>(null);
  const [maskedCardNumber, setMaskedCardNumber] = React.useState<string | null>(null)
  const [isMaskedCardNumber, setIsMaskedCardNumber] = React.useState<boolean>(true);

  React.useEffect(() => {
    const cardNumberWithDots = props.cardNumber.replace(/(\d{3})(?=\d)/g, '$1.');
    setCardNumber(cardNumberWithDots)
    const cardNumberWithMaskAndDots = cardNumberWithDots.replace(/\d{3}(?=\.)/g, '***');
    setMaskedCardNumber(cardNumberWithMaskAndDots)
  }, [])

  return (
    <div className="border-primary sm:max-w-80 border-[0.1rem] px-4 py-2 rounded-sm transition-all ease-in-out duration-200 cursor-pointer box-shad gap-4 flex flex-col">
      <div className="flex flex-row items-end justify-between">
        <p className="font-semibold">{props.title}</p>
        <Heart className="icon-md text-primary" />
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <p>{isMaskedCardNumber ? maskedCardNumber : cardNumber}</p>
          <Copy className="icon-sm" />
        </div>
        {isMaskedCardNumber ? (
          <EyeOff onClick={() => setIsMaskedCardNumber(false)} className="icon-md" />
        ) : (
          <Eye onClick={() => setIsMaskedCardNumber(true)} className="icon-md" />
        )}
      </div>
    </div>
  );
}
