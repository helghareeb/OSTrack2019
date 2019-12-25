# بسم الله الرحمن الرحيم

f = open('output','w')
f.write('This is new content')
f.seek(8)
f.write('old')
# f.write('This is line-01 \n')
# f.write('This is line-02 \n')
# f.write('This is line-03 \n')
# f.write('This is line-04 \n')
# for i in f.readlines():
#     print(i)