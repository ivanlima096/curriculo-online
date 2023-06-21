import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
  { name: "linkedin", icon: < FaLinkedinIn />, url: "https://www.linkedin.com/in/ivan-lima-dev/" },
  { name: "github", icon: < FaGithub />, url: "https://github.com/ivanlima096" },
  { name: "instagram", icon: < FaInstagram />, url: "https://www.instagram.com/ivanlima096/" }
]

export default function SocialNetworks() {
  return <section id="social-networks">
    {socialNetworks.map((network) => (
      <a href={network.url} className="social-btn" id={network.name} key={network.name} target='_blank'>{network.icon}</a>
    ))}
  </section>
}