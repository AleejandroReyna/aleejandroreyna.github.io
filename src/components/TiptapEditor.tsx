'use client';

import { useEditor, EditorContent, Editor, BubbleMenu, FloatingMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import React, { useEffect } from 'react';
import {
  Bold,
  Italic,
  Strikethrough,
  Code,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
} from 'lucide-react';
import classNames from 'classnames';

interface TiptapEditorProps {
  initialContent?: string;
  onChange: (content: string) => void;
  editable?: boolean;
}

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  const buttons = [
    {
      icon: <Bold className="w-4 h-4" />,
      title: 'Bold',
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive('bold'),
    },
    {
      icon: <Italic className="w-4 h-4" />,
      title: 'Italic',
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive('italic'),
    },
    {
      icon: <Strikethrough className="w-4 h-4" />,
      title: 'Strike',
      action: () => editor.chain().focus().toggleStrike().run(),
      isActive: editor.isActive('strike'),
    },
    {
      icon: <Code className="w-4 h-4" />,
      title: 'Code',
      action: () => editor.chain().focus().toggleCode().run(),
      isActive: editor.isActive('code'),
    },
    {
        type: 'divider'
    },
    {
      icon: <Heading1 className="w-4 h-4" />,
      title: 'Heading 1',
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: editor.isActive('heading', { level: 1 }),
    },
    {
      icon: <Heading2 className="w-4 h-4" />,
      title: 'Heading 2',
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: editor.isActive('heading', { level: 2 }),
    },
    {
      icon: <List className="w-4 h-4" />,
      title: 'Bullet List',
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive('bulletList'),
    },
    {
      icon: <ListOrdered className="w-4 h-4" />,
      title: 'Ordered List',
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: editor.isActive('orderedList'),
    },
    {
      icon: <Quote className="w-4 h-4" />,
      title: 'Blockquote',
      action: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: editor.isActive('blockquote'),
    },
    {
        type: 'divider'
    },
    {
      icon: <Undo className="w-4 h-4" />,
      title: 'Undo',
      action: () => editor.chain().focus().undo().run(),
      disabled: !editor.can().undo(),
    },
    {
      icon: <Redo className="w-4 h-4" />,
      title: 'Redo',
      action: () => editor.chain().focus().redo().run(),
      disabled: !editor.can().redo(),
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-1 p-2 border-b bg-gray-50 rounded-t-lg sticky top-0 z-10">
      {buttons.map((btn, index) => (
        btn.type === 'divider' ? <div key={index} className="w-px h-6 bg-gray-300 mx-1" /> :
        <button
          key={index}
          onClick={(e) => {
              e.preventDefault();
              btn.action?.();
          }}
          disabled={btn.disabled}
          className={classNames(
            'p-2 rounded hover:bg-gray-200 transition-colors',
            { 'bg-gray-200 text-primary': btn.isActive },
            { 'opacity-50 cursor-not-allowed': btn.disabled }
          )}
          title={btn.title}
          type="button"
        >
          {btn.icon}
        </button>
      ))}
    </div>
  );
};

export default function TiptapEditor({ initialContent, onChange, editable = true }: TiptapEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Write something amazing...',
      }),
    ],
    content: initialContent,
    editable,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[300px] p-4',
      },
    },
    immediatelyRender: false,
  });

  return (
    <div className="border rounded-lg shadow-sm bg-white min-h-[400px] flex flex-col">
      {editable && <MenuBar editor={editor} />}

      {editor && editable && (
        <BubbleMenu className="bubble-menu flex bg-white border shadow-lg rounded-lg p-1 gap-1" tippyOptions={{ duration: 100 }} editor={editor}>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={classNames('p-1 rounded hover:bg-gray-100', { 'is-active text-blue-500': editor.isActive('bold') })}
          >
            <Bold className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={classNames('p-1 rounded hover:bg-gray-100', { 'is-active text-blue-500': editor.isActive('italic') })}
          >
            <Italic className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={classNames('p-1 rounded hover:bg-gray-100', { 'is-active text-blue-500': editor.isActive('strike') })}
          >
            <Strikethrough className="w-4 h-4" />
          </button>
        </BubbleMenu>
      )}

      {editor && editable && (
        <FloatingMenu className="floating-menu flex bg-white border shadow-lg rounded-lg p-1 gap-1" tippyOptions={{ duration: 100 }} editor={editor}>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={classNames('p-1 rounded hover:bg-gray-100', { 'is-active text-blue-500': editor.isActive('heading', { level: 1 }) })}
          >
            <Heading1 className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={classNames('p-1 rounded hover:bg-gray-100', { 'is-active text-blue-500': editor.isActive('heading', { level: 2 }) })}
          >
            <Heading2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={classNames('p-1 rounded hover:bg-gray-100', { 'is-active text-blue-500': editor.isActive('bulletList') })}
          >
            <List className="w-4 h-4" />
          </button>
        </FloatingMenu>
      )}

      <div className="flex-1 cursor-text" onClick={() => editor?.commands.focus()}>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
