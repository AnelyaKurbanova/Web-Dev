def power(a, n):
    result = 1
    for _ in range(n):
        result *= a
    return result

a =  input()
numbers = list(map(int, a.split()))
a,n= numbers[0], numbers[1]
print(power(a,n))