x = int(input())

counter = 0


for i in  range(1, int(x**0.5) + 1):
    if x % i == 0:
        counter += 1
        if i != x // i:
            counter += 1
print(counter)