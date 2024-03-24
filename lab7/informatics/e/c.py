def xor(x, y):
    return (x or y) and not (x and y)


a =  input()
numbers = list(map(int, a.split()))
x, y= numbers[0], numbers[1]

x_bool = bool(x)
y_bool = bool(y)

result = int(xor(x_bool, y_bool))

print(result)