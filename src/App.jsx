import Accordion from "./components/Accordion/Accordion";
function App() {
  return <main>
    <section>
      <h2>Why work with us?</h2>
      <Accordion className={"accordion"}>
        <Accordion.Item className={"accordion-item"} title={"We got 20 years of experince"}>
          <Accordion.Title className={"accordion-item-title"} id="experience">You can't go wrong with us</Accordion.Title>
          <Accordion.Content id="experience" className={"accordion-item-content"}>
            <article>
              <p> We are in the business of planing highly individualized vacation trips for more than 20 years.</p>
            </article>
          </Accordion.Content>

        </Accordion.Item>
        <Accordion.Item className={"accordion-item"} title={"We are working with local guides"}>
          <Accordion.Title id="local-guides" className={"accordion-item-title"}>We are not doing this along from our office.</Accordion.Title>

          <Accordion.Content id="local-guides" className={"accordion-item-content"}>
            <article>
              <p>Instead, we are working local guides to ensure a safe and pleasent vacation</p>
            </article>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </section>
  </main>;
}

export default App;
