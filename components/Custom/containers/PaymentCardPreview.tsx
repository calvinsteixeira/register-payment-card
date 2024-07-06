import React from "react";
import { EyeOff, Heart, Copy } from "@/icons";

type Props = {};

export default function PaymentCardPreview({}: Props) {
  return (
    <div className="border-primary border-[0.1rem] px-4 py-2 rounded-sm transition-all ease-in-out duration-200 cursor-pointer hover:shadow-md hover:shadow-primary box-shad hover:scale-105 gap-4 flex flex-col">
      <div className="flex flex-row items-end justify-between">
        <p className="font-semibold">Compras online</p>
        <Heart className="i-md text-primary" />
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <p>*** *** *** *** 789</p>
          <Copy className="i-sm" />
        </div>
        <EyeOff className="i-md" />
      </div>
    </div>
  );
}
