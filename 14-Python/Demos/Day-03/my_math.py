# In the name of ALLAH

def add(a,b,c):
    return a + b + c

def add(a,b):
    return a + b

def add(*args):
    sum = 0
    for i in args:
        sum += i
    return sum

print(add(1,2))
print(add(1,2,3))
print(add(1,2,3,4,5,6,7,8,9,0,15))
