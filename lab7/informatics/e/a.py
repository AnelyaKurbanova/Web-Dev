def min_of_four(a, b, c, d):
    return min(a, b, c, d)

# Ввод четырех чисел
a, b, c, d = map(int, input().split())

# Вызов функции и вывод результата
print(min_of_four(a, b, c, d))
