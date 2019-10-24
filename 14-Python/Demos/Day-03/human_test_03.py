# In the name of ALLAH

from human import Human

a = Human('Abdel Fattah')
a.speak()

def speak():
    print('Changed Speak')

a.speak = speak

a.speak()
