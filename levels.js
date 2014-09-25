/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */


// Hash the array and compare the arrays!
// Key
// a = small apple .small
// A = apple
// g = small granny-smith apple
// G = granny-smith apple
// o = small orange, .small
// O = orange
// p = small pickle, .small
// P = pickle
// s = small sushi, .small
// S = sushi
// () = plate open / close
// {} = fancy plate open / close
// [] = bento open close tags

var levels = [
// {
//     doThis: "Demo des éléments",
//     board: "a A g G o O p P s S (){}[] (a)(ao)(aag)(agao){A}{AA}{AAA}{AAAA} [a][ao][aag][agao][A][AA][AAA][AGAO](s)(ss)(sss)(ssss)(S)(SS)(SSS)(SSSS)(OSOS)",
//     selector: "apple",
//     selectorName : "Sélecteur d'élément",
//     helpTitle : "TODO: REMOVE",
//     syntax : "E",
//     examples : [],
// },
{
    doThis : "Toutes les assiettes ?",
    board: "s () a {} O [] P () G",
    selector : "plate",
    selectorName : "Sélecteur d'élément",
    helpTitle : "Sélectionne en fonction du type d'élément",
    syntax : "E",
    help : "Sélectionne tous les éléments <strong>E</strong>.",
    examples : [
    '<strong>div</strong> sélectionne toutes les <tag>div</tag> de la page.',
    '<strong>p</strong> sélectionne tous les <tag>p</tag> de la page.',
    ],

},
{
    doThis : "Tous les bento ?",
    board: "[]G()P[]",
    selector : "bento",
    selectorName : "Sélecteur d'élément",
    helpTitle : "Sélectionne en fonction du type d'élément",
    syntax : "E",
    help : "Sélectionne tous les éléments <strong>E</strong>.",
    examples : [
    '<strong>div</strong> sélectionne toutes les <tag>div</tag> de la page.',
    '<strong>p</strong> sélectionne tous les <tag>p</tag> de la page.',
    ],

},
{
    doThis : "Toutes les pommes ?",
    board: "g G [O] {A} A",
    selector : "apple",

    selectorName : "Sélecteur d'élément",
    helpTitle : "Sélectionner en fonction du type d'élément",

    syntax : "E",
    help : "Sélectionne tous les éléments <strong>E</strong>.",
    examples : [
    '<strong>div</strong> sélectionne toutes les <tag>div</tag> de la page.',
    '<strong>p</strong> sélectionne tous les <tag>p</tag> de la page.',
    ],

},


{
    doThis : "L'assiette fantaisiste ?",
    board: "{}()[]",
    selector : "#fancy",

    selectorName : "Sélecteur d'identifiant",
    helpTitle : "Sélectionne en fonction de l'identifiant de l'élément",


    syntax : "#ID",
    help : "Sélectionne l'élément dont l'identifiant est <strong>ID</strong>. Par exemple: <tag>div id='header'</tag>, <tag>ul id='main-navigation'</tag> ou encore <tag>p id='help'</tag>. <br/><br/><strong>Attention</strong>, il ne peut pas y avoir plusieurs éléments avec le même identifiant sur une même page",
    examples : [
    '<strong>#main-navigation</strong> sélectionne l\'élément dont l\'attribut <strong>id</strong> vaut <tag>main-navigation</tag>.',
    '<strong>div#modal</strong> sélectionne la div dont l\'identifiant est égal à <strong>modal</strong>.',
    ],

},

{
    doThis : "La pomme qui est sur une assiette ?",
    board: "A[a](A)a",
    selector : "plate apple",

    selectorName : "Sélecteur descendant",
    helpTitle : "Sélectionne un élément à l'intérieur d'un autre",


    syntax : "F&nbsp;&nbsp;E",
    help : "Sélectionne tous les éléments <strong>E</strong> qui sont à l'intérieur de <strong>F</strong>. ",
    examples : [
    '<strong>p&nbsp;&nbsp;strong</strong> va sélectionner tous les <strong>&lt;strong&gt;</strong> enfants d\'un <strong>&lt;p&gt;</strong>',
    '<strong>#fancy&nbsp;&nbsp;span</strong>va sélectionner tous les <strong>&lt;span&gt;</strong> qui sont enfant d\'un  <strong>id="fancy"</strong>',
    ],

},

{
    doThis : "Tous les sushis sur une assiette fantaisiste ?",
    board: "{S}(S){s}(s)",
    selector : "#fancy sushi",

    selectorName : "Sélecteur descendant",
    helpTitle : "Sélectionne un élément à l'intérieur d'un autre",

    syntax : "F&nbsp;&nbsp;E",
    help : "Sélectionne tous les éléments <strong>E</strong> qui sont à l'intérieur de <strong>F</strong>. ",
    examples : [
    '<strong>p&nbsp;&nbsp;strong</strong> va sélectionner tous les <strong>&lt;strong&gt;</strong> enfants d\'un <strong>&lt;p&gt;</strong>',
    '<strong>#fancy&nbsp;&nbsp;span</strong>va sélectionner tous les <strong>&lt;span&gt;</strong> qui sont enfant d\'un  <strong>id="fancy"</strong>',
    ],

},



{
    doThis : "Tous les petits objets",
    board: "aAoOpPsSgG",
    selector : ".small",

    selectorName : "Sélecteur de classe",
    helpTitle : "Sélectionne un élément en fonction de sa classe",

    syntax : ".S",
    help : "Il est possible de mélanger tous les sélecteurs! :)",
examples : [
'<strong>.neato</strong> va sélectionner tous les éléments ayant une classe égale à <strong>neato</strong>'
],

},

{
    doThis : "Les petites oranges",
    board: "P[p]O[o]A[a]",
    selector : "orange.small",

    selectorName : "Combiner sélecteur de classe et d'élément",
    helpTitle : "Sélectionne un élément en fonction de sa classe",

    syntax : "E.S",
    help : "Il est possible de mélanger tous les sélecteurs! :)",
examples : [
'<strong>p.neato</strong> va sélectionner tous les <strong>paragraphes</strong> ayant une classe égale à <strong>neato</strong>'
],

},

{
    doThis : "Toute les petites pommes granny-smith ?",
    board: "aAoOpPsSgG",
    selector : "apple.small.granny-smith",

    selectorName : "Combiner des sélecteurs de classe",
    helpTitle : "Sélectionne un élément en fonction de ses classes",

    syntax : ".S.T",
    help : "Etant donné qu'un élément peut posséder plusieurs classes, il est possible de sélectionner des éléments en fonction de plusieurs de ses classes.",
examples : [
'<strong>div.message.alert</strong> va sélectionner toutes les <tag>div</tag> qui ont les classes <strong>message</strong> et <strong>alert</strong>.'
],

},

{
    doThis : "Les petits cornichons à l'intérieur d'un bento",
    board: "P[p]O[o]A[a]",
    selector : "bento pickle.small",

    selectorName : "Sélecteur de classe avec héritage",
    helpTitle : "Sélectionne un élément en fonction de sa classe",


    syntax : "F E.S",
    help : "Il est possible de mélanger tous les sélecteurs! :)",
examples : [
'<strong>div p.neato</strong> va sélectionner tous les <strong>paragraphes</strong> ayant une classe égale à <strong>neato</strong> enfant d\'un élément <strong>div</strong>'
],

},


{
    doThis : "Toutes les assiettes, tous les bento et tous les petits objets ?",
    board: "{}S[]()G[]ga",
    selector : "plate, bento, .small",

    selectorName : "Combinateur",
    helpTitle : "Permet de combiner plusieurs sélecteurs simplement avec une ,",


    syntax : "S1, S2, ..., SN",
    help : "En plus, il est possible de mélanger tous les sélecteurs! :)",
examples : [
'<strong>p, .fun</strong> va sélectionner tous les <tag>p</tag> et tous éléments avec une classe égale à <strong>class="fun"</strong>',
    '<strong>a, p, div</strong> va sélectionner tous les <tag>a</tag>, <tag>p</tag> et <tag>div</tag> '
],

},
{
    doThis : "Tous les éléments ?",
    board: "{P}p(O)o(A)[a]S",
    selector : "*",

    selectorName : "Sélecteur universel",
    helpTitle : "Permet de sélectionner tous les éléments",


    syntax : "*",
    help : "Est généralement utilisé pour appliquer des règles génériques à tous les éléments",
    examples : [],

},
{
    doThis : "Tous les éléments sur une assiette ?",
    board: "{P}[p](S)o(G)[a]",
    selector : "plate *",

    selectorName : "Combinaison avec le sélecteur universel",
    helpTitle : "Permet de sélectionner tous les éléments enfant de ",

    syntax : "S *",
    help : "TODO",
    examples : [],

},

{
    doThis : "Toutes les pommes juste après une assiette ?",
    board: "[a]()a()Ga()Ag",
    selector : "plate + apple",

    selectorName : "Sélecteur de frère et soeur adjacent",
    helpTitle : "Permet de sélectionner un élément qui se trouve <strong>directement</strong> après un autre",

    syntax : "S + S",
    help : "TODO",
    examples : [
    '<strong>p + .intro</strong> va sélectionner tous les éléments avec <strong>class="intro"</strong> qui suivent directement un <tag>p</tag>',
    '<strong>div + a</strong> va sélectionner tous les éléments <tag>a</tag> qui suivent directement un élément <tag>div</tag>'
    ],

},

{
    doThis : "Tous les cornichons après un bento ?",
    board: "P[o]pP(P)P(s)P",
    selector : "bento ~ pickle",

    selectorName : 'Sélecteur de "fraternité"',
    helpTitle : "Permet de sélectionner un élément qui se trouve après un autre mais au mais niveau",


    syntax : "A ~ B",
    help : "Vous pouvez sélectionner tous les frères et soeurs d'un élément qui le suivent. C'est comme le sélecteur adjacent (A + B) sauf qu'il obtient tous les éléments au lieu du frère/soeur direct.",
    examples : [
    '<strong>A ~ B</strong> va sélectionner tous les <strong>B</strong> qui suivent <strong>A</strong>'
    ],

},

{
    doThis : "Toutes les pommes directement sur une assiette ?",
    board: "([aA])(G)(a)Aa",
    selector : "plate > apple",

    selectorName : "Sélecteur d'enfants directs",
    helpTitle : "Sélectionne les enfants <strong>B</strong> directs de <strong>A</strong>",


    syntax : "A > B",
    help : "Vous pouvez sélectionner les éléments qui sont les descendants directs d'autres éléments. Un élément enfant est un élément qui est imbriqué directement dans un autre élément. <br/><br/>Les éléments qui sont imbriquées plus profond sont appelés éléments descendants.",
    examples : [
    '<strong>A > B</strong> va sélectionner tous les <strong>B</strong> directement enfant de <strong>A</strong>'
    ],

},


{
    doThis : "Les premiers éléments de chaque assiette ?",
    board: "{SS}(PP)(OOO)p",
    selector : "plate :first-child",

    selectorName : "Pseudo-sélecteur du premier enfant",
    helpTitle : "Sélectionne le premier enfant d'un élément",


    syntax : ":first-child",
    help : "VVous pouvez sélectionner le premier élément enfant. Un élément enfant est un élément qui est directement imbriqué dans un autre élément. Vous pouvez combiner cette pseudo-sélecteur avec d'autres sélecteurs.",
    examples : [
     '<strong>:first-child</strong> sélectionne tous les premiers enfants.',
    '<strong>p:first-child</strong> sélectionne tous les premiers enfants des éléments<strong>&lt;p&gt;</strong>.',
    '<strong>div p:first-child</strong> sélectionne tous les premiers enfants des éléments <strong>&lt;p&gt;</strong> qui se trouve dans un élément <strong>&lt;div&gt;</strong>.'
    ],

},

{
    doThis : "Les premières oranges sur une assiette ?",
    board: "{SS}(OO)(OO)p",
    selector : "plate orange:first-child",

    selectorName : "Pseudo-sélecteur du premier enfant",
    helpTitle : "Sélectionne le premier enfant d'un élément",


    syntax : ":first-child",
    help : "VVous pouvez sélectionner le premier élément enfant. Un élément enfant est un élément qui est directement imbriqué dans un autre élément. Vous pouvez combiner cette pseudo-sélecteur avec d'autres sélecteurs.",
    examples : [
     '<strong>:first-child</strong> sélectionne tous les premiers enfants.',
    '<strong>p:first-child</strong> sélectionne tous les premiers enfants des éléments<strong>&lt;p&gt;</strong>.',
    '<strong>div p:first-child</strong> sélectionne tous les premiers enfants des éléments <strong>&lt;p&gt;</strong> qui se trouve dans un élément <strong>&lt;div&gt;</strong>.'
    ],

},
{
    doThis : "Sélectionne les éléments qui sont seuls sur une assiette",
    board: "(A)(p)(SS){oO}p",
    selector : "plate :only-child",

    selectorName : "Sélecteur d'enfant unique",
    helpTitle : "Sélectionne un élément qui est le seul élément à l'intérieur de l'autre. ",


    syntax : ":only-child",
    help : "Vous pouvez sélectionner n'importe quel élément qui est le seul élément à l'intérieur de l'autre.",
    examples : [
    '<strong>span:only-child</strong> sélectionne tous les <strong>&lt;span&gt;</strong> qui sont enfants uniques d\'autres éléments.',
    '<strong>ul li:only-child</strong> sélectionne tous les <strong>&lt;li&gt;</strong> qui sont enfants uniques d\'éléments <strong>&lt;ul&gt;</strong>.'
    ],

},

{
    doThis : "Sélectionne les cornichons qui sont seuls sur une assiette",
    board: "(G)(p)(SS)(P)p",
    selector : "plate pickle:only-child",

    selectorName : "Sélecteur d'enfant unique",
    helpTitle : "Sélectionne un élément qui est le seul élément à l'intérieur de l'autre. ",


    syntax : ":only-child",
    help : "Vous pouvez sélectionner n'importe quel élément qui est le seul élément à l'intérieur de l'autre.",
    examples : [
    '<strong>span:only-child</strong> sélectionne tous les <strong>&lt;span&gt;</strong> qui sont enfants uniques d\'autres éléments.',
    '<strong>ul li:only-child</strong> sélectionne tous les <strong>&lt;li&gt;</strong> qui sont enfants uniques d\'éléments <strong>&lt;ul&gt;</strong>.'
    ],

},



{
    doThis : "Sélectionne le dernier objet de chaque assiette ",
    board: "{g)()(oO)p",
    selector : "plate :last-child",

    selectorName : "Sélecteur du dernier enfant",
    helpTitle : "Sélectionne le dernier élément qui se trouvent à l'intérieur d'un autre",


    syntax : ":last-child",
    help : "Vous pouvez utiliser ce sélecteur pour choisir un élément qui est le dernier élément de l'enfant à l'intérieur d'un autre élément. <br/><br/> <strong>Pro Tip</strong>: Dans les cas où il n'existe qu'un seul élément, cet élément compte comme le premier enfant, enfant unique et dernier enfant!",
    examples : [
    '<strong>:last-child</strong> sélectionne tous les derniers enfants de chaque éléments.',
    '<strong>span:last-child</strong> sélectionne tous les derniers enfants de chaque éléments qui sont des <strong>&lt;span&gt;</strong>.',
    '<strong>ul li:last-child</strong> sélectionne le dernier <strong>&lt;li&gt;</strong> qui se trouve à l\'intérieur d\'éléments <strong>&lt;ul&gt;</strong>.'
    ],

},
{
    doThis : "La dernière petite pomme de chaque assiette ",
    board: "{a)(A)(Ag)p",
    selector : "plate apple.small:last-child",

    selectorName : "Sélecteur du dernier enfant",
    helpTitle : "Sélectionne le dernier élément qui se trouvent à l'intérieur d'un autre",


    syntax : ":last-child",
    help : "Vous pouvez utiliser ce sélecteur pour choisir un élément qui est le dernier élément de l'enfant à l'intérieur d'un autre élément. <br/><br/> <strong>Pro Tip</strong>: Dans les cas où il n'existe qu'un seul élément, cet élément compte comme le premier enfant, enfant unique et dernier enfant!",
    examples : [
    '<strong>:last-child</strong> sélectionne tous les derniers enfants de chaque éléments.',
    '<strong>span:last-child</strong> sélectionne tous les derniers enfants de chaque éléments qui sont des <strong>&lt;span&gt;</strong>.',
    '<strong>ul li:last-child</strong> sélectionne le dernier <strong>&lt;li&gt;</strong> qui se trouve à l\'intérieur d\'éléments <strong>&lt;ul&gt;</strong>.'
    ],

},


{
    doThis : "Sélectionne tous les 3ème enfant",
    board: "()(AGO)(S){}",
    selector : ":nth-child(3)",

    selectorName : "Sélecteur du n-ième",
    helpTitle : "Sélectionne le n-ième enfants",


    syntax : ":nth-child(an+b)",
    help : "Sélectionne le <strong> nième </strong> (Ex: 1er, 3, 12, etc) élément enfant dans un autre élément.<br/><br/><strong>Pro Tip</strong>: On peut également utiliser ce sélecteur avec la formule (a*n + b). <br/>Description: <strong>a</strong> représente une taille de cycle, <strong>n</strong> est un compteur (commence à 0), et <strong>b</strong> est une valeur de décalage.",
    examples : [
    '<strong>:nth-child(8)</strong> sélectionne tous les éléments qui sont le huitième enfant d\'un autre élément.',
    '<strong>div p:nth-child(2)</strong> sélectionne le deuxième <strong>p</strong> dans chaque <strong>div</strong>',
    '<strong>li:nth-child(2n)</strong> sélectionne tous les<strong>li</strong> "pairs"',
    '<strong>li:nth-child(2n+1)</strong> sélectionne tous les<strong>li</strong> "impairs"',
    '<strong>li:nth-child(4n)</strong> sélectionne tous les<strong>li</strong> qui sont à un indice qui est multiple de 4 (4, 8, 12, etc) ',
    '<strong>li:nth-child(4n+1)</strong> sélectionne tous les<strong>li</strong> qui sont à un indice qui est multiple de 4 depuis le premiers enfant (1, 5, 13, etc) ',
    ],

},


{
    doThis : "La 3ème assiette ?",
    board: "()(OGA)(){}",
    selector : "plate:nth-child(3)",

    selectorName : "Sélecteur du n-ième",
    helpTitle : "Sélectionne le n-ième enfants",


    syntax : ":nth-child(an+b)",
    help : "Sélectionne le <strong> nième </strong> (Ex: 1er, 3, 12, etc) élément enfant dans un autre élément.<br/><br/><strong>Pro Tip</strong>: On peut également utiliser ce sélecteur avec la formule (a*n + b). <br/>Description: <strong>a</strong> représente une taille de cycle, <strong>n</strong> est un compteur (commence à 0), et <strong>b</strong> est une valeur de décalage.",
    examples : [
    '<strong>:nth-child(8)</strong> sélectionne tous les éléments qui sont le huitième enfant d\'un autre élément.',
    '<strong>div p:nth-child(2)</strong> sélectionne le deuxième <strong>p</strong> dans chaque <strong>div</strong>',
    '<strong>li:nth-child(2n)</strong> sélectionne tous les<strong>li</strong> "pairs"',
    '<strong>li:nth-child(2n+1)</strong> sélectionne tous les<strong>li</strong> "impairs"',
    '<strong>li:nth-child(4n)</strong> sélectionne tous les<strong>li</strong> qui sont à un indice qui est multiple de 4 (4, 8, 12, etc) ',
    '<strong>li:nth-child(4n+1)</strong> sélectionne tous les<strong>li</strong> qui sont à un indice qui est multiple de 4 depuis le premiers enfant (1, 5, 13, etc) ',
    ],

},


{
    doThis : "Les assiettes paires ?",
    board: "{}(){}{}{}{}(){}(){}{}()()()()()()()()()(){}",
    selector : "plate:nth-child(2n)",

    selectorName : "Sélecteur du n-ième",
    helpTitle : "Sélectionne le n-ième enfants",


    syntax : ":nth-child(an+b)",
    help : "Sélectionne le <strong> nième </strong> (Ex: 1er, 3, 12, etc) élément enfant dans un autre élément.<br/><br/><strong>Pro Tip</strong>: On peut également utiliser ce sélecteur avec la formule (a*n + b). <br/>Description: <strong>a</strong> représente une taille de cycle, <strong>n</strong> est un compteur (commence à 0), et <strong>b</strong> est une valeur de décalage.",
    examples : [
    '<strong>:nth-child(8)</strong> sélectionne tous les éléments qui sont le huitième enfant d\'un autre élément.',
    '<strong>div p:nth-child(2)</strong> sélectionne le deuxième <strong>p</strong> dans chaque <strong>div</strong>',
    '<strong>li:nth-child(2n)</strong> sélectionne tous les<strong>li</strong> "pairs"',
    '<strong>li:nth-child(2n+1)</strong> sélectionne tous les<strong>li</strong> "impairs"',
    '<strong>li:nth-child(4n)</strong> sélectionne tous les<strong>li</strong> qui sont à un indice qui est multiple de 4 (4, 8, 12, etc) ',
    '<strong>li:nth-child(4n+1)</strong> sélectionne tous les<strong>li</strong> qui sont à un indice qui est multiple de 4 depuis le premiers enfant (1, 5, 13, etc) ',
    ],

},

{
    doThis : "Sélectionne les bentos vides",
    board: "[][p][][s]",
    selector : "bento:empty",

    selectorName : "Sélecteur empty",
    helpTitle : "",


    syntax : ":empty",
    help : "Sélectionne les éléments qui n'ont pas d'enfant",
    examples : [
    '<strong>div:empty</strong> sélectionne toutes les <strong>&lt;div&gt;</strong> sans enfant.'
    ],

},


{
    doThis : "Les éléments qui ne sont pas petits",
    board: "aAsSpPgG",
    selector : ":not(.small)",

    selectorName : "pseudo-sélecteur :not()",
    helpTitle : "",


    syntax : ":not(S)",
    help : "On peut utiliser ce sélecteur pour sélectionner tous les éléments qui ne correspondent pas au sélecteur <strong>S</strong>",
    examples : [
     '<strong>:not(#fancy)</strong> sélectionne tous les éléments qui n\'ont pas d\'id égal à <strong>fancy</strong>.',
    '<strong>div:not(:first-child)</strong> sélectionne toutes les <tag>div</tag> qui ne sont pas les premières filles d\'un élément',
    '<strong>:not(.big, .medium)</strong> sélectionne tous les éléments qui n\'ont pas la classe égale à <strong>big</strong> ou <strong>medium</strong>.'
    ],

},

{
    doThis : "Les éléments qui ne sont pas des pommes ou qui sont petits",
    board: "aAsSpPgG",
    selector : ":not(.small, apple)",

    selectorName : "pseudo-sélecteur :not()",
    helpTitle : "",


    syntax : ":not(S)",
    help : "On peut utiliser ce sélecteur pour sélectionner tous les éléments qui ne correspondent pas au sélecteur <strong>S</strong>",
    examples : [
     '<strong>:not(#fancy)</strong> sélectionne tous les éléments qui n\'ont pas d\'id égal à <strong>fancy</strong>.',
    '<strong>div:not(:first-child)</strong> sélectionne toutes les <tag>div</tag> qui ne sont pas les premières filles d\'un élément',
    '<strong>:not(.big, .medium)</strong> sélectionne tous les éléments qui n\'ont pas la classe égale à <strong>big</strong> ou <strong>medium</strong>.'
    ],

},

{
    doThis : "Les assiettes impaires, les petits sushis et les pommes granny-smith",
    board: "()()()()()()()()()()gssogSOsaGssAo",
    selector : "plate:nth-child(2n+1), sushi.small, apple.granny-smith",

    selectorName : "On corse les choses 1",
    helpTitle : "",


    syntax : "???",
    help : "Plus besoin d'aide si tu es arrivé jusque ici",
    examples : [

    ],

},
{
    doThis : "Les deuxièmes petites oranges a l'intérieur de tout sauf de l'assiette fantaisiste",
    board: "(oo)o(oo){Oo}[Oo][S]",
    selector : ":not(#fancy) orange.small:nth-child(2)",

    selectorName : "On corse les choses 2",
    helpTitle : "",


    syntax : "???",
    help : "Plus besoin d'aide si tu es arrivé jusque ici",
    examples : [

    ],
},

{
    doThis : "Les assiettes qui contiennent une pomme qui n'est ni petite ni une granny-smith",
    board: "(g)a(A){Gg}[a](A)",
    selector : "plate apple:not(.small, .granny-smith)",

    selectorName : "On corse les choses 3",
    helpTitle : "",


    syntax : "???",
    help : "Plus besoin d'aide si tu es arrivé jusque ici",
    examples : [

    ],
},


{
    doThis : "Les pommes qui sont soit petites soit granny-smith mais pas les deux",
    board: "(g)a(A){Gg}[a](A)",
    selector : "apple.small:not(.granny-smith), plate apple.granny-smith:not(.small)",

    selectorName : "On corse les choses 4",
    helpTitle : "",


    syntax : "???",
    help : "Plus besoin d'aide si tu es arrivé jusque ici",
    examples : [

    ],
},
];
