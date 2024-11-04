import Link from "next/link";

export default function Header() {
  return (
    <header>
        <nav id="navbar">
            <h1 id="nav_logo"> <a href="">ELTO BORGES</a> </h1>

            <ul id="nav_list">
                <li class="nav-item active">
                    <a href="#inicio">INICIO</a>
                </li>
                <li class="nav-item ">
                    <a href="#sobre">SOBRE</a>
                </li>
                <li class="nav-item active">
                    <a href="#portfolio">PORTFÓLIO</a>
                </li>
                <li class="nav-item">
                    <a href="#formulario">CONTATO</a>
                </li>
            </ul>

            <button id="mobile_btn" aria-label="Icone de Três barrinhas - menu hamburguer ">
                <i class="fa-solid fa-bars"></i>
            </button>
        </nav>

        <div id="mobile_menu">
            <ul id="mobile_nav_list">
                <li class="nav-item">
                    <a href="#inicio">INICIO</a>
                </li>
                <li class="nav-item">
                    <a href="#sobre">SOBRE</a>
                </li>
                <li class="nav-item active">
                    <a href="#portfolio">PORTFÓLIO</a>
                </li>
                <li class="nav-item">
                    <a href="#formulario">CONTATO</a>
                </li>
            </ul>
        </div>
    </header>
  );
}
