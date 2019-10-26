# In the name of ALLAH

import mem_profile
import random
import time

names = ['Haitham', 'Mohamed', 'Hesham', 'Mariam', 'Malek', 'Nadia']
majors = ['Math', 'Engineering', 'CS', 'Dentistry', 'Business']

print(f'Memory (Before): {mem_profile.memory_usage_resource()}Mb')

def people_list(num_people):
    result = []
    for i in range(num_people):
        person = {
                    'id': 1,
                    'name': random.choice(names),
                    'major': random.choice(majors)
                }
        result.append(person)
    return result

def people_generator(num_people):
    for i in range(num_people):
        person = {
                    'id': 1,
                    'name': random.choice(names),
                    'major': random.choice(majors)
                }
        yield person

t1 = time.clock()
#people = people_list(1000000)
#people = people_generator(1000000)
#people = list(people_generator(1000000))
t2 = time.clock()

print(f'Memory (After) : {mem_profile.memory_usage_resource()}Mb')
print(f'Took {t2-t1} seconds')
