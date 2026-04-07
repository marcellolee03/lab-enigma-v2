import { AnswerTypes, type Puzzle } from "../models/Puzzle"

export const firstForm: Puzzle[] = [
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

export const secondForm: Puzzle[] = [
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
      {id: 1, value: "Tetraciclina"},
      {id: 2, value: "Novobiocina"},
      {id: 3, value: "Vancomicina"},
      {id: 4, value: "Penicilina"},
      {id: 5, value: "Nitrofurantoina"},
      {id: 6, value: "Ceftriaxona"},
    ],
    answer: ["Vancomicina", "Ceftriaxona"]
  }
]

export const thirdForm: Puzzle[] = ([
  {
    id: 7,
    answerType: AnswerTypes.matching,
    question: "Assimile os elementos com seus respectivos pares.",
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
)

export const fourthForm: Puzzle[] = (
  [
    {
      id: 8,
      answerType: AnswerTypes.ordenation,
      question: "Siga as pistas para encontrar os equipamentos. Depois, selecione-os na ordem em que foram descobertos.",
      hint: 'Primeira pista: "Nos olhos do microbiologista"',
      options: [
        { id: 1, value: "Meio de cultura"},
        { id: 2, value: "Microscópio"},
        { id: 3, value: "Autoclave"},
        { id: 4, value: "Fluxo laminar"}
      ],
      answer: ["Microscópio", "Autoclave", "Meio de cultura", "Fluxo laminar"]
    }
  ]
)