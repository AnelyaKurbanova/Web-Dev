def caught_speeding(speed, is_birthday):
    speed_limit = 5 if is_birthday else 0
    if speed <= 60 + speed_limit:
        return 0
    elif speed <= 80 + speed_limit:
        return 1
    else:
        return 2