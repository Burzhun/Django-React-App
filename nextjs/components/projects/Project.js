import React from 'react';


const cssClasses = {
    'nat-geo': 'journals journals-left',
    'nat-geo-traveler': 'journals journals-right journals-middle',
    'mens-health': 'journals journals-right journals-middle',
};

export default function Project(props) {
    return (
        <div className={cssClasses[props.slug]}>
            <div className="journal__info">
                <h3 className="journal__info_title">
                    {props.name}
                </h3>
                <div className="journal__info_description" dangerouslySetInnerHTML={{__html: props.description}}/>

                <div className="journal__btns">
                    <a className="btn" href={`${props.slug}/`}>
                        О проекте
                    </a>
                    <a className="btn btn-red" href={`${props.slug}/issues/`}>
                        Смотреть выпуски
                    </a>
                </div>
            </div>
            <div className="journal__obloj">

                {props.cover && <div className="journal__obloj_front">
                    <img src={props.cover}/>
                </div>}

                {props.screenshot && <div className="journal__obloj_absolute">
                    <div className="monik__obloj_project">
                        <img src={props.screenshot}/>
                    </div>

                    <img src="/static/img/monik_main.png"/>
                </div>}
            </div>
        </div>
    );
}