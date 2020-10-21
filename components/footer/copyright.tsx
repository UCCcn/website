type Props = {
  year: number
  name: string
  license?: {
    type: string
    url: string
  }
}

const Copyright: React.FunctionComponent<Props> = ({
  year,
  name,
  license
}: Props) => (
  <span className="font-bold">
    @&nbsp;{`${year}`}&nbsp;{`${name}`}
    {license ? (
      <>
        &nbsp;·&nbsp;
        <a
          className="hover:underline"
          href={`${license.url}`}>{`${license.type}`}</a>
      </>
    ) : null}
  </span>
)

export default Copyright
