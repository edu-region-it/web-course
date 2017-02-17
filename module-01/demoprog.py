print('!* Fibonacci Sequence python \n')
def Fibonacci_Series():
    x = input('Enter Series length to print fibonacci sequence')

    d,e=0,1
    a = []
    a.append(d)
    a.append(e)
    while(x!=2):
        c = d + e
        d = e
        e = c
        a.append(c)
        x = x -1
    print(a)