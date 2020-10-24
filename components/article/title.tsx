type Props = {
  children: React.ReactNode
}

const ArticleTitle: React.FunctionComponent<Props> = ({ children }: Props) => (
  <h1 className="mb-12 text-5xl font-bold leading-tight tracking-tighter text-center md:text-6xl lg:text-6xl md:leading-none md:text-left">
    {children}
  </h1>
)

export default ArticleTitle
