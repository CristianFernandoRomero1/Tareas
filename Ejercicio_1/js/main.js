var app = new Vue({
    el: '#app',
    data: {
      programacionParcialUno:"",
      programacionParcialDos:"",
      pProgramacionParcial:"",
      programacionQuizUno:"",
      programacionQuizDos:"",
      pProgramacionQuiz:"",
      programacionTrabajoUno:"",
      programacionTrabajoDos:"",
      pProgramacionTrabajo:"",
      pProgramacion:"",

      calculoParcialUno:"",
      calculoParcialDos:"",
      pCalculoParcial:"",
      calculoQuizUno:"",
      calculoQuizDos:"",
      pCalculoQuiz:"",
      pCalculo:"",

      quimicaParcial:"",
      quimicaQuiz:"",
      quimicaTrabajo:"",
      pQuimicaParcial:"",
      pQuimicaQuiz:"",
      pQuimicaTrabajo:"",
      pQuimica:"",

      p:"",
      notaProyecto:"",
      pNotaProyecto:""
    },
    
    methods: {
    operacion: function() {
      //Promedio de programación
      this.pProgramacionParcial=((parseInt(this.programacionParcialUno)+parseInt(this.programacionParcialDos))*0.4)/2;
      this.pProgramacionQuiz=((parseInt(this.programacionQuizUno)+parseInt(this.programacionQuizDos))*0.2)/2;
      this.pProgramacionTrabajo=((parseInt(this.programacionTrabajoUno)+parseInt(this.programacionTrabajoDos))*0.4)/2;

      this.pProgramacion = parseInt(this.pProgramacionParcial)+parseInt(this.pProgramacionQuiz)+parseInt(this.pProgramacionTrabajo);

            //Promedio de calculo
            this.pCalculoParcial=((parseInt(this.calculoParcialUno)+parseInt(this.calculoParcialDos))*0.6)/2;
            this.pCalculoQuiz=((parseInt(this.calculoQuizUno)+parseInt(this.calculoQuizDos))*0.4)/2;
      
            this.pCalculo = parseInt(this.pCalculoParcial)+parseInt(this.pCalculoQuiz);

                  //Promedio de parcial
                  this.pQuimicaParcial=parseInt(this.quimicaParcial)*0.45;
                  this.pQuimicaQuiz=parseInt(this.quimicaQuiz)*0.25;
                  this.pQuimicaTrabajo=parseInt(this.quimicaTrabajo)*0.3;

                  this.pQuimica = parseInt(this.pQuimicaParcial)+parseInt(this.pQuimicaQuiz)+parseInt(this.pQuimicaTrabajo);

                  
                      this.pNotaProyecto=parseInt(this.notaProyecto)*0.10;
                      this.p=((parseInt(this.pQuimica)+parseInt(this.pCalculo)+parseInt(this.pProgramacion))/3) +this.pNotaProyecto;
    },
  }
  })