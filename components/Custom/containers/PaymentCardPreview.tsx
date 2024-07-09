'use client';

import React from 'react';
import { Eye, EyeOff, Heart, Copy } from '@/icons';

interface PaymentCardPreview {
  title: string;
  cardNumber: string;
}

export default function PaymentCardPreview(props: PaymentCardPreview) {
  const [cardNumber, setCardNumber] = React.useState<PaymentCardPreview['cardNumber']>(addDotsToNumberCard(props.cardNumber));
  const [isMaskedCardNumber, setIsMaskedCardNumber] = React.useState<boolean>(true);

  function toggleNumberCardVisibility(cardNumber: PaymentCardPreview['cardNumber']) {
    if (isMaskedCardNumber) {
      setCardNumber(addDotsToNumberCard(props.cardNumber));
      setIsMaskedCardNumber(false);
    }

    const lastThreeDigits = cardNumber.slice(-3);
    const maskedPart = '*'.repeat(cardNumber.length - 3);
    setCardNumber(addDotsToNumberCard(lastThreeDigits + maskedPart));
    setIsMaskedCardNumber(true);
  }

  function addDotsToNumberCard(numberCard: PaymentCardPreview['cardNumber']) {
    const parts = [];
    for (let i = numberCard.length; i > 0; i -= 3) {
      parts.unshift(numberCard.substring(i - 3, i));
    }

    return parts.join('.');
  }

  return (
    <div className="border-primary border-[0.1rem] px-4 py-2 rounded-sm transition-all ease-in-out duration-200 cursor-pointer hover:shadow-md hover:shadow-primary box-shad hover:scale-105 gap-4 flex flex-col">
      <div className="flex flex-row items-end justify-between">
        <p className="font-semibold">{props.title}</p>
        <Heart className="icon-md text-primary" />
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <p>{cardNumber}</p>
          <Copy className="icon-sm" />
        </div>
        {isMaskedCardNumber ? (
          <EyeOff onClick={() => toggleNumberCardVisibility(cardNumber)} className="icon-md" />
        ) : (
          <Eye onClick={() => toggleNumberCardVisibility(cardNumber)} className="icon-md" />
        )}
      </div>
    </div>
  );
}
