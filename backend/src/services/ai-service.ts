import axios from 'axios'
import env from '../config/env'

export class AIService {
  static async sprayerCalc (data: any): Promise<any> {
    const text = `Você é um agricultor empenhado em aperfeiçoar a aplicação de pesticidas em sua lavoura, visando maximizar a eficiência, minimizar o tempo parado e otimizar os percursos até os pontos de recarga. Ao dispor de vários pontos de recarga distribuídos pela área cultivada, elimina-se a necessidade de voltar ao ponto de partida para recarregar. A seguir, detalham-se os parâmetros necessários para a análise:

    *Parâmetros de Entrada:*
    Os valores entre colchetes correspondem às variáveis de um objeto JSON.
    
    1. **Tipo de Cultura** '[tipo_cultura]': Identificação do cultivo.
    2. **Área do Campo** '[total_area_campo]' (hectares): Tamanho total da área a ser pulverizada.
    3. **Taxa de Aplicação** '[taxa_pesticida_area]' (litros/hectare): Quantidade de pesticida a aplicar por hectare.
    4. **Capacidade do Tanque** '[capacidade_tanque]' (litros): Capacidade do tanque da pulverizadora.
    5. **Velocidade de Pulverização** '[velocidade_deslocamento]' (km/h): Velocidade da máquina durante a aplicação.
    6. **Largura da Barra de Pulverização** '[largura_barra_irrigacao]': Largura da barra que dispersa o pesticida.
    7. **Condições Climáticas** '[condicoes_climaticas]': Incluir temperatura (°C), umidade relativa (%) e velocidade do vento (km/h).
    8. **Período de Trabalho** '[dt_inicio_atuacao]': Para calcular o tempo total necessário à pulverização. Seguindo o formato (HH:mm)
    9. **Vazão do Pesticida** '[vazao_produto]' (litros/minuto): Taxa de liberação do pesticida.
    
    A tarefa consiste em analisar esses dados para calcular o consumo de pesticida em tempo real, determinar o momento ideal para recarga a fim de evitar paradas e ajustar os planos conforme as condições climáticas para otimizar a aplicação. Se o clima for desfavorável, indicar se é aconselhável prosseguir ou não. Calcule o momento apropriado para recarga e informe em horas ou minutos.
    
    Apresente os resultados como segue, incluindo apenas os dados finais, sem descrição dos cálculos:
    
    - **Consumo Total de Pesticida** (litros)
    - **Capacidade de Pulverização por Ciclo** (hectares)
    - **Momento para Recarga**
    - **Tempo até Recarga** (horas ou minutos)
    - **Área Coberta Antes da Recarga** (hectares)
    - **Ciclos Necessários para a Conclusão**
    - **Recomendação Climática para Pulverização**
    
    Insira apenas os resultados, omitindo detalhes adicionais ou explicações sobre os procedimentos de cálculo.
    Simulando os valores json abaixo, responda o prompt acima.
    
    ${data}`
    const options = {
      method: 'POST',
      url: 'https://api.openai.com/v1/chat/completions',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.chatGptSecretKey}`
      },
      data: {
        model: 'gpt-3.5-turbo',
        prompt: text
      }
    }

    return axios
      .request(options)
      .then(function (response) {
        return response.data
      })
      .catch(function (error) {
        throw new Error(error.message)
      })
  }

  static async imageProcessing (file: any, assistantId: any): Promise<any> {
    const fileId = file.file_id
    const options = {
      method: 'POST',
      url: `https://api.openai.com/v1/assistants/${assistantId}/files`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.chatGptSecretKey}`,
        'OpenAI-Beta': 'assistants=v1'
      },
      data: {
        file_id: fileId
      }
    }

    return axios
      .request(options)
      .then(function (response) {
        return response.data
      })
      .catch(function (error) {
        throw new Error(error.message)
      })
  }
}
