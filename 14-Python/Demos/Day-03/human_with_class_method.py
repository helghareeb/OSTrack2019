# In the name of ALLAH

class Human:
    no_faults = 0
    def __init__(self, name):
        self.name = name

    @classmethod
    def make_faults(cls):
        cls.no_faults += 1
        print(f'No. of Faults: {cls.no_faults}')

a = Human('Ahmed')
a.make_faults()
print(f'Human: {Human.no_faults}')
print(f'A: {a.no_faults}')
