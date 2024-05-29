import { Container } from '@mui/material'

import AppBarDrawer from '../components/containers/AppBarDrawer'

const BaseLayout = ({ maxWidth, children }) => {
    return (
        <Container maxWidth = { maxWidth } sx = {{ paddingTop: '120px'}}>
            <AppBarDrawer />
            { children }
        </Container>
    )
}

export default BaseLayout