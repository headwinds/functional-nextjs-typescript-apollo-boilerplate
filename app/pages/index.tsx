import { Page } from 'next-extensions'

import Layout from '~/components/Layout'
import PostList from '~/containers/PostList'
import withData from '~/hoc/withData'
import Home from '~/containers/Home'
import Barn from '~/containers/Barn'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
const theme = createMuiTheme()

const Module: Page = props => (
  <Layout>
    <MuiThemeProvider theme={theme}>
      <div>
        <Barn {...props} />
        <Home {...props} />
      </div>
    </MuiThemeProvider>
    {/* <PostList {...props} /> */}
  </Layout>
)

export default withData(Module)
