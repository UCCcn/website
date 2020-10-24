type Props = {
  slug: string
  children: React.ReactNode
}

const ArticleTitle: React.FunctionComponent<Props> = ({
  slug,
  children
}: Props) => (
  <h1
    id={slug}
    className="mb-12 text-5xl font-bold leading-tight tracking-tighter text-center md:text-6xl lg:text-6xl md:leading-none md:text-left">
    {children}
  </h1>
)

export default ArticleTitle
