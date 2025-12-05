'use client';

import { useState, useEffect } from 'react';
import {
  BlockEditorProvider,
  BlockList,
  WritingFlow,
  ObserveTyping,
} from '@wordpress/block-editor';
import {
  SlotFillProvider,
  Popover,
} from '@wordpress/components';
import { registerCoreBlocks } from '@wordpress/block-library';
import '@wordpress/components/build-style/style.css';
import '@wordpress/block-editor/build-style/style.css';
import '@wordpress/block-library/build-style/style.css';
/* Removed theme.css and common.css as they don't exist in the current version of the package */

interface GutenbergEditorProps {
  initialContent?: string;
  onChange: (content: string) => void;
}

export default function GutenbergEditor({ initialContent, onChange }: GutenbergEditorProps) {
  const [blocks, updateBlocks] = useState<any[]>([]);

  useEffect(() => {
    registerCoreBlocks();
  }, []);

  useEffect(() => {
      // Basic deserialization if needed, or start empty/paragraph
      // For now, we start with an empty list if no initial content
      if (initialContent) {
           // Parse logic would go here if we were fully implementing deserialization
      }
  }, [initialContent]);

  const handleUpdateBlocks = (newBlocks: any[]) => {
    updateBlocks(newBlocks);
    // Simple serialization to HTML (conceptually) or JSON
    // For this basic implementation, we'll pass the JSON string
    onChange(JSON.stringify(newBlocks));
  };

  return (
    <div className="gutenberg-editor-wrapper border rounded p-4 bg-white min-h-[400px]">
      <SlotFillProvider>
        <BlockEditorProvider
          value={blocks}
          onInput={handleUpdateBlocks}
          onChange={handleUpdateBlocks}
        >
          <WritingFlow>
            <ObserveTyping>
              <BlockList />
            </ObserveTyping>
          </WritingFlow>
          <Popover.Slot />
        </BlockEditorProvider>
      </SlotFillProvider>
    </div>
  );
}
