![profil](./assets/profil.png)

[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/cy_hue.svg?style=social&label=Follow%20%40cy_hue)](https://twitter.com/cy_hue)

@cy_hue

[https://horsty.fr](https://horsty.fr)

---

# Formation React ?

Note: #formation #kanoma
#typescript #test #front #javascript
Librairie javascript pour créer des interfaces utilisateurs

---

### Pourquoi React ? Problématique :

- synchroniser l'état de l'application avec l'interface utilisateur. Ex ajout une tache, le dom ajoute un li, un bouton pour supprimer apparait, etc. Complexité grandissante

Note: reacte sépare l'état et la vue. React est différent des autres framework. Simple en surface utilisation de JSX. Communauté
React DOM compare l’élément et ses enfants avec la version précédente, et applique uniquement les mises à jour DOM nécessaires pour refléter l’état voulu.

---

Prérequis
Pour suivre cette formation il est impératif d'être à l'aise avec le JavaScript et la syntaxe ES2015.

- Vous devez comprendre ce que veux dire maFonction.bind(this, param1)
- Vous devez savoir la différence entre () => {} et function () { }
- Vous devez être à l'aise avec les import ... from '...'

---

### Les bases - javascript modern

- let + const
- arrows function

```js
const getTwice = (value) => value * 2;
function getTwice(value) {
  return value * 2;
}
```

- Template strings - sucre syntaxique pour construire des strings, comme la string interpolation
- Destructuring - binding utilisant le pattern matching

```js
const name = "Bob",
  time = "today";
`Hello ${name}, how are you ${time}?`;
```

```js
const obj = {
  foo: 1,
  bar: "toto",
};

const { foo, bar } = obj;

console.log(foo); // 1
console.log(bar); // toto
```

---

### JSX

```js
const element = <h1>Bonjour, monde !</h1>;
```

```js
const name = "Clarisse Agbegnenou";
const element = <h1>Bonjour, {name}</h1>;
```

Safe ! https://fr.reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks

Note: Cette syntaxe étant propre à React elle n'est pas comprise par le navigateur et il nous faudra donc un outil pour convertir le JSX en JavaScript. On peut utiliser différents outils pour cela (Webpack avec babel, Parcel, Rollup avec babel, Esbuild...)
https://babeljs.io/docs/en/editors/

---

### Premier composant

```bash
git clone git@github.com:Horsty80/admin.git
git checkout starter
```

```bash
git checkout first-component
```

Essayons de refacto ce composant

```bash
git checkout first-component-refacto
```

---

Contexte
Le Contexte offre un moyen de faire passer des données à travers l’arborescence du composant sans avoir à passer manuellement les props à chaque niveau.

---

Hooks
Les Hooks sont arrivés avec React 16.8. Ils vous permettent de bénéficier d’un état local et d’autres fonctionnalités de React sans avoir à écrire une classe.

Note: Hook d'état comme useState, hook se branche sur le cycle de vie et sur la gestion d'état local
On a aussi des Hook d'effet comme useEffect
