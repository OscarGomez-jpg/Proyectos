#Código hecho en 10 min
palabra= ["a","h","o","r","a"]
prueba = ["","","","",""]

while(True):
    letra = input(str("Ingrese una letra: "))

    for i in range(len(palabra)):
        if letra == palabra[i]:
            prueba[i] = palabra[i]
            print(prueba)