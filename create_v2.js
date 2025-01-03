import { Command } from 'commander';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import inquirer from 'inquirer';

const padNumber = (number) => number.toString().padStart(3, '0');

const questions = [
  {
    type: 'input',
    name: 'number',
    message: 'Введите номер задачи:',
    validate: (input) =>
      input && !isNaN(Number(input)) ? true : 'Введите целое число.',
  },
  {
    type: 'list',
    name: 'level',
    message: 'Выберите сложность задачи:',
    choices: ['easy', 'medium', 'hard'],
  },
  {
    type: 'input',
    name: 'title',
    message: 'Введите краткое название задачи (e.g., binary_search_task):',
    validate: (input) => (input ? true : 'Название не может быть пустым.'),
  },
];

const testMock = (number, title) => `
import { describe, it, expect } from "vitest";
describe("${padNumber(number)} - ${title}", () => {
  it("UC1", () => {
    
  });
});
`;

const taskMock = () => ``;

const createTask = async () => {
  const answers = await inquirer.prompt(questions);
  const { number, level, title } = answers;

  const numberWithDifficulty = `${level[0].toUpperCase()}${padNumber(number)}`;
  const folderName = `${numberWithDifficulty}_${title}`;
  const taskPath = join('tasks', folderName);
  const mainFileName = `${numberWithDifficulty}.ts`;
  const testFileName = `${numberWithDifficulty}.test.ts`;

  try {
    mkdirSync(taskPath, { recursive: true });
  } catch (error) {
    console.error(`Error creating folder: ${error}`);
    process.exit(1);
  }

  const mainFilePath = join(taskPath, mainFileName);
  writeFileSync(mainFilePath, taskMock());

  const testFilePath = join(taskPath, testFileName);
  writeFileSync(testFilePath, testMock(number, title));

  console.log(`Папка задания с тестами создана: ${taskPath}`);
};

const program = new Command();

program
  .description(
    'CLI для создания пространства для решения новых задач на LeetCode'
  )
  .action(createTask);

program.parse(process.argv);
