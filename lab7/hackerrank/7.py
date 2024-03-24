x = int(input())
y = int(input())
z = int(input())
n = int(input())


coordinates = [[i, j, k] for i in range(x + 1) for j in range(y + 1) for k in range(z + 1)]

result = [coordinate for coordinate in coordinates if sum(coordinate) != n]


print(result)