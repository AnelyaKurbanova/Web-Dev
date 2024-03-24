N = int(input())  
array = list(map(int, input().split()))  

for num in array:
    if num % 2 == 0:  
        print(num, end=" ")  
