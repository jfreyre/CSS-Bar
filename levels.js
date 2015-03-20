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
    helpTitle : "Sélectionne des éléments en fonction de leur type",
    syntax : "E",
    help : "Représente un élément du type <strong>E</strong>.",
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
    helpTitle : "Sélectionne des éléments en fonction de leur type",
    syntax : "E",
    help : "Représente un élément du type <strong>E</strong>.",
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
    helpTitle : "Sélectionne des éléments en fonction de leur type",

    syntax : "E",
    help : "Représente un élément du type <strong>E</strong>.",
    examples : [
    '<strong>div</strong> sélectionne toutes les <tag>div</tag> de la page.',
    '<strong>p</strong> sélectionne tous les <tag>p</tag> de la page.',
    ],

},


{
    doThis : "L'élément fantaisiste ?",
    board: "{}()[]",
    selector : "#fancy",

    selectorName : "Sélecteur d'identifiant",
    helpTitle : "Sélectionne en fonction de l'identifiant de l'élément",


    syntax : "#myid",
    help : "Sélectionne l'élément dont l'identifiant est <strong>myid</strong>.<br/><br/><strong>Attention</strong>, il ne peut pas y avoir plusieurs éléments avec le même identifiant sur une même page",
    examples : [
    '<strong>#main-navigation</strong> sélectionne l\'élément dont l\'attribut <strong>id</strong> vaut <tag>main-navigation</tag>.',
    '<strong>div#modal</strong> sélectionne la <tag>div</tag> dont l\'identifiant est égal à <strong>modal</strong>.',
    ],

},

{
    doThis : "La pomme qui est sur une assiette ?",
    board: "A[a](A)a",
    selector : "plate apple",

    selectorName : "Sélecteur descendant",
    helpTitle : "Sélectionne un élément qui est enfant d'un autre",


    syntax : "F&nbsp;&nbsp;E",
    help : "Sélectionne tous les éléments <strong>E</strong> qui sont à l'intérieur de <strong>F</strong> indépendamment de la profondeur.",
    examples : [
    '<strong>p&nbsp;strong</strong> va sélectionner tous les <strong>&lt;strong&gt;</strong> enfants d\'un <strong>&lt;p&gt;</strong>',
    '<strong>#fancy&nbsp;span</strong>va sélectionner tous les <strong>&lt;span&gt;</strong> qui sont enfant d\'un  <strong>id="fancy"</strong>',
    ],

},

{
    doThis : "Tous les sushis sur une assiette fantaisiste ?",
    board: "{S}(S){s}(s)",
    selector : "#fancy sushi",

    selectorName : "Sélecteur descendant",
    helpTitle : "Sélectionne un élément qui est enfant d'un autre",

    syntax : "F&nbsp;&nbsp;E",
    help : "Sélectionne tous les éléments <strong>E</strong> qui sont à l'intérieur de <strong>F</strong> indépendamment de la profondeur.",
    examples : [
    '<strong>p&nbsp;strong</strong> va sélectionner tous les <strong>&lt;strong&gt;</strong> enfants d\'un <strong>&lt;p&gt;</strong>',
    '<strong>#fancy&nbsp;span</strong>va sélectionner tous les <strong>&lt;span&gt;</strong> qui sont enfant d\'un  <strong>id="fancy"</strong>',
    ],

},



{
    doThis : "Tous les petits objets",
    board: "aAoOpPsSgG",
    selector : ".small",

    selectorName : "Sélecteur de classe",
    helpTitle : "Sélectionne un élément en fonction de sa classe",

    syntax : ".S",
    help : "Sélectionne tous les éléments dont la classe est égale à <strong>S</strong>",
examples : [
'<strong>.neato</strong> va sélectionner tous les éléments ayant une classe égale à <strong>neato</strong>'
],

},

{
    doThis : "Les petites oranges",
    board: "P[p]O[o]A[a]",
    selector : "orange.small",

    selectorName : "Combiner sélecteur de classe et d'élément",
    helpTitle : "Sélectionne les éléments d'un type en fonction de leurs classes",

    syntax : "E.S",
    help : "Sélectionne tous les éléments <strong>E</strong> dont la classe est égale à <strong>S</strong>",
examples : [
'<strong>p.neato</strong> va sélectionner tous les <strong>paragraphes</strong> ayant une classe égale à <strong>neato</strong>'
],

},

{
    doThis : "Toute les petites pommes granny-smith ?",
    board: "aAoOpPsSgG",
    selector : [
        "apple.small.granny-smith",
        "apple.granny-smith.small"
    ],

    selectorName : "Combiner des sélecteurs de classe",
    helpTitle : "Sélectionne les éléments d'un type en fonction de plusieurs classes",

    syntax : "E.S.T",
    help : "Etant donné qu'un élément peut posséder plusieurs classes, il est possible de sélectionner des éléments en fonction de plusieurs de ses classes. <br/>Dans ce cas, on va chercher les éléments <strong>E</strong> qui ont les classes <strong>S</strong> et <strong>T</strong>",
examples : [
'<strong>div.message.alert</strong> va sélectionner toutes les <tag>div</tag> qui ont les classes <strong>message</strong> et <strong>alert</strong>.'
],

},

{
    doThis : "Les petits cornichons à l'intérieur d'un bento ?",
    board: "P[p]O[o]A[a]",
    selector : "bento pickle.small",

    selectorName : "Sélecteur de classe avec héritage",
    helpTitle : "Sélectionne un élément en fonction de sa classe",


    syntax : "F E.S",
    help : "Var chercher les éléments <strong>E</strong> avec la classe <strong>S</strong> qui sont enfants de <strong>F</strong>.",
examples : [
'<strong>div p.neato</strong> va sélectionner tous les <strong>paragraphes</strong> ayant une classe égale à <strong>neato</strong> enfant d\'un élément <strong>div</strong>'
],

},


{
    doThis : "Toutes les assiettes, tous les bento et tous les petits objets ?",
    board: "{}S[]()G[]ga",
    selector : [
        "plate, bento, .small",
        "plate, .small, bento",
        "bento, .small, plate",
        "bento, plate, .small",
        ".small, bento, plate",
        ".small, plate, bento",
    ],

    selectorName : "Combinateur",
    helpTitle : "Permet de combiner plusieurs sélecteurs simplement avec une <strong>,</strong>",


    syntax : "S1, S2, ..., SN",
    help : "Chacun des <strong>SN</strong> peut correspondre à n'importe quel sélecteur.",
examples : [
'<strong>p, .fun</strong> va sélectionner tous les <tag>p</tag> et tous éléments avec une classe égale à <strong>fun</strong>',
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
    help : "Est généralement utilisé pour appliquer des règles génériques à tous les éléments<br/><br/>Par exemple: <strong>* { margin: 0; padding: 0; }</strong>",
    examples : [],

},
{
    doThis : "N'importe quel élément sur une assiette ?",
    board: "{P}[p](S)o(G)[a]",
    selector : "plate *",

    selectorName : "Combinaison avec le sélecteur universel",
    helpTitle : "Permet de sélectionner tous les éléments enfant de <strong>S</strong>",

    syntax : "S *",
    help : "",
    examples : [
        "<strong>div.modal *</strong> va sélectionner tous les éléments enfants d'une <tag>div</tag> avec une classe <strong>modal</strong>."
    ],

},

{
    doThis : "Toutes les pommes juste après une assiette ?",
    board: "[a]()a()Ga()Ag",
    selector : "plate + apple",

    selectorName : "Sélecteur de frère et soeur <strong>adjacent</strong>",
    helpTitle : "Permet de sélectionner un élément qui se trouve <strong>directement</strong> après un autre",

    syntax : "S1 + S2",
    help : "Va chercher tous les <strong>S2</strong> qui suivent directement <strong>S1</strong>.",
    examples : [
    '<strong>div + a</strong> va sélectionner tous les éléments <tag>a</tag> qui suivent directement un élément <tag>div</tag>.',
    '<strong>p + .intro</strong> va sélectionner tous les éléments avec une classe égale à <strong>intro</strong> qui suivent directement un <tag>p</tag>.',

    ],

},

{
    doThis : "Tous les cornichons après un bento ?",
    board: "P[o]pP(P)P(s)P",
    selector : "bento ~ pickle",

    selectorName : 'Sélecteur de "fraternité"',
    helpTitle : "Permet de sélectionner un élément qui se trouve après un autre mais au mais niveau",


    syntax : "A ~ B",
    help : "Vous pouvez sélectionner tous les frères et soeurs d'un élément <strong>qui le suivent</strong>. C'est comme le sélecteur adjacent (A + B) sauf qu'il obtient tous les éléments au lieu du frère/soeur direct.",
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
    help : "Vous pouvez sélectionner les éléments qui sont les descendants directs d'autres éléments. Un élément enfant est un élément qui est imbriqué directement dans un autre élément. <br/><br/>Les éléments qui sont imbriqués plus profond sont généralement appelés éléments descendants.",
    examples : [
    '<strong>A > B</strong> va sélectionner tous les <strong>B</strong> directement enfant de <strong>A</strong>'
    ],

},


{
    doThis : "Chaque premier élément ?",
    board: "{SS}(PP)(OOO)p",
    selector : ":first-child",

    selectorName : "Pseudo-sélecteur du premier enfant",
    helpTitle : "Sélectionne le premier enfant d'un élément",


    syntax : ":first-child",
    help : "Vous pouvez sélectionner le premier élément enfant. Un élément enfant est un élément qui est directement imbriqué dans un autre élément. Vous pouvez combiner ce pseudo-sélecteur avec d'autres sélecteurs.",
    examples : [
     '<strong>:first-child</strong> sélectionne tous les premiers enfants.',
    '<strong>p:first-child</strong> sélectionne tous les premiers enfants qui sont de type <strong>&lt;p&gt;</strong>.',
    '<strong>div p:first-child</strong> sélectionne tous les premiers enfants des éléments <strong>&lt;p&gt;</strong> qui se trouve dans un élément <strong>&lt;div&gt;</strong>.'
    ],

},


{
    doThis : "Elements qui ont un id de défini ?",
    board: "{}(PP)(OOO)p",
    selector : "[id]",

    selectorName : "Sélecteur d'attribut",
    helpTitle : "Existant sous plusieurs formes, il devient très intéressant à utiliser.",


    syntax : "[att]",
    help : "Représente un élément avec l'attribut <strong>att</strong>, quelle que soit la valeur de l'attribut.",
    examples : [
     '<strong>[title]</strong> sélectionne les éléments dont l\'attribut <strong>title</strong> est défini.',
    ],

},

{
    doThis : "Elements qui ont un attribut id égal à 'fancy' ?",
    board: "g{}()H",
    selector : [
        "[id='fancy']",
        '[id="fancy"]'
    ],

    selectorName : "Sélecteur d'attribut",
    helpTitle : "Existant sous plusieurs formes, il devient très intéressant à utiliser.",


    syntax : "[att=val]",
    help : "Représente un élément avec l'attribut <strong>att</strong> dont la valeur est exactement <strong>val</strong>.<br/><br/><strong>Pro Tip:</strong> A noter que lorsqu'il est utilisé avec <strong>att</strong> pour un id, le sélecteur a une spécificité plus faible.",
    examples : [
     '<strong>[title]</strong> sélectionne les éléments dont l\'attribut <strong>title</strong> est défini.',
    ],

},

{
    doThis : "Elements qui ont un attribut class dont l'une des valeurs vaut 'granny-smith' ?",
    board: "g{}()H",
    selector : [
        "[class~='granny-smith']",
        '[class~="granny-smith"]',
    ],

    selectorName : "Sélecteur d'attribut",
    helpTitle : "Existant sous plusieurs formes, il devient très intéressant à utiliser.",


    syntax : "[att~=val]",
    help : "Représente un élément avec l'attribut <strong>att</strong> dont la valeur est une liste de séparés par un espace et dont l'une d'entre elle est exactement <strong>val</strong>. Si <strong>val</strong> contient des espaces, il ne représentera jamais rien (puisque les mots sont séparés par des espaces). Aussi, si <strong>val</strong> est la chaîne vide, il ne représentera jamais quoi que ce soit.",
    examples : [
     '<strong>[title~="retour"]</strong> sélectionne les éléments dont l\'attribut <strong>title</strong> contient la valeur <strong>retour</strong>.',
    ],

},

{
    doThis : "Elements qui ont un attribut class qui commence par 'gran' ?",
    board: "g{}()H",
    selector : [
        "[class^='gran']",
        '[class^="gran"]'
    ],

    selectorName : "Sélecteur d'attribut",
    helpTitle : "Existant sous plusieurs formes, il devient très intéressant à utiliser.",


    syntax : "[att^=val]",
    help : "Représente un élément avec l'attribut <strong>att</strong> dont la valeur commence par le préfixe <strong>val</strong>. Si <strong>val</strong> est vide, le sélecteur ne représente rien.",
    examples : [
     '<strong>[href^="https"]</strong> sélectionne les éléments dont l\'attribut <strong>href</strong> commence par <strong>https</strong> (lien sécurisé).',
    ],

},

{
    doThis : "Elements qui ont un attribut class qui se termine par 'th' ?",
    board: "g{}()H",
    selector : [
        "[class$='th']",
        '[class$="th"]'
    ],

    selectorName : "Sélecteur d'attribut",
    helpTitle : "Existant sous plusieurs formes, il devient très intéressant à utiliser.",


    syntax : "[att$=val]",
    help : "Représente un élément avec l'attribut <strong>att</strong> dont la valeur se termine par le suffixe <strong>val</strong>. Si <strong>val</strong> est vide, le sélecteur ne représente rien.",
    examples : [
     '<strong>[href$=".com"]</strong> sélectionne les éléments dont l\'attribut <strong>href</strong> se termine par <strong>.com</strong>.',
    ],

},


{
    doThis : "Elements qui ont un attribut class contient 'y-s' ?",
    board: "g{}()H",
    selector : [
        "[class*='y-s']",
        '[class*="y-s"]'
    ],
    selectorName : "Sélecteur d'attribut",
    helpTitle : "Existant sous plusieurs formes, il devient très intéressant à utiliser.",


    syntax : "[att*=val]",
    help : "Représente un élément avec l'attribut <strong>att</strong> dont la valeur contient au moins une fois la sous-chaîne <strong>val</strong>. Si <strong>val</strong> est vide, le sélecteur ne représente rien.",
    examples : [
     '<strong>[href*="www"]</strong> sélectionne les éléments dont l\'attribut <strong>href</strong> contient au moins une fois <strong>www</strong>.',
    ],

},



{
    doThis : "Les premières oranges sur une assiette ?",
    board: "{SS}(OO)(OO)p",
    selector : "plate orange:first-child",

    selectorName : "Pseudo-sélecteur du premier enfant",
    helpTitle : "Sélectionne le premier enfant d'un élément",


    syntax : ":first-child",
    help : "Vous pouvez sélectionner le premier élément enfant. Un élément enfant est un élément qui est directement imbriqué dans un autre élément. Vous pouvez combiner ce pseudo-sélecteur avec d'autres sélecteurs.",
    examples : [
     '<strong>:first-child</strong> sélectionne tous les premiers enfants.',
    '<strong>p:first-child</strong> sélectionne tous les premiers enfants qui sont de type <strong>&lt;p&gt;</strong>.',
    '<strong>div p:first-child</strong> sélectionne tous les premiers enfants des éléments <strong>&lt;p&gt;</strong> qui se trouve dans un élément <strong>&lt;div&gt;</strong>.'
    ],

},
{
    doThis : "Les éléments qui sont seuls sur une assiette ?",
    board: "(A)(p)(SS){oO}p",
    selector : "plate :only-child",

    selectorName : "Sélecteur d'enfant unique",
    helpTitle : "Sélectionne un élément qui est le seul élément à l'intérieur de l'autre.",


    syntax : ":only-child",
    help : "Vous pouvez sélectionner n'importe quel élément qui est le seul élément à l'intérieur de l'autre.",
    examples : [
    '<strong>span:only-child</strong> sélectionne tous les <strong>&lt;span&gt;</strong> qui sont enfants uniques d\'autres éléments.',
    '<strong>ul li:only-child</strong> sélectionne tous les <strong>&lt;li&gt;</strong> qui sont enfants uniques d\'éléments <strong>&lt;ul&gt;</strong>.'
    ],

},

{
    doThis : "Les petits éléments qui sont seuls sur une assiette",
    board: "(G)(p)(SS)(g)p",
    selector : "plate .small:only-child",

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
    doThis : "Le dernier objet de chaque assiette ?",
    board: "{g)()(oO)p",
    selector : "plate :last-child",

    selectorName : "Sélecteur du dernier enfant",
    helpTitle : "Sélectionne le dernier élément qui se trouve à l'intérieur d'un autre",


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
    helpTitle : "Sélectionne le dernier élément qui se trouve à l'intérieur d'un autre",


    syntax : ":last-child",
    help : "Vous pouvez utiliser ce sélecteur pour choisir un élément qui est le dernier élément de l'enfant à l'intérieur d'un autre élément. <br/><br/> <strong>Pro Tip</strong>: Dans les cas où il n'existe qu'un seul élément, cet élément compte comme le premier enfant, enfant unique et dernier enfant!",
    examples : [
    '<strong>:last-child</strong> sélectionne tous les derniers enfants de chaque éléments.',
    '<strong>span:last-child</strong> sélectionne tous les derniers enfants de chaque éléments qui sont des <strong>&lt;span&gt;</strong>.',
    '<strong>ul li:last-child</strong> sélectionne le dernier <strong>&lt;li&gt;</strong> qui se trouve à l\'intérieur d\'éléments <strong>&lt;ul&gt;</strong>.'
    ],

},


{
    doThis : "Tous les 3èmes enfants ?",
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
    doThis : "Les assiettes \"paires\" ?",
    board: "{}(){}{}{}{}(){}(){}{}()()()()()()()()()(){}",
    selector : [
        "plate:nth-child(2n)",
        "plate:nth-child(even)"
    ],

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
    doThis : "Les bentos vides ?",
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
    doThis : "Les éléments qui sont ni des pommes, ni petits ?",
    board: "aAsSpPgG",
    selector : [
        ":not(.small, apple)",
        ":not(apple, .small)"
    ],

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
    selector : [
        "plate:nth-child(2n+1), sushi.small, apple.granny-smith",
        "plate:nth-child(2n+1), apple.granny-smith, sushi.small",
        "sushi.small, apple.granny-smith, plate:nth-child(2n+1)",
        "sushi.small, plate:nth-child(2n+1), apple.granny-smith",
        "apple.granny-smith, plate:nth-child(2n+1), sushi.small",
        "apple.granny-smith, sushi.small, plate:nth-child(2n+1)",
    ],

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
    selector : [
        "plate apple:not(.small, .granny-smith)",
        "plate apple:not(.granny-smith, .small)"
    ],

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
    selector : [
         "apple.small:not(.granny-smith), apple.granny-smith:not(.small)",
         "apple.granny-smith:not(.small), apple.small:not(.granny-smith)"
    ],

    selectorName : "On corse les choses 4",
    helpTitle : "",


    syntax : "???",
    help : "Plus besoin d'aide si tu es arrivé jusque ici",
    examples : [

    ],
},
];
