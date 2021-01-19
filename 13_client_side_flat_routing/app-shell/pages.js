class Page404 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <h1>😔 Page not found</h1>
      <p>
        <popup-info img="https://mi-fr.org/img/eicher.svg" data-text="This page does not exists. Please check your URL or tell us about the problem."></popup-info>
        <a href="/">Go home</a>
      </p>
    `
  }

  disconnectedCallback() {
    console.info('[Page404] Bye-bye');
  }
}

window.customElements.define('page-404', Page404);