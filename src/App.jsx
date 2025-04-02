import Accordion from "./components/Accordion/Accordion";
function App() {
  return <main>
    <section>
      <h2>Why work with us?</h2>
      <Accordion id="experience" className={"accordion"}>
        <Accordion.Item className={"accordion-item"} title={"We got 20 years of experince"}>
          <article>
            <p>You can't go wrong with us</p>
            <p>We are in the business of planing highly individualized vacation trips for more than 20 years.</p>
          </article>
        </Accordion.Item>
        <Accordion.Item id="local-guides" className={"accordion-item"} title={"We are working with local guides"}>
          <article>
            <p>We are not doing this along from our office.</p>
            <p>Instead, we are working local guides to ensure a safe and pleasent vacation</p>
          </article>
        </Accordion.Item>
      </Accordion>
    </section>
  </main>;
}

export default App;
