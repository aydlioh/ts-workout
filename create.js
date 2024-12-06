import fs from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const createFile = (filePath, content) => {
  fs.writeFileSync(filePath, content, 'utf8');
};

const askQuestion = (query) =>
  new Promise((resolve) => rl.question(query, resolve));

const padNumber = (number) => number.toString().padStart(3, '0');

(async () => {
  try {
    console.log(`\x1b[34m\x1b[1m🛠️  Создание папки с задачей\x1b[0m`);

    const taskNumber = await askQuestion('Введите номер задачи: ');
    const taskName = await askQuestion('Введите название задачи: ');

    if (!taskNumber || !taskName) {
      console.error('Ошибка: необходимо указать номер задачи и её название.');
      process.exit(1);
    }

    const folderName = `${padNumber(taskNumber)}_${taskName}`;
    const folderPath = path.join(__dirname, 'tasks', folderName);

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    createFile(path.join(folderPath, `${padNumber(taskNumber)}.ts`), ``);
    createFile(
      path.join(folderPath, `${padNumber(taskNumber)}.test.ts`),
      `import { describe, it, expect } from "vitest";\n\ndescribe("${taskNumber} - ${taskName}", () => {\n  it("...", () => {});\n});`
    );

    console.log(`\x1b[32mНовая задача создана! 💪😎\x1b[0m\n`);
  } catch (error) {
    console.error('Произошла ошибка:', error);
  } finally {
    rl.close();
  }
})();

