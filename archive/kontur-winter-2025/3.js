const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const findIntersectionProperties = (items, queries) => {
  const answer = [];

  for (let query of queries) {
    let commonFeatures = new Set(items[query[0]]);

    for (let i = 1; i < query.length; i++) {
      const currentItemFeatures = items[query[i]];
      commonFeatures = new Set(
        Array.from(commonFeatures).filter((feature) =>
          currentItemFeatures.has(feature)
        )
      );
    }

    if (commonFeatures.size > 0) {
      answer.push(Array.from(commonFeatures).sort().join(' '));
    } else {
      answer.push('???');
    }
  }

  return answer;
};

rl.question('', (n) => {
  const N = Number(n);
  const items = {};
  let count = 0;

  rl.on('line', (input) => {
    if (count < N) {
      count++;

      const parts = input.split(': ');
      const name = parts[0];
      // Храню свойства в виде множества, чтобы явно избавиться от дубликатов и ускорить поиск
      const properties = new Set(parts[1].split(' '));

      items[name] = properties;

      if (count === N) {
        rl.question('', (q) => {
          const Q = Number(q);
          const queries = [];
          let queriesCount = 0;

          rl.on('line', (query) => {
            if (queriesCount < Q) {
              queries.push(query.split(' '));
              queriesCount++;

              if (queriesCount === Q) {
                const result = findIntersectionProperties(items, queries);
                console.log(result.join('\n'));
                rl.close();
              }
            }
          });
        });
      }
    }
  });
});
