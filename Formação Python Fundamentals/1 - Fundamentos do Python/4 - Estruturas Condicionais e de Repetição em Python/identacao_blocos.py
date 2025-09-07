def sacar(valor):
  saldo = 500

  if saldo >= valor:
    print("Valor Sacado!")
    print("Retire o seu dinheiro no local indicado!")
  
  print("Obrigado por ser nosso cliente, tenha um ótimo dia!")


def depositar(valor):
  saldo = 500
  saldo += valor
  print(f"Obrigado pelo Depósito, seu saldo atual é de: {saldo}" )

depositar(150)
sacar(600)