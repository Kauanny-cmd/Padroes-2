
interface Command {
  execute(): void;
}


//Classe invocadora
class Switch {
  private history = <Command[]>[];
  constructor(cmd: Command) {
    this.history.push(cmd);
    cmd.execute();
  }
}

//Classe recebedora
class Light {
  public turnOn(): void {
    console.log("A luz está ligada");
  }
  public turnOff(): void {
    console.log("A luz está desligada");
  }
}

//O Command para ligar a luz
class FlipUpCommand implements Command {
  private theLight: Light;
  constructor(light: Light) {
    this.theLight = light;
  }
  execute(): void {
   this.theLight.turnOn()
  }
}

//O Command para desligar a luz 
class FlipDownCommand implements Command {
    private theLight: Light;
    constructor(light: Light) {
        this.theLight = light;
    }
    execute(): void {
       this.theLight.turnOn;
    }
}

const lamp = new Light();
const switchUp = new FlipUpCommand(lamp);
const switchDown = new FlipDownCommand(lamp);
