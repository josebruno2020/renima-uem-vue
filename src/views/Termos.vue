<template>
    <div class="termos container">
        <h1 class="text-center mb-3">TERMO DE CONSENTIMENTO LIVRE E ESCLARECIDO</h1>
        <div class="text-justify">
            <p>O Sr. (ª) está sendo convidado (a) a participar do curso “Via aérea e ventilação mecânica em paciente COVID-19”, que será realizado no ano de 2021. </p>
            <p>O curso compreende faces de uma pesquisa sobre manejo de via aérea e ventilação mecânica pelo Mestrado Profissional em Urgência e Emergência da Universidade Estadual de Maringá. Após ser esclarecido sobre as informações do curso/pesquisa, que serão apresentadas a seguir, no caso de aceitar fazer parte do curso, preencha o item ao final do texto confirmando a sua participação. Será gerado uma cópia do TCLE e será encaminhada ao seu e-mail. Em caso de recusa ou desistência ao longo do curso, você não será penalizado. Em caso de dúvida, você pode entrar em contato com a equipe, os dados estão no site.</p>
            <p>O manejo de via aérea e o conhecimento de ventilação mecânica em época de pandemia são fatores importantes na sobrevida de pacientes gravemente acometidos pelo Covid-19. No curso, será realizado a partir de videoaulas que serão abordados dicas e conceitos técnicos sobre ventilação, sedação e manejo ventilatório, assim como noções básicas de paramentação e desparamentação em pacientes com suspeita e confirmados pelo Covid-19.</p>
            <p>A sua participação no curso visa treinamento adequado para profissionais e estudantes que possam trabalhar na linha de frente desta pandemia. Para certificação de conclusão do curso, será necessária a visualização dos vídeos e resposta dos questionários auto aplicado introduzidos em cada modulo. Será necessário acerto de 80% das questões para mudança de modulo, assim que finalizar os 3 módulos, será gerado a certificação do curso. Em caso de não atingir nota para progressão dos módulos, a avaliação poderá ser feita outras vezes até atingir o valor mínimo de 80% das questões (8 questões por modulo). </p>
            <p>De nenhuma forma esses dados serão utilizados como avaliação de conhecimento técnico e/ou usado como nota para qualquer finalidade e/ou exposto para qualquer finalidade. O questionário visa avaliação e conhecimento dos principais tópicos que será abordado. Os dados serão armazenados em bancos de dados, para avaliação global das respostas, sem nenhuma exposição dos participantes e será utilizado exclusivamente para de avaliação da técnica de ensino e avaliação do ensino remoto.</p>
            <p>A aula será gravada e poderá ser assistida em qualquer momento entre os meses de maio a setembro de 2021. A participação no curso/pesquisa não acarretará custos para você e não será disponível nenhuma compensação financeira adicional. </p>
            <p>Sua participação no curso é voluntária. Em caso de perguntas ou problemas referentes ao curso e/ou finalidade do estudo entre em contato com a equipe por e-mail, que encontra-se no item “Contatos” no site.</p>
        </div>

        <div class="center">
            <router-link to="/register">Voltar</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:'Termos'
}
</script>

<style scoped>
.text-justify p {
    text-align: justify;
}
.center {
    display: flex;
    justify-content: center;
}
</style>


