import dynamic from 'next/dynamic'
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism'

const SyntaxHighlighter = dynamic(() => import('react-syntax-highlighter').then((mod) => mod.Prism), { ssr: false })

export const CodeBlock = ({ node, inline, className, children, ...props }: any) => {
  const match = /language-(\w+)/.exec(className || '')
  return !inline && match ? (
    <SyntaxHighlighter
      style={nord}
      customStyle={{ borderRadius: '0.2rem', backgroundColor: 'transparent' }}
      language={match[1]}
      PreTag="div"
      {...props}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  )
}
