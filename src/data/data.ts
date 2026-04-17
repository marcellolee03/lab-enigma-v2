import { AnswerTypes, type Puzzle } from "../models/Puzzle"

export type Form = Record<string, Puzzle[]>
export const data: Form[] = [
    {
      firstForm: [
      {
        id: 1,
        answerType: AnswerTypes.open,
        question: "Qual é a cor da colônia?",
        answer: null
      },
      {
        id: 2,
        answerType: AnswerTypes.open,
        question: "Descreva o odor da colônia",
        answer: null
      },
      {
        id: 3,
        answerType: AnswerTypes.open,
        question: "Detalhe a textura da colônia",
        answer: null
      }
    ]
  },
  {
    secondForm: [
      {
        id: 4,
        answerType: AnswerTypes.radio,
        question: "Qual é o tipo da parede celular da bactéria?",
        options: [
          {id: 1, value: "Gram-positiva"},
          {id: 2, value: "Gram-negativa"}
        ],
        answer: "Gram-positiva"
      },
      {
        id: 5,
        answerType: AnswerTypes.radio,
        question: "Qual é o resultado da prova da catalase?",
        options: [
          {id: 1, value: "Catalase Positiva"},
          {id: 2, value: "Catalase Negativa"}
        ],
        answer: "Catalase Positiva"
      },
      {
        id: 6,
        answerType: AnswerTypes.checkbox,
        question: "A bacteria é sensível à quais antibióticos testados?",
        options: [
          {id: 1, value: "Eritromicina"},
          {id: 2, value: "Penicilina"},
          {id: 3, value: "Tetraciclina"},
        ],
        answer: ["Eritromicina", "Tetraciclina"]
      }
    ]
  },
  {
    thirdForm: [
      {
        id: 7,
        answerType: AnswerTypes.matching,
        question: "Assimile os elementos com seus respectivos pares.",
        hint: "Envie o formulário para cada par que for validar.",
        firstRowOptions: [
          {id: 1, value: "1"}, 
          {id: 2, value: "2"}, 
          {id: 3, value: "3"},
          {id: 4, value: "4"},
          {id: 5, value: "5"},
        ],
        secondRowOptions: [
          {id: 1, value: "a"},
          {id: 2, value: "b"}, 
          {id: 3, value: "c"},
          {id: 4, value: "d"},
          {id: 5, value: "e"},
        ],
        answer: ["4a", "3b", "1c", "2d"],
      }
    ]
  },
  {
    fourthForm: [
      {
        id: 8,
        answerType: AnswerTypes.ordenation,
        question: "Nos olhos do microbiologista...",
        hint: "A ordem em que os itens são selecionados importa.",
        options: [
          { id: 1, value: "Meio de cultura"},
          { id: 2, value: "Microscópio"},
          { id: 3, value: "Autoclave"},
          { id: 4, value: "Fluxo laminar"}
        ],
        answer: ["Microscópio", "Autoclave", "Meio de cultura", "Fluxo laminar"]
      }
    ]
  },
  {
    finalForm: [
      {
        id: 9,
        answerType: AnswerTypes.open,
        question: "Qual é o nome da bactéria?",
        answer: "Pantojas paixoes",
      }
    ]
  }
]