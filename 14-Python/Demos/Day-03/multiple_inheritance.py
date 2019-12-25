# In the name of ALLAH

class Person:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f'I am Person')

class Teacher:
    def __init__(self, name, course):
        self.name = name
        self.course = course

    def speak(self):
        print(f'My Name is: {self.name} and I teach {self.course}')

    def teach(self):
        print(f'I am Teacher')

class Manager(Teacher, Person):
    def __init__(self, name, course, dept):
        Person.__init__(self, name)
        Teacher.__init__(self, name, course)
        self.dept = dept

    def manage(self):
        print(f'I manage {self.dept}')


a = Manager('Ahmed', 'Python', 'Network Dept')
a.manage()
a.teach()
a.speak()
