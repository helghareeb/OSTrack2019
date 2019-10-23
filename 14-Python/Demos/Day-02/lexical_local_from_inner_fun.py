# بسم الله الرحمن الرحيم

name = 'Ahmed'

def outer_fn():
    name = 'Ali'
    def inner_fn():
        # nonlocal name
        global name
        print(name)
        name = 'Sara'
    inner_fn()
    print(name)

outer_fn()
print(name)