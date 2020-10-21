type Props = {
  children: React.ReactNode
}

const Container: React.FunctionComponent<Props> = ({ children }: Props) => {
  return <div className="container px-5 mx-auto">{children}</div>
}

export default Container
