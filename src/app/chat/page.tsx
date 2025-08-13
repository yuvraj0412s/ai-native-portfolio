'use client';

import { Suspense } from 'react';
import Chat from '@/components/chat/chat';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading chat...</div>}>
      <Chat />
    </Suspense>
  );
}