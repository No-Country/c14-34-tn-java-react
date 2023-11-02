import React from "react";

function Faqs() {
  return (
    <div className="faqs-container">
      <h1>Preguntas Frecuentes</h1>
      <aside className="faqs-info">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt officia
        odio voluptate commodi deserunt, a, officiis accusantium eligendi
        eveniet repellat sit dolorum soluta esse quasi animi quod odit eaque in.
      </aside>

      <div className="preguntas-gral">
        <section className="pregunta-container faqs-img-1">
          <h3>¿Preguntas Frecuentes?</h3>
          <p className="respuesta">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            excepturi et eum sapiente voluptates at? Accusantium, natus sed
            enim, voluptates illo sit minima maxime numquam repudiandae quod
            aliquid sapiente possimus!
          </p>
        </section>

        <section className="pregunta-container faqs-img-1">
          <h3>¿Preguntas Frecuentes?</h3>
          <p className="respuesta">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            excepturi et eum sapiente voluptates at? Accusantium, natus sed
            enim, voluptates illo sit minima maxime numquam repudiandae quod
            aliquid sapiente possimus!
          </p>
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-toggle="popover"
            data-bs-placement="right"
            data-bs-custom-className="custom-popover"
            data-bs-title="Custom popover"
            data-bs-content="This popover is themed via CSS variables."
          >
            Custom popover
          </button>
        </section>

        <section className="pregunta-container">
          <h3>¿Preguntas Frecuentes?</h3>
          <p className="respuesta">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            excepturi et eum sapiente voluptates at? Accusantium, natus sed
            enim, voluptates illo sit minima maxime numquam repudiandae quod
            aliquid sapiente possimus!
          </p>
        </section>

        <section className="pregunta-container">
          <h3>¿Preguntas Frecuentes?</h3>
          <p className="respuesta">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            excepturi et eum sapiente voluptates at? Accusantium, natus sed
            enim, voluptates illo sit minima maxime numquam repudiandae quod
            aliquid sapiente possimus!
          </p>
        </section>
      </div>

      <aside className="faqs-info">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt officia
        odio voluptate commodi deserunt, a, officiis accusantium eligendi
        eveniet repellat sit dolorum soluta esse quasi animi quod odit eaque in.
      </aside>
    </div>
  );
}

export default Faqs;
