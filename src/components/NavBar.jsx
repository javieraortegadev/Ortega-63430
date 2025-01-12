import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <nav>
    <div className="nav-bar">
            <a className="logo" href="">Tienda</a>
            <ul>
                <a className="cat-nav" href=""><li>Recién llegados</li></a>
                <a className="cat-nav" href=""><li>Descuentos</li></a>
               <a className="cat-nav" href=""> <li>Más vendidos</li></a>
            </ul>
    </div>
    <CartWidget/>
        </nav>
        
    )
}
export default NavBar