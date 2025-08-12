'use client';

import React from 'react';
import { Bot } from 'lucide-react';
const Crazy = () => {
  return (
    <div className="mx-auto w-full text-center">
      <div className="mb-4">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          The Bot That Started It All
        </h2>
      </div>
      <div className="flex justify-center items-center p-6 bg-accent rounded-xl">
        <Bot className="h-20 w-20 text-primary" />
      </div>
      <p className="text-muted-foreground mt-4">
        This portfolio is my answer.
      </p>
    </div>
  );
};

export default Crazy;