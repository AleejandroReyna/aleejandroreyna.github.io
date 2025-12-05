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
/*
   We cannot import the css directly from node_modules if Next.js/Turbopack can't resolve it via package exports.
   However, since we verified it exists, we will try to import it via a relative path or skip if it keeps failing.
   For now, we'll try to rely on the components styles and our custom CSS.
   The format library mostly provides inline styles for bold/italic which often work without extra CSS,
   or rely on the main editor styles.
*/
// import '@wordpress/format-library/build-style/style.css';

import './GutenbergEditor.css';


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
    <div className="gutenberg-editor-wrapper border rounded p-4 bg-white min-h-[500px] relative iso-root">
      <SlotFillProvider>
        <BlockEditorProvider
          value={blocks}
          onInput={handleUpdateBlocks}
          onChange={handleUpdateBlocks}
        >
          <div className="editor-styles-wrapper">
             <WritingFlow>
                <ObserveTyping>
                  <BlockList />
                </ObserveTyping>
              </WritingFlow>
          </div>
          <Popover.Slot />
        </BlockEditorProvider>
      </SlotFillProvider>
    </div>
  );
}
