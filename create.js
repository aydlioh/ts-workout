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

(async () => {
  try {
    console.log(`\x1b[34m\x1b[1m🛠️  Создание папки с задачей\x1b[0m`);

    const taskNumber = await askQuestion('Введите номер задачи: ');
    const taskName = await askQuestion('Введите название задачи: ');

    if (!taskNumber || !taskName) {
      console.error('Ошибка: необходимо указать номер задачи и её название.');
      process.exit(1);
    }

    const folderName = `${taskNumber}_${taskName}`;
    const folderPath = path.join(__dirname, 'tasks', folderName);

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    createFile(path.join(folderPath, `${taskNumber}.ts`), ``);
    createFile(
      path.join(folderPath, `${taskNumber}.test.ts`),
      `import { describe, it, expect } from "vitest";\n\ndescribe("${taskNumber} - ${taskName}", () => {\n  it("...", () => {});\n});`
    );

    console.log(`\x1b[32m✅ Новая задача создана!\x1b[0m`);
  } catch (error) {
    console.error('Произошла ошибка:', error);
  } finally {
    rl.close();
  }
})();
