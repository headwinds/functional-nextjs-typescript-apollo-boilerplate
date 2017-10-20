import { Page } from 'next-extensions'

import Layout from '~/components/Layout'
import PostList from '~/containers/PostList'
import withData from '~/hoc/withData'
import MyComponent from '~/components/buttons/MyComponent'

import * as injectTapEventPlugin from 'react-tap-event-plugin'

console.log('hey ', injectTapEventPlugin)

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
//injectTapEventPlugin(); // not working with typescript even though this thread claims it should!
// https://stackoverflow.com/questions/37186500/how-to-setup-material-ui-for-react-with-typescript

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { MuiThemeProvider, lightBaseTheme } from 'material-ui/styles'

const lightMuiTheme = getMuiTheme(lightBaseTheme)

const Module: Page = props => (
  <Layout>
    <MuiThemeProvider muiTheme={lightMuiTheme}>
      <MyComponent />
    </MuiThemeProvider>
    <PostList {...props} />
  </Layout>
)

export default withData(Module)
