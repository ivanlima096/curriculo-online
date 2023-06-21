import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

import '../styles/components/informationcontainer.sass'

export default function InformationContainer() {
  return <section id="information">
    <div className="info-card">
      <AiFillPhone id="phone-icon" />
      <div>
        <h3>Telefone</h3>
        <p>(13)98801-3623</p>
      </div>
    </div>
    <div className="info-card">
      <AiOutlineMail id="email-icon" />
      <div>
        <h3>E-mail</h3>
        <p>ivanlima096@gmail.com</p>
      </div>
    </div>
    <div className="info-card">
      <AiFillEnvironment id="pin-icon" />
      <div>
        <h3>Localização</h3>
        <p>Santos/SP</p>
      </div>
    </div>
  </section>
}