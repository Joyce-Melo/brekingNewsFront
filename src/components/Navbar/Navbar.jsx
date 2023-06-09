import logo from '../../images/LogoBN.svg'
import { Button, ImageLogo, InputSpace, Nav } from './NavbarStyled'

export function Navbar(){
    return(
        <>
            <Nav>
                <InputSpace className="input-search-space">
                <i className="bi bi-search"></i>
                    <input type="text" placeholder='Pesquise por um titulo' />
                </InputSpace>

                    <ImageLogo src={logo} alt="Logo do Breaking News"/>

                <Button>Entrar</Button>
            </Nav>
        </>
    )
}

