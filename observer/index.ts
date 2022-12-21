class Observable {
  observer: any[];
  constructor() {
    this.observer = [];
  }
  subscribe(item: string) {
    this.observer.push(item);
  }
  unsubscribe(item) {
    if (!this.observer) return "empty";
    else {
      this.observer.filter((subscribe) => subscribe !== item);
    }
  }
  notify(data: string) {
    this.observer.forEach((item) => item(data));
  }
}

const d1 = <HTMLElement>document.querySelector(".d1");
const input = <HTMLElement>document.querySelector(".input");
const update1 = (text) => (d1.textContent = text);

let observarble = new Observable();
observarble.subscribe(update1 as unknown as string);
input.addEventListener("keyup", (event: any) => {
  observarble.notify(event.target.value as string);
});
