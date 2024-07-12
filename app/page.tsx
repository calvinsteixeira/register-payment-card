'use client';
import React, { Suspense, ReactElement } from 'react';
import { useThemeStore } from '@/store';
import { Button, Skeleton } from '@/components/index';
import { Plus } from '@/icons';
import { PaymentCardPreview } from '@/components/index';
import { useQuery } from '@tanstack/react-query';
import { getCards } from '@/services/cards';
import { Card } from '@/types';

const CardsSkeleton = (): ReactElement => {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: 8 }, (_, index) => {
        return <Skeleton key={index} className="bg-muted h-20 sm:w-80" />;
      })}
    </div>
  );
};

export default function Home() {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const queryCards = useQuery({
    queryKey: ['cards'],
    queryFn: getCards,
  });

  return (
    <main>
      <div className="flex flex-row gap-2 items-center">
        <h1 className="text-2xl font-bold">Seus cartões</h1>
        <Button variant={'ghost'} size={'sm'}>
          <Plus className="i-sm mr-1" /> Novo cartão
        </Button>
      </div>
      <div className="flex flex-col gap-6 mt-8">
        <h3 className="text-sm">
          Você pode adicionar até <span className="text-primary">5 cartões</span>
        </h3>
        <div className="flex flex-col sm:flex-row gap-3">
          {queryCards.isLoading ? (
            <CardsSkeleton />
          ) : (
            queryCards.data.map((card: Card, index: number) => (
              <PaymentCardPreview key={card.id} title={card.name} cardNumber={card.cardNumber} favorite={card.favorite} />
            ))
          )}
        </div>
      </div>
    </main>
  );
}
