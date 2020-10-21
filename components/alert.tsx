import Container from './container'

const Alert: React.FunctionComponent = () => (
  <div className="text-white border-b bg-accent-7 border-accent-7">
    <Container>
      <div className="py-2 text-sm text-center">
        This page is a preview.{' '}
        <a
          href="/api/exit-preview"
          className="underline transition-colors duration-200 hover:text-cyan">
          Click here
        </a>{' '}
        to exit preview mode.
      </div>
    </Container>
  </div>
)

export default Alert
