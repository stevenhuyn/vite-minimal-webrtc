import init, { connect } from "../matchbox_client/pkg/matchbox_client.js";

export function setupConnector(element: HTMLButtonElement) {
  element.addEventListener('click', () => { 
    init().then(() => {
      connect();
    });
  })
}
