new Vue({
    el: '#desafio',
    data: {
        nome: 'João da Silva',
        idade: 50,
        linkImagem: 'https://vuejs.org/images/logo.svg'
    },
    methods: {
        triploIdade() {
            return this.idade * 3;
        },
        randomico() {
            return Math.random();
        }
    }
})
