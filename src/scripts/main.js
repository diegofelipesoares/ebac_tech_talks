//Script para utilização de efeitos de transição
AOS.init();

//Criando data no futuro. 
//"mes dia, ano, hora"
const dataDoEvento = new Date("Dec 12, 2024 19:00:00");

//Vamos agora recuperar o dataStamp.
const timeStampDoEvento = dataDoEvento.getTime();

/*Função para intervalos:
A cada segundo que passar teremos q verificar quanto tempo falta
para chegarmos a dataDoEvento */
const contaAsHoras = setInterval(function(){
    //data atual
    const agora = new Date();
    //Guardando timeStamp da data atual
    const timeStampAtual = agora.getTime();
    //subtraindo data futura da data atual / retorno em milessegundos
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    
    /*Encontrando as quantidades de tempo*/
    //Constantes de tempo
    const diaEmMiles = 1000 * 60 * 60 * 24;
    const horaEmMiles = 1000 * 60 * 60;
    const minutoEmMiles = 1000 * 60;

    //Calculos do tempo, dispensando as frações
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMiles);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMiles) / horaEmMiles);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMiles)/ minutoEmMiles);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMiles)/ 1000);
    console.log(diasAteOEvento + " Dias ");
    console.log(horasAteOEvento + " Horas " );
    console.log(minutosAteOEvento + " Minutos ");
    console.log(segundosAteOEvento + " Segundos ");

    //Inserindo no HTML a informação pelo ID do Span
    document.getElementById('contador').innerHTML =
    `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    //Tratamento para quando o dia do evento chegar
    if(distanciaAteOEvento < 0){
        clearInterval(contaAsHoras); //para a contagem
        //inserir no contador um outra msg
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }

}, 1000);