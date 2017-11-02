import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'

const MyComponent = (props: any) => {
  const { handleClick } = props
  return (
    <div>
      <p>something-dev-01</p>
      <p>password</p>
      <Button raised onClick={handleClick}>
        Login
      </Button>
    </div>
  )
}

export default MyComponent

// https://stackoverflow.com/questions/37186500/how-to-setup-material-ui-for-react-with-typescript
