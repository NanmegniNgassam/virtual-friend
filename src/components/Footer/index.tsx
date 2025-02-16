import { CatchWordTypographer, FooterContainer } from "./Footer.styles"

const Footer = () => {
    return (
        <FooterContainer>
            <p>version 0.1.0</p>
            <CatchWordTypographer>One of the smartest guy you need to be friend with!</CatchWordTypographer>
            <p>
                <span>&copy;Copyrights 2025. All rights reserved to </span>  
                <a target="_blank" href="https://gilles-ngassam.pisoftlite.com/">Gilles NGASSAM</a>.
            </p>
        </FooterContainer>
    );
}
 
export default Footer
