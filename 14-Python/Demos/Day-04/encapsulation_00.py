# بسم الله الرحمن الرحيم

class Person:
  def __init__(self, name):
    self.__name = name
    
  def get_name(self):
    return self.__name
    
  def set_name(self, name):
    selt.__name = name
    
b = Person('Bahy')
print(b.__name)
