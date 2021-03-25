import Layout from './Layout'
import Link from 'next/link'
import {skills, estudios, projects} from './profile';

const Index = () => (
    <Layout>
        {/** Header card */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark bg-secondary text-light animate__animated animate__fadeIn">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="imagen1.png" alt="" className="img-fluid"/>
                        </div>
                        <div className="col-md-8">
                            <h1>Renzo Soler</h1>
                            <h3>FullStack Developer</h3>
                            <p>Tengo 25 años, vivo en Pilar Cordoba. Con disponibilidad de viajar. Busco aplicar mis conocimientos teóricos y prácticos aprendidos durante mi formación academica con el fin de beneficiar a la organización y desarrollarme de forma profesional y personal.</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/** Second section */}

        <div className="row">
            <div className="col-md-4 py-2">
                <div className="card bg-light animate__animated animate__fadeInLeft">
                    <div className="card-body">
                        <h1>Skills</h1>

                        {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress ">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}

                    </div>
                </div>
            </div>
            <div className="col-md-8 py-2">
            {/* Estudios */}
            <div className="card bg-light animate__animated animate__fadeInRight">
                 <div className="card-body">
                        <h1>Estudios</h1>

                            <ul>
                            {estudios.map(({ title,description,  from, to }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {from} {to ? `- ${to}` : "- current"}
                  </h5>
                  <p>
                  {description}
                  </p>
                </li>
              ))}
                            </ul>

                            <Link href="/hireme">
              <a className="btn btn-light">Conoce mas</a>
            </Link>

                    </div>
                </div>
            </div>
        </div>
        
        {/** Portfolio */}
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">Proyectos realizados</h1>
                        </div>

                        {
                            projects.map(({name, description, image, url}, i) => (
                                <div className="col-md-4 py-2" key={i}>
                            <div className="card h-100">
                                <div className="overflow">
                                    <img src={`/${image}`} alt="" className="card-img-top"/>
                                </div>
                                <div className="card-body">
                                    <h3>{name}</h3>
                                    <p>{description}</p>
                                    <a href={url}>Conoce mas</a>
                                </div>
                            </div>
                        </div>
                            ))
                        }

                    </div>

                <div className="text-center mt-4">
                  <Link href="https://github.com/Slr95?tab=repositories">
                    <a className="btn btn-outline-light">Mas proyectos</a>
                  </Link>
                </div>
              </div>

        </div>

        </div>

    </Layout>
)

export default Index;