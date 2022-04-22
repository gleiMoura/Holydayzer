import express from 'express';

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
  ];

const app = express();
app.listen(4000, () => console.log('está funcionando!'));

app.get('/holidays', (request, response) => {
    response.send(holidays)
});

const hoje = new Date();
const dataHoje = hoje.toLocaleDateString().split('/'); 
let dia = dataHoje[0];
let mes = dataHoje[1];
let ano = dataHoje[2];
if(dia[0] === "0"){
    dia = dia[1];
}
if(mes[0] === '0'){
    mes = mes[1]
}
const novaData = `${mes}/${dia}/${ano}`;

app.get('/is-today-holiday', (request, response) => {
    holidays.forEach(element => {
        if(novaData === element.date){
            response.send(`Sim, hoje é feriado de ${element.name}`);
        }else{
            response.send('hoje não é feriado')
        }
    })
})
