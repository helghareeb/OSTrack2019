# In the name of ALLAH

from human import Human

a = Human('Doaa')
b = Human('Salma')

print(Human.no_faults)
print(a.no_faults)
print(b.no_faults)

a.no_faults = 10

print(Human.no_faults)
print(a.no_faults)
print(b.no_faults)

Human.no_faults = 3

print(Human.no_faults)
print(a.no_faults)
print(b.no_faults)

c = Human('Abdel Fattah')
print(c.no_faults)
