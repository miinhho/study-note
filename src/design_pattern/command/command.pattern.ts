class Command {
  public executer: () => void;

  constructor(executer: () => void) {
    this.executer = executer;
  }
}

class Commander {
  private commands: Command[] = [];

  addCommand(...command: Command[]) {
    this.commands.push(...command);
  }

  executeCommands() {
    this.commands.forEach(command => command.executer());
  }
}

export {
  Command,
  Commander
};

