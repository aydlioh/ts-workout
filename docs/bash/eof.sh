#!/bin/bash

node_output=$(node << 'EOF'
const name = process.argv[2];

console.log(`Hello, ${name} how are you doing today?`);
EOF
"$1"
)

bash_variable="$node_output"

# Демонстрация использования
echo "Результат из Node.js: $bash_variable"