'use client';

import { useState, useEffect } from 'react';
import {
  BlockEditorProvider,
  BlockList,
  WritingFlow,
  ObserveTyping,
  BlockTools,
  BlockInspector,
} from '@wordpress/block-editor';
import {
  SlotFillProvider,
  Popover,
} from '@wordpress/components';
import { registerCoreBlocks } from '@wordpress/block-library';
import '@wordpress/components/build-style/style.css';
import '@wordpress/block-editor/build-style/style.css';
import '@wordpress/block-library/build-style/style.css';
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
    <div className="gutenberg-editor-wrapper border rounded bg-white min-h-[600px] relative iso-root flex flex-row">
      <SlotFillProvider>
        <BlockEditorProvider
          value={blocks}
          onInput={handleUpdateBlocks}
          onChange={handleUpdateBlocks}
        >
          {/* Main Editor Area */}
          <div className="editor-content flex-1 p-4 overflow-y-auto h-[600px] relative">
            <BlockTools>
                <WritingFlow>
                    <ObserveTyping>
                        <BlockList />
                    </ObserveTyping>
                </WritingFlow>
            </BlockTools>
          </div>

          {/* Sidebar Inspector */}
          <div className="editor-sidebar w-80 border-l bg-gray-50 p-4 overflow-y-auto h-[600px]">
             <h3 className="font-bold mb-4">Block Settings</h3>
             <BlockInspector />
          </div>

          <Popover.Slot />
        </BlockEditorProvider>
      </SlotFillProvider>
    </div>
  );
}
