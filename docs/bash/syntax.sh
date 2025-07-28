echo "=== Удаление суффиксов и префиксов ==="

FOO="file.txt.backup.txt.backup"
echo "Оригинал: $FOO"
echo "Удаление суффикса: ${FOO%.txt.backup}"
echo "Удаление длинного суффикса: ${FOO%%.*}"
echo "Удаление короткого суффикса: ${FOO%.*}"

PATH="/home/user/documents/file.txt"
echo "Оригинал: $PATH"
echo "Удаление длинного префикса: ${PATH##*/}"
echo "Удаление первого вхождения: ${PATH#/home}"



echo -e "\n=== Замена в строках ==="

STR="hello world hello"
echo "Оригинал: $STR"
echo "Замена первого: ${STR/hello/HI}"
echo "Замена всех: ${STR//hello/HI}"
echo "Замена префикса: ${STR/#hello/HI}"
echo "Замена суффикса: ${STR/%hello/HI}"
echo "Замена с шаблоном: ${STR//l?/X}"



echo -e "\n=== Работа с подстроками ==="

TEXT="abcdefghijk"
echo "Оригинал:         $TEXT"
echo "Подстрока (0:3):   ${TEXT:0:3}"
echo "Подстрока (3:5):   ${TEXT:3:5}"
echo "С конца (-3):      ${TEXT: -3}"
echo "С конца (-5:3):    ${TEXT: -5:3}"
echo "С конца (-5:-2):   ${TEXT: -5: -2}"



echo -e "\n=== Длина строки ==="

WORD="Привет"
echo "Строка: '$WORD', Длина: ${#WORD}"
EMPTY=""
echo "Пустая строка: ${#EMPTY}"



echo -e "\n=== Значения по умолчанию ==="

WORD="Привет"
EMPTY=""

# ${VAR:-default} - использовать default если VAR пустая/не установлена
echo "Неустановленная: ${UNSET_VAR:-default}"
echo "Пустая: ${EMPTY:-default}"
echo "Установленная: ${WORD:-default}"

# ${VAR:=default} - установить VAR в default если пустая/не установлена
echo -e "\nДо установки: VAR1=$VAR1"
echo "Значение: ${VAR1:=new_value}"
echo "После установки: VAR1=$VAR1"

# ${VAR:+value} - использовать value если VAR установлена и не пустая
echo -e "\nДля установленной: ${WORD:+overridden}"
echo "Для неустановленной: ${UNSET_VAR:+overridden}"

# ${VAR:?message} - выйти с ошибкой если VAR пустая/не установлена
echo -e "\nПроверка обязательной переменной:"
${REQUIRED:?Переменная REQUIRED не установлена!}
echo "Эта строка не выполнится если REQUIRED не установлена"