'use client';

import { Suspense } from 'react';
import Chat from '@/components/chat/chat';

export default function Page() {
  return (
    <Suspense fallback={<div>Chargement du chat...</div>}>
      <Chat />
    </Suspense>
  );
}