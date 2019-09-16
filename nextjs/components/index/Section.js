import React from 'react';


export default function Section(props) {

    return (
        <section id={props.id} className={props.className}>
            <div className="sub__anchor">
                {props.title}
            </div>
            <div className="container">

                {props.children}

            </div>
        </section>
    );
}