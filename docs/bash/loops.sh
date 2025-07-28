for fruit in apple banana orange "kiwi fruit"; do
    echo "Фрукт: $fruit"
done

for i in {1..5}; do
    echo "Число: $i"
done

for ((i=0; i<5; i++)); do
    echo "Индекс: $i"
done

counter=5
while [ $counter -gt 0 ]; do
    echo "Обратный отсчет: $counter"
    ((counter--))
done

while true; do
    read -p "Введите 'выход' для завершения: " input
    if [ "$input" == "выход" ]; then
        break
    else
        echo "Вы ввели: $input"
    fi
done