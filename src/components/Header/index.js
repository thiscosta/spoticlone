import React from 'react'

import { Container, Search, User } from './styles'

const Header = () => {
    return (
        <Container>
            <Search>
                <input placeholder="Search" />
            </Search>
            <User>
                <img src="https://avatars2.githubusercontent.com/u/37018497?v=4" alt="Avatar" />
                Thiago Costa
            </User>
        </Container>
    )
}

export default Header;