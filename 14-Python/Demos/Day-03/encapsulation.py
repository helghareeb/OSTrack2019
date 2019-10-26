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

#a = Person(15)
#a.__name = 29
#print(a.get_name())
#print(a.__name)
