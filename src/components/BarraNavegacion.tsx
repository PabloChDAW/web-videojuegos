import { DarkThemeToggle, Navbar, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

const BarraNavegacion = () => {
  return (
    <Navbar fluid rounded>
      <NavbarToggle />
      <NavbarCollapse>
        <img width="48" height="48" src="https://img.icons8.com/color/48/sonic-the-hedgehog-1.png" alt="sonic-the-hedgehog-1" />
        <NavbarLink href="#" active className="text-4xl">
          VicioJuegos
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
        <DarkThemeToggle />
      </NavbarCollapse>
    </Navbar>
  )
}

export default BarraNavegacion
