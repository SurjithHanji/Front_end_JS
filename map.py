def cube(x):
    return x*x*x
print(cube(2))

l=[1,2,4,6,4,3]
newl=[]
for item in l:
    print(cube(item))
print(newl)


newli=list(map(cube,l))
print(newli)



#filter'
def filter_function(a):
    return a>4
newlis=list(filter(filter_function,l))
print(newlis)


#reduce 

from functools import reduce
numbers=[1,2,3,4,5]
sum=reduce(lambda x,y:x+y,numbers)
print(sum)


def mysum(x,y):
    return x+y
sum=reduce(mysum,numbers)
print(sum)