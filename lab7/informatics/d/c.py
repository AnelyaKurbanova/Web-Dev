N = int(input()) 
array = list(map(int, input().split()))  
positive_count = 0

for num in array:
    if num > 0:  
        positive_count += 1  

print(positive_count)  

