saldo = 1000
saque = 200
limite = 100

print(saldo >= saque)
print(saque <= limite)

# Operador E -> AND
print(saldo >= saque and saque <= limite)

# Operador OU -> OR
print(saldo >= saque or saque <= limite)

# Operador de Negação -> NOT
contatos_emergencia = []

print(not 1000 > 1500)
print(not contatos_emergencia)
print(not "saque 1500;")
print(not "")

# Parênteses 
saldo = 1000
saque = 250
limite = 200
conta_especial = True

# Sem separação por parênteses(Difícil Leitura)
exp_1 = saldo >= saque and saque <= limite or conta_especial and saldo >= saque
print(exp_1)

# Com separação por parênteses(Fácil Leitura)
exp_2 = (saldo >= saque and saque <= limite) or (conta_especial and saldo >= limite)
print(exp_2)

# Separando para deixar mais limpo
conta_normal_com_saldo_suficiente = saldo >= saque and saque <= limite
conta_especial_com_saldo_suficiente = conta_especial and saldo >= limite

exp_3 = conta_normal_com_saldo_suficiente or conta_especial_com_saldo_suficiente
print(exp_3)