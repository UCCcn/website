const Intro: React.FunctionComponent = () => (
  <section className="flex flex-col items-center mt-16 mb-16 md:flex-row md:justify-between md:mb-12">
    <h1 className="text-6xl font-bold leading-tight tracking-tighter md:text-8xl md:pr-8">
      UCCcn.
    </h1>
    <h4 className="mt-5 text-lg text-center md:text-left md:pl-8">
      Created with ♥ by{' '}
      <a
        href="https://exuanbo.xyz/"
        className="underline transition-colors duration-200 hover:text-success"
        target="_blank">
        Exuanbo
      </a>
    </h4>
  </section>
)

export default Intro
