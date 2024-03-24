N = int(input())

current_power_of_two = 1
k = 0

while current_power_of_two < N:
    current_power_of_two *= 2
    k += 1

print(k)