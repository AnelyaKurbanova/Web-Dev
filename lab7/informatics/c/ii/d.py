a = int(input())
i = 1

yn = 0

while(i <= a):
    if(i == a):
        yn = 1
        break
    i *= 2


if(yn):
    print("YES")
else:
    print("NO")