# In the name of ALLAH

class Human:
    no_faults = 0

    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f'My name is: {self.name}')

class Teacher(Human):
    
    def __init__(self, name, course):
        #super(Teacher, self).__init__(name)
        Human.__init__(self, name)
        self.course = course

    def speak(self):
        print('Changed Speak')

    def teach(self):
        print(f'{self.name} is teaching {self.course}')


h = Teacher('Ahmed', 'Python')
h.speak()
h.teach()
