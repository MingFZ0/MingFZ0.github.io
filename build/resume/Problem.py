for i in range(100):
    if ((i % 3 == 0) or (i % 5 == 0)):
        if (i % 3 == 0) and (i % 5 == 0):
            print("More Vang")
        elif (i % 3 == 0):
            print("More ")
        elif (i % 5 == 0):
            print("Vang ")
        
    else:
        print(i)