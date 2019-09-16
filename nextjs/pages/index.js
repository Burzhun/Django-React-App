import React from 'react'
import Layout from '../components/Layout'
import Section from "../components/index/Section";
import Projects from "../components/projects/Projects";
import NewIssuesAll from "../components/issues/NewIssuesAll";
import NewIssues from "../components/issues/NewIssues";

const Home = props => (
    <Layout>
        <div className="grey__wrapp hidden-mob">
            <div className="container">
                <div className="anchors anchors-main">
                    <a href="#about">О нас</a>
                    <a href="#projects">Проекты</a>
                    <a href="#new">Новые выпуски</a>
                    <a href="#specials">Спецпроекты</a>
                </div>
            </div>
        </div>
        <div className="wrapper">
            <Section id="about" title="О нас">

                <div className="yasno__title">
                    <div className="yasno__title_prefix">Издательский дом</div>
                    <h1>«Ясно Publishing»</h1>
                </div>

                <p>
                    Создан на базе известных медийных проектов для обеспеченной образованной аудитории. Среди наших
                    изданий - Men's Health, National Geographic, Women's Health, Агроинвестор. Мы выпускаем как
                    печатные издания, так и цифровые версии - для веба, для планшетов и телефонов. В Издательский
                    дом также входит подразделение Go! Publishing - один из лидеров корпоративной прессы в
                    России.
                </p>

                <div className="info__counts-wrapper">
                    <div className="info__count">
                        <div className="info__count_title">5 000 0000</div>
                        <p>уникальных пользователей в месяц</p>
                    </div>
                    <div className="info__count">
                        <div className="info__count_title">2 000 0000</div>
                        <p>подписчиков в соцсетях</p>
                    </div>
                    <div className="info__count">
                        <div className="info__count_title">20</div>
                        <p>оффлайн-мероприятий в месяц</p>
                    </div>
                </div>

            </Section>

            <Section className="section-project" id="projects" title="Проекты">
                <Projects/>
            </Section>
        </div>

        <NewIssues/>

        <div className="wrapper" id="specials">
            <div className="sub__anchor sub__anchor-margin">спецпроекты</div>
            <div className="grid__special__project">
                <div className="special__project">
                    <div className="special__project_details">
                        <div className="special__project_description">Ежегодный конкурс. Его читают в 35 странах, а
                            российское издание уже больше 20 лет обращается к активным и успешным мужчинам, которым
                            важно физическое, профессиональное, ментальное и эмоциональное здоровье. Men's Health – это
                            о том, что значит быть мужчиной.
                        </div>
                        <a className="btn special__project_more" href="">Детали проекта</a></div>
                    <div className="special__project_img"><img src="/static/img/special__project/1.jpg"/>
                        <div className="special__project_bottom">
                            <div className="special__project_tags">nat geo | suzuki</div>
                            <div className="special__project_title">Что делал Suzuki Vitara, когда ты родился</div>
                        </div>
                    </div>
                </div>
                <div className="special__project">
                    <div className="special__project_details">
                        <div className="special__project_description">Ежегодный конкурс. Его читают в 35 странах, а
                            российское издание уже больше 20 лет обращается к активным и успешным мужчинам, которым
                            важно физическое, профессиональное, ментальное и эмоциональное здоровье. Men's Health – это
                            о том, что значит быть мужчиной.
                        </div>
                        <a className="btn special__project_more" href="">Детали проекта</a></div>
                    <div className="special__project_img"><img src="/static/img/special__project/1.jpg"/>
                        <div className="special__project_bottom">
                            <div className="special__project_tags">nat geo | suzuki</div>
                            <div className="special__project_title">Что делал Suzuki Vitara, когда ты родился</div>
                        </div>
                    </div>
                </div>
                <div className="special__project">
                    <div className="special__project_details">
                        <div className="special__project_description">Ежегодный конкурс. Его читают в 35 странах, а
                            российское издание уже больше 20 лет обращается к активным и успешным мужчинам, которым
                            важно физическое, профессиональное, ментальное и эмоциональное здоровье. Men's Health – это
                            о том, что значит быть мужчиной.
                        </div>
                        <a className="btn special__project_more" href="">Детали проекта</a></div>
                    <div className="special__project_img"><img src="/static/img/special__project/1.jpg"/>
                        <div className="special__project_bottom">
                            <div className="special__project_tags">nat geo | suzuki</div>
                            <div className="special__project_title">Что делал Suzuki Vitara, когда ты родился</div>
                        </div>
                    </div>
                </div>
                <div className="special__project">
                    <div className="special__project_details">
                        <div className="special__project_description">Ежегодный конкурс. Его читают в 35 странах, а
                            российское издание уже больше 20 лет обращается к активным и успешным мужчинам, которым
                            важно физическое, профессиональное, ментальное и эмоциональное здоровье. Men's Health – это
                            о том, что значит быть мужчиной.
                        </div>
                        <a className="btn special__project_more" href="">Детали проекта</a></div>
                    <div className="special__project_img"><img src="/static/img/special__project/1.jpg"/>
                        <div className="special__project_bottom">
                            <div className="special__project_tags">nat geo | suzuki</div>
                            <div className="special__project_title">Что делал Suzuki Vitara, когда ты родился</div>
                        </div>
                    </div>
                </div>
                <div className="special__project">
                    <div className="special__project_details">
                        <div className="special__project_description">Ежегодный конкурс. Его читают в 35 странах, а
                            российское издание уже больше 20 лет обращается к активным и успешным мужчинам, которым
                            важно физическое, профессиональное, ментальное и эмоциональное здоровье. Men's Health – это
                            о том, что значит быть мужчиной.
                        </div>
                        <a className="btn special__project_more" href="">Детали проекта</a></div>
                    <div className="special__project_img"><img src="/static/img/special__project/1.jpg"/>
                        <div className="special__project_bottom">
                            <div className="special__project_tags">nat geo | suzuki</div>
                            <div className="special__project_title">Что делал Suzuki Vitara, когда ты родился</div>
                        </div>
                    </div>
                </div>
                <div className="special__project">
                    <div className="special__project_details">
                        <div className="special__project_description">Ежегодный конкурс. Его читают в 35 странах, а
                            российское издание уже больше 20 лет обращается к активным и успешным мужчинам, которым
                            важно физическое, профессиональное, ментальное и эмоциональное здоровье. Men's Health – это
                            о том, что значит быть мужчиной.
                        </div>
                        <a className="btn special__project_more" href="">Детали проекта</a></div>
                    <div className="special__project_img"><img src="/static/img/special__project/1.jpg"/>
                        <div className="special__project_bottom">
                            <div className="special__project_tags">nat geo | suzuki</div>
                            <div className="special__project_title">Что делал Suzuki Vitara, когда ты родился</div>
                        </div>
                    </div>
                </div>
                <div className="special__project">
                    <div className="special__project_details">
                        <div className="special__project_description">Ежегодный конкурс. Его читают в 35 странах, а
                            российское издание уже больше 20 лет обращается к активным и успешным мужчинам, которым
                            важно физическое, профессиональное, ментальное и эмоциональное здоровье. Men's Health – это
                            о том, что значит быть мужчиной.
                        </div>
                        <a className="btn special__project_more" href="">Детали проекта</a></div>
                    <div className="special__project_img"><img src="/static/img/special__project/1.jpg"/>
                        <div className="special__project_bottom">
                            <div className="special__project_tags">nat geo | suzuki</div>
                            <div className="special__project_title">Что делал Suzuki Vitara, когда ты родился</div>
                        </div>
                    </div>
                </div>
                <div className="special__project">
                    <div className="special__project_details">
                        <div className="special__project_description">Ежегодный конкурс. Его читают в 35 странах, а
                            российское издание уже больше 20 лет обращается к активным и успешным мужчинам, которым
                            важно физическое, профессиональное, ментальное и эмоциональное здоровье. Men's Health – это
                            о том, что значит быть мужчиной.
                        </div>
                        <a className="btn special__project_more" href="">Детали проекта</a></div>
                    <div className="special__project_img"><img src="/static/img/special__project/1.jpg"/>
                        <div className="special__project_bottom">
                            <div className="special__project_tags">nat geo | suzuki</div>
                            <div className="special__project_title">Что делал Suzuki Vitara, когда ты родился</div>
                        </div>
                    </div>
                </div>
                <div className="special__project">
                    <div className="special__project_details">
                        <div className="special__project_description">Ежегодный конкурс. Его читают в 35 странах, а
                            российское издание уже больше 20 лет обращается к активным и успешным мужчинам, которым
                            важно физическое, профессиональное, ментальное и эмоциональное здоровье. Men's Health – это
                            о том, что значит быть мужчиной.
                        </div>
                        <a className="btn special__project_more" href="">Детали проекта</a></div>
                    <div className="special__project_img"><img src="/static/img/special__project/1.jpg"/>
                        <div className="special__project_bottom">
                            <div className="special__project_tags">nat geo | suzuki</div>
                            <div className="special__project_title">Что делал Suzuki Vitara, когда ты родился</div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="btn mt30" href="">Все спецпроекты</a>
        </div>
    </Layout>
);

export default Home;
