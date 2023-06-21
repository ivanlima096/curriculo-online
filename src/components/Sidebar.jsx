import "../styles/components/sidebar.sass"

import Avatar from "../img/phoyo.png"
import SocialNetworks from "./SocialNetworks"
import InformationContainer from "./InformationContainer"

export default function Sidebar() {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Ivan Lima" />
      <h1>Ivan Lima</h1>
      <p className="title">Desenvolvedor Front End</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="https://drive.google.com/file/d/1wEXAyjiYbv0yeUiVuH0xJaLoO9mue3GC/view?usp=sharing" className="btn" target="_blank">Download CV em PDF</a>
    </aside>
  )
}