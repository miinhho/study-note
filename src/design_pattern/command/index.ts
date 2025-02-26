import { Command, Commander } from "./command.pattern";

function helloCommand(name: string) {
  return new Command(() => {
    console.log(`Hello ${name}!`);
  });
}

function goodbyeCommand(name: string) {
  return new Command(() => {
    console.log(`Goodbye ${name}!`);
  });
}

const commander = new Commander();
commander.addCommand(helloCommand('Alice'), goodbyeCommand('Alice'));
commander.executeCommands();
