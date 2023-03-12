import styled from 'styled-components'

export const Nav = styled.nav `
display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    padding: 1rem;
    /* position: fixed;
    top: 0; */
    background-color: #fff;
    z-index: 1; /*profundiade, para ficar acima de tudo*/
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px; /*Usei um generator para criar esse boxshadow -> https://getcssscan.com/css-box-shadow-examples */

`

export const ImageLogo = styled.img `
    width: 8rem;
    height: 3.8rem;
    object-fit: cover;
    cursor: pointer;
`

export const InputSpace = styled.div`
    position: relative;
    width: 200px;
    display: flex;
    align-items: center;

    i{ //Caso fossemos reutilizar o estilo do i e do input deveriamos criar um compoenente próprio para eles, porém como iremos utilizar apenas aqui nós não precisamos, faremos ele ter estilo apartir do InputSpace, como herança
    position: absolute;
    top: 1;
    right: 0.2rem;
    z-index: 10;
    border: none;
    background-color: #f5f5f5;
    color: #757575;
    border-radius: 0.3rem;
    padding: 0.5rem;
    }

    input{ /*Deixando o input igual ao icone de pesquisa isso dará a impressão que o icone está dentro da barra de input*/
    outline: none; //Input é filho do InputSpace
    font-size: 1rem;
    padding: 0.6rem;
    background-color: #f5f5f5;
    border: none;
    width: 100%;
    border-radius: 0.3rem;

    :focus{ /*Borda que aparece quando clico para escrever algo*/
    border: 1px solid #0bade3; //E o focus é neto do InputSpace e filho do input
        }
    }



`

//styled.OQueEleÉ, no nosso caso a tag button, abro e fecho crase e dentro da crase coloco o css
export const Button = styled.button` //Os componentes devem estar sempre com letra maiúscula
background-color: #0bade3;
border: none;
outline: none;
font-size: 1rem;
padding: 0.4rem 1rem;
color: #fff;
transition: all 0.4s ease-in-out;
cursor: pointer;
border-radius: 0.3rem;
font-family: Roboto, arial, serif;
/* width: 40%; */
font-weight: 500;
letter-spacing: 0.1rem;
text-transform: uppercase;

:hover{
    background-color: #0a86af;
}
` //Agora ao invés de usarmos a tag button propriamente, usaremos esse componenete Button onde temos o nosso button