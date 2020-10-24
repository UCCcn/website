import githubMarkdown from 'github-markdown-css/github-markdown.module.css'
import markdownStyles from './markdown-styles.module.scss'

type Props = {
  content: string
}

const ArticleBody: React.FunctionComponent<Props> = ({ content }: Props) => (
  <div className="max-w-2xl mx-auto">
    <div
      className={`${githubMarkdown['markdown-body']} ${markdownStyles.markdown}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
)

export default ArticleBody
