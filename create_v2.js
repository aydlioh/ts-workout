import { Command } from 'commander';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import inquirer from 'inquirer';

const padNumber = (number) => number.toString().padStart(3, '0');

const folderPaths = {
  Leetcode: 'leetcode_tasks',
  BigFrontendDev: 'bfe_tasks',
};

const questions = [
  {
    type: 'list',
    name: 'folder',
    message: 'Выберите платформу:',
    choices: Object.keys(folderPaths),
    default: 'Leetcode',
  },
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
describe("${padNumber(Number(number))} - ${title}", () => {
  it("UC1", () => {
    
  });
});
`;

const taskMock = () => ``;

const createTask = async () => {
  const answers = await inquirer.prompt(questions);
  const { number, level, title, folder } = answers;

  const folderName = `${title}`; // Убираем префикс уровня
  const taskPath = join(folderPaths[folder], level, folderName); // Папки уровней: easy, medium, hard
  const mainFileName = `${padNumber(Number(number))}.ts`;
  const testFileName = `${padNumber(Number(number))}.test.ts`;

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

const cli = new Command();

cli
  .description(
    'CLI для создания пространства решения задач на LeetCode и BigFrontendDev'
  )
  .action(createTask);

cli.parse(process.argv);
