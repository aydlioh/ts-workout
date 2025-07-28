# string="111"

# if [[ -z "$string" ]]; then
#     echo "String is empty"
# elif [[ "$string" ]]; then
#     echo "String is not empty"
# fi


msg=("Great, now move on to tricks" "Keep at it until you get it")
echo "${msg[$(($1 < 10))]}"
echo $(($1 < 10))