import {ArrowDown} from "lucide-react";
import {useRef} from "react";

export default function Experiences() {

  const MinhaStackRef = useRef<HTMLDivElement>(null)

    const scrollToStack = () => {
    MinhaStackRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const experiences = [
    {
      title: "Estágiaria de Desenvolvimento, \nBanco Nacional de Desenvolvimento Econômico e Social (BNDES)",
      period: "Junho de 2023 - Atualmente | Rio de Janeiro, Brasil",
      description: "Desenvolvimento, documentação e implementação de sistemas internos para a área de Gestão de Risco de Crédito e Recursos Humanos. Utilizando Java, Jakarta EE, Spring e Hibernate para implementar regras de negócio e gerenciar a persistência dos dados, utilizando JPA para mapeamento objeto-relacional. No frontend, desenvolvimento de interfaces com AngularJS.\n" +
          "\n" +
          "Desenvolvimento de webservices RESTful para integração entre sistemas internos e externos, garantindo segurança e eficiência na comunicação. Desenvolvimento, implementação e monitoramento de testes unitários e de integração com JUnit e RestAssured para validar endpoints e garantir a qualidade do código.\n" +
          "\n" +
          "Criação de consultas otimizadas e modelagem de estruturas de banco com Oracle e SQL Server.\n" +
          "\n" +
          "Desenvolvimento, documentação e implementação de soluções em VBA, conectando planilhas do Excel a webservices em Java, permitindo a automação de processos internos e integração com os sistemas do banco."
    },
    {
      title: "Pesquisadora Júnior em Ciências da Saúde e Engenharia de Software, \nUniversidade Federal do Estado do Rio de Janeiro (UNIRIO)",
      period: "Novembro 2024 - Atualmente | Rio de Janeiro, Brasil",
      description:
        "Projeto de pesquisa: LABIMH MOBILE - Desenvolvimento de baterias de avaliações de enfermagem e biociências em aplicativos móveis. O Laboratório de Biociências da Motricidade Humana (LABIMH) é um centro dedicado à pesquisa na área da motricidade humana, sendo afiliado a Universidade Federal do Estado do Rio de Janeiro e Universidade Tiradentes, em Aracaju, Sergipe.\n" +
          "\n" +
          "Minha participação no projeto tem como finalidade desenvolver a aplicação web \"Orientação da Vocação Esportiva – VocSports\", uma bateria que avalia quais práticas esportivas serão indicadas para o paciente, e transformá-la em uma aplicação mobile. Além de dar suporte para outros bolsistas de Iniciação Científica Jr (Ensino Médio).",
    },
    {
      title: "Pesquisadora Júnior em Machine Learning e Visão computacional, \nInstituto Federal de Brasília (IFB)",
      period: "Março de 2020 - Junho de 2021 | Brasilia, Brasil",
      description:
        "Projeto de pesquisa com o objetivo de desenvolver robôs autônomos para reconhecimento e descarte correto de materiais recicláveis. Tecnologias estudadas: OpenCV, YOLO v3, Scikit-learn, Arduino, Tensorflow",
    }
  ]

return (
  <section id="experiencias" className="min-h-screen py-16 px-8 bg-secondary">
    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
      <div className="space-y-4">
        {experiences.map((exp, index) => {
          const [cargo, empresa] = exp.title.split(", ");

          return (
            <div key={index} className="max-w-xl">
              <h3 className="font-medium text-[20px]">
                {cargo},{" "}
                <span className="font-light italic">{empresa}</span>
              </h3>
              <p className="text-sm text-gray-600 mb-2">{exp.period}</p>
              <p className="body-text whitespace-pre-line text-justify">{exp.description}</p>
            </div>
          );
        })}
      </div>

      <div className="md:pl-80">
        <div className="border-l-2 border-primary pl-8 sticky top-24">
          <h2 className="heading text-5xl md:text-6xl">Experiências</h2>
        </div>
      </div>
    </div>
  </section>
)
}

