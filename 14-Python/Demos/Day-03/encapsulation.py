# IN the name of ALLAH

class Person:
    def __init__(self, name):
        self.__name = name
    
    @property
    def name(self):
        return self.__eq__name

    @name.setter
    def set_age(self, name):
        if type(name) != type('abc'):
            raise TypeError
        else:
            self.__name = name

#a = Person(15)
#a.__name = 29
#print(a.get_name())
#print(a.__name)

