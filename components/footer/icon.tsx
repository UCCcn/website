type Props = {
  url: string
  path: string
}

const Icon: React.FunctionComponent<Props> = ({ url, path }: Props) => (
  <a href={`${url}`}>
    <svg
      className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24">
      <path d={`${path}`} />
    </svg>
  </a>
)

export default Icon
