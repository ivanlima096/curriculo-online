import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiBootstrap, DiReact } from 'react-icons/di'
import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap /> },
  { id: "react", name: "React", icon: <DiReact /> },
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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus culpa cumque itaque voluptatibus molestias veritatis, nobis optio temporibus odit repellat, voluptates ex rem sit ea omnis numquam. Natus, sapiente. Sequi?</p>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}