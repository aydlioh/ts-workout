#!/bin/bash
# Демонстрация Brace Expansion в Bash

echo "=== Базовая демонстрация ==="
echo {A,B}          # Расширяется в: A B
echo {A,B}.js        # Расширяется в: A.js B.js
echo {1..5}          # Расширяется в: 1 2 3 4 5
for item in {1..5}; do
  echo $item
done

echo -e "\n=== Расширенные примеры ==="
echo "1. Последовательности букв:"
echo {a..e}          # a b c d e
echo {Z..W}          # Z Y X W

echo -e "\n2. Комбинирование:"
echo {A,C}{1..3}     # A1 A2 A3 C1 C2 C3

echo -e "\n3. Числовые последовательности с шагом:"
echo {1..10..2}      # 1 3 5 7 9
echo {20..0..-5}     # 20 15 10 5 0

echo -e "\n4. Вложенные конструкции:"
echo {A,B{1..3},C}   # A B1 B2 B3 C

echo -e "\n5. Практическое использование:"
# Создание нескольких файлов
touch file_{1..3}.txt
echo "Созданы файлы: " file_{1..3}.txt

# Клонирование структуры каталогов
mkdir -p dir_{X,Y}/sub{1..2}
echo "Созданы каталоги: " dir_{X,Y}/sub{1..2}