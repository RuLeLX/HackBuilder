from tkinter import *
from tkinter import messagebox
from ger_func import Generation

def quantity_var():
    q = count.get()
    q = int(q)
    Generation.command(q)

if __name__=='__main__':
    root = Tk()
    root.title('Генератор')
    root.geometry('400x300')


    Label(root, text='Кол-во вариантов:').place(x=10, y=30)
    count = Entry(root)
    count.place(x=120, y=30)

    instr_btn = Button(root, text="Инструкция", command=lambda: messagebox.showinfo(message="В поле вводится натральное число, которое является количеством вариантов, генерируемых программой!"))
    instr_btn.place(x=170, y=90)


    generation = Generation(root=root, text='Сформировать', x=40, y=90, command = quantity_var)

    root.mainloop()
