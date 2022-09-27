import * as C from './style'

export const Header = () => {
    return (
        <C.Container>
                <C.LogoName>Dr.Andrade</C.LogoName>
                <C.NavBar>
                    <C.Menu>
                        <C.MenuItem>
                            <C.MenuLink href='#'>Home</C.MenuLink>
                        </C.MenuItem>
                        <C.MenuItem>
                            <C.MenuLink href='#'>Serviços</C.MenuLink>
                        </C.MenuItem>
                        <C.MenuItem>
                            <C.MenuLink href='#'>Localidades</C.MenuLink>
                        </C.MenuItem>

                    </C.Menu>
                    <C.BtnPrimary
                     role="button" 
                     href='#'
                     type={'primary'}
                     >
                    Iniciar conversa
                    </C.BtnPrimary>
                </C.NavBar>
        </C.Container>
    )
} 