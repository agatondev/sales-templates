import type React from 'react'

interface RichTextRendererProps {
  content: any
  className?: string
}

function renderNode(node: any): React.ReactNode {
  if (!node) return null

  if (typeof node === 'string') {
    return node
  }

  switch (node._type || node.type) {
    case 'block':
      return (
        <p className="mb-4 leading-relaxed text-zinc-300">
          {node.children?.map((child: any, i: number) => renderNode(child))}
        </p>
      )

    case 'span':
      let text: React.ReactNode = node.text || ''
      if (node.marks?.includes('strong')) text = <strong className="font-semibold text-white">{text}</strong>
      if (node.marks?.includes('em')) text = <em>{text}</em>
      if (node.marks?.includes('code')) text = <code className="bg-zinc-800 text-purple-300 px-1.5 py-0.5 rounded text-sm">{text}</code>
      return text

    case 'root':
      return <>{node.children?.map((child: any, i: number) => <span key={i}>{renderNode(child)}</span>)}</>

    case 'paragraph':
      return (
        <p className="mb-4 leading-relaxed text-zinc-300">
          {node.children?.map((child: any, i: number) => renderNode(child))}
        </p>
      )

    case 'heading':
      const Tag = (node.tag || 'h2') as any
      return (
        <Tag className="text-xl font-bold text-white mt-6 mb-3">
          {node.children?.map((child: any, i: number) => renderNode(child))}
        </Tag>
      )

    case 'text':
      return node.text

    default:
      if (Array.isArray(node)) {
        return <>{node.map((child: any, i: number) => <span key={i}>{renderNode(child)}</span>)}</>
      }
      if (node.children) {
        return <>{node.children.map((child: any, i: number) => renderNode(child))}</>
      }
      return null
  }
}

export function RichTextRenderer({ content, className = '' }: RichTextRendererProps) {
  if (!content) return null

  if (typeof content === 'string') {
    return <div className={`prose-dark ${className}`} dangerouslySetInnerHTML={{ __html: content }} />
  }

  if (Array.isArray(content)) {
    return (
      <div className={`prose-dark ${className}`}>
        {content.map((block: any, i: number) => (
          <div key={i}>{renderNode(block)}</div>
        ))}
      </div>
    )
  }

  return (
    <div className={`prose-dark ${className}`}>
      {renderNode(content)}
    </div>
  )
}
