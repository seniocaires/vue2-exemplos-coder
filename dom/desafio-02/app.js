new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertaClique() {
            alert('Clicado');
        },
        preencheValor(event) {
            this.valor = event.target.value;
        }
    }
})