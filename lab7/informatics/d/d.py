N = int(input())
array = list(map(int, input().split()))
count = 0

for i in range(1, N):
    if array[i] > array[i - 1]: 
        count += 1  

print(count)


