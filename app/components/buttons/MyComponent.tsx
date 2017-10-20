import RaisedButton from 'material-ui/RaisedButton'

const MyComponent = (props: any) => {
  const { handleClick } = props
  return (
    <div>
      <p>something-dev-01</p>
      <p>password</p>
      <RaisedButton onClick={handleClick} label="Login" />
    </div>
  )
}

export default MyComponent

// https://stackoverflow.com/questions/37186500/how-to-setup-material-ui-for-react-with-typescript
