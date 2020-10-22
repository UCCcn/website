import Container from '../container'
import Icon from './icon'
import Copyright from './copyright'
import { GITHUB_URL } from '../../lib/constants'

const Footer: React.FunctionComponent = () => (
  <footer className="border-t bg-accent-1 border-accent-2">
    <Container>
      <div className="flex flex-col">
        <div className="flex flex-col items-center py-8 lg:flex-row">
          <div className="mb-4 text-xl font-bold leading-tight tracking-tighter text-center lg:text-2xl lg:pr-4 lg:w-1/2">
            Cross the sea, we&apos;re still you and me.
          </div>
          <div className="flex flex-row items-center justify-center mb-4 space-x-2 lg:pl-4 lg:w-1/2">
            <Icon
              url="#"
              path="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.374 17c-.897 0-1.626-.727-1.626-1.624s.729-1.624 1.626-1.624 1.626.727 1.626 1.624-.729 1.624-1.626 1.624zm3.885 0c-.03-3.022-2.485-5.474-5.511-5.504v-2.406c4.361.03 7.889 3.555 7.92 7.91h-2.409zm4.081 0c-.016-5.297-4.303-9.571-9.592-9.594v-2.406c6.623.023 11.985 5.384 12 12h-2.408z"
            />
            <Icon
              url={`${GITHUB_URL}`}
              path="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </div>
        </div>
        <div className="mb-8 text-center">
          <Copyright year={2020} name="UCCcn" />
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer
