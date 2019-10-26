# IN the name of ALLAH

class Person:
    def __init__(self, name):
        self.name = name

    @property
    def name(self):
        return self.__name

    @name.setter
    def name(self, name):
        if type(name) != type('abc'):
            raise TypeError
        else:
            self.__name = name

b = Person('Bahy')
print(b.name)

a = Person(15)
print(a.name)

a.name = 20
print(a.name)
