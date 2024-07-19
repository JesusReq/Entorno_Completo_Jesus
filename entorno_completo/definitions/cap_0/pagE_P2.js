//cordenadas por cada plano
const c = {
  //Puntos a utilizar de Annely: 1 -- 12
  1: { x: 1, y: 1 },
  2: { x: 2.2, y: 0.8 },
  3: { x: 1.2, y: 1.8 },

  4: { x: 2.8, y: 1.2 },
  5: { x: 2.5, y: 2 },
  6: { x: 0.5, y: 1.8 },

  7: { x: 1, y: 2.5 },
  8: { x: -1, y: -1.5 },
  9: { x: 2, y: 1 },

  10: { x: 1.5, y: -1.5 },
  11: { x: 0.5, y: -1 },
  12: { x: -2, y: 1.4 },
  //Fin Puntos de Annely
  //Puntos a utilizar de Luis: 13 -- 24

  //Fin Puntos de Luis
  //Puntos a utilizar de Manuel: 25 -- 32

  //Fin Puntos de Manuel
};

let defBoards = {
  //Boards a definir por Annely: 0 -- 11
  board_0: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-1, 5, 5, -1],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
    points: [
      [1.1, 0, false, '1'],
      [0.1, 1, false, '1'],
    ],
  },
  board_1: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-5, 3, 5, -3],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
    },
    points: [
      [1.1, 0, false, '1'],
      [0.1, 1, false, '1'],
    ],
  },
  board_2: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-1, 5, 5, -1],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
    },
    points: [
      [1.1, 0, false, '1'],
      [0.1, 1, false, '1'],
    ],
  },
  board_3: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-6, 5, 5, -5],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
    },
  },
  board_4: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-1, 6, 6, -1],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], 
        xd: [[0, 0], [1, 0]],
      },
    },
  },
  board_5: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-6, 5, 5, -5],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
    },
  },
  board_6: {
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3.5, 3.5, 3.5, -3.5],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
    },
  },
  board_7: {
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3, 3, 3, -3],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
    },
  },
  board_8: {
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3, 3, 3, -3],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
    },
  },
  board_9: {
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3, 3, 3, -3],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
    },
  },
  board_10: {
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3, 3, 3, -3],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
    },
  },
  board_11: {
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3.5, 3.5, 3.5, -3.5],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
    },
  },
  //Fin Boards Annely
  //Boards a definir por Luis: 12 -- 23

  //Fin Boards Luis
  //Boards a definir por Manuel: 24 -- 31

  //Fin Boards Manuel
};
//si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
let rDef = {
  artifactHtml: {
    datadefault: [
      {
        type: 10,
        classGlobal: 'defCartesian',
        contents: [
          {
            dataSet: {
              artifact: 'artifact_1',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_2',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_3',
            },
          },
          {
            dataSet: {
              artifact: 'artifact_4',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_5',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_6',
            },
          },
          {
            dataSet: {
              artifact: 'artifact_7',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_8',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_9',
            },
          },
          {
            dataSet: {
              artifact: 'artifact_10',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_11',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_12',
            },
          },
          {
            dataSet: {
              artifact: 'artifact_13',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_14',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_15',
            },
          },
          {
            dataSet: {
              artifact: 'artifact_16',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_17',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_18',
            },
          },
          {
            dataSet: {
              artifact: 'artifact_19',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_20',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_21',
            },
          },
          {
            dataSet: {
              artifact: 'artifact_22',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_23',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_24',
            },
          },
          {
            dataSet: {
              artifact: 'artifact_25',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_26',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_27',
            },
          },
          {
            dataSet: {
              artifact: 'artifact_28',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_29',
            },
          },
          {
            dataSet: {
              artifact: 'artifact_30',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_31',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_32',
            },
          },
        ],
      },
    ]
  },
  //Inicio de Artefactos Annely: 1 -- 12
  artifact_1: {
    defBoard: 'board_0',
    textBottom: '(x-1,y),(x,y+2),(x,y-2)',
    conditions: {
      texterror: {
        time: 6,
      },
      points: [
        { p: [c[1].x * 2, c[1].y * 2], text: '(x-1,y)' },
        { p: [c[1].x * 3, c[1].y * 4], text: '(x,y+2)' },
        { p: [c[1].x * 3, 0], text: '(x,y-2)' }
      ],
    },
    defaultInputs: [
      {
        position: [c[1].x * 3, c[1].y * 2],
        value: '(x,y)',
      }
    ],
  },

  artifact_2: {
    defBoard: 'board_1',
    textBottom: '(-2x,y),(x,2y),(2x,-y),(x/2,y/2)',
    conditions: {
      texterror: {
        time: 6,
      },
      points: [
        { p: [c[2].x * -2, c[2].y ], text: '(-2x,y)' },
        { p: [c[2].x, c[2].y * 2], text: '(x,2y)' },
        { p: [c[2].x * 2, c[2].y * -1], text: '(2x,-y)' },
        { p: [c[2].x / 2, c[2].y /2], text: '(x/2,y/2)' }
      ],
    },
    defaultInputs: [
      {
        position: [c[2].x , c[2].y],
        value: '(x,y)',
      }
    ],
  },

  artifact_3: {
    defBoard: 'board_2',
    textBottom: '(x-1.5,y),(x+1.5,y),(x,y-1)',
    conditions: {
      texterror: {
        time: 4,
      },
      points: [
        { p: [c[3].x - 1.5, c[3].y ], text: '(x-1.5,y)' },
        { p: [c[3].x + 1.5, c[3].y ], text: '(x+1.5,y)' },
        { p: [c[3].x, c[3].y -1 ], text: '(x,y-1)' }
      ],
    },
    defaultInputs: [
      {
        position: [c[3].x , c[3].y],
        value: '(x,y)',
      }
    ],
  },

  artifact_4: {
    defBoard: 'board_3',
    textBottom: '(x,3y),(x,-3y),(-2x,y),(x/2,y/2)',
    conditions: {
      texterror: {
        time: 6,
      },
      points: [
        { p: [c[4].x, c[4].y * 3], text: '(x,3y)' },
        { p: [c[4].x, c[4].y * -3], text: '(x,-3y)' },
        { p: [c[4].x * -2, c[4].y], text: '(-2x,y)' },
        { p: [c[4].x / 2, c[4].y /2], text: '(x/2,y/2)' }
      ],
    },
    defaultInputs: [
      {
        position: [c[4].x , c[4].y],
        value: '(x,y)',
      }
    ],
  },

  artifact_5: {
    defBoard: 'board_4',
    textBottom: '(x+2,y),(x,y+1),(x,y-1)',
    conditions: {
      texterror: {
        time: 4,
      },
      points: [
        { p: [c[5].x + 2, c[5].y ], text: '(x+2,y)' },
        { p: [c[5].x, c[5].y + 1 ], text: '(x,y+1)' },
        { p: [c[5].x, c[5].y - 1 ], text: '(x,y-1)' }
      ],
    },
    defaultInputs: [
      {
        position: [c[5].x , c[5].y],
        value: '(x,y)',
      }
    ],
  },

  artifact_6: {
    defBoard: 'board_5',
    textBottom: '(-x,y),(x,2y),(x,-2y),(x/2,y/2)',
    conditions: {
      texterror: {
        time: 6,
      },
      points: [
        { p: [c[6].x * -1, c[6].y ], text: '(-x,y)' },
        { p: [c[6].x, c[6].y * 2], text: '(x,2y)' },
        { p: [c[6].x, c[6].y * -2], text: '(x,-2y)' },
        { p: [c[6].x / 2, c[6].y /2], text: '(x/2,y/2)' }
      ],
    },
    defaultInputs: [
      {
        position: [c[6].x , c[6].y],
        value: '(x,y)',
      }
    ],
  },

  artifact_7: {
    textBottom: '(x, -y), (-x, y), (y, x)',
    defBoard: 'board_6',
    defaultInputs: [
      {
        position: [c[7].x, c[7].y],
        value: '(x,y)',
      },
    ],
    conditions: {
      texterror: {
        time: 6,
      },
      points: [
        { p: [c[7].x, -c[7].y], text: 'x,-y' },
        { p: [-c[7].x, c[7].y], text: '-x,y' },
        { p: [c[7].y, c[7].x], text: 'y,x' }
      ],
    },
  },

  artifact_8: {
    textBottom: '(b,0), (a, a), (-a, -b), (a, -a)',
    defBoard: 'board_7',
    defaultInputs: [
      {
        position: [0, c[8].y],
        value: '(0,b)',
      },
      {
        position: [c[8].x, 0],
        value: '(a,0)',
      },
    ],
    conditions: {
      texterror: {
        time: 6,
      },
      points: [
        { p: [c[8].y, 0], text: 'b,0' },
        { p: [c[8].x, c[8].x], text: 'a,a' },
        { p: [-c[8].x, -c[8].y], text: '-a,-b' },
        { p: [c[8].x, -c[8].x], text: 'a,-a' },
      ],
    },
  },

  artifact_9: {
    defBoard: 'board_8',
    textBottom: '(-x,-y), (x,-y), (y,x)',
    defaultInputs: [
      {
        position: [c[9].x, c[9].y],
        value: '(x,y)', 
      },
    ],
    conditions: {
      texterror: {
        time: 4,
      },
      points: [
        { p: [-c[9].x, -c[9].y], text: '-x,-y' },
        { p: [c[9].x, -c[9].y], text: 'x,-y' },
        { p: [c[9].y, c[9].x], text: 'y,x' }
      ],
    },
  },

  artifact_10: {
    //La pregunta (a,-a) fue modificada por coincidencia con el punto (b,b) [Pregunta original (-a,-a)]
    defBoard: 'board_9',
    textBottom: '(b,0), (b, b), (-a, -b), (a, -a)',
    defaultInputs: [
      {
        position: [0, c[10].y],
        value: '(0,b)',
      },
      {
        position: [c[10].x, 0],
        value: '(a,0)',
      },
    ],
    conditions: {
      texterror: {
        time: 4,
      },
      points: [
        { p: [c[10].y, 0], text: 'b,0' },
        { p: [c[10].y, c[10].y], text: 'b,b' },
        { p: [-c[10].x, -c[10].y], text: '-a,-b' },
        { p: [c[10].x, -c[10].x], text: 'a,-a' },
      ],
    },
  },

  artifact_11: {
    defBoard: 'board_10',
    textBottom: '(-x,y), (x,-y), (y,x)',
    defaultInputs: [
      {
        position: [c[11].x, c[11].y],
        value: '(x,y)', 
      },
    ],
    conditions: {
      texterror: {
        time: 4,
      },
      points: [
        { p: [-c[11].x, c[11].y], text: '-x,y' },
        { p: [c[11].x, -c[11].y], text: 'x,-y' },
        { p: [c[11].y, c[11].x], text: 'y,x' }
      ],
    },
  },

  artifact_12: {
    textBottom: '(-a,0), (a,b), (-a,b), (b,-b)',
    defBoard: 'board_11',
    defaultInputs: [
      {
        position: [0, c[12].y],
        value: '(0,b)',
      },
      {
        position: [c[12].x, 0],
        value: '(a,0)',
      },
    ],
    conditions: {
      texterror: {
        time: 6,
      },
      points: [
        { p: [-c[12].x, 0], text: '-a,0' },
        { p: [c[12].x, c[12].y], text: 'a,b' },
        { p: [-c[12].x, c[12].y], text: '-a,b' },
        { p: [c[12].y, -c[12].y], text: 'b,-b' },
      ],
    },
  },
  //Fin Artefactos Annely
  //Inicio de Artefactos Luis: 13 -- 24

  //Fin Artefactos Luis
  //Inicio de Artefactos Manuel: 25 -- 32

  //Fin Artefactos Manuel
};
console.log([c[4].x, c[4].y / 2]);

let artefact = [];
let position = localStorageSeleccionados("P2", 0, 11, 4);
console.log(position);

/*function filtrarDefBoards(defBoards, indices) {
  const nuevoDefBoards = {};
  for (const indice of indices) {
    const nombreBoard = `board_${indice}`;
    if (defBoards.hasOwnProperty(nombreBoard)) {
      nuevoDefBoards[nombreBoard] = defBoards[nombreBoard];
    }
  }
  return nuevoDefBoards;
}
//console.log(defBoards);
const nuevoDefBoards = filtrarDefBoards(defBoards, position);
//console.log(nuevoDefBoards);
defBoards = nuevoDefBoards;*/

function filtrarRdef(rdef, indices) {
  for(let i=0;i<indices.length;i++ )
  {
    indices[i]=indices[i]+1;
  }  
  
  const nuevoRdef = {};
  
  // Copiar la propiedad artifactHtml
  nuevoRdef.artifactHtml = rdef.artifactHtml;

  // Iterar sobre las propiedades de rdef
  for (const propiedad in rdef) {
    // Verificar si la propiedad comienza con "artifact_"
    if (propiedad.startsWith("artifact_")) {
      // Extraer el índice de la propiedad
      const indice = parseInt(propiedad.split("_")[1]);
      
      // Si el índice no está en el arreglo de índices a eliminar, copiar la propiedad
      if (indices.includes(indice)) {
        nuevoRdef[propiedad] = rdef[propiedad];
      }
    }
  }

  return nuevoRdef;
}

function filtrarContents(rdef, indices) {
  // Verificar si las propiedades existen antes de acceder a ellas
  if (rdef.artifactHtml && rdef.artifactHtml.datadefault && rdef.artifactHtml.datadefault[0] && rdef.artifactHtml.datadefault[0].contents) {
    const nuevoContents = rdef.artifactHtml.datadefault[0].contents.filter((_, index) => indices.includes(index));
    rdef.artifactHtml.datadefault[0].contents = nuevoContents;
  }
  return rdef;
}

let nuevoRdef = filtrarContents(rDef, position);

//console.log(nuevoRdef.artifactHtml.datadefault[0].contents); 
// Output: [ { dataSet: { artifact: 'artifact_2' } }, { dataSet: { artifact: 'artifact_4' } } ]


nuevoRdef = filtrarRdef(nuevoRdef, position);

rDef = nuevoRdef;

console.log(rDef); // Output: { artifactHtml: "...", artifact_1: "...", artifact_3: "..." }

//console.log(rDef); 
//console.log(nuevoRdef); 
// Salida: 
// {
//   artifactHTML: ["HTML existente"],
//   artifact_2: "valor2",
//   artifact_4: "valor4",
//   artifact_1: "valor1",
//   artifact_3: "valor3"
// }

window.addEventListener('load', function() {  
  const intentos1_LS = localStorage.getItem('P2_Intentos1');
  const intentos2_LS = localStorage.getItem('P2_Intentos2');
  const intentos3_LS = localStorage.getItem('P2_Intentos3');
  const intentos4_LS = localStorage.getItem('P2_Intentos4');
  if (intentos1_LS)
      intentos1 = intentos1_LS
  else
      intentos1 = 0;
  if (intentos2_LS)
      intentos2 = intentos2_LS
  else
      intentos2 = 0;
  if (intentos3_LS)
      intentos3 = intentos3_LS
  else
      intentos3 = 0;
  if (intentos4_LS)
      intentos4 = intentos4_LS
  else
      intentos4 = 0;
});

//[def,artefact] = PintaSeleccionP1(position, def, 'P2)*/
generator(rDef);
mainCartesian(defBoards, rDef);

let validar = document.querySelectorAll('.check');
let intentos1, intentos2, intentos3, intentos4;
for (let i = 0; i < validar.length; i++) {
    // Add a click event listener to each element
    validar[i].addEventListener('click', function() {
        // Print a different message depending on the element
        switch (this) {
            case validar[0]:
                intentos1++;                
                localStorage.setItem('P2_Intentos1',intentos1);                
                break;
            case validar[1]:
                intentos2++;                
                localStorage.setItem('P2_Intentos2',intentos2);
                break;        
            case validar[2]:
                intentos3++;                
                localStorage.setItem('P2_Intentos3',intentos3);
                break;        
            case validar[3]:
                intentos4++;                
                localStorage.setItem('P2_Intentos4',intentos4);
                break;        
        }
    });
}

// Selecciona todos los elementos div con la clase 'boardfault'
const divs = document.querySelectorAll('.borderDefault');

// Itera sobre cada div y agrega el texto "Pregunta" después de cada uno
i = 4;
divs.forEach(div => {
  const spanPregunta = document.createElement('span');
  const spanPuntaje = document.createElement('span');
  spanPregunta.textContent =  "P"+i.toString(); 
  let puntaje = (i===4 || i===6) ? '3 pts' : '4 pts';
  spanPuntaje.textContent = puntaje;
  spanPuntaje.classList.add("oval-container");
  spanPregunta.classList.add('question-text');
  div.insertBefore(spanPregunta, div.firstChild);
  div.appendChild(spanPuntaje);
  i++;
});

// Selecciona todos los elementos div con la clase 'boardfault'

let containerAll = document.querySelectorAll(".content_1");
let btnBack = document.createElement("button");
btnBack.textContent = "Regresar";
containerAll[1].appendChild(btnBack);

btnBack.addEventListener('click',()=>{
  window.location.href = "Pag_Ex.html";
})



