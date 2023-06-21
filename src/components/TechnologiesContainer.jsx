import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiBootstrap, DiReact } from 'react-icons/di'
import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id: "html", name: "HTML5", description: "Linguagem de marcação com bom conhecimento, a estrutura do site praticamente sempre reforçada em todos projetos, CSS, Bootstrap e agora com JSX", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", description: "Linguagem de estilização muito praticada em landing pages, com flexbox, grid layout e todas as aplicações básica e intermediárias visitadas, bem como responsividade", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", description: "Linguagem de programação principal que tenho conhecimento, aplicadas em projetos de estudo e em algumas aplicações em processos seletivos, sempre reforçando lógica e livro de Javascript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", description: "Permite a execução de Javascript fora do navegador. Construção de alguns aplicativos de servidos com criações de APIs básicas e também familiarizado com npm", icon: <DiNodejsSmall /> },
  { id: "bootstrap", name: "Bootstrap", description: "Framework de Estilização com fácil aprendizado e utilização, e responsividade garantida. Também utilizados em diversos projetos de landing pages e projetos práticos de processos seletivos", icon: <DiBootstrap /> },
  { id: "react", name: "React", description: "Biblioteca de Javascript utilizada nesse projeto e meu principal material de estudo atualmente. Deixo de sugestão o documentário da Honeypot no youtube, sobre a história de criação dessa biblioteca", icon: <DiReact /> },
]

export default function TechnologiesContainer() {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}