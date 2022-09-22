Regex: 

g , que permite que o motor continue procurando por todo o alvo o seu padrão.
i : Ignora o case, ou seja, não difere letras maiúsculas ou minúsculas;
m: Permite que o padrão seja aplicado em múltiplas linhas. Bem útil no caso onde temos que aplicar âncoras e ainda assim queremos aplicar em várias linhas;
y : Força a regex só trazer os matches consecutivos, ou seja, se você tem um alvo que tem 2 resultados consecutivos e em seguida um caractere (ou conjunto) que não bate com seu padrão, ele só traz os primeiros resultados;
u : Habilita a capacidade da Regex engine de entender caracteres unicode e captura-los corretamente(exemplo: 𝌆)


Exemplo de uso:
const alvo = '(16) 99999-9999';

const ddd = '\\(\\d{2}\\)';
const numero = '\\s+\\d{5}-\\d{4}';
const regexTelefone = new RegExp(ddd + numero, 'g');

console.log(regexTelefone); // /\(\d{2}\)\s+\d{5}-\d{4}/g
console.log(regexTelefone.test(alvo)); // true


Fonte: https://www.raulmelo.dev/blog/entendendo-regex-de-uma-vez-por-todas-parte-7